import callIcon from "@/public/svg/call-icon-red.svg";
import Image from "next/image";
import arrowRight from "@/public/svg/arrow-right-gray.svg"
import { useLocale } from 'next-intl'

export default function AddressItem({
  title,
  address,
  graphic,
  tel,
  url,
  onClick
}) {
  const locale = useLocale()
  return (
    <div
      className="p-4 border rounded-2xl shadow-lg flex flex-col gap-4 max-xl:gap-0 justify-between flex-shrink-0 flex-grow-0 w-full max-w-[400px] mx-auto"
    >
      <div className="flex flex-col">
        <h3 className="text-2xl max-xl:text-xl text-rose-400 font-bold line-clamp-3">{title}</h3>
        <p className="font-medium max-xl:hidden">{address}</p>
        <div className="flex flex-col">
          {graphic.map((item, index) => {
            return (
              <p className="text-neutral-400" key={index}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 mt-6 max-xl:gap-3">
        <hr />
        <div className="w-full flex justify-between flex-wrap">
          <div className="flex gap-3">
            <Image
              src={callIcon}
              width={100}
              height={100}
              alt="Call icon red"
              className="h-6 w-6"
            />
            <a href={`tel:${tel}`} className="text-lg font-bold text-rose-400">
              {tel}
            </a>
          </div>
          <button onClick={onClick} className="flex gap-3 items-center text-neutral-400">
              
          {locale === 'ru' ? 'Подробнее' : 'Batafsil'}
            <Image
              src={arrowRight}
              width={100}
              height={100}
              alt="Arrow right icon gray"
              className="h-3 w-3"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
