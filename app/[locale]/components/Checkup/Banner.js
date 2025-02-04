'use client'
import React, { useState } from 'react'
import { urlFor } from '@/sanity/lib/image'
import OnlineReq from '@/app/[locale]/components/Modals/OnlineReq'
import { useLocale } from 'next-intl'

export default function Banner({ title, icon, description, color }) {
  const [onlineReq, setOnlineReq] = useState(false)
  const locale = useLocale()

  return (
    <div style={{ backgroundColor: color }} className='w-full overflow-hidden'>
      {onlineReq && <OnlineReq setState={setOnlineReq} />}
      <div className='w-full px-2 flex flex-col mdx:flex-row overflow-hidden justify-between items-center max-w-[1440px] mx-auto'>
        <div className='text-left mdx:py-16 max-w-md mt-[25px] mdx:mt-0'>
          <h1 className='text-[25px] mdx:text-5xl font-bold'>
            {title[locale]}
          </h1>
          <p className='mt-4 text-[15px] mdl:text-lg'>{description[locale]}</p>
          <button
            onClick={() => setOnlineReq(true)}
            className=' hidden lg:block mt-6 px-16 py-3 bg-white text-xl  text-black rounded-full'
          >
            {locale === 'ru' ? 'Записаться' : 'Bog`lanish'}
          </button>
        </div>
        <div className='relative h-[280px] mr-[-100px] mdx:mr-0 lg:h-[376px]'>
          <img
            src={urlFor(icon).url()}
            alt={title?.ru || title?.uz}
            className='w-full h-full object-cover '
          />
        </div>
      </div>
    </div>
  )
}
