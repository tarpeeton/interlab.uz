'use client'
import { useState } from 'react'
import Image from 'next/image'

import Bottom from '../../../../public/bottom.png'
import Top from '../../../../public/top.png'
import OnlineReq from '@/app/[locale]/components/Modals/OnlineReq'
import { useLocale } from 'next-intl'

const PriceCheckup = ({ price, discountPercentage }) => {
  const [onlineReq, setOnlineReq] = useState(false)
  const locale = useLocale()
  const discountedPrice = discountPercentage
    ? Math.round(price - (price * discountPercentage) / 100)
    : price

  return (
    <div className='bg-[#FFEFEF] rounded-[30px] lg:mt-[100px] overflow-hidden relative   mx-[16px] mdx:px-[20px] lg:px-[40px]'>
      <Image
        src={Top}
        width={300}
        height={300}
        quality={100}
        className='w-[130px] h-[53px] mdx:w-[200px] mdx:h-[100px] absolute top-[-10px] right-[-40px] mdx:right-[-50px] lg:h-[150px] lg:w-[450px] lg:rigth-[-50px]'
      />
      {onlineReq && <OnlineReq setState={setOnlineReq} />}
      <div className='flex flex-col items-center justify-center py-[50px] mdx:py-[80px] lg:py-[100px]'>
        <p className='text-[15px] mdx:text-[16px] text-[#FB6A68] font-bold mb-0'>
          {locale === 'ru' ? 'Итоговая стоимость' : 'Umumiy Narx'}
        </p>
        <div className='text-[27px] lg:mt-[15px] lg:text-[60px] text-[#FB6A68] mdx:text-[48px] flex flex-row items-center gap-[8px] font-bold mt-[5px]'>
          {discountedPrice} {locale === 'ru' ? 'сум' : "so'm"}
          {discountPercentage && (
            <div className='bg-[#FFFFFF] lg:h-[42px] rounded-full py-[5px] px-[10px] flex items-center justify-center'>
              <p className='text-[15px] text-[#FB6A68] font-bold mb-0'>
                -{discountPercentage}%
              </p>
            </div>
          )}
        </div>
        {discountPercentage && (
          <p className='text-[16px] mdx:text-[20px] line-through text-[#FB6A68] font-bold mb-0'>
            {price.toLocaleString()}
          </p>
        )}

        <button
          onClick={() => setOnlineReq(true)}
          className='bg-[#FB6A68] mdx:mt-[40px] lg:py-[18px] mdx:w-[20%] rounded-full py-[14px] mt-[20px] px-[20px]'
        >
          <p className='text-white font-bold mb-0'>
            {locale === 'ru' ? 'Записаться' : 'Bog`lanish'}
          </p>
        </button>
      </div>

      <Image
        src={Bottom}
        width={300}
        height={300}
        quality={100}
        className='w-[130px] h-[53px] mdx:w-[250px] mdx:h-[113px] mdx:left-[-100px] absolute bottom-[-10px] lg:h-[150px] lg:w-[450px] lg:left-[-50px] lg:bottom-0'
      />
    </div>
  )
}

export default PriceCheckup
