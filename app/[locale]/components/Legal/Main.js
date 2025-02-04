"use client"
import Banner from './Banner';
import Info from './Info';
import LegalProfits from './LegalProfits';
import Application from '../Application';
import Contacts from './Contacts';
import { useRef } from 'react'
import ProccesWork from './ProccesWork';
import MobileProccesWork from './mobileProccesWork';

const MainLegal = () => {
  const ApplicationRef = useRef(null)

  const ScrollTopApllication = () => {
    if (ApplicationRef.current) {
      ApplicationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
        <div className='w-full bg-white flex flex-col gap-32 pb-32'>
      <Banner onclick={ScrollTopApllication} />
      <Info ScrollTopApllication={ScrollTopApllication} />
      <div className='hidden lg:block'>
      <ProccesWork />
      </div>
      <div className='block mt-[-100px] lg:hidden'>
      <MobileProccesWork />
      </div>
      <LegalProfits />
      <Contacts />
      <div ref={ApplicationRef} className='w-full max-w-[1440px] mx-auto px-2'>
        <Application />
      </div>
    </div>
  );
};

export default MainLegal