"use client"
import InsCard from './InsCard'
import { useState , useEffect } from 'react';
import { client } from '@/sanity/lib/client';


const data = [
  {
    slug: "general-blood-analysis",
    title: {
      ru: "Общий анализ крови",
      uz: "Umumiy qon tahlili"
    },
    description: {
      ru: `Общий анализ крови (ОАК) – базовое исследование, которое оценивает общее состояние организма. Он измеряет количество клеток крови (эритроциты, лейкоциты, тромбоциты) и определяет уровень гемоглобина, гематокрита и скорость оседания эритроцитов (СОЭ).`,
      uz: `Umumiy qon tahlili (OAK) — organizmning umumiy holatini baholaydigan asosiy tekshiruv. U qon hujayralari (eritrositlar, leykotsitlar, trombotsitlar) sonini o‘lchaydi va gemoglobin, gematokrit darajasi hamda eritrositlarning cho‘kish tezligini (SOE) aniqlaydi.`
    },
    purpose: {
      ru: "ОАК назначают для выявления воспалительных процессов, анемии, инфекций, аллергий и других патологий. Это первое исследование при любых жалобах на здоровье.",
      uz: "OAK yallig‘lanish jarayonlari, anemiya, infeksiyalar, allergiyalar va boshqa patologiyalarni aniqlash uchun tayinlanadi. Bu sog‘liq bilan bog‘liq har qanday shikoyatlar uchun birinchi tahlildir."
    },
    preparation: {
      ru: "Не употреблять пищу за 8–12 часов до анализа. Исключить интенсивные физические нагрузки за сутки. За 1–2 часа до сдачи избегать курения, соков, чая и кофе.",
      uz: "Tahlilga 8-12 soat oldin ovqatlanmaslik. Bir kun oldin intensiv jismoniy yuklamalarni istisno qilish. 1-2 soat oldin chekish, sharbatlar, choy va kofe ichmaslik."
    },
    result: {
      ru: "Анализ помогает врачу оценить общее состояние организма, диагностировать острые и хронические заболевания или оценить эффективность лечения.",
      uz: "Tahlil shifokorga organizmning umumiy holatini baholashga, o'tkir va surunkali kasalliklarni aniqlashga yoki davolanish samaradorligini baholashga yordam beradi."
    }
  },
  {
    slug: "biochemical-blood-analysis",
    title: {
      ru: "Биохимический анализ крови",
      uz: "Biokimyoviy qon tahlili"
    },
    description: {
      ru: `Биохимический анализ крови – это расширенное исследование, которое определяет уровень важных химических соединений в крови, таких как глюкоза, холестерин, белки, ферменты и электролиты.`,
      uz: `Biokimyoviy qon tahlili — bu qonning muhim kimyoviy birikmalarining darajasini, masalan, glyukoza, xolesterin, oqsillar, fermentlar va elektrolitlarni aniqlovchi kengaytirilgan tadqiqotdir.`
    },
    purpose: {
      ru: "Исследование помогает выявить проблемы с внутренними органами (печенью, почками, поджелудочной железой), нарушениями обмена веществ и контролировать хронические заболевания, такие как диабет или атеросклероз.",
      uz: "Tadqiqot ichki a'zolar (jigar, buyraklar, oshqozon osti bezi) bilan bog‘liq muammolarni, metabolik jarayonlar buzilishlarini aniqlashga va diabet yoki ateroskleroz kabi surunkali kasalliklarni nazorat qilishga yordam beradi."
    },
    preparation: {
      ru: "Строго натощак (8–12 часов голодания). Избегать алкоголя и жирной пищи за сутки. Исключить физические и эмоциональные перегрузки.",
      uz: "Faqat qorin bo‘shlig‘ida (8-12 soatlik och qorin bilan). Bir kun oldin alkogol va yog‘li ovqatlardan saqlanish. Jismoniy va hissiy ortiqcha yuklamalardan saqlanish."
    },
    result: {
      ru: "Анализ дает информацию о работе внутренних органов и помогает выявить нарушения обмена веществ.",
      uz: "Tahlil ichki a'zolar faoliyati haqida ma'lumot beradi va metabolizm buzilishlarini aniqlashga yordam beradi."
    }
  },
  {
    slug: "microbiological-analysis",
    title: {
      ru: "Микробиологические анализы",
      uz: "Mikrobiologik tahlillar"
    },
    description: {
      ru: `Микробиологические анализы позволяют определить наличие патогенных микроорганизмов (бактерий, вирусов, грибков). Основной метод – посев биоматериала на питательные среды.`,
      uz: `Mikrobiologik tahlillar patogen mikroorganizmlarning (bakteriyalar, viruslar, qo‘ziqorinlar) mavjudligini aniqlash imkonini beradi. Asosiy usul — biologik materialni ozuqa muhitiga ekish.`
    },
    purpose: {
      ru: "Анализы используют для диагностики инфекций (кишечных, мочеполовых, респираторных) и определения их возбудителей, а также чувствительности к антибиотикам.",
      uz: "Tahlillar infektsiyalarni (ichak, siydik yo‘llari, nafas yo‘llari) aniqlash va ularning sababchi mikroorganizmlarini, shuningdek, antibiotiklarga sezgirligini belgilash uchun ishlatiladi."
    },
    preparation: {
      ru: "Взятие материала проводится натощак или после соблюдения специфических условий (например, без антибиотиков за 7–10 дней). Точные рекомендации дает врач в зависимости от анализа.",
      uz: "Materialni olish och qoringa yoki maxsus shartlarni (masalan, antibiotiksiz 7-10 kun) bajargandan keyin amalga oshiriladi. Aniqlikni shifokor tahlil turiga qarab beradi."
    },
    result: {
      ru: "Определение типа инфекции и подбор наиболее эффективного лечения.",
      uz: "Infektsiya turini aniqlash va eng samarali davolash usulini tanlash."
    }
  },
  {
    slug: "urine-analysis",
    title: {
      ru: "Анализы мочи",
      uz: "Siydik tahlili"
    },
    description: {
      ru: `Анализ мочи – лабораторное исследование, позволяющее оценить состояние мочевыделительной системы и организма в целом.`,
      uz: `Siydik tahlili — bu siydik ajratish tizimi va organizmning umumiy holatini baholaydigan laboratoriya tadqiqoti.`
    },
    purpose: {
      ru: "Применяется для диагностики заболеваний почек, мочевого пузыря, контроля за лечением и профилактических обследований.",
      uz: "Buyraklar, siydik pufagi kasalliklarini aniqlash, davolashni nazorat qilish va profilaktik tekshiruvlar uchun qo‘llaniladi."
    },
    preparation: {
      ru: "Утром собрать среднюю порцию мочи в стерильный контейнер. Накануне исключить алкоголь, соленую и острую пищу.",
      uz: "Ertalab siydikning o‘rtacha qismini steril idishga to‘plash. Kechasi alkogol, tuzli va achchiq taomlardan saqlanish."
    },
    result: {
      ru: "Показатели мочи (белок, сахар, лейкоциты, эритроциты) помогают выявить инфекции, воспаления и системные заболевания.",
      uz: "Siydikdagi ko‘rsatkichlar (oqsil, shakar, leykotsitlar, eritrositlar) infektsiyalar, yallig‘lanishlar va tizimli kasalliklarni aniqlashga yordam beradi."
    }
  },
  {
    slug: "immunological-analysis",
    title: {
      ru: "Иммунологические анализы",
      uz: "Immunologik tahlillar"
    },
    description: {
      ru: `Иммунологические анализы выявляют состояние иммунной системы, оценивают количество антител, иммунных клеток и уровни специфических белков.`,
      uz: `Immunologik tahlillar immun tizimining holatini aniqlaydi, antitelar, immun hujayralar va maxsus oqsillar darajasini baholaydi.`
    },
    purpose: {
      ru: "Назначают при аутоиммунных заболеваниях, инфекциях, аллергиях и для оценки иммунитета после вакцинации.",
      uz: "Avtoimmun kasalliklar, infeksiyalar, allergiyalar va vaksinatsiya keyingi immunitetni baholash uchun tayinlanadi."
    },
    preparation: {
      ru: "Не требуется специальной подготовки. Анализ может проводиться в любой день, но желательно сдать его на голодный желудок.",
      uz: "Maxsus tayyorgarlik talab qilinmaydi. Tahlilni har qanday kunda topshirish mumkin, lekin och qoringa topshirish tavsiya etiladi."
    },
    result: {
      ru: "Результаты помогают выявить нарушения в иммунной системе, аутоиммунные заболевания и инфекционные процессы.",
      uz: "Natijalar immun tizimining buzilishlari, avtoimmun kasalliklar va infeksion jarayonlarni aniqlashga yordam beradi."
    }
  },
  {
    slug: "hormonal-analysis",
    title: {
      ru: "Гормональные анализы",
      uz: "Gormonal tahlillar"
    },
    description: {
      ru: `Гормональные анализы позволяют определить уровни различных гормонов в крови, включая половые, щитовидной железы и надпочечников.`,
      uz: `Gormonal tahlillar qonning turli gormonlar darajasini, jumladan jinsiy, qalqonsimon bez va buyrak usti bezlari gormonlarini aniqlash imkonini beradi.`
    },
    purpose: {
      ru: "Используются для диагностики заболеваний эндокринной системы, бесплодия, проблем с менструальным циклом и других гормональных нарушений.",
      uz: "Endokrin tizimi kasalliklari, bepushtlik, menstruatsiya tsikli bilan bog‘liq muammolar va boshqa gormonal buzilishlarni aniqlash uchun ishlatiladi."
    },
    preparation: {
      ru: "Требуется сдача крови натощак, за 24–48 часов исключить физические нагрузки и алкоголь.",
      uz: "Qonni och qoringa topshirish kerak, 24-48 soat davomida jismoniy yuklamalar va alkogoldan saqlanish zarur."
    },
    result: {
      ru: "Результаты помогают в диагностике эндокринных заболеваний, дисфункции щитовидной железы и половых желез.",
      uz: "Natijalar endokrin kasalliklar, qalqonsimon bez va jinsiy bezlarning disfunktsiyasini aniqlashga yordam beradi."
    }
  }
];




// intruksion

export default function List({locale}) {
  const [data , setData] = useState([])



useEffect(() => {
    // Запрос к Sanity для получения данных
    const fetchData = async () => {
      try {
        const query = '*[_type == "intruksion"]{title, slug}';  // Здесь мы получаем все документы типа "intruksion"
        const result = await client.fetch(query);

        // Обновляем состояние с полученными данными
        setData(result);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);  // Пустой массив зависимостей для выполнения запроса только один раз при монтировании компонента



  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
      <h2 className="text-4xl font-semibold">
      {locale === 'ru' ? " Инструкции" : "Ko'rsatmalar"}
      </h2>
      <div className="grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => {
          return (
            <InsCard
              key={index}
              title={item.title}
              description={item.description}
              slug={item.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
