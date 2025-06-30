import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Float, Text, Box } from '@react-three/drei';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Avatar Component (replace with your own image if desired)
const AnimatedAvatar3D = () => {
  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  // Load the image as a texture from public folder
  const texture = useLoader(THREE.TextureLoader, '/prashant%20.jpg');

  React.useEffect(() => {
    const interval = setInterval(() => {
      api.start({
        rotation: [0, Math.PI * 2, 0],
        config: { duration: 10000 },
      });
    }, 10000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <animated.mesh rotation={spring.rotation}>
        {/* 3D Avatar Plane with image texture */}
        <planeGeometry args={[7, 8]} />
        <meshStandardMaterial map={texture} transparent={true} />
      </animated.mesh>
    </Float>
  );
};

// Hero Section for Prashant Kumar
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
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {/* Optionally add 3D background elements here */}
        </Canvas>
      </div>

      {/* Main Content: Flex Row */}
      <div className="container-custom flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        {/* Left: 3D Avatar */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <Canvas camera={{ position: [0, 0, 6] }} style={{ width: '100%', height: 400 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={0.5} />
            <AnimatedAvatar3D />
          </Canvas>
        </div>

        {/* Right: Name, Title, CTA */}
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
            Full Stack Developer & DevOps Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
          >
            I build seamless digital solutions by merging full-stack development with modern DevOps tools. Let's create something incredible together.
          </motion.p>

          {/* CTA Buttons */}
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

            {/* Download Resume Button wrapped in anchor tag */}
            <a
              href="/resume%20prashant.pdf"
              download="Prashant_Kumar_Resume.pdf"
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

      {/* Scroll Indicator */}
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