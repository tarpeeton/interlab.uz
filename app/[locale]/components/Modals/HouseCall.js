import Image from "next/image";
import closeicongray from "@/public/svg/closeicon-gray.svg";
import houseCall from "@/public/images/house-call.png";
import { useRef, useState } from "react";
import { Form, Input, Button, DatePicker, message } from "antd";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import useClickOutside from "@/hooks/useClickOutside";
import { createPortal } from "react-dom";
import { useLocale } from 'next-intl'

export default function HouseCall({ setState }) {
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);
  const [form] = Form.useForm();
  const locale = useLocale()

  const handlePhoneChange = (value, country, e, formattedValue) => {
    setPhone(value);
    if (formattedValue.length === country.format.length) {
      setIsValidPhone(true);
    } else {
      setIsValidPhone(false);
    }
  };

  const handleFinish = async (values) => {
    if (!isValidPhone) {
      message.error("Введите корректный номер телефона");
      return;
    }

    setLoading(true);

    const payload = {
      name: values.fullname,
      phone: phone,
      birthDate: values.birthDate.format("DD.MM.YYYY"),
      comment: values.comment,
    };

    try {
      const response = await axios.post(
        "https://interlab.mrjtrade.uz/api/application/home-call",
        payload
      );

      if (response.status === 200) {
        message.success("Заявка успешно отправлена!");
        setPhone("");
        setLoading(false);
        form.resetFields();
      } else {
        throw new Error("Ошибка при отправке");
      }
    } catch (error) {
      message.error("Произошла ошибка при отправке. Попробуйте позже.");
      setLoading(false);
    }
  };

  useClickOutside(modalRef, () => setState(false));

  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-[9999]">
      <div
        ref={modalRef}
        className="bg-white max-md:p-4 px-8 py-8 rounded-3xl shadow-lg max-mdx:max-h-[90%] no-scrollbar overflow-y-scroll max-mdx:w-[90%] w-[450px] relative"
      >
        <button
          className="absolute top-5 right-5"
          onClick={() => setState(false)}
        >
          <Image
            priority
            className="w-4 h-4"
            src={closeicongray}
            width={100}
            height={100}
            alt="Close icon"
            quality={100}
          />
        </button>
        <div className="flex items-center flex-col slg:gap-5">
          <Image
            src={houseCall}
            width={500}
            height={500}
            alt="House Call Icon"
            className="w-36 h-36"
          />
          <div className="flex flex-col text-center gap-1 lg:px-12">
            <h3 className="text-rose-400 text-2xl font-semibold">
              
              {locale === 'ru'
              ? 'Вызов на дом'
              : 'Uyga Chaqirish'}
              </h3>
            <p className="text-neutral-400 text-sm ">
              
              {locale === 'ru'
              ? 'Заполните форму, чтобы заказать услугу'
              : "Xizmatni buyurtma berish uchun formani to'ldiring"}
            </p>
          </div>
          <div className="flex flex-col max-md:ml-0 w-full">
            <Form
              form={form}
              className="flex flex-col text-base max-md:mt-10 max-md:max-w-full"
              onFinish={handleFinish}
              layout="vertical"
            >
              <Form.Item
                name="fullname"
                rules={[{ required: true, message: "Введите ваше ФИО" }]}
              >
                <Input
                 placeholder={locale === 'ru' ? "Введите ваше ФИО" : "FIO kiriting"}
                  className="rounded-xl input py-2 text-xl border border-gray-300 shadow-sm"
                />
              </Form.Item>

              <Form.Item
                name="phoneNumber"
                rules={[{ required: true, message: "Введите ваш номер телефона" }]}
              >
                <PhoneInput
                  country={"uz"}
                  value={phone}
                  onChange={handlePhoneChange}
                  inputClass="rounded-xl input py-2 pl-2 text-xl w-full border border-gray-300 shadow-sm"
                  placeholder="+998"
                  isValid={isValidPhone}
                  containerClass="phone-input w-full"
                />
              </Form.Item>

              {/* Updated DatePicker with getPopupContainer */}
              <Form.Item
                name="birthDate"
                rules={[{ required: true, message: `${locale === 'ru' ? "К какой дате желаете вызов?" : "Qaysi sanaga qo'ng'iroq qilishimizni xohlaysiz?"}` }]}
              >
                <DatePicker
                 placeholder={locale === 'ru' ? "К какой дате желаете вызов?" : "Qaysi sanaga qo'ng'iroq qilishimizni xohlaysiz?"}

                  format="DD.MM.YYYY"
                  className="rounded-xl input py-2 text-xl w-full border border-gray-300 shadow-sm"
                  getPopupContainer={(trigger) => trigger.parentNode}
                />
              </Form.Item>

              <Form.Item name="comment">
                <Input.TextArea
                 placeholder={locale === 'ru' ? "Введите комментарий" : "Izohni kiriting"}
                  className="rounded-xl py-2 text-xl border textarea border-gray-300 shadow-sm"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                disabled={loading || !isValidPhone}
                className="rounded-[100px] px-10 py-6 text-lg font-bold text-white bg-red-400 self-start hover:bg-red-500 transition-colors duration-200"
              >
                {locale === 'ru'
              ? ' Отправить заявку'
              : "Ariza yuborish"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
