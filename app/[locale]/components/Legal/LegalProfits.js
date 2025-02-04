'use client'
import { useLocale, useTranslations } from 'next-intl'
import React, { useState, useEffect } from 'react'
import { urlFor } from '@/sanity/lib/image'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'

export default function LegalProfits() {
  const t = useTranslations('Partners.profits')
  const [profits, setProfits] = useState([])
  const locale = useLocale()

  useEffect(() => {
    const fetchCaseCategory = async () => {
      try {
        const fetchProfil = await client.fetch(`*[_type == "profitLegal"]`)
        setProfits(fetchProfil)
      } catch (error) {
        console.debug(error)
      }
    }
    fetchCaseCategory()
  }, [locale])

  return (
    <div className='w-full max-w-[1440px] flex flex-col gap-8 mx-auto mt-[-80px] mdx:mt-[-100px] px-[16px]'>
      <h2 className='text-4xl font-semibold'>{t('heading')}</h2>
      <div className='w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-4 gap-4'>
        {Array.isArray(profits) ? (
          profits.map((item, index) => (
            <div
              key={index}
              className='relative overflow-hidden min-h-[270px] lg:min-h-[380px] rounded-[20px] mdx:rounded-[30px] border border-[#E4E4E4]'
            >
              <div className='py-[24px] px-[20px] mdx:py-[30px] mdx:px-[24px] relative min-h-[94px] lg:min-h-[131px]'>
                <p className='text-[#FB6A68] text-[20px] mdx:text-[24px] font-bold lg:min-h-[55px]'>
                  {item.title[locale]}
                </p>
                <p className='text-[14px] mt-[12px] mex:text-[18px] text-[#5B5B5B] '>
                  {item.description[locale]}
                </p>
              </div>
              <div className='absolute pt-[30px] bottom-[-20px] right-[-20px] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]'>
                <Image
                  src={urlFor(item.image.asset._ref).url()}
                  alt={item.title[locale]}
                  width={270}
                  height={271}
                  quality={100}
                  className='w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] object-contain'
                />
              </div>
            </div>
          ))
        ) : (
          <p>
            {locale === 'ru'
              ? 'Ошибка загрузки данных преимуществ.'
              : "Ma'lumotlarni yuklashda xatolik yuz berdi."}
          </p>
        )}
      </div>
    </div>
  )
}
