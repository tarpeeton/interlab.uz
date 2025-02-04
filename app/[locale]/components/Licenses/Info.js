"use client"

import { useLocale } from 'next-intl'

import Image from 'next/image'

import One from './1.png'
import Two from './2.png'
import Three from './3.png'
import Four from './4.png'
import Mobile from './mobile.png'
import Laptop from './laptop.png'




export default function Info() {

  const locale = useLocale()



  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-6 px-[16px]">
      <h2 className="text-4xl font-semibold">
        {locale === 'ru' ? "Наши достижения" : "Bizning Yutuqlarimiz"}
      </h2>
      
      <div className='mt-[20px] mdx:mt-[35px] lg:mt-[35px] flex flex-col mdl:flex-row mdl:flex-wrap gap-[15px] mdl:gap-0 mdl:justify-between'>
        {/* CARD  1*/}

        <div className='relative lg:max-h-[370px] overflow-hidden rounded-[20px] mdl:flex mdl:flex-row  mdl:w-full bg-[#F8F9FB]'>
            <div className='pt-[20px] mdl:pt-[30px] mdl:px-[30px] px-[20px] mdl:flex mdl:flex-col mdl:justify-between mdl:h-full lg:w-[30%]'>
              <div>
              <p className='text-[14px] text-[#FB6A68] mdl:text-[18px]'>
        {locale === 'ru' ? "По версии EQAS" : "EQAS versiyasi bo'yicha"}

              </p>
              <p className='text-[20px] mdl:text-[24px] text-[#FB6A68] font-bold'>
        {locale === 'ru' ? "Вошли в топ национальных лабораторий мира" : "Dunyoning milliy laboratoriyalarining eng yaxshilar qatoriga kirdik"}

              </p>
              </div>
              
              <p className='text-[14px] text-[#989898] mdl:text-[16px]'>
              {locale === 'ru' ? "EQAS -  одна из самых авторитетных программ внешнего контроля качества" : "EQAS – tashqi sifat nazorati bo'yicha eng nufuzli dasturlardan biri"}
              </p>
            </div>
            <Image  src={Mobile} quality={100} width={469} height={370} className='object-cover w-full mt-[32px] mdl:hidden'/>
            <Image  src={Laptop} quality={100} width={1000} height={600} className='object-cover hidden w-full  lg:hidden mdl:block'/>
            <div  className=' hidden w-[60%]  lg:flex items-center justify-end'>
            <Image  src={One} quality={100} width={469} height={370} className='object-cover hidden w-[50%]  lg:block'/>

            </div>
        </div>
        {/* CARD  2*/}
        <div className=' overflow-hidden  lg:max-h-[370px]  mdl:mt-[16px] rounded-[20px] mdl:w-[49%] lg:w-[31%]  bg-[#F8F9FB]'>
            <div className='pt-[20px] px-[20px]'>
              <p className='text-[14px] text-[#FB6A68] mdl:text-[18px]'>
        {locale === 'ru' ? "Охват +5 млн человек" : "Qamrov +5 million odam"}

              </p>
              <p className='text-[20px] text-[#FB6A68] font-bold mdl:text-[24px]'>
        {locale === 'ru' ? "Создание сети ЦКДЛ для Ташкента и Ташкентской области" : "Toshkent va Toshkent viloyati uchun CKDL tarmog'ini yaratdik"}

              </p>
            </div>
            <div className='mt-[10px] relative  w-full h-[188px]'>
              <div className='absolute bottom-[-20px] right-[-5%] lg:bottom-[-40px] lg:right-[0] w-[260px] h-[188px] '>
              <Image  src={Four} quality={100} width={469} height={370} className='object-cover w-full h-full'/>
              </div>
            </div>
        </div>
        {/* CARD  3*/}
        <div className=' overflow-hidden  mdl:mt-[16px]  lg:max-h-[370px] rounded-[20px] mdl:w-[49%] lg:w-[31%]  bg-[#F8F9FB]'>
            <div className='pt-[20px] px-[20px]'>
              <p className='text-[14px] text-[#FB6A68] mdl:text-[18px]'>
        {locale === 'ru' ? "Поддержка в сложное время" : "Qiyin vaziyatda yordam"}

              </p>
              <p className='text-[20px] text-[#FB6A68] font-bold mdl:text-[24px]'>
        {locale === 'ru' ? "Лидерство в PCR-тестировании и диагностике в период пандемии" : "Pandemiya davrida PCR-testlash va diagnostika sohasidagi yetakchilik"}

              </p>
            </div>
            <div className='mt-[10px] relative  w-full h-[188px] lg:h-[250px]'>
              <div className='absolute bottom-[-20px] right-[-20%] w-[260px] h-[188px] lg:h-[250px] '>
              <Image  src={Two} quality={100} width={469} height={370} className='object-cover w-full h-full'/>
              </div>
            </div>
        </div>
        {/* CARD 4*/}
        <div className=' overflow-hidden mdl:mt-[16px]  lg:max-h-[370px] rounded-[20px] mdl:w-full lg:w-[31%]  bg-[#F8F9FB]'>
            <div className='pt-[20px] px-[20px] mdl:w-[50%] lg:w-[80%]'>
              <p className='text-[14px] text-[#FB6A68] mdl:text-[18px]'>
        {locale === 'ru' ? "Обеспечиваем точность" : "Aniqlikni ta'minlaymiz"}

              </p>
              <p className='text-[20px] text-[#FB6A68] font-bold mdl:text-[24px]'>
        {locale === 'ru' ? "Высокая точность и оперативная доставка результатов анализов" : "Yuqori aniqlik va tahlil natijalarining tezkor yetkazib berish"}

              </p>
            </div>
            <div className='mt-[10px] relative  w-full h-[188px]'>
              <div className='absolute bottom-[-20px] right-[-5%] mdl:bottom-[-40px] mdl:right-0  lg:right-[-8%] h-[198px] mdl:w-[250px] mdl:h-auto '>
              <Image  src={Three} quality={100} width={469} height={370} className='object-cover scale-x-[-1] w-full h-full'/>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}
