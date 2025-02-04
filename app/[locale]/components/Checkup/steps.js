'use client'
import { useState } from 'react'
import { useLocale } from 'next-intl'
// import { MdKeyboardArrowDown } from 'react-icons/md'

const Steps = ({ checkupComposition }) => {
  const locale = useLocale()
  const [activeIndex, setActiveIndex] = useState(0)

  const handleToggle = index => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index))
  }
  return (
    <div>
      <div className='flex flex-col px-[16px] mdx:px-[20px] lg:mt-[100px] lg:px-[40px]'>
        <p className='text-[27px] mdx:text-[40px] font-bold text-[#151515]'>
          {locale === 'ru' ? 'Состав чек-апа' : 'Tekshirish tarkibi'}
        </p>
        <div className='flex flex-col'>
          {checkupComposition.map((item, index) => (
            <div
              key={index}
              className='border-y border-y-[#E4E4E4] py-[20px] mdx:py-[30px]'
            >
              <button
                onClick={() => handleToggle(index)}
                className='w-full text-left flex flex-row items-center justify-between'
              >
                <p
                  className={`text-[18px] mb-0 mdx:text-[24px] ${
                    activeIndex === index ? 'text-[#FB6A68]' : 'text-[#151515]'
                  }`}
                >
                  {item?.title[locale]}
                </p>
                {/* <MdKeyboardArrowDown
                  className={`transform w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] transition-transform duration-200 ${
                    activeIndex === index
                      ? 'rotate-180 text-[#FB6A68]'
                      : 'rotate-0 text-[#151515]'
                  }`}
                /> */}
              </button>
              {/* {activeIndex === index && (
                <div className='mt-[12px]'>
                  {item?.description &&
                    item.description[locale]?.length > 0 &&
                    item.description[locale].map(block =>
                      block.children.map(child => (
                        <p
                          key={child._key}
                          className='text-[16px] mb-0 text-[#5B5B5B] mdx:text-[18px]'
                        >
                          {child.text}
                        </p>
                      ))
                    )}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Steps
