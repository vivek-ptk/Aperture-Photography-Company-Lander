'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const MomentsSection = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageWidth = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-light text-center mb-16 tracking-wider"
        >
          Make Your Moments Last Forever
        </motion.h2>
        
        <motion.div 
          style={{ width: imageWidth }}
          className="relative h-[600px] mx-auto"
        >
          <Image
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Photographer capturing group moment"
            fill
            className="object-cover rounded-lg"
            priority
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-10 left-10 right-10 text-white"
          >
            <p className="text-xl font-light tracking-wide max-w-2xl">
              From weddings to corporate events, we capture the essence of every moment with precision and artistry.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MomentsSection;
