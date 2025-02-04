'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import One from '@/public/images/LegalInfoOne.jpg'
import Two from '@/public/images/LegalInfoTwo.jpg'

export default function Info({ScrollTopApllication}) {
  const locale = useLocale()

  return (
    <div className='max-w-[1440px] lg:mx-auto mt-[-100px] mdl:mt-[-100px]'>
      <div className='flex flex-col gap-[100px] mdl:gap-[180px] lg:gap-[200px] px-[16px] mdl:px-[20px]'>
        {/* CARD ONE */}
        <div className='flex flex-col lg:flex-row gap-[25px] lg:gap-0 lg:justify-between'>
          <p className='font-bold lg:hidden text-[27px] mdl:text-[40px] mb-0'>
            {locale === 'ru'
              ? 'Корпоративное обслуживание'
              : 'Korporativ xizmat'}
          </p>
          <div className='rounded-[10px] lg:order-1 lg:w-[50%] h-[225px] mdl:h-[400px] lg:h-[500px] mdl:rounded-[20px] overflow-hidden'>
            <Image
              src={One}
              width={1000}
              height={800}
              quality={100}
              className='object-cover w-full h-full'
            />
          </div>
          <div className='flex flex-col gap-[15px] lg:w-[40%] lg:justify-center'>
          <p className='font-bold hidden lg:block text-[27px] mdl:text-[40px] mb-0'>
            {locale === 'ru'
              ? 'Корпоративное обслуживание'
              : 'Korporativ xizmat'}
          </p>
            <p className='text-[14px] text-[#5B5B5B] mb-0 leading-[#5B5B5B] mdl:text-[20px] mdl:leading-[#5B5B5B]'>
              {locale === 'ru'
                ? 'Мы предоставляем широкий спектр медицинских услуг для компаний, включая профилактические осмотры, диагностику, вакцинацию и лечение.'
                : "Biz kompaniyalar uchun keng ko'lamli sog'liqni saqlash xizmatlarini taqdim etamiz, jumladan profilaktik tekshiruvlar, diagnostika, emlash va davolash."}
            </p>
            <p className='text-[14px] text-[#5B5B5B] mb-0 leading-[#5B5B5B] mdl:text-[20px] mdl:leading-[#5B5B5B]'>
              {locale === 'ru'
                ? 'Наши программы корпоративного здоровья разработаны для улучшения благополучия ваших сотрудников и повышения их производительности.'
                : "Bizning korporativ sog'liqni saqlash dasturlarimiz xodimlaringizning farovonligini oshirish va ularning ish faoliyatini yaxshilash uchun mo'ljallangan."}
            </p>
            <button onClick={ScrollTopApllication} className='mt-4 py-3 hidden lg:block lg:w-[40%] px-4 w-[60%]  mdl:py-[16px] mdl:text-[16px] mdl:w-[30%] rounded-full text-white  bg-red-400 font-semibold'>
            {locale === 'ru'
                ? 'Отправить заявку'
                : "Arizani yuborish"}
          </button>
          </div>
          <button onClick={ScrollTopApllication} className='mt-4 py-3 lg:hidden px-4 w-[60%]  mdl:py-[16px] mdl:text-[16px] mdl:w-[30%] rounded-full text-white  bg-red-400 font-semibold'>
          {locale === 'ru'
                ? 'Отправить заявку'
                : "Arizani yuborish"}
          </button>
        </div>
        {/* CARD TWO */}
        <div className='flex flex-col lg:flex-row gap-[25px] lg:gap-0 lg:justify-between'>
          <p className='font-bold lg:hidden text-[27px] mdl:text-[40px] mb-0'>
            {locale === 'ru'
              ? 'Партнёрство с клиниками'
              : 'Klinikalar bilan hamkorlik'}
          </p>
          <div className='rounded-[10px] lg:order-[-1] lg:w-[50%] h-[225px] mdl:h-[400px] lg:h-[500px] mdl:rounded-[20px] overflow-hidden'>
            <Image
              src={Two}
              width={1000}
              height={800}
              quality={100}
              className='object-cover w-full h-full'
            />
          </div>
          <div className='flex flex-col gap-[15px] lg:w-[40%] lg:justify-center'>
          <p className='font-bold hidden lg:block text-[27px] mdl:text-[40px] mb-0'>
          {locale === 'ru'
              ? 'Партнёрство с клиниками'
              : 'Klinikalar bilan hamkorlik'}
          </p>
            <p className='text-[14px] text-[#5B5B5B] mb-0 leading-[#5B5B5B] mdl:text-[20px] mdl:leading-[#5B5B5B]'>
              {locale === 'ru'
                ? 'Клиника Intermed сотрудничает с ведущими медицинскими учреждениями, чтобы обеспечить качественное и своевременное обслуживание пациентов.'
                : "Intermed klinikasi bemorlarga sifatli va o'z vaqtida xizmat ko'rsatishni ta'minlash uchun etakchi sog'liqni saqlash muassasalari bilan hamkorlik qiladi."}
            </p>
            <p className='text-[14px] text-[#5B5B5B] mb-0 leading-[#5B5B5B] mdl:text-[20px] mdl:leading-[#5B5B5B]'>
              {locale === 'ru'
                ? 'Мы предлагаем выгодные условия партнёрства, включая обмен опытом, совместные медицинские проекты и взаимное направление пациентов'
                : "Biz tajriba almashish, qo'shma tibbiy loyihalar va bemorlarning o'zaro yo'nalishini o'z ichiga olgan qulay hamkorlik shartlarini taklif qilamiz"}
            </p>
            <button onClick={ScrollTopApllication} className='mt-4 py-3 hidden lg:block lg:w-[40%] px-4 w-[60%]  mdl:py-[16px] mdl:text-[16px] mdl:w-[30%] rounded-full text-white  bg-red-400 font-semibold'>
            {locale === 'ru'
                ? 'Отправить заявку'
                : "Arizani yuborish"}
          </button>
          </div>
          <button onClick={ScrollTopApllication} className='mt-4 py-3 lg:hidden px-4 w-[60%]  mdl:py-[16px] mdl:text-[16px] mdl:w-[30%] rounded-full text-white  bg-red-400 font-semibold'>
          {locale === 'ru'
                ? 'Отправить заявку'
                : "Arizani yuborish"}
          </button>
        </div>
        
      </div>
    </div>
  )
}
