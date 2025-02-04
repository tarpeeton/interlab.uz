import { useLocale } from "next-intl";
export const steps = [
  {
    id: "01",
    title: {
      ru: "Анализ потребностей",
      uz: "Ehtiyojlarni tahlil qilish"
    },
    description: {
      ru: "Глубокий анализ потребностей вашей организации. Проводим консультации",
      uz: "Tashkilotingizning chuqur ehtiyojlarini tahlil qilish. Maslahat xizmatlari ko'rsatish"
    }
  },
  {
    id: "02",
    title: {
      ru: "Создание уникального решения",
      uz: "Noyob yechim yaratish"
    },
    description: {
      ru: "На основе анализа, разрабатываем эксклюзивный план аутсорсинга",
      uz: "Tahlil asosida, sizning autsorsing rejangizni ishlab chiqamiz"
    }
  },
  {
    id: "03",
    title: {
      ru: "Интеграция процессов",
      uz: "Jarayonlarni integratsiyalash"
    },
    description: {
      ru: "Плавное внедрение лабораторных услуг в ваши рабочие процессы",
      uz: "Laboratoriya xizmatlarini sizning ish jarayonlaringizga to'liq joriy etish"
    }
  },
  {
    id: "04",
    title: {
      ru: "Обучение и поддержка персонала",
      uz: "O'qitish va xodimlarni qo'llab-quvvatlash"
    },
    description: {
      ru: "Проводим обучение вашего персонала, разъясняем принципы работы с лабораторными данными",
      uz: "Xodimlaringizni o'qitamiz, laboratoriya ma'lumotlari bilan ishlash tamoyillarini tushuntiramiz"
    }
  },
  {
    id: "05",
    title: {
      ru: "Запуск и мониторинг качества услуг",
      uz: "Xizmatlar sifatini ishga tushirish va monitoring qilish"
    },
    description: {
      ru: "Проводится регулярная оценка результатов для постоянного повышения качества",
      uz: "Sifatni doimiy oshirish uchun natijalarni muntazam baholash"
    }
  },
  {
    id: "06",
    title: {
      ru: "Аналитика и отчётность",
      uz: "Tahlil va hisobotlar"
    },
    description: {
      ru: "Предоставляем отчеты и аналитические данные по выполнению лабораторных услуг",
      uz: "Laboratoriya xizmatlarini bajarish bo'yicha hisobotlar va tahliliy ma'lumotlarni taqdim etamiz"
    }
  },
  {
    id: "07",
    title: {
      ru: "Развитие партнёрства",
      uz: "Hamkorlikni rivojlantirish"
    },
    description: {
      ru: "Обеспечиваем долгосрочную поддержку и остаёмся вашим надёжным партнёром",
      uz: "Professional qo'llab-quvvatlashni ta'minlaymiz va ishonchli hamkoringiz bo'lib qolamiz"
    }
  }
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
