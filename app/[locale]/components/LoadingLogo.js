"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/images/header-logo-interlab.png";

const LoadingLogo = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={logo}
          alt="Interlab Logo"
          width={200}
          height={300}
          quality={100}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingLogo;
