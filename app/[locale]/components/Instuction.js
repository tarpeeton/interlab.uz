'use client'

import UpRedIcon from '@/public/svg/arrow-right-up.svg'
import DownBlckIcon from '@/public/svg/arrow-right-down-blck.svg'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import HouseCall from '@/app/[locale]/components/Modals/HouseCall'

const Data = [
  {
    id: '1',
    title: {
      ru: 'Общие рекомендации',
      uz: 'Umumiy tavsiyalar'
    },
    description: [
      {
        item: {
          ru: 'Следуйте всем указаниям врача перед сдачей анализа.',
          uz: "Tahlil topshirishdan oldin shifokor ko'rsatmalariga rioya qiling."
        }
      },
      {
        item: {
          ru: 'Избегайте употребления жирной пищи за день до сдачи анализа.',
          uz: "Tahlildan bir kun oldin yog'li ovqatlardan saqlaning."
        }
      },
      {
        item: {
          ru: 'Старайтесь не испытывать сильного стресса перед анализом.',
          uz: 'Tahlildan oldin kuchli stressdan saqlaning.'
        }
      },
      {
        item: {
          ru: 'Убедитесь, что соблюдаете режим сна перед сдачей анализов.',
          uz: 'Tahlildan oldin uyqu rejimiga rioya qilganingizga ishonch hosil qiling.'
        }
      }
    ],
    openSection: 'general'
  },
  {
    id: '2',
    title: {
      ru: 'Общий Анализ крови',
      uz: 'Umumiy qon tahlillari'
    },
    description: [
      {
        item: {
          ru: 'Сдавать натощак, избегайте еды и напитков за 8 часов до анализа.',
          uz: "Qon topshirish och qoringa bo'lishi kerak, 8 soat oldin ovqat va ichimliklardan voz keching."
        }
      },
      {
        item: {
          ru: 'Избегайте физической нагрузки за сутки до сдачи анализа.',
          uz: 'Tahlildan bir kun oldin jismoniy yuklamalardan saqlaning.'
        }
      },
      {
        item: {
          ru: 'Пейте только воду за несколько часов до сдачи.',
          uz: 'Tahlil oldidan bir necha soat davomida faqat suv iching.'
        }
      },
      {
        item: {
          ru: 'Не принимайте лекарств без согласования с врачом.',
          uz: 'Shifokor bilan maslahatlashmasdan dori vositalarini qabul qilmang.'
        }
      }
    ],
    openSection: 'krovi'
  },
  {
    id: '3',
    title: {
      ru: 'Общий Анализ мочи',
      uz: 'Umumiy siydik tahlillari'
    },
    description: [
      {
        item: {
          ru: 'Собирайте утреннюю мочу, первую порцию нужно пропустить.',
          uz: "Ertalabki siydikni yig'ib oling, birinchi oqimini o'tkazib yuboring."
        }
      },
      {
        item: {
          ru: 'Используйте стерильный контейнер для сбора мочи.',
          uz: "Siydik yig'ish uchun steril idishdan foydalaning."
        }
      },
      {
        item: {
          ru: 'Не используйте старую мочу для анализа.',
          uz: 'Tahlil uchun eskirgan siydikni ishlatmang.'
        }
      },
      {
        item: {
          ru: 'Избегайте приема мочегонных средств перед анализом.',
          uz: 'Tahlildan oldin siydik haydovchi dori vositalarini qabul qilishdan saqlaning.'
        }
      }
    ],
    openSection: 'mochi'
  },
  {
    id: '4',
    title: {
      ru: 'Общий анализ кала',
      uz: 'Umumiy kal tahlili'
    },
    description: [
      {
        item: {
          ru: 'Соберите материал в специальный стерильный контейнер.',
          uz: "Materialni maxsus steril idishga yig'ing."
        }
      },
      {
        item: {
          ru: 'Избегайте попадания воды или других примесей.',
          uz: 'Suv yoki boshqa aralashmalar tushishidan saqlaning.'
        }
      },
      {
        item: {
          ru: 'Не используйте старый материал для анализа.',
          uz: 'Tahlil uchun eski materialni ishlatmang.'
        }
      },
      {
        item: {
          ru: 'Собирайте материал в день сдачи анализа.',
          uz: "Materialni tahlil topshiriladigan kunda yig'ing."
        }
      }
    ],
    openSection: 'analizFekaliy'
  },
  {
    id: '5',
    title: {
      ru: 'Биохимические анализы',
      uz: 'Biokimyoviy tahlillar'
    },
    description: [
      {
        item: {
          ru: 'Перед сдачей избегайте алкоголя и жирной пищи за 12 часов.',
          uz: "Tahlildan 12 soat oldin alkogol va yog'li ovqatlardan saqlaning."
        }
      },
      {
        item: {
          ru: 'Пейте достаточное количество воды за сутки до анализа.',
          uz: 'Tahlildan bir kun oldin yetarli miqdorda suv iching.'
        }
      },
      {
        item: {
          ru: 'Избегайте чрезмерного употребления сахара за день до анализа.',
          uz: "Tahlildan bir kun oldin shakarni ko'p iste'mol qilishdan saqlaning."
        }
      },
      {
        item: {
          ru: 'Не принимайте витамины или добавки без консультации врача.',
          uz: "Shifokor bilan maslahatlashmasdan vitamin yoki qo'shimchalarni qabul qilmang."
        }
      }
    ],
    openSection: 'bioXimiCheskiy'
  }
]

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className='border-t border-b border-solid border-neutral-200'>
      <summary
        onClick={onClick}
        className={`flex gap-5 justify-center items-center py-7 ${isOpen ? 'text-red-400' : 'text-black'} text-xl max-md:flex-wrap max-md:max-w-full cursor-pointer`}
      >
        <span className='flex-auto'>{title}</span>
        {isOpen ? (
          <Image
            src={UpRedIcon}
            alt={`Up icon red`}
            priority
            width={30}
            height={30}
            quality={100}
            className='h-4 w-4'
          />
        ) : (
          <Image
            src={DownBlckIcon}
            alt={`Down icon black`}
            priority
            width={30}
            height={30}
            quality={100}
            className='h-4 w-4'
          />
        )}
      </summary>
      <Transition
        show={isOpen}
        enter='transition-all duration-500 ease-in-out'
        enterFrom='max-h-0 opacity-0'
        enterTo='max-h-screen opacity-100'
        leave='transition-all duration-500 ease-in-out'
        leaveFrom='max-h-screen opacity-100'
        leaveTo='max-h-0 opacity-0'
      >
        <div className='overflow-hidden'>{children}</div>
      </Transition>
    </div>
  )
}

const AccordionContent = ({ children }) => {
  return <div className='py-5 px-4'>{children}</div>
}

export default function Instuction({ locale }) {
  const [houseCall, setHouseCall] = useState(false)
  const [openSection, setOpenSection] = useState('general')
  const toggleSection = section => {
    setOpenSection(openSection === section ? '' : section)
  }

  return (
    <section className='flex gap-5 justify-between slg:flex-nowrap flex-wrap max-md:max-w-full'>
      {houseCall ? <HouseCall setState={setHouseCall} /> : null}
      <div className='flex flex-col self-start max-md:max-w-full'>
        <div className='flex flex-col max-md:max-w-full'>
          <h2 className='text-3xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full leading-7 max-w-[467px]'>
            {locale === 'ru'
              ? 'Инструкция  по сдаче анализов'
              : 'Tahlillarni topshirish bo‘yicha ko‘rsatmalar'}
          </h2>
          <p className=' text-sm mdx:text-lg text-zinc-500 max-md:max-w-full leading-4'>
            {locale === 'ru'
              ? ' В клинике INTERMED вы можете заказать вызов на дом для сдачи анализов, без необходимости посещения клиники'
              : 'INTERMED klinikasida siz klinikaga kelmasdan, tahlillar topshirish uchun uyingizga chaqiruv xizmatini buyurtma qilishingiz mumkin.'}
          </p>
          <p className=' text-sm mdx:text-lg text-[#FB6A68] max-md:max-w-full leading-4'>
            {locale === 'ru'
              ? '*Клиника INTERMED не несет ответственности за корректность результатов анализов при несоблюдении данных правил'
              : 'INTERMED klinikasi ushbu qoidalarga rioya qilinmagan taqdirda tahlillar natijalarining aniqligi uchun javobgar emas.'}
          </p>
        </div>
        <button
          onClick={() => setHouseCall(true)}
          className='justify-center self-start px-16 py-3 mdl:py-4 mt-[20px] slg:mt-[40px] text-base font-bold text-center text-white bg-red-400 rounded-[100px]'
        >
          {locale === 'ru' ? ' Вызов на дом' : 'Uydan chaqiruv'}
        </button>
      </div>
      <div className='flex flex-col w-full'>
        {Data.map((item, index) => (
          <AccordionItem
            title={item.title[locale]}
            isOpen={openSection === item.openSection} // Har bir accordion uchun noyob qiymat
            onClick={() => toggleSection(item.openSection)}
            key={index}
          >
            <div className='flex flex-col text-xl text-neutral-900 max-md:max-w-full'>
              <AccordionContent>
                <div className='flex flex-col text-xl text-neutral-900 max-md:max-w-full'>
                  {item.description.map((des, index) => (
                    <div key={index} className='flex gap-3 items-center flex-row '>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&'
                        className='shrink-0 self-start w-5  aspect-square'
                        alt='Bullet point'
                      />
                      <p className='max-md:max-w-[90%]'>{des.item[locale]}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}

     
      </div>
    </section>
  )
}
