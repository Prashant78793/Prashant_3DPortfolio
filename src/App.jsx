import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

function App() {
  return (
    <div className="App">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Stars 
              radius={100} 
              depth={50} 
              count={5000} 
              factor={4} 
              saturation={0} 
              fade 
              speed={1}
            />
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