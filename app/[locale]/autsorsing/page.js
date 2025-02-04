import About from '@/app/[locale]/components/Autsorsing/About'
import AboutInterlab from '@/app/[locale]/components/Autsorsing/AboutInterlab'
import Advantages from '@/app/[locale]/components/Autsorsing/Advantages'
import BlockСontact from '@/app/[locale]/components/Autsorsing/BlockContact'
import Counter from '@/app/[locale]/components/Autsorsing/Counter'
import Form from '@/app/[locale]/components/Autsorsing/ConnectForm'
import ReviewSlider from '../components/Autsorsing/ReviewsSlider'

export default function AboutPage() {
  return (
    <main className='w-full h-auto bg-white pb-24'>
      <About />
      <div className='w-full max-w-[1440px] px-2 mx-auto'>
        <AboutInterlab />
        <Advantages />
        <BlockСontact />
        <Counter />
        <ReviewSlider />
        <Form />
      </div>
    </main>
  )
}
