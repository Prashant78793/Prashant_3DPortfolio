import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { ChevronDown, Download, Mail } from 'lucide-react';
import * as THREE from 'three';

// Hero Section
const heroData = {
  name: 'Prashant Kumar',
  cta: 'Contact Me',
};

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Background Canvas */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Stars 
            radius={100} 
            depth={50} 
            count={1500} 
            factor={4} 
            saturation={0} 
            fade 
            speed={0.2} // slow movement
          />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="container-custom flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        {/* 3D Avatar */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0" style={{ transform: 'translateX(-40px)' }}>
          <motion.div
            animate={{ y: [0, -20, 0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-full shadow-2xl bg-gradient-to-br from-primary-500/30 to-primary-900/30 p-2"
            style={{ width: 320, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img
              src="/prashant1%20.jpg"
              alt="Prashant Kumar"
              style={{ width: 300, height: 300, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 8px 32px 0 rgba(14,165,233,0.25)' }}
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-400 text-lg font-medium mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{heroData.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
           
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
          >
I'm a Software Engineer and Full Stack Developer who enjoys turning ideas into useful web products. I work with React.js, Next.js, TypeScript, Node.js, REST APIs, and databases such as MongoDB and PostgreSQL to build responsive and reliable applications. I also like exploring AI-powered features that make products more practical, faster, and easier to use.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Mail size={20} />
              {heroData.cta}
            </motion.button>

            <a
              href="/prashant_24oct2026.pdf"
              download="prashant_24oct2026.pdf"
              className="px-8 py-4 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-colors flex items-center gap-2 no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
