"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Instruction from "@/app/[locale]/components/Instuction";
import { FaPhoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper va SwiperSlide import qilinadi
import "swiper/css"; // Swiper uchun asosiy css
import "swiper/css/navigation"; // Navigation uchun css
import "swiper/css/pagination"; // Pagination uchun css
import SwiperCore, { Navigation, Pagination } from "swiper"; // Pagination va Navigation SwiperCore dan import qilinadi

import Application from "@/app/[locale]/components/Application";
import Blog from "@/app/[locale]/components/Blog";
import DoctorCard from "@/app/[locale]/components/DoctorsCardMain";
import ContactWithUs from "@/app/[locale]/components/Modals/ContactWithUs";

import BannerMain from "@/app/[locale]/components/BannerMain";
import MainMap from "@/app/[locale]/components/MainMap";
import ServiceCard from "@/app/[locale]/components/ServiceCard";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { useTranslations } from "next-intl";
// import Sale from '@/app/[locale]/components/Sale'
// import CallToAction from './Modals/CallToAction'
import About from "./About";

// Pagination va Navigation modullarini SwiperCore orqali faollashtirish
SwiperCore.use([Navigation, Pagination]);
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function Main({ params }) {
  const [serviceCategories, setServiceCategories] = useState([]);
  const [contactWithUs, setContactWithUs] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const t = useTranslations();

  const { locale } = params;

  const formatText = (text) => {
    if (!text) return "";
    return text.replace(/\n/g, "<br />");
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsData = await client.fetch(
          `*[_type == "doctor" && isActive == true && defined(order)]
| order(order asc)[0...4]{
  name,
  slug,
  position,
  photo {
    asset->{
      _id,
      url
    }
  }
}`
        );
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Ошибка при загрузке данных о докторах:", error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const categoriesData = await client.fetch(`
          *[_type == "serviceCategory" && isPopular == true] | order(order asc) {
            _id,
            name,
            slug,
            description,
            icon,
            colourCode
          }
        `);
        setServiceCategories(categoriesData);
      } catch (error) {
        console.error("Ошибка при загрузке услуг:", error);
      }
    };

    fetchServices();
  }, []);

  const getRandomColor = () => {
    const colors = ["#FFC0CB", "#ADD8E6", "#90EE90", "#FFD700", "#FFA07A"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      {contactWithUs ? <ContactWithUs setState={setContactWithUs} /> : <></>}

      <div className="flex flex-col bg-white gap-12 lg:gap-24 overflow-x-hidden">
        <main className="flex flex-col justify-between relative self-center w-full max-md:max-w-full h-auto slg:h-screen-90">
          <BannerMain params={params} />
        </main>

        <div className="flex flex-col self-center max-mdx:mt-12 mt-24 w-full">
          <div className="max-md:max-w-full max-w-[1440px] px-2 mx-auto">
            <div className="flex slg:gap-20 flex-col slg:flex-row gap-0">
              <div className="flex flex-col w-full slg:w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <h2 className="text-3xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
                      {t("Main.ContactUs.title")}
                    </h2>
                    <p
                      className="mt-5 slg:mt-0 slg:mb-0 text-sm mdx:text-xl w-4/5 text-zinc-500 max-md:max-w-full leading-5"
                      dangerouslySetInnerHTML={{
                        __html: formatText(t("Main.ContactUs.description")),
                      }}
                    />
                  </div>
                  <div className="hidden slg:flex gap-5 mt-11 max-w-full text-base font-bold text-center w-[466px] max-md:flex-wrap max-md:mt-10">
                    <a
                      onClick={async () => {
                        try {
                          let response = await fetch(
                            "https://interlab.mrjtrade.uz/api/count?button=call",
                            {
                              method: "POST",
                            }
                          );
                          console.log("Response Of Count", response.json());
                        } catch (error) {
                          console.log("error to counter fetching", error);
                        }
                      }}
                      href="tel:+998781482288"
                      className="justify-center items-center self-start px-16 py-3 text-white whitespace-nowrap bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-[100px] max-md:px-5"
                    >
                      {t("call")}
                    </a>
                    <a
                      href={`/${params.locale}/results`}
                      className="justify-center items-center px-6 py-3 text-red-400 border border-red-400 hover:border-red-600 hover:text-red-600 transition-all duration-300 border-solid rounded-[100px] max-md:px-5"
                    >
                      {t("get-result")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full slg:w-2/5 max-md:ml-0 max-md:w-full">
                <div className="md:text-xl mb-[-15px] text-sm text-zinc-500 max-md:max-w-full slg:mb-[10px] md:mb-[10px]">
                  {t("Main.ContactUs.phone-for-call")}
                </div>
                <div className="flex slg:ml-5 w-full  max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-between grow max-md:mt-5 max-md:max-w-full">
                    <div className="flex flex-col gap-[8px] pt-1.5 max-md:max-w-full mb-2">
                      <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full flex gap-[8px] slg:gap-[10px] flex-row flex-nowrap items-center">
                        <FaPhoneAlt className="w-[18px] h-[18px] slg:w-[20px] slg:h-[20px]" />{" "}
                        <a
                          onClick={async () => {
                            try {
                              let response = await fetch(
                                "https://interlab.mrjtrade.uz/api/count?button=call",
                                {
                                  method: "POST",
                                }
                              );
                              console.log("Response Of Count", response.json());
                            } catch (error) {
                              console.log("error to counter fetching", error);
                            }
                          }}
                          href="tel:1156"
                        >
                          1156
                        </a>
                      </div>
                      <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full flex gap-[8px]  slg:gap-[10px] flex-row flex-nowrap items-center">
                        <FaPhoneAlt className="w-[18px] h-[18px] slg:w-[20px] slg:h-[20px]" />{" "}
                        <a
                          onClick={async () => {
                            try {
                              let response = await fetch(
                                "https://interlab.mrjtrade.uz/api/count?button=call",
                                {
                                  method: "POST",
                                }
                              );
                              console.log("Response Of Count", response.json());
                            } catch (error) {
                              console.log("error to counter fetching", error);
                            }
                          }}
                          href="tel:+998781482288"
                        >
                          78 148 22 88
                        </a>
                      </div>
                      <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full flex gap-[8px] slg:gap-[10px] flex-row flex-nowrap items-center">
                        <FaPhoneAlt className="w-[18px] h-[18px] slg:w-[20px] slg:h-[20px]" />{" "}
                        <a
                          onClick={async () => {
                            try {
                              let response = await fetch(
                                "https://interlab.mrjtrade.uz/api/count?button=call",
                                {
                                  method: "POST",
                                }
                              );
                              console.log("Response Of Count", response.json());
                            } catch (error) {
                              console.log("error to counter fetching", error);
                            }
                          }}
                          href="tel:+998977578822"
                        >
                          97 757 88 22
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="flex flex-col pt-1.5 pb-3 mt-2 border-neutral-200 max-md:max-w-full">
                      <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                        {t("Main.ContactUs.addresses")}
                      </div>
                      <a
                        href="https://yandex.uz/maps/10335/tashkent/house/YkAYdA5gQUwDQFprfX90cXRnZw==/?ll=69.290894%2C41.350844&z=17"
                        target="_blank"
                        className="md:text-xl text-sm text-red-400 max-md:max-w-full"
                      >
                        {t("Main.ContactUs.open-in-ya")}
                      </a>
                    </div>
                    <hr />
                    <div className="flex flex-col max-md:max-w-full pt-4">
                      <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                        7:00 - 23:00 {t("Main.ContactUs.mon-fri")}
                      </div>
                      <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                        7:00 - 17:00 {t("Main.ContactUs.sun")}
                      </div>
                      <div
                        className="mt-2 md:text-xl text-sm text-zinc-500 max-md:max-w-full"
                        dangerouslySetInnerHTML={{
                          __html: formatText(t("Main.ContactUs.graphic")),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex slg:hidden gap-2 mt-11 max-w-full text-sm font-bold text-center w-[466px] max-md:flex-wrap max-md:mt-10">
                <a
                  href="tel:+998781482288"
                  className="justify-center items-center self-start px-10 py-3 text-white whitespace-nowrap bg-red-400 rounded-[100px] "
                >
                  {t("call")}
                </a>
                <a
                  href={`/${params.locale}/results`}
                  className="justify-center px-2 py-3 text-red-400 border border-red-400 border-solid rounded-[100px]"
                >
                  {t("get-result")}
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[1440px] px-2 mx-auto w-full">
            <a href={`${locale}/services`} className="">
              <h2 className="lg:mt-52 mt-24 text-3xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
                {t("Main.Services.title")}
              </h2>
            </a>

            <div className="flex flex-col items-center mdx:mt-10 w-full px-0">
              {serviceCategories.length === 0 ? (
                <p>Нет доступных категорий услуг</p>
              ) : (
                <>
                  {/* Первая строка с 2 колонками, где 1 элемент шире другого */}
                  <div className="grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-[60%,_40%] gap-5 w-full mt-5 lg:pr-4">
                    {serviceCategories.slice(0, 2).map((service, index) => (
                      <div key={index} className="w-full">
                        <ServiceCard
                          locale={params.locale}
                          title={service.name[locale]}
                          description={service.description[locale]}
                          imageSrc={urlFor(service.icon).url()}
                          bgColor={
                            service.colourCode
                              ? service.colourCode
                              : getRandomColor()
                          }
                          slug={service.slug.current}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Вторая и последующие строки с 3 колонками */}
                  <div className="grid grid-cols-1 mdx:grid-cols-2 max-mdx:hidden lg:grid-cols-3 gap-5 w-full mt-5">
                    {serviceCategories.slice(2).map((service, index) => (
                      <div key={index} className="w-full">
                        <ServiceCard
                          locale={params.locale}
                          title={service.name[locale]}
                          description={service.description[locale]}
                          imageSrc={urlFor(service.icon).url()}
                          bgColor={
                            service.colourCode
                              ? service.colourCode
                              : getRandomColor()
                          }
                          slug={service.slug.current}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 mdx:grid-cols-2 mdx:hidden lg:grid-cols-3 gap-5 w-full mt-5">
                    {!servicesOpen &&
                      serviceCategories.slice(2, 3).map((service, index) => (
                        <div key={index} className="w-full">
                          <ServiceCard
                            locale={params.locale}
                            title={service.name[locale]}
                            description={service.description[locale]}
                            imageSrc={urlFor(service.icon).url()}
                            bgColor={
                              service.colourCode
                                ? service.colourCode
                                : getRandomColor()
                            }
                            slug={service.slug.current}
                          />
                        </div>
                      ))}
                    {servicesOpen &&
                      serviceCategories.slice(2).map((service, index) => (
                        <div key={index} className="w-full">
                          <ServiceCard
                            locale={params.locale}
                            title={service.name[locale]}
                            description={service.description[locale]}
                            imageSrc={urlFor(service.icon).url()}
                            bgColor={
                              service.colourCode
                                ? service.colourCode
                                : getRandomColor()
                            }
                            slug={service.slug.current}
                          />
                        </div>
                      ))}
                  </div>
                </>
              )}
              <div className="w-full flex justify-center mdx:hidden mt-12">
                <button
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="text-rose-400 text-xl font-semibold flex gap-3 items-center"
                >
                  {servicesOpen ? t("collapse") : t("Main.Services.all")}
                  <Image
                    src={"/svg/arrow-down-red.svg"}
                    height={100}
                    width={100}
                    alt="Down Icon Red"
                    className={`w-4 h-4 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="px-2">
            <MainMap />
          </div>

          <div className="max-w-[1440px] mx-auto px-2 w-full">
            <div className="flex flex-col mt-24 max-w-full w-[588px]">
              <h2 className="text-3xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full mb-0">
                {t("Main.Doctors.title")}
              </h2>
            </div>
            <div className="mt-4 max-md:max-w-full xl:mt-[40px]">
              <div className="hidden mdx:grid gap-5 grid-cols-4 max-lg:grid-cols-3 max-slg:grid-cols-2">
                {doctors.map((doctor, index) => (
                  <DoctorCard
                    locale={params.locale}
                    key={index}
                    name={doctor.name[locale] || doctor.name.ru}
                    specialty={doctor.position[locale] || doctor.position.ru}
                    imageSrc={urlFor(doctor.photo).url()}
                    slug={doctor.slug.current}
                  />
                ))}
              </div>
              <div className="mdx:hidden">
                <Swiper
                  slidesPerView={1}
                  centeredSlides={true}
                  spaceBetween={20}
                  pagination={{
                    clickable: true,
                  }}
                >
                  {doctors.map((doctor, index) => (
                    <SwiperSlide key={index}>
                      <DoctorCard
                        locale={params.locale}
                        name={doctor.name[locale] || doctor.name.ru}
                        specialty={
                          doctor.position[locale] || doctor.position.ru
                        }
                        imageSrc={urlFor(doctor.photo).url()}
                        slug={doctor.slug.current}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <a
                href={`/${params.locale}/doctors`}
                className="flex gap-2 justify-center self-center px-16 py-3.5 mt-10 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px]"
              >
                <span className="my-auto">{t("Main.Doctors.all")}</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 aspect-square w-[23px]"
                  alt="Arrow icon"
                />
              </a>
            </div>
          </div>
          <div className="mt-52 max-md:mt-24 px-2 w-full max-w-[1440px] mx-auto">
            <Instruction locale={locale} />
          </div>
          <div className="w-full pt-24">
            <About />
          </div>
          <div className="max-w-[1440px] px-2 mx-auto w-full">
            <h2 className="mt-52 text-3xl font-bold text-neutral-900 max-md:mt-24 max-md:max-w-full mb-0">
              {t("Main.Blogs.title")}
            </h2>
            <Blog locale={params.locale} />
            <div className="w-full flex justify-center">
              <a
                href={`${params.locale}/blogs`}
                className="flex gap-2 justify-center self-center px-16 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-[52px]"
              >
                <span className="my-auto">{t("Main.Blogs.more")}</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 aspect-square w-[23px]"
                  alt="Arrow icon"
                />
              </a>
            </div>
          </div>
          <section className="flex flex-col w-full max-w-[1440px] px-2 mx-auto justify-center mt-52 mb-52 rounded-[50px] max-md:mt-24 max-md:max-w-full">
            <Application />
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
