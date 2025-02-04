'use client'

import { useState, useEffect } from 'react'
import FilterCategory from '@/app/[locale]/components/Analyze/FilterCategory'
import FilterAnalyzeItems from './FilterAnalyzeItems'
import { Select, Spin } from 'antd' // Spin для индикатора загрузки
import { DownOutlined } from '@ant-design/icons'
import axios from 'axios'
import SearchComp from '../SearchComp'

export default function Filter({ params }) {
  const { locale } = params
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [tests, setTests] = useState([])
  const [filteredTests, setFilteredTests] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [loadingTests, setLoadingTests] = useState(false)
  const [query, setQuery] = useState('') // Строка поиска

  useEffect(() => {
    const fetchDataOfApi = async () => {
      try {
        setLoadingTests(true)
        const response = await axios.post('/api/proxy', {
          userName: 'INTERMED',
          password: 'IN12TER34MED56',
          language: 2
        })

        const testsData = response.data.data // Dastlabki ma'lumot
        setTests(testsData)

        // Filtrlaymiz: "Терапевт", "Невропатолог", "Процедура", "ЛОР" kategoriyalarni o'chirib tashlaymiz
        const excludedCategories = [
          'Терапевт',
          'Невропатолог',
          'Процедура',
          'ЛОР'
        ]
        const filteredCategories = testsData.filter(
          test => !excludedCategories.includes(test.testSectionName)
        )

        // Unikal kategoriyalarni olish
        const uniqueCategories = [
          ...new Set(filteredCategories.map(test => test.testSectionName))
        ]
        setCategories(uniqueCategories)

        // Birinchi kategoriyani o'rnatamiz
        if (uniqueCategories.length > 0) {
          setActiveCategory(uniqueCategories[0])
          setFilteredTests(
            filteredCategories.filter(
              test => test.testSectionName === uniqueCategories[0]
            )
          )
        }

        setLoadingCategories(false)
        setLoadingTests(false)
      } catch (error) {
        console.error('Ошибка при получении данных анализов:', error)
        setLoadingCategories(false)
        setLoadingTests(false)
      }
    }

    fetchDataOfApi()
  }, [])

  // Функция переключения категории
  const handleFilter = category => {
    setActiveCategory(category)
    setFilteredTests(tests.filter(test => test.testSectionName === category))
  }

  // Обработка открытия/закрытия выпадающего меню
  const handleDropdownVisibleChange = open => {
    setIsSelectOpen(open)
    if (open) {
      document.body.style.overflow = 'hidden' // Блокируем прокрутку страницы
    } else {
      document.body.style.overflow = '' // Возвращаем прокрутку страницы
    }
  }

  // Для мобильной версии формируем массив категорий для селекта
  const mobileCategoryOptions = categories.map(category => ({
    value: category,
    label: category
  }))

  const handleSearchChange = e => {
    const value = e.target.value
    setQuery(value)

    if (activeCategory) {
      const filteredByCategory = tests.filter(
        test => test.testSectionName === activeCategory
      )
      setFilteredTests(
        filteredByCategory.filter(test =>
          test.testName.toLowerCase().includes(value.toLowerCase())
        )
      )
    } else {
      setFilteredTests(
        tests.filter(test =>
          test.testName.toLowerCase().includes(value.toLowerCase())
        )
      )
    }
  }

  return (
    <div className='w-full h-auto bg-white max-mdl:px-4'>
      <div className=' mdx:px-[20px] lg:px-[40px] mb-[15px] mdx:mb-[30px]'>
        <SearchComp
          placeholder={
            locale === 'ru'
              ? 'Введите название анализа'
              : 'Tahlil nomini kiriting'
          }
          onChange={handleSearchChange}
          query={query}
        />
      </div>

      <div className='w-full mdx:px-[20px] lg:mdx:px-0 max-w-[1440px] mx-auto h-auto flex max-mdl:flex-col gap-10 lg:px-[40px] xl:px-0'>
        {/* Desktop version of categories */}
        <div className='w-full mdl:max-w-1/3 mdl:w-1/3 flex flex-col gap-3 h-auto max-mdl:hidden'>
          {loadingCategories ? (
            <Spin size='large' /> // Индикатор загрузки
          ) : (
            categories.map((category, index) => (
              <FilterCategory
                key={index}
                title={category}
                catname={category}
                handleFilter={handleFilter}
                active={activeCategory}
              />
            ))
          )}
        </div>

        {/* Mobile version of category filter */}
        <div className='mdl:hidden w-full mb-4'>
          {loadingCategories ? (
            <Spin size='large' /> // Индикатор загрузки для мобильной версии
          ) : (
            <Select
              defaultValue={activeCategory}
              className='custom-select'
              options={mobileCategoryOptions}
              onChange={value => handleFilter(value)}
              onDropdownVisibleChange={handleDropdownVisibleChange} // Отслеживаем изменение видимости выпадающего списка
              suffixIcon={<DownOutlined style={{ color: 'white' }} />} // Белая стрелка
              style={{
                backgroundColor: '#FB6A68', // Красный фон
                color: 'white', // Белый текст
                borderRadius: '50px', // Закругленные края
                height: '48px', // Высота кнопки
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              dropdownStyle={{
                backgroundColor: '#fff', // Белый фон для выпадающего списка
                borderRadius: '10px' // Закругление краев выпадающего списка
              }}
              popupClassName='custom-select-dropdown' // Класс для стилизации выпадающего списка
            />
          )}
        </div>

        {/* List of filtered tests */}
        <div className='w-full mdl:max-w-2/3 mdl:w-2/3 flex flex-col gap-[30px] h-auto'>
          {loadingTests ? (
            <Spin size='large' /> // Индикатор загрузки тестов
          ) : filteredTests.length > 0 ? (
            filteredTests.map((test, index) => (
              <FilterAnalyzeItems
                key={index}
                title={test.testName}
                shortDescription={
                  test.shortDescription || 'Описание отсутствует'
                }
                price={test.fee}
                slug={test.testId}
                locale={locale}
              />
            ))
          ) : (
            <p className='text-center text-gray-500'>
              {locale === 'uz' ? (
                <>
                  So‘rov bo‘yicha{' '}
                  <strong className='text-[#FB6A68]'>{query}</strong> hech narsa
                  topilmadi.
                </>
              ) : locale === 'ru' ? (
                <>
                  По запросу{' '}
                  <strong className='text-[#FB6A68] break-words'>
                    {query}
                  </strong>{' '}
                  ничего не найдено.
                </>
              ) : null}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
