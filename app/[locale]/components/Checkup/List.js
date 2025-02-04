"use client"
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import ListItem from './ListItem';

export default function List({ initialCheckups, locale }) {
  
  const [checkups, setCheckups] = useState(initialCheckups || []); // initialCheckups ni default qiymat bilan boshlash
  useEffect(() => {
    if (!initialCheckups) {
      // Asinxron fetch clientda amalga oshiriladi
      const fetchCheckups = async () => {
        const data = await client.fetch(`*[_type == "checkup"]`, {
          cache: 'no-store'
        });
        setCheckups(data);
      };
      
      fetchCheckups();
    }
  }, [initialCheckups]); // initialCheckups o'zgarganida fetch qilish



  return (
    <div className='w-full max-w-[1440px] px-2 mx-auto flex flex-col gap-8 pt-8'>
      <div className='flex flex-col'>
        <h1 className='text-5xl max-mdx:text-4xl font-bold'>
          {locale === 'ru' ? 'Чек-апы' : 'Check-aplar'}
        </h1>
        <p className='w-full max-w-[500px] text-[#5B5B5B]'>
        {locale === 'ru' 
            ? 'Сдавайте несколько анализов сразу и проверяйте здоровье целиком, при этом экономя больше, чем при отдельной сдаче.'
            : 'Bir nechta tahlilni bir vaqtning o‘zida topshirib, butunlay salomatligingizni tekshirib ko‘ring, shu bilan birga alohida topshirgandan ko‘ra ko‘proq tejaysiz.'
          }
        </p>
      </div>
      <div className='w-full grid slg:grid-cols-12 mdx:grid-cols-2 grid-cols-1 gap-3'>
        {checkups.map((item, index) => (
          <ListItem
            locale={locale}
            key={index}
            index={index}
            title={item.title[locale]}
            description={item.description[locale]}
            slug={item.slug.current}
            icon={item.icon}
            color={item.color}
            secondaryColor={item.secondaryColor}
          />
        ))}
      </div>
    </div>
  )
}
