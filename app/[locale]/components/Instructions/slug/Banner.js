
export default function Banner({title,
  locale}) {
  return (
    <div className="bg-gray-50 w-full px-4 lg:px-0 mdl:py-10">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col justify-between lg:h-[150px] mdl:flex-row overflow-hidden max-mdl:py-10">
        <div className="flex justify-center flex-col ">
          <h1 className="text-5xl font-bold">{title[locale]}</h1>
          <p className="mt-3 text-neutral-600 font-medium leading-5 text-lg max-w-[700px]">
            {locale === 'ru' ? "Клиника INTERMED не несет ответственности за корректность результатов анализов при несоблюдении данных правил." : "INTERMED klinikasi ushbu qoidalarga rioya qilmaslik holatida tahlillar natijalarining to‘g‘riligi uchun javobgarlikni o‘z zimmasiga olmaydi."}
          </p>
        </div>
      </div>
    </div>
  );
}
