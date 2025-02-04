import { client } from '@/sanity/lib/client'
import ServiceItemBanner from '@/app/[locale]/components/Services/ServiceItemBanner'
import ServiceItemInfo from '@/app/[locale]/components/Services/ServiceItemInfo'
import Interest from '@/app/[locale]/components/Services/Interest'
import dynamic from 'next/dynamic'
import {metaInfoService} from '@/constants/service-metada'
const Application = dynamic(() => import('../../components/Application'), {
  ssr: false
})



export async function generateStaticParams() {
  // Dinamik URL-lar uchun kerak bo'lsa, parametrlar ro'yxatini qaytaradi
  return [
    { slug: 'rustam' },
    { slug: 'another-case' },
  ];
}

// Meta ma'lumotlarni dinamik yaratish
export async function generateMetadata({ params }) {
  const { slug } = params;
  const meta = metaInfoService[slug] || metaInfoService.default;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.url,
      type: 'website',
    },
    alternates: {
      canonical: meta.url,
    },
  };
}



export default async function ServiceDetailPage({ params }) {
  const { slug, locale } = params

  // Получаем данные сервиса по slug
  const service = await client.fetch(
    `*[_type == "service" && slug.current == $slug][0]{
      name,
      description,
      details,
      icon,
      categoryName->{
        name,
        slug
      }
    }`,
    { slug }
  )

  if (!service) {
    return <div>Сервис не найден</div>
  }

  return (
    <div className='w-full bg-white flex flex-col gap-24 pb-24'>
      <ServiceItemBanner service={service} locale={locale} />
      <ServiceItemInfo service={service} locale={locale} />
      <Interest currentService={service} locale={locale} />
      <div className='w-full max-w-[1440px] mx-auto'>
        <Application />
      </div>
    </div>
  )
}
