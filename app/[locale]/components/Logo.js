import Image from "next/image";
import logo from "@/public/images/header-logo-interlab.png";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 transition-all duration-150">
      <div className="hidden mdx:flex transition-all duration-150 w-[150px] xl:w-[220px]">
        <Image
          priority
          src={logo}
          width={220}
          height={150}
          alt="Interlab Innovation"
          quality={100}
          className='w-full'
        />
      </div>
      <div className="flex mdx:hidden transition-all duration-150 h-[45px]">
        <Image
          priority
          src={logo}
          width={130}
          height={70}
          alt="Interlab innovation"
          quality={100}
          className='object-cover w-full'
        />
      </div>
      
    </a>
  );
}

export default Logo;
