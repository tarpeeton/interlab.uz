import Image from 'next/image';
import rightIcon from '@/public/svg/right-contact-red.svg';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';


export default function InsCard({ title, slug }) {
  const t = useTranslations();
  const locale = useLocale()

  return (
    <div  className="w-full h-[200px] cursor-pointer slg:h-[200px] rounded-3xl pl-6 py-6 bg-slate-100">
      <Link href={`/${locale}/instructions/${slug.current}`}  className="flex flex-col h-full justify-between items-start">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl slg:text-2xl break-words">{title[locale]}</h2>
        </div>
        
        <div className="flex gap-4 hover:gap-6 transition-all duration-150 w-auto">
          <p className="text-xl h-full flex items-center font-semibold text-rose-400">
            {t('Services.linkUp')}
          </p>
          <Image src={rightIcon} width={8} height={8} alt="Right Icon" />
        </div>
      </Link>
    </div>
  );
}
