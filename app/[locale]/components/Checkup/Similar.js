'use client'
import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { GrLinkNext } from 'react-icons/gr'
import { Link } from '@/i18n/routing'

const Similar = () => {
  const [similarCheckup, setSimilarCheckup] = useState(null)
  const locale = useLocale()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await client.fetch(`*[_type == "checkup"]`)
        setSimilarCheckup(categoriesData)
      } catch (error) {
        console.debug(error)
      }
    }
    fetchData()
  }, [locale])

  console.log(
    similarCheckup,
    'similarCheckupsimilarCheckupsimilarCheckupsimilarCheckup'
  )

  return (
    <div className='px-[16px] mdx:px-[20px] lg:px-[40px] lg:mt-[100px]'>
      <p className='text-[27px] mdx:text-[40px] font-bold text-[#151515] mb-0'>
        {locale ==='ru' ? "Вас также может заинтересовать" : "Shuningdek sizni qiziqtirishi mumkin"}
      </p>

      <div className='flex flex-col gap-[20px] mdx:flex-col lg:flex-row mt-[20px] mdx:mt-[30px] lg:mt-[40px]'>
        {similarCheckup?.slice(0, 3).map((item) => {
          const { slug, color, icon, title, description } = item

          // Ensure the required fields exist before rendering
          if (!slug || !title || !icon) return null

          return (
            <a
              key={item._id}
              href={`/check-up/${slug.current}`}
              style={{ backgroundColor: color }}
              className={`relative rounded-3xl w-full p-8 text-black overflow-hidden flex items-center  slg:min-h-[320px] `}
            >
              <div className='flex flex-col justify-between gap-1 h-full mdx:max-w-[60%]'>
                <div>
                  <h2 className='text-2xl uppercase font-bold'>
                    {title[locale] || 'No Title'}
                  </h2>
                  <p className='text-sm'>
                    {description?.[locale] || 'No description available'}
                  </p>
                </div>

                <div className='hidden mdx:inline-block whitespace-nowrap self-start mt-4 px-12 py-3 bg-white font-semibold rounded-full  '>
                  
        {locale ==='ru' ? "Перейти →" : "Batafsil →"}

                </div>
                <div className='flex justify-center items-center mdx:hidden whitespace-nowrap self-start mt-4  bg-white font-semibold rounded-full w-[50px] h-[50px] '>
                  <GrLinkNext
                    color={color || '#000'} // Default to black if `color` is undefined
                    className='font-extrabold'
                  />
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-1rem',
                  right: '-10px'
                }}
                className='flex-shrink-0 max-w-[220px]  h-[160px] lg:h-[200px]'
              >
                <Image
                  src={urlFor(icon.asset).url()}
                  alt={title[locale] || 'Icon'}
                  width={300}
                  height={210}
                  quality={100}
                  className='w-full h-full object-cover'
                />
              </div>
            </a>
          )
        })}
      </div>
      <div className='flex items-center justify-center'>
      <Link href={'/check-up'} className="flex gap-2 justify-center self-center px-16 py-3.5 mt-8 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px]">
            <span>
        {locale ==='ru' ? "Все чек-апы" : "Barcha chek-aplar"}

            </span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </Link>
      </div>
    </div>
  )
}

export default Similar
