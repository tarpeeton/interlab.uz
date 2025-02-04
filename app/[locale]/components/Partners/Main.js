"use client"
import { useRef} from 'react';
import Banner from './Banner';
import Calculator from './Calculator';
import PriceCut from './PriceCut';
import Profits from './Profits';
import Application from '../Application';
import ProccesWork from './ProccesWork';
import MobileProccesWork from './mobileProccesWork';

const MainPartners = () => {
    const useCalcRef = useRef(null);

  // Function to handle scroll when button in Banner is clicked
  const handleShow = () => {
    if (useCalcRef.current) {
      // Scroll to the Calculator component
      useCalcRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full flex flex-col gap-[100px] bg-white pb-48'>
        <Banner onclick={handleShow} />
        <div className='hidden lg:block'>
          <ProccesWork />
        </div>
        <div className='block mt-[-120px] lg:hidden'>
        <MobileProccesWork />
          </div>
        <PriceCut />
        <Profits />
        <div ref={useCalcRef}>
        <Calculator />
        </div>
        <div className='w-full max-w-[1440px] mx-auto'>
        <Application />
      </div>
    </div>
  );
};

export default MainPartners;