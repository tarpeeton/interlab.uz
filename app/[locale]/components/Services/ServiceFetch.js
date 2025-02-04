"use client";
import { useState, useEffect } from 'react';
import ServiceList from './ServiceList';
import { useLocale } from 'next-intl';
import { client } from '@/sanity/lib/client';

export const fetchServices = async () => {
  try {
    return await client.fetch(
      `*[_type == "servicepage"] | order(_createdAt asc)[0..800]{
        title,
        category-> {
          _id,
          title
        }
      }`,
      { cache: 'no-store' }
    );
  } catch (error) {
    console.error("Ошибка при загрузке сервисов:", error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    return await client.fetch(
      `*[_type == "categorypage"]`
      , { cache: 'no-store' }
    );
  } catch (error) {
    console.error("Ошибка при загрузке категорий:", error);
    return [];
  }
};

export const ServiceFetch = () => {
  const locale = useLocale();
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchServicesData = async () => {
      const fetchedServices = await fetchServices();
      setServices(fetchedServices);
    };

    const fetchCategoriesData = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };

    fetchServicesData();
    fetchCategoriesData();
  }, []);

  console.log('categories', categories);

  return (
    <div>
      <ServiceList 
        services={services} 
        categoriesProps={categories} 
        locale={locale} 
      />
    </div>
  );
};
