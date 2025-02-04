"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from 'next-intl'
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: { ru: "Современное оборудование", uz: "Zamonaviy uskunalar" },
    description: { 
      ru: "Мы используем новейшие технологии и оборудование, что позволяет нам обеспечивать высокую точность и скорость диагностики.",
      uz: "Biz eng yangi texnologiyalar va uskuna vositalaridan foydalanamiz, bu esa bizga diagnostika aniqligi va tezligini ta'minlash imkonini beradi."
    },
    image: "/images/about-banner.png",
    number: "01",
  },
  {
    id: 2,
    title: { ru: "Широкий спектр анализов", uz: "Keng tahlil turlari" },
    description: { 
      ru: "Наша лаборатория предлагает обширный набор исследований, включая биохимические, клинические, микробиологические и генетические анализы, чтобы удовлетворить все ваши потребности в диагностике.",
      uz: "Bizning laboratoriyamiz keng qamrovli tadqiqotlar to'plamini taklif etadi, jumladan biokimyoviy, klinik, mikrobiologik va genetika tahlillari, bu esa barcha diagnostika ehtiyojlaringizni qondirishga yordam beradi."
    },
    image: "/images/IMG_8388ff.png",
    number: "02",
  },
  {
    id: 3,
    title: { ru: "Квалифицированный персонал", uz: "Malakali xodimlar" },
    description: { 
      ru: "Наша команда состоит из высококвалифицированных специалистов, обладающих богатым опытом в области лабораторной диагностики, которые обеспечивают надежность и точность результатов.",
      uz: "Bizning jamoamiz yuqori malakali mutaxassislardan iborat bo'lib, ular laboratoriya diagnostikasi sohasida boy tajribaga ega va natijalar ishonchliligi va aniqligini ta'minlaydi."
    },
    image: "/images/IMG_8423.png",
    number: "03",
  },
  {
    id: 4,
    title: { ru: "Эффективное обслуживание", uz: "Samarali xizmat ko'rsatish" },
    description: { 
      ru: "Мы стремимся к максимальному удобству для наших пациентов, предлагая оперативную обработку анализов и удобные способы получения результатов.",
      uz: "Biz bemorlarimiz uchun maksimal qulaylikni ta'minlashga intilamiz, tez tahlilni qayta ishlash va natijalarni olishning qulay usullarini taqdim etamiz."
    },
    image: "/images/shutterstock_2148946241-1-scaled.jpg",
    number: "04",
  },
  {
    id: 5,
    title: { ru: "Доступность и прозрачность", uz: "Arzonlik va shaffoflik" },
    description: { 
      ru: "Мы заботимся о своих пациентах, предоставляя ясную информацию о ценах и сроках выполнения анализов, а также обеспечивая доступность услуг для всех.",
      uz: "Biz bemorlarimizni parvarish qilamiz, tahlil narxlari va bajarilish muddati haqida aniq ma'lumotlarni taqdim etamiz, shuningdek, barcha uchun xizmatlar mavjudligini ta'minlaymiz."
    },
    image: "/images/7dc600f826964efb966d3a3dd1d694bf.png",
    number: "05",
  },
  // Добавляйте больше элементов по необходимости
];


export default function WhyWe() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const locale = useLocale()

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto flex gap-8 max-lg:flex-col-reverse">
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={data[currentIndex].id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={data[currentIndex].image}
              width={1000}
              height={1000}
              quality={100}
              alt={`Banner ${data[currentIndex].title[locale]}`}
              className="w-full h-full object-cover rounded-3xl max-h-[500px]"
            />
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-8 lg:hidden items-center justify-end mt-4">
          <button
            className="h-20 w-20 flex items-center justify-center rounded-full border border-[#E4E4E4]"
            onClick={handlePrev}
          >
            <Image
              src={"/svg/ckdl/left-arrow-blck.svg"}
              width={100}
              height={100}
              alt="LEFT ARROW"
              className="w-6"
            />
          </button>

          <div className="text-5xl font-bold text-[#FB6A68]">
            {data[currentIndex].number}
          </div>

          <button
            className="h-20 w-20 flex items-center justify-center rounded-full border border-[#E4E4E4]"
            onClick={handleNext}
          >
            <Image
              src={"/svg/ckdl/right-arrow-blck.svg"}
              width={100}
              height={100}
              alt="RIGHT ARROW"
              className="w-6"
            />
          </button>
        </div>
      </div>
      <div className="flex-1 lg:min-h-[500px] flex flex-col justify-between items-start">
        <div>
          <h2 className="text-4xl max-mdx:text-2xl font-semibold">
            {data[currentIndex].title[locale]}
          </h2>
          <p className="w-full max-w-[500px] text-xl max-mdx:text-base text-[#5B5B5B]">
            {data[currentIndex].description[locale]}
          </p>
        </div>
        <div className="flex gap-8 max-lg:hidden items-center">
          <button
            className="h-20 w-20 flex items-center justify-center rounded-full border border-[#E4E4E4]"
            onClick={handlePrev}
          >
            <Image
              src={"/svg/ckdl/left-arrow-blck.svg"}
              width={100}
              height={100}
              alt="LEFT ARROW"
              className="w-6"
            />
          </button>

          <div className="text-5xl font-bold text-[#FB6A68]">
            {data[currentIndex].number}
          </div>

          <button
            className="h-20 w-20 flex items-center justify-center rounded-full border border-[#E4E4E4]"
            onClick={handleNext}
          >
            <Image
              src={"/svg/ckdl/right-arrow-blck.svg"}
              width={100}
              height={100}
              alt="RIGHT ARROW"
              className="w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
