import checkMark from "@/public/svg/check-mark.svg";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const Data = {
  description: [
    {
      item: {
        ru: 'Следуйте всем указаниям врача перед сдачей анализа.',
        uz: "Tahlil topshirishdan oldin shifokor ko'rsatmalariga rioya qiling."
      }
    },
    {
      item: {
        ru: 'Избегайте употребления жирной пищи за день до сдачи анализа.',
        uz: "Tahlildan bir kun oldin yog'li ovqatlardan saqlaning."
      }
    },
    {
      item: {
        ru: 'Старайтесь не испытывать сильного стресса перед анализом.',
        uz: 'Tahlildan oldin kuchli stressdan saqlaning.'
      }
    },
    {
      item: {
        ru: 'Убедитесь, что соблюдаете режим сна перед сдачей анализов.',
        uz: 'Tahlildan oldin uyqu rejimiga rioya qilganingizga ishonch hosil qiling.'
      }
    }
  ]
};

export default function Rec() {
  const t = useTranslations("Instructions");
  const locale = useLocale()


  return (
    <div className="w-full lg:mt-[60px] max-w-[1440px] mx-auto grid grid-cols-1 mdl:grid-cols-2 gap-8 p-8 border border-neutral-300 rounded-3xl">
      <div>
        <h3 className="text-4xl w-full max-w-[400px] font-semibold">
          {t("overall")}
        </h3>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {Data.description.map((item, index) => {
          return (
            <div key={index} className="flex gap-4 items-start">
              <Image
                src={checkMark}
                width={100}
                height={100}
                quality={100}
                alt="CheckMark Icon"
                className="w-5 h-5"
              />
              <p className="text-lg">{item.item[locale]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
