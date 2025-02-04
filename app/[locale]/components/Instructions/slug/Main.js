'use client'
import { useState, useEffect } from 'react'
import Banner from './Banner'
import InstructionBody from './InstructionBody'
import OtherInstructions from './OtherInstructions'
import Rec from '../Rec'
import { client } from '@/sanity/lib/client'
import { useParams } from 'next/navigation'

const Main = () => {
  const { slug, locale } = useParams() // Извлекаем slug из URL
  const [instruction, setInstruction] = useState(null)

  useEffect(() => {
    if (!slug) return // Если slug не найден, не выполняем запрос

    const fetchInstruction = async () => {
      try {
        const query = `*[_type == "intruksion" && slug.current == "${slug}"]` // Запрос по slug
        const result = await client.fetch(query)

        if (result.length > 0) {
          setInstruction(result[0]) // Устанавливаем данные для отображения
        } else {
          console.error('Instruction not found')
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error)
      }
    }

    fetchInstruction()
  }, [slug]) // Запрос будет выполняться каждый раз при изменении slug

  if (!instruction) {
    return (
      <div className='mt-[40px] flex items-center justify-center text-[20px] mdx:text-[30px]'>
        {locale === 'ru'
          ? 'Загружается, пожалуйста, подождите'
          : 'Yuklanyapti Iltimos Kuting'}
      </div>
    ) // Пока данные не загружены
  }

  return (
    <div>
      <Banner title={instruction.title} locale={locale} />
      <Rec />
      <InstructionBody
        steps={instruction.steps}
        description={instruction.description}
        locale={locale}
      />
      <OtherInstructions />
    </div>
  )
}

export default Main
