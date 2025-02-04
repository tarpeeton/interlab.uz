import Sale from '@/app/[locale]/components/Sale'
import BlogPagination from '@/app/[locale]/components/Blogs/BlogPagination'
import { useTranslations } from 'next-intl'
import Head from 'next/head'


export const metadata = {
  title: 'Новости медицинского центра INTERMED – актуальная информация для пациентов',
  description: `Читайте новости медицинского центра INTERMED: полезные советы, новинки диагностики, акции и мероприятия. Оставайтесь в курсе актуальной информации о здоровье!   Новости медицинского центра INTERMED

Медицинский центр INTERMED в Ташкенте не только предлагает высококачественные медицинские услуги, но и активно делится полезной информацией с пациентами. На этой странице вы найдете актуальные новости, анонсы мероприятий, советы врачей и информацию об акциях. Мы стремимся быть ближе к нашим пациентам, предоставляя знания, которые помогают сохранить здоровье.

Почему стоит следить за новостями INTERMED?

Полезные советы и рекомендации В новостной ленте медицинского центра INTERMED наши специалисты регулярно делятся рекомендациями по профилактике заболеваний, укреплению иммунитета, правильному питанию и поддержанию общего здоровья. Например, вы узнаете:

- Как распознать первые признаки заболеваний эндокринной системы?
- Когда нужно пройти профилактическое УЗИ или сдать анализы?
- Какие витамины необходимы детям и взрослым в зимний период?

Информация о новых услугах и технологиях Мы постоянно расширяем спектр услуг и внедряем современные методы диагностики и лечения. В наших новостях вы сможете узнать:

- О новом оборудовании, установленном в центре;
- О новых направлениях, таких как дерматология, кардиология или неврология;
- О специализированных программах лечения для детей и взрослых.

Акции и специальные предложения INTERMED регулярно проводит акции, чтобы сделать качественную медицинскую помощь более доступной. Следите за нашими новостями, чтобы не пропустить:

- Скидки на УЗИ в определенные дни;
- Специальные предложения на чекапы здоровья;
- Бесплатные консультации врачей в рамках акций.

Анонсы мероприятий и обучающие семинары Мы организуем мероприятия, направленные на повышение медицинской грамотности. Это могут быть открытые лекции, семинары, мастер-классы и консультации, где наши врачи делятся важной информацией.

Популярные рубрики новостей INTERMED

Новости эндокринологии

Все, что касается здоровья эндокринной системы, вы найдете в этой рубрике: советы эндокринологов, новейшие методы диагностики и лечения заболеваний щитовидной железы, рекомендации по питанию и образу жизни при диабете.

Диагностические услуги и инновации

Расскажем о том, как проходит диагностика в нашем центре: УЗИ, лабораторные анализы, рентген и многое другое. Вы узнаете, как наши технологии помогают выявить заболевания на ранней стадии и назначить эффективное лечение.

Здоровье женщин и детей

Эта рубрика посвящена заботе о здоровье женщин и детей. Гинекологи рассказывают о профилактике заболеваний, педиатры делятся рекомендациями по уходу за детьми.

Общий медицинский чекап

Вы узнаете, почему так важно проходить профилактические осмотры и как они помогают сохранять здоровье.

 Образовательные статьи и исследования

Мы публикуем статьи и исследования на актуальные медицинские темы, чтобы наши пациенты могли быть в курсе последних достижений в медицине. В этой рубрике вы найдете:

- Обзоры новых медицинских исследований и их значимость для здоровья.
- Статьи о профилактике и лечении различных заболеваний.
- Советы по здоровому образу жизни и правильному питанию.

Следите за нашими новостями, чтобы быть в курсе всех событий и новинок в медицинском центре INTERMED. Мы стремимся предоставлять только проверенную и полезную информацию, которая поможет вам и вашей семье заботиться о здоровье. Забота о вашем здоровье – наша миссия!`,
  keywords: 'Общий медицинский чекап ,  Здоровье женщин и детей ,  Диагностические услуги и инновации',
};



export default function Page({ params }) {
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
      <div>
      <div className='w-full bg-white '>
        <div className='max-w-[1440px] w-full mx-auto py-24 px-2 flex flex-col gap-52'>
          {/* <div>

          <h2 className="text-4xl max-md:text-2xl font-bold mb-4 xl:w-[50%]">
            {t('Blog.prom-title')}{" "}
            <span className="text-red-500">{t('Blog.sub-prom-title')}</span>
          </h2>
          <Sale locale={params.locale} />
          </div> */}
          <div>
            <h2 className='text-4xl max-md:text-2xl font-bold mdl:mb-8'>
              {t('Blog.title')}
            </h2>
            <BlogPagination locale={params.locale} />
          </div>
        </div>
      </div>
    </div>
    </>
   
  )
}
