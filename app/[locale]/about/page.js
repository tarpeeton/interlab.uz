// import AboutService from '@/app/[locale]/components/About/AboutService'
// import AboutInfo from '@/app/[locale]/components/About/AboutInfo'
import AboutBanner from '@/app/[locale]/components/About/AboutBanner'
// import AboutAchiev from '@/app/[locale]/components/About/AboutAchiev'
import AboutLicense from '@/app/[locale]/components/About/AboutLicense'
import Blog from '@/app/[locale]/components/Blog'
import { useTranslations } from 'next-intl'
import MainServices from '../components/MainServices'
import About from '../components/About'
import WhyWe from '../components/Ckdl/WhyWe'
import Link from 'next/link'
import Head from 'next/head'

export const metadata = {
  title: 'Медицинский центр INTERMED: профессионализм и инновации в Ташкенте',
  description: `Медицинский центр INTERMED в Ташкенте – это команда опытных врачей, современное оборудование и широкий спектр услуг. Узнайте больше о нас, чтобы доверить здоровье профессионалам! О медицинском центре INTERMED

*INTERMED* – это современный медицинский центр в Ташкенте, где профессионализм и забота о пациентах объединяются с передовыми технологиями. Мы гордимся нашей репутацией, которая основана на многолетнем опыте работы, высоких стандартах качества и индивидуальном подходе к каждому пациенту.

Мы понимаем, что здоровье – это главное богатство, поэтому наша миссия – сделать медицинские услуги доступными, комфортными и эффективными для всех наших пациентов.

Наша команда: профессионалы, которым можно доверять

Главная ценность *INTERMED* – это наши врачи. В штате медицинского центра работают специалисты, которые имеют многолетний опыт и глубокие знания в своих областях. Среди них:

- Эндокринологи для диагностики и лечения заболеваний щитовидной железы, гормональных нарушений и диабета;
- Неврологи, которые помогут справиться с головной болью, нарушениями сна и другими неврологическими проблемами;
- Гинекологи и акушеры, обеспечивающие комплексную заботу о женском здоровье;
- Педиатры, которые знают, как найти подход к каждому ребенку;
- Кардиологи, специализирующиеся на сердечно-сосудистых заболеваниях.

Наши врачи регулярно повышают свою квалификацию, участвуя в международных конференциях, семинарах и тренингах. Это позволяет нам предоставлять услуги на уровне мировых стандартов.

Современные технологии – залог точной диагностики

Медицинский центр *INTERMED* оснащен современным оборудованием, которое позволяет проводить диагностику и лечение с высокой точностью. В арсенале клиники:

- УЗИ-аппараты экспертного класса, которые обеспечивают качественное изображение для точной диагностики;
- Рентгеновские установки с низким уровнем радиации для безопасного обследования;
- Лаборатория с новейшим оборудованием для выполнения широкого спектра анализов (общий анализ крови, биохимические исследования, анализы на гормоны и инфекции).

Мы уверены, что использование современных технологий помогает быстрее и точнее выявлять заболевания и разрабатывать индивидуальные планы лечения.

Наши услуги: всё для вашего здоровья

Медицинский центр *INTERMED* предлагает широкий спектр услуг для всей семьи:

- Полное медицинское обследование для взрослых и детей;
- Диагностика заболеваний с использованием новейших технологий (УЗИ, ЭКГ, рентген);
- Консультации узких специалистов, включая эндокринологов, кардиологов, неврологов и других;
- Проведение лабораторных анализов любой сложности;
- Лечение хронических заболеваний;
- Вакцинация детей и взрослых.

Мы понимаем, что каждому пациенту нужны уникальные решения, поэтому создаем индивидуальные программы лечения и профилактики.

Наши преимущества

Почему пациенты выбирают именно нас?

- Опытные врачи: мы гордимся нашей командой профессионалов.
- Современное оборудование: диагностика и лечение проводятся на уровне мировых стандартов.
- Индивидуальный подход: для каждого пациента мы разрабатываем персональный план лечения.
- Комфортные условия: в центре созданы уютные условия для ожидания и проведения процедур.
- Доступность услуг: прозрачная ценовая политика и возможность записи онлайн делают наши услуги удобными для всех.

Мы всегда рядом, чтобы помочь

Медицинский центр *INTERMED* – это не просто место, где лечат болезни, но и пространство, где вы всегда почувствуете поддержку, заботу и уважение.

Доверьте здоровье профессионалам. Добро пожаловать в *INTERMED*!`,
  keywords: ' interlab , about , us , result , agency , agency of result',
};






export default function AboutPage({ params }) {
  const t = useTranslations()
  return (
    <>

<Head>
<title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
      </Head>


     <main className='w-full h-auto bg-white pb-24'>
      <AboutBanner />
     
      <MainServices params={params} />
      <div className='mb-24 px-2'>
        <About />
      </div>
      <div className='mb-24 px-2'>
        <WhyWe />
      </div>
      <AboutLicense locale={params.locale} />
      <div className='w-full max-w-[1440px] px-2 mx-auto'>
        <h2 className='mt-52 text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full'>
          {t('Blog.title')}
        </h2>
        <Blog locale={params.locale} />
        <div className='w-full flex justify-center'>
          <Link href={`/${params.locale}/blogs`} className='flex gap-2 justify-center self-center px-16 py-3.5 mt-8 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px]'>
            <span className='my-auto'>{t('Blog.other')} </span>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&'
              className='shrink-0 aspect-square w-[23px]'
              alt='Arrow icon'
            />
          </Link>
        </div>
      </div>
    </main>
    </>
   
  )
}
