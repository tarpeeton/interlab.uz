import { useTranslations } from "next-intl";


export default function Banner({onclick}) {
  const t = useTranslations("Partners.banner");

  return (
    <div className="w-full h-screen relative max-slg:gap-5 flex flex-col lg:flex-row pt-[10px] lg:pt-0">
      <div className=" flex flex-col relative z-[999] bg-white items-start gap-4 lg:w-[50%] lg:flex-col lg:items-center lg:justify-center">
        <div className='px-[16px] lg:w-[80%]'>
        <h1 className=" text-[30px] lg:text-5xl font-bold w-full mb-0 ">
        <br className='block mdx:hidden'/>
          {t("title")}
          <span className="text-rose-400 hidden lg:ml-[10px]">INTERMED INNOVATION</span>
        </h1>
        <span className="text-rose-400  text-[29px] lg:text-5xl font-bold w-full ">INTERMED INNOVATION</span>

        <p className="w-full max-w-[400px] leading-5 mt-[30px]">
          {t("subtitle")}
        </p>
        <button onClick={onclick} className="mt-4 py-3 px-4 rounded-full text-white  bg-red-400 font-semibold">
          {t("button")}
        </button>
          </div>
       
      </div>
      <div className="h-[477px] w-full mdx:h-[577px] lg:w-[50%] lg:h-[750px] slg:mt-[30px] lg:mt-0">
        <img
          src='https://ucarecdn.com/b564ceac-a24f-46f8-b294-4494eb86f7b5/-/preview/1000x667/'
          width={1500}
          height={1500}
          quality={1000}
          alt="About Banner"
          className="h-full w-full  object-cover"
        />
      </div>
    </div>
  );
}
