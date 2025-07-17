import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

// Custom RotatingStars component
function RotatingStars({ count = 10000, radius = 100, speed = 0.01 }) {
  const mesh = useRef();
  // Generate random positions for the stars
  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = radius * Math.cbrt(Math.random());
      arr.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(arr);
  }, [count, radius]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += speed;
      mesh.current.rotation.x += speed * 0.25;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.2} sizeAttenuation={false} depthWrite={false} />
    </points>
  );
}

function App() {
  return (
    <div className="App">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <RotatingStars count={10000} radius={100} speed={0.004} />
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Loading Screen */}
      <LoadingScreen />
    </div>
  );
}

export default App; 