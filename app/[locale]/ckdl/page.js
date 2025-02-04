import AboutLicense from '../components/About/AboutLicense'
import AboutBanner from '../components/Ckdl/About'
import WhyWe from '../components/Ckdl/WhyWe'
import { useTranslations } from 'next-intl'
import Map from '../components/MainMap'
import Application from '../components/Application'
import Social from '../components/Ckdl/Social'
import Steps from '../components/Ckdl/Steps'

export default function HomePage({ params }) {
  const t = useTranslations()
  return (
    <div className='flex flex-col gap-24 slg:gap-24 bg-white px-2 pb-24 slg:pb-48'>
      <AboutBanner />
      <WhyWe />
      <Map />
      <AboutLicense />
      <Steps />
      <div className='w-full max-w-[1440px] px-2 mx-auto flex flex-col gap-4'>
        <Application />
        <Social />
      </div>
    </div>
  )
}
