"use client";
import { useTranslations } from "next-intl";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCount } from "@/store/cardSlice";
import Image from "next/image";
import karzina from "@/public/karzina.png";
import Link from "next/link";
import { useParams } from "next/navigation";
import SuccessModal from "@/app/[locale]/components/SuccessModal";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BasketCard = () => {
  const t = useTranslations("basket");
  const { locale } = useParams();
  const [orderStatus, setOrderStatus] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const basketCards = useSelector((state) => state.cart.items);
  const totalSumma = basketCards.reduce(
    (sum, item) => sum + item.count * item.fee,
    0
  );
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const formatNumber = (number) => {
    return new Intl.NumberFormat("ru-RU").format(number);
  };
  useEffect(() => {
    if (basketCards.length === 0) {
      return; // yoki boshqa shart
    }
    // boshqa shartlar bo'lsa, removeFromCart chaqirilsin
  }, [basketCards]); // basketCards o'zgarganda useEffect chaqiriladi
  const handleIncrease = (cardId, count) => {
    if (count < 10) {
      dispatch(updateCount({ id: cardId, amount: 1 }));
    }
  };
  const handleDecrease = (cardId, count) => {
    if (count > 1) {
      dispatch(updateCount({ id: cardId, amount: -1 }));
    }
  };
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Itemni savatchadan olib tashlash
  };
  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.interlab-basket-bot.result-me.uz/api/basket-card",
        {
          fullName: e.target.name.value,
          phone: phone,
          paymentType: orderStatus,
          basketCards: basketCards,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authKey: "dv54sd5v64sv4sdv4s65v4ds6v4sd6v4sd6v4sd6v98v7ev4sd6",
          },
        }
      );
      if (response.status === 200) {
        handleOpenModal(); // Modalni ochish
        e.reset(); // Formani tozalash
        setPhone("");
      }
    } catch (error) {
      console.log(error, "Xatolik mavjud");
    }
  };
  return (
    <div>
      {basketCards?.length ? (
        <div>
          {basketCards.map((el) => (
            <div
              key={el.id}
              className="w-full border-b py-3 relative flex flex-col space-y-2 mdx:space-y-0 mdx:flex-row md:justify-between md:items-start"
            >
              <SuccessModal open={openModal} handleClose={handleCloseModal} />
              <div className="flex flex-col space-y-2">
                <h4 className="text-[18px] w-full   mdx:text-[24px]">
                  {el.name}
                </h4>
                <div className="bg-[#F8F9FB] w-[100px] rounded-full flex items-center gap-3 p-2">
                  <button onClick={() => handleDecrease(el.id, el.count)}>
                    <FaMinus size={20} />
                  </button>
                  <span className="text-[20px]">{el.count}</span>
                  <button onClick={() => handleIncrease(el.id, el.count)}>
                    <FaPlus size={20} />
                  </button>
                </div>
              </div>
              <h4 className="text-[#FB6A68]  min-w-[210px] mr-10  text-start text-[20px] font-bold md:text-[32px]">
                {formatNumber(el.count * el.fee)} {t("sum")}
              </h4>
              <button
                onClick={() => handleRemoveFromCart(el.id)}
                className="absolute top-0 right-0 mdx:top-3 mdx:right-4"
              >
                <IoClose size={25} />
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center bg-[#FFEFEF] rounded-[20px] p-4 mdx:p-7 mt-8">
            <h3 className="text-[#FB6A68] text-[20px] mdx:text-[28px] font-bold">
              {t("all_sum")}
            </h3>
            <div className="">
              {/* <div className="flex items-start gap-x-3">
                <span className="bg-white text-[#FB6A68] p-1 rounded-full px-3">
                  -10%
                </span>
                <h4 className="text-[20px] mdx:text-[28px] text-[#FB6A68] font-bold">
                  {totalSumma * 0.9} {t("sum")}
                </h4>
              </div> */}
              <p className="text-[20px] mdx:text-[28px] text-[#FB6A68] font-bold flex flex-col items-center justify-center mt-4">
                {formatNumber(totalSumma)} {t("sum")}
              </p>
            </div>
          </div>
          <form
            onSubmit={handleOrder}
            className="mt-10 w-full lg:w-[65%]"
            id="orderForm"
          >
            <h3 className="text-[27px] mdx:text-[40px] font-bold ">
              {t("order_title")}
            </h3>
            <div className="mt-5 flex flex-col space-y-3 justify-center items-center">
              <input
                className="w-full p-4 border rounded-[12px]"
                type="text"
                name="name"
                placeholder={t("order_input_name")}
                required
              />
              <PhoneInput
                country={"uz"}
                enableSearch={true}
                onChange={(phone) => setPhone(phone)}
                containerClass="w-full"
                inputClass="!w-full !p-6 !pl-[45px] border-2 border-blue-500 !rounded-[12px] outline-none"
                buttonClass="bg-blue-500 text-black !rounded-s-[12px]"
                dropdownClass="bg-white shadow-lg border border-gray-200"
              />
              <select
                required
                onChange={(e) => setOrderStatus(e.target.value)}
                className={`w-full p-4 border rounded-[12px] ${orderStatus ? "text-black" : "text-[#8A8A8A]"}`}
              >
                <option className="" disabled selected>
                  {t("order_input_oplate")}
                </option>
                <option value="CASH">{t("cash")}</option>
                <option value="CARD">{t("card")}</option>
              </select>
            </div>
          </form>
          <div className="flex flex-col mdx:flex-row space-y-3 mdx:space-y-0 mdx:gap-x-5 mt-10">
            <button
              form="orderForm"
              type="submit"
              className="w-full mdx:w-auto rounded-full transition-colors border text-[#FB6A68] hover:text-white hover:bg-[#FB6A68] border-[#FB6A68] py-4 px-10 text-[16px] font-bold"
            >
              {t("get_order")}
            </button>
            <Link
              href={`/${locale}/analyze`}
              className="w-full mdx:w-auto rounded-full text-center transition-colors border text-[#FB6A68] hover:text-white hover:bg-[#FB6A68] border-[#FB6A68] py-4 px-10 text-[16px] font-bold"
            >
              {t("get_buy")}
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-3 mdx:space-y-5  items-center justify-center max-w-[839px] mx-auto text-center">
          <Image src={karzina} alt="don't basket item" />
          <h3 className="text-[20px] mdx:text-[25px] xl:text-[40px] font-bold">
            {t("don't_basket_title")}
          </h3>
          <p className="text-[16px] mdx:text-[18px] xl:text-[20px] font-normal">
            {t("don't_basket_desc")}
          </p>
          <Link
            href={`/${locale}/analyze`}
            className="bg-[#FB6A68] text-white text-[16px] mdx:text-[18px] xl:text-[20px] rounded-full p-3 w-full mdx:w-auto px-20 font-bold"
          >
            {t("don't_basket_button")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default BasketCard;
