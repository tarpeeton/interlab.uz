"use client"
import { client } from '@/sanity/lib/client'
import { useLocale, useTranslations } from "next-intl"
import InsCard from '../InsCard'
import { useState , useEffect } from 'react'
import Link from 'next/link'
import { GrFormNextLink } from "react-icons/gr";


export default function OtherInstructions() {
  const t = useTranslations('Instructions')
  const locale = useLocale()

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
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 lg:mt-[200px]">
        <h2 className="text-4xl font-semibold">
            {t('other')}
        </h2>
        <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.reverse().slice(0, 3).map((item, index) => {
          return (
            <InsCard
              key={index}
              title={item.title}
              slug={item.slug}
            />
          );
        })}
        </div>
        <div className='mt-[30px] mdx:mt-[40px] flex items-center justify-center w-full'>
          <Link href={`/${locale}/instructions/`} className='rounded-full w-[80%] mdx:w-[30%] lg:w-[20%] py-[14px] border flex items-center justify-center flex-row border-[#FB6A68] '>
            <p className='text-[#FB6A68]  mb-0 font-bold lg:text-[16px] text-[14px]'>
            {locale === 'ru' ? "Все инструкции" : "Barcha ko'rsatmalar"}
            
            </p>
            <GrFormNextLink className='text-[#FB6A68] w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]' />
          </Link>

        </div>
    </div>
  )
}
