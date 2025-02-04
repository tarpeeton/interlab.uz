import Image from 'next/image'
import { useState } from 'react'
import { Form, Input, Button, DatePicker, message } from 'antd'
import PhoneInput from 'react-phone-input-2'
import axios from 'axios'
import closeicongray from '@/public/svg/closeicon-gray.svg'
import { createPortal } from 'react-dom'
import { useLocale } from 'next-intl'

const { TextArea } = Input

export default function ContactWithUs({ setState , title }) {
  const [phone, setPhone] = useState('')
  const [isValidPhone, setIsValidPhone] = useState(false)
  const [loading, setLoading] = useState(false)
  const locale = useLocale()
  const [form] = Form.useForm()

  const handlePhoneChange = (value, country, e, formattedValue) => {
    setPhone(value)
    if (formattedValue.length === country.format.length) {
      setIsValidPhone(true)
    } else {
      setIsValidPhone(false)
    }
  }

  const onFinish = async values => {
    if (!isValidPhone) {
      message.error(
        locale === 'ru'
          ? 'Введите корректный номер телефона'
          : "Iltimos, to'g'ri telefon raqamini kiriting"
      )
      return
    }

    setLoading(true)

    const payload = {
      name: values.fullName,
      phone: phone,
      comment: values.comment || '',
      ...(title && title.trim() !== '' && { serviceName: title })
    }

    try {
      const response = await axios.post(
        'https://interlab.mrjtrade.uz/api/application/onlayn-zapis',
        payload
      )

      if (response.status === 200) {
        message.success(
          locale === 'ru'
            ? 'Заявка успешно отправлена!'
            : 'Ariza muvaffaqiyatli yuborildi!'
        )
        form.resetFields()
        setPhone('')
        setLoading(false)
        setState(false)
      } else {
        throw new Error('Ошибка при отправке')
      }
    } catch (error) {
      message.error(
        locale === 'ru'
          ? 'Произошла ошибка при отправке. Попробуйте позже.'
          : "Yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring."
      )
      setLoading(false)
    }
  }

  return createPortal(
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-[9999]'>
      <div className='bg-white max-md:p-4 px-8 py-8 rounded-3xl max-mdx:max-h-[90%] overflow-y-scroll no-scrollbar shadow-lg max-mdx:w-[320px] w-[450px] relative'>
        <button
          className='absolute top-5 right-5'
          onClick={() => setState(false)}
        >
          <Image
            priority
            className='w-4 h-4'
            src={closeicongray}
            width={100}
            height={100}
            alt='Close icon'
            quality={100}
          />
        </button>
        <div className='flex items-center flex-col slg:gap-5'>
          <div className='flex flex-col text-center px-4 lg:px-12'>
            <h3 className='text-rose-400 text-2xl font-semibold'>
              {locale === 'ru' ? 'Онлайн запись' : 'Online Qabul'}
            </h3>
            <p className='text-neutral-400 text-sm '>
              {locale === 'ru'
                ? 'Оставьте заявку и вам перезвонят в течение 5 минут, для подтверждения записи'
                : locale === 'uz'
                  ? 'Ariza qoldiring, va 5 daqiqa ichida qayta aloqa qilishadi, arizani tasdiqlash uchun.'
                  : ''}
            </p>
          </div>
          <div className='flex flex-col max-md:ml-0 w-full'>
            <Form
              form={form}
              name='contact'
              layout='vertical'
              onFinish={onFinish}
              className='flex flex-col max-md:mt-10 max-md:max-w-full'
            >
              <Form.Item
                name='fullName'
                rules={[
                  {
                    required: true,
                    message:
                      locale === 'ru' ? 'Введите ваше ФИО' : 'FIO kiriting'
                  }
                ]}
              >
                <Input
                  placeholder='ФИО *'
                  className='py-3 rounded-xl input text-lg'
                />
              </Form.Item>

              <Form.Item
                name='phone'
                rules={[
                  {
                    required: true,
                    message:
                      locale === 'ru'
                        ? 'Введите номер телефона'
                        : 'Telefon Raqamingizni Kiriting'
                  }
                ]}
              >
                <PhoneInput
                  country={'uz'}
                  value={phone}
                  onChange={handlePhoneChange}
                  inputClass='rounded-xl pl-3 py-3 text-xl w-full border border-gray-300 shadow-sm'
                  placeholder='+998'
                  isValid={isValidPhone}
                  containerClass='phone-input w-full'
                />
              </Form.Item>

              <Form.Item name='comment'>
                <TextArea
                  placeholder={
                    locale === 'ru' ? 'Ваш комментарий' : 'Sizning izohingiz'
                  }
                  rows={4}
                  className='text-lg'
                />
              </Form.Item>

              <Form.Item className='w-full flex justify-center'>
                <Button
                  type='primary'
                  htmlType='submit'
                  block
                  loading={loading}
                  disabled={loading || !isValidPhone}
                  className='bg-red-400 hover:bg-red-500 rounded-[100px] px-12 py-6 font-semibold'
                  size='large'
                >
                  {locale === 'ru'
                    ? 'Оставить заявку'
                    : locale === 'uz'
                      ? 'Ariza qoldirish'
                      : ''}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
