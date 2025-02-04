// ListItem.js
"use client"
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import { GrLinkNext } from 'react-icons/gr'


export default function ListItem({
  index,
  title,
  description,
  slug,
  icon,
  color,
  locale
}) {

  console.log(title , locale)
  
  return (
    <a
    href={`check-up/${slug}`}
      style={{ backgroundColor: color }}
      className={`relative rounded-3xl p-8 text-black h-[320px] overflow-hidden flex items-center slg:min-h-[320px] ${index === 0 ? "col-span-1 slg:col-span-7" : index === 1 ? "col-span-1 slg:col-span-5" : index === 2 ? "col-span-1 slg:col-span-5" : index === 3 ? "col-span-1 slg:col-span-7" : "col-span-1 slg:col-span-4"}`}
    >
      <div className="flex flex-col justify-between gap-1 h-full w-full mdx:max-w-[60%]">
        <div>
          <h2 className="text-2xl uppercase font-bold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>

        <div className='flex justify-center items-center mdx:hidden whitespace-nowrap self-start mt-4  bg-white font-semibold rounded-full w-[50px] h-[50px] '>
                  <GrLinkNext
                    color={color || '#000'} // Default to black if `color` is undefined
                    className='font-extrabold'
                  />
                </div>
        <div
          
          className={`hidden mdx:inline-block whitespace-nowrap self-start mt-4 px-12 py-3 bg-white font-semibold rounded-full`}
        >
          {locale === 'ru' ? 'Перейти →' : 'Batafsil →'}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
         
          bottom: "-1rem",
        }}
        className="flex-shrink-0 max-w-[220px] h-[150px] mdx:h-[210px] right-[-10px]"
      >
        <Image
          src={urlFor(icon).url()}
          alt={title}
          width={300}
          height={210}
          quality={100}
          className='mdx:w-full mdx:h-full mdx:object-cover  w-[160px] h-[160px]'
        />
      </div>
    </a>
  );
}
