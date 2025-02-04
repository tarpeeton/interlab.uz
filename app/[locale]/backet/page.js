import BasketCard from "@/app/[locale]/components/BasketCard";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("basket");
  return (
    <main className="w-full h-auto bg-white pb-24">
      <div className="max-w-[1536px] mx-auto">
        <h2 className="text-[27px] py-[25px] mdx:py-[40px] px-2 xxl:px-16 lg:px-[20px] md:text-[36px] xl:text-[40px] font-bold bg-[#F8F9FB]">
          {t("basket")}
        </h2>
        <div className="mt-5 px-2 xxl:px-16  lg:px-[20px]">
          <BasketCard />
        </div>
      </div>
    </main>
  );
}
