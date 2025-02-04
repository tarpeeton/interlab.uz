"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import LicenseModal from "../Modals/LicenseModal";
import { IoSearch } from "react-icons/io5";
import { Image } from 'antd';


export default function List({ locale }) {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [licenses, setLicenses] = useState(null);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const data = await client.fetch(`
          *[_type == 'license' && isActive == true]{
            title,
            description,
            photo{
              asset->{
                url
              }
            }
          }
        `);
        setLicenses(data);
      } catch (error) {
        console.error("Ошибка при загрузке лицензий:", error);
      }
    };
    fetchLicenses();
  }, []);

  const handleOpenModal = (license) => {
    setModal(true);
    setModalData(license);
  };

  if (!licenses) return <p>Загрузка...</p>;

  return (
    <div className="w-full max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
      {/* {modal && <LicenseModal data={modalData} close={() => setModal(false)} />} */}
      {licenses.map((license, i) => (
        <div key={i} className="relative   ">
             <Image
            src={license.photo?.asset?.url || "/placeholder.jpg"}
            alt={`License Image ${i}`}
            style={{border: '5px solid #E4E4E4'}}
           className="w-full object-cover "
          />
         
          {/* <button
            onClick={() => handleOpenModal(license)}
            className="absolute inset-0 hover:bg-black flex items-center justify-center transition-all duration-300 hover:bg-opacity-50"
          >
            <IoSearch  className='2xl:text-[45px] text-white'/>
          </button> */}
        </div>
      ))}
    </div>
  );
}
