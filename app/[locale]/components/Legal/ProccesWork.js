import { useLocale } from "next-intl";

export const steps = [
  {
    id: "01",
    title: {
      ru: "Консультация",
      uz: "Konsultatsiya"
    },
    description: {
      ru: "Вы получаете консультацию о возможных вариантах сотрудничества и деталях предлагаемых услуг",
      uz: "Hamkorlik variantlari va taklif qilinayotgan xizmatlar tafsilotlari bo'yicha maslahat olasiz"
    },
  },
  {
    id: "02",
    title: {
      ru: "Индивидуальное предложение",
      uz: "Individual taklif"
    },
    description: {
      ru: "Создаем индивидуальный план сотрудничества, включающий наиболее подходящие условия",
      uz: "Eng mos shartlarni o'z ichiga olgan individual hamkorlik rejasini tuzamiz"
    },
  },
  {
    id: "03",
    title: {
      ru: "Заключение договора",
      uz: "Shartnoma tuzish"
    },
    description: {
      ru: "Оформляем официальный договор, который чётко фиксирует условия",
      uz: "Shartlarni aniq belgilaydigan rasmiy shartnomani rasmiylashtiramiz"
    },
  },
  {
    id: "04",
    title: {
      ru: "Интеграция решений",
      uz: "Yechimlarni integratsiya qilish"
    },
    description: {
      ru: "Обеспечиваем плавное внедрение наших программ и услуг в ваши корпоративные процессы",
      uz: "Dasturlar va xizmatlarimizni korporativ jarayonlaringizga silliq joriy etishni ta'minlaymiz"
    },
  },
  {
    id: "07",
    title: {
      ru: "Развитие партнёрства",
      uz: "Hamkorlikni rivojlantirish"
    },
    description: {
      ru: "Обеспечиваем долгосрочную поддержку и остаёмся вашим надёжным партнёром",
      uz: "Uzoq muddatli yordamni ta'minlaymiz va ishonchli hamkoringiz bo'lib qolamiz"
    },
  },
  {
    id: "06",
    title: {
      ru: "Запуск и мониторинг работы",
      uz: "Ishni boshlash va monitoring"
    },
    description: {
      ru: "Регулярно оцениваем эффективность предоставляемых услуг и проводим мониторинг",
      uz: "Ko'rsatilayotgan xizmatlar samaradorligini muntazam baholaymiz va monitoring olib boramiz"
    },
  },
  {
    id: "05",
    title: {
      ru: "Обучение сотрудников",
      uz: "Xodimlarni o'qitish"
    },
    description: {
      ru: "Проводим обучение для вашего персонала, чтобы участники были знакомы с новыми стандартами",
      uz: "Xodimlaringiz yangi standartlar bilan tanish bo'lishlari uchun treninglar o'tkazamiz"
    },
  },
];


const ProccesWork = () => {
  const locale = useLocale()

 

  const firstFourSteps = steps.slice(0, 4);
  const remainingSteps = steps.slice(4);

  const StepCard = ({ step }) => (
    <div key={step.id} className="flex flex-col items-start">
      <div className="mb-5">
        <div className="relative">
          <div className="">
            <div className="w-[92px] h-[92px] rounded-full bg-[#FB6A68] text-white flex items-center justify-center text-xl lg:text-[30px] font-bold">
              {step.id}
            </div>
            <div className="absolute -top-[2px] -left-[2px] -right-[2px] -bottom-[2px] rounded-full border-2 border-white"></div>
          </div>
          <div className="absolute -top-[3px] -left-[3px] w-[98px] h-[98px] rounded-full border border-[#FB6A68]"></div>
        </div>
      </div>
      <h3 className="text-[28px] font-semibold mb-2.5 text-[#151515]">{step.title[locale]}</h3>
      <p className="text-[#989898] text-[18px] leading-relaxed">{step.description[locale]}</p>
    </div>
  );

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-[1440px] lg:mx-auto">
        <h2 className="text-[40px] font-bold mb-[50px] text-[#151515]">

          {locale === "ru" ? "Процесс работы" : "Ish jarayoni"}
        </h2>

        <div className="relative space-y-12">
          {/* First 4 cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-r border-b rounded-r-[130px] border-[#E4E4E4] p-8">
            {/* Red dots for first section - you can adjust positions as needed */}
            <div className="w-2 h-2 bg-[#FB6A68] rounded-full absolute -top-1 left-[70px]"></div>
            <div className="w-2 h-2 bg-[#FB6A68] rounded-full absolute -top-1 left-1/4"></div>
            <div className="w-2 h-2 bg-[#FB6A68] rounded-full absolute -top-1 left-2/4"></div>
            <div className="w-2 h-2 bg-[#FB6A68] rounded-full absolute -top-1 left-3/4"></div>

            {firstFourSteps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>

          {/* Remaining 3 cards */}
          <div style={{ marginTop: "0" }} className="relative grid lg:m-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 p-8 lg:w-[75%]">
            {/* Red dots for second section - you can adjust positions as needed */}
            <div className="w-2 h-2 bg-[#FB6A68] rounded-full absolute -top-1 left-[75px]"></div>
            <div className="w-2 h-2 bg-[#FB6A68] rounded-full absolute -top-1 left-1/3"></div>
            <div className="w-2 h-2 bg-[#FB6A68] rounded-full absolute -top-1 left-2/3"></div>

            {remainingSteps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProccesWork;