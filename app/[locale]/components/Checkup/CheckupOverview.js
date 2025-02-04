'use client'

import { useLocale } from 'next-intl'

const CheckupOverview = ({ stages }) => {
  const locale = useLocale()

  return (
    <div className='px-[16px] mdx:px-[20px] lg:px-[40px]'>
      <p className='text-[27px] mdx:text-[40px] font-bold text-[#151515]'>
        {locale === 'ru' ? 'Что покажут обследования' : locale === 'uz' ? ' Checkupda nima ko`rsatiladi' : 'What will the examinations show'}
      </p>
      <div className='mt-[25px] mdx:mt-[50px]'>
        {stages.map((item, index) => (
          <div
            key={index}
            className='border-y border-y-[#E4E4E4] py-[25px] flex flex-col gap-[12px] mdx:flex-row lg:gap-[150px]'
          >
            <div className='lg:w-[25%]'>
              <p className='text-[#151515] text-[20px] leading-[#151515] mdx:text-[25px] mdx:leading-[34px] lg:text-[#151515] lg:leading-[34px] w-[90%] lg:w-[65%] '>{item.title[locale]}</p>
            </div>
            <div className='mdx:w-[50%] lg:w-[50%]'>
              {item.description?.[locale]?.map((desc, i) => (
                <p key={i} className='text-[14px] text-[#5B5B5B] leading-[16.1px] mdx:text-[18px] mdx:leading-[20.7px] lg:text-[20px] lg:leading-[23px] '>
                  {desc.children.map(child => child.text).join(' ')}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckupOverview
