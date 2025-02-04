import aboutBanner from "@/public/images/image_2024-11-01_18-46-51.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function AboutBanner() {
  const t = useTranslations();
  const locale = useLocale()

  return (
    <>
      <div className="w-full h-screen-70 lg:h-[600px] relative lg:flex-row max-slg:gap-5 flex flex-col pt-10 lg:pt-0 ">
        <div className="relative w-full flex flex-col  lg:w-[50%] lg:h-full  lg:justify-center  mx-auto px-4 ">
          <div className='lg:mx-auto flex flex-col lg:gap-[10px] lg:mt-[-70px]'>
          <h1 className="text-[40px]  max-mdx:text-[25px] text-rose-400 font-bold w-full lg:max-w-[560px]">
            {t("About.title")}{" "}
            <span className="text-black">{t("About.subtitle")}</span>
          </h1>
          <p className="w-full text-sm lg:mb-0 lg:max-w-[400px] leading-5 lg:text-[18px]">
            {t("About.description")}
          </p>
          <a
            href="tel:+998971504747"
            className="text-white bg-[#FB6A68] lg:mt-[30px] font-semibold self-start rounded-full px-8 py-3"
          >
            
            {locale === 'ru' ? 'Связаться с нами' : "Biz bilan bog'lanish"}
          </a>
          </div>
         
        </div>
        <div className="relative slg:mt-[30px] slg:px-[16px]  overflow-hidden w-full  h-[500px] max-slg:px-4  slg:h-[577px] lg:mt-0 lg:w-[50%] ">
          <Image
            src={aboutBanner}
            width={1500}
            height={1500}
            alt="About Banner"
            className="h-full w-full rounded-[24px]  slg:rounded-[30px]   object-cover"
          />
        </div>
      </div>
    </>
  );
}
