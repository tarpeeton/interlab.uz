import Image from "next/image";
import Desktop from './desktop.png'
import Mobile from './phone.png'
import Planshet from './planshet.png'
import { useLocale } from 'next-intl';

export default function Banner({ onclick }) {
  const  locale  = useLocale();


  return (
    <div className="w-full h-screen relative max-slg:gap-5 flex flex-col lg:flex-row pt-[10px] lg:pt-0">
      <div className=" flex flex-col relative z-[999] bg-white items-start gap-4 lg:w-[50%] lg:flex-col lg:items-center lg:justify-center">
        <div className='px-[16px] lg:w-[80%]'>
          <p className='text-[15px] mdl:text-[24px] font-bold lg:text-[24px] text-[#FB6A68] mb-[12px] mdl:mb-[10px]'>
          {locale === 'ru' ? "Партнёрские программы и обслуживание" :   "Hamkorlik dasturlari va xizmatlar"}

          </p>
          <h1 className=" text-[30px] lg:text-5xl font-bold w-full mb-0 ">
            {locale === 'ru' ? "Решения для юридических лиц" :"Yuridik shaxslar uchun yechimlar"}

          </h1>

          <p className="w-full max-w-[400px] leading-5 mt-[10px]">
            {locale === 'ru' ? "Мы предлагаем комплексные решения для корпоративного обслуживания и партнёрства с другими медицинскими учреждениями. Наши услуги направлены на обеспечение здоровья ваших сотрудников и партнёров на высшем уровне" : "Biz korporativ xizmat ko‘rsatish va boshqa tibbiyot muassasalari bilan hamkorlik qilish uchun kompleks yechimlarni taklif etamiz. Bizning xizmatlarimiz sizning xodimlaringiz va hamkorlaringizning salomatligini eng yuqori darajada ta'minlashga qaratilgan."}
          </p>
          <button onClick={onclick} className="mt-4 py-3 px-4 rounded-full text-white  bg-red-400 font-semibold">
            {locale === 'ru' ? "Отправить заявку" : locale === 'uz' ? "Yuborish" : "Ariza yuborish"}
          </button>
        </div>

      </div>
      <div className="h-[477px] w-full mdx:h-[577px] lg:w-[50%] lg:h-[750px] slg:mt-[30px] lg:mt-0">
        <Image
          src={Mobile}
          width={2300}
          height={1500}
          quality={100}
          alt="About Banner"
          className="h-full w-full block mdl:hidden object-cover"
        />
        <Image
          src={Planshet}
          width={2300}
          height={1500}
          quality={100}
          alt="About Banner"
          className="h-full w-full hidden mdl:block lg:hidden object-cover"
        />
        <Image
          src={Desktop}
          width={2300}
          height={1500}
          quality={100}
          alt="About Banner"
          className="h-full w-full hidden lg:block object-cover"
        />
      </div>
    </div>
  );
}

