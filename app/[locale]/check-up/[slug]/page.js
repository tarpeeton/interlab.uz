import React from 'react'
import { client } from '@/sanity/lib/client'
import Banner from '../../components/Checkup/Banner'
import WhyWe from '../../components/Ckdl/WhyWe'
import Instuction from '../../components/Instuction'
import Application from '../../components/Application'
import Steps from '../../components/Checkup/steps'
import PriceCheckup from '../../components/Checkup/price'
import CheckupOverview from '../../components/Checkup/CheckupOverview'
import Similar from '../../components/Checkup/Similar'

export default async function CheckupPage({ params }) {
  const { slug, locale } = params

  // Fetch данных из Sanity
  const checkup = await client.fetch(
    `*[_type == "checkup" && slug.current == $slug][0]{
        _id,
        title,
        description,
        slug,
        icon{
          asset->{
            _id,
            url
          }
        },
        color,
        secondaryColor,
        price,
        hasDiscount,
        discountPercentage,
        checkupComposition,
        stages
      }`,
    { slug },
    { cache: 'no-store' } // Disable caching
  )

  // Проверка, если данные отсутствуют
  if (!checkup) {
    return <div>Чекап не найден</div>
  }

  const {
    title,
    description,
    icon,
    color,
    checkupComposition,
    price,
    discountPercentage,
    stages
  } = checkup

  return (
    <div className='w-full flex flex-col gap-24 pb-24'>
      <Banner
        title={title}
        description={description}
        icon={icon}
        color={color}
      />
      {checkupComposition && checkupComposition.length > 0 && (
        <Steps checkupComposition={checkupComposition} />
      )}
      <PriceCheckup price={price} discountPercentage={discountPercentage} />
      {stages && stages.length > 0 && <CheckupOverview stages={stages} />}
      <div className='px-[16px] mdl:px-[20px] lg:px-0 lg:mt-[100px]'>
      <WhyWe />

      </div>
      <div className='w-full max-w-[1440px] px-2 mx-auto lg:mt-[100px]'>
        <Instuction locale={locale} />
      </div>
      <div className='w-full max-w-[1440px] px-2 mx-auto lg:mt-[100px]'>
        <Application />
      </div>

      <Similar />
    </div>
  )
}
