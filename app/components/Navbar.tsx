'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/10 backdrop-blur-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-white font-light text-2xl tracking-wider">
              APERTURE
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#portfolio" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-light tracking-wider">
                Portfolio
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-light tracking-wider">
                Services
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-light tracking-wider">
                About
              </Link>
              <Link href="#contact" className="border border-white text-white px-6 py-2 text-sm font-light tracking-wider hover:bg-white hover:text-black transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
