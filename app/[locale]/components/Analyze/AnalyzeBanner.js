import Image from "next/image";
import analyzeBanner from "@/public/images/analyze-banner.png";
import { useLocale } from "next-intl";

function AnalyzeBanner() {
  const locale = useLocale()

  return (
    <div className="bg-sky-100 w-full px-4 lg:px-0 py-10 h-full lg:max-h-[400px]">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col mdl:flex-row items-center h-full overflow-hidden">
        {/* Left side - title and description */}
        <div className="flex flex-col w-full mdl:max-w-[800px] text-left justify-center lg:pl-[80px] xl:pl-[25px]">
          <h1 className=" text-[25px] mdl:text-[36px] font-bold text-neutral-900 mb-4">
            
          {locale === 'ru' ? 'Лабораторные анализы в INTERMED' : 'INTERMED laboratoriya tahlillari'}

            </h1>
          <p className="text-neutral-600 font-medium leading-6 text-[15px] mdl:text-lg">
          {locale === 'ru' ? "Предлагаем все виды лабораторных анализов — от стандартных до сложных генетических тестов. Точность диагностики обеспечивается современными технологиями и оборудованием." : "Biz standart tahlillardan tortib murakkab genetik testlargacha barcha turdagi laboratoriya tahlillarini taklif qilamiz. Diagnostika aniqligi zamonaviy texnologiyalar va uskunalar yordamida ta'minlanadi."}
          </p>
        </div>
        
        {/* Right side - image */}
        <div className="mdl:w-3/4 w-full flex justify-end max-mdl:justify-center">
          <Image
            quality={100}
            src={analyzeBanner}
            width={1000}
            height={1000}
            className="w-full h-[200px] lg:h-[250px] max-w-[300px] mdl:mr-12 object-contain"
            alt="Analyze Banner"
          />
        </div>
      </div>
    </div>
  );
}

export default AnalyzeBanner;
