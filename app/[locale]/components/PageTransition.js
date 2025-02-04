'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import LoadingLogo from './LoadingLogo';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setDisplayChildren(false);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      setDisplayChildren(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && <LoadingLogo />}
      
      {displayChildren && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen w-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
