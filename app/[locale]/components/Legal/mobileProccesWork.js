import { useLocale } from "next-intl";
const steps = [
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
const MobileProccesWork = () => {
  const locale = useLocale()

  return (
    <div className="flex flex-col gap-[35px] py-10 px-[16px]">
        <p className="font-bold text-[27px] mdl:text-[40px]">{locale === 'ru' ? 'Процесс работы' : 'Protsess ishlash'}</p>
      
        <div className="border-l flex flex-col gap-[35px] mdl:gap-[80px]">
        {steps.map((step, index) => (
        
        <div key={index} className="flex mdl:flex-row mdl:gap-[20px] flex-col items-start gap-4 relative pl-4">
          <div className="absolute left-[-5px] top-[20px] mdl:top-[35px] w-[8px] h-[8px] rounded-full bg-[#FB6A68]" />
          <div className="w-[55px] h-[55px] mdl:min-w-[77px] mdl:h-[77px] border rounded-full border-[#FB6A68] flex items-center justify-center">
          <div className="min-w-[47px] h-[47px] mdl:w-[66px] mdl:h-[66px] rounded-full bg-[#FB6A68] text-white flex items-center justify-center">
            <span className="text-[18px] mdl:text-[25px] font-bold text-white">{step.id}</span>
          </div>
            </div>
          
          <div className="flex flex-col gap-[5px] mdl:w-full">
            <h3 className="text-[18px] mdl:text-[25px] mb-0 font-bold">{step.title[locale]}</h3>
            <p className="text-[14px] mdl:text-[18px] text-[#8A8A8A] mb-0 w-[280px] mdx:w-full">{step.description[locale]}</p>
          </div>
        </div>
      ))}
        </div>
      
    </div>
  );
};

export default MobileProccesWork;
