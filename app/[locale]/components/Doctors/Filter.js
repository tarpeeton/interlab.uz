'use client'
import { useState , useEffect } from 'react'
import DoctorCard from '@/app/[locale]/components/Doctors/DoctorCard'
import Application from '@/app/[locale]/components/Application'
import Blog from '@/app/[locale]/components/Blog'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'
import SearchComp from '../SearchComp'
import { useLocale, useTranslations } from 'next-intl'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function Filter() {
  const [data , setData] = useState(null)
  const locale = useLocale()
  const t = useTranslations()
  const [query, setQuery] = useState('') // State to store the search query
  const [filteredDoctors, setFilteredDoctors] = useState([]) // State to store filtered doctors




 // Fetch doctors data using useEffect
 useEffect(() => {
  async function fetchDoctors() {
    try {
      const result = await client.fetch(`*[_type == "doctor"]`, {
        cache: 'no-store' // Prevent caching of the data
      })
      setData(result)
      setFilteredDoctors(result) // Set the initial filtered doctors as all doctors
    } catch (error) {
      console.error('Error fetching doctors:', error)
    }
  }

  fetchDoctors()
}, [])  // Empty dependency array ensures this runs once after the component mounts




  // Handle search input change
  const handleSearchChange = e => {
    const value = e.target.value.toLowerCase()
    setQuery(value)

    // Filter doctors based on the search query
    if (value) {
      const filtered = data.filter(
        doctor =>
          doctor.name[locale].toLowerCase().includes(value) ||
          doctor.position[locale].join(', ').toLowerCase().includes(value)
      )
      setFilteredDoctors(filtered)
    } else {
      setFilteredDoctors(data) // Reset to the original list when query is empty
    }
  }


  return (
    <div className='w-full h-auto bg-white max-mdl:px-4 pb-24 pt-12'>
      <div className='w-full max-w-[1440px] mx-auto h-auto flex flex-col gap-10'>
        <div className='w-full max-w-[1440px] mx-auto mb-12'>
          <SearchComp
            query={query}
            onChange={handleSearchChange}
            placeholder={ locale === 'ru' ? "Введите имя или фамилию врача" : "Shifokorning ismi yoki familiyasini kiriting."}
          />
        </div>
        <div className='w-full max-w-[1440px] mx-auto grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <div key={index} className=' flex justify-center'>
                <DoctorCard
                  locale={locale}
                  name={doctor.name[locale] || doctor.name.ru || '____'}
                  specialty={
                    doctor.position[locale].join(', ') ||
                    doctor.position?.[locale].join(', ')
                  }
                  imageSrc={urlFor(doctor.photo).url()}
                  slug={doctor.slug.current}
                />
              </div>
            ))
          ) : (
            <p className='text-center text-neutral-500'>
             {locale === 'ru' ? "Ничего не найдено" : "Hech nima topilmadi"}
            </p>
          )}
        </div>
      </div>
      <div className='w-full max-w-[1440px] mx-auto'>
        <section className='flex flex-col justify-center mt-52 mb-52 rounded-[50px] max-md:mt-10 max-md:max-w-full'>
          <Application />
        </section>
        <h2 className=' text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full'>
          {t('Blog.title')}
        </h2>
        <Blog locale={locale} />
        <div className='w-full flex justify-center '>
          <button className='flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5'>
            <span className='my-auto'>{t('Blog.other')}</span>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&'
              className='shrink-0 aspect-square w-[23px]'
              alt='Arrow icon'
            />
          </button>
        </div>
      </div>
    </div>
  )
}
