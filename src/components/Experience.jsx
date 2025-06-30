import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Box, Text } from '@react-three/drei';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';

// 3D Flip Card Component
const FlipCard3D = ({ position, frontText, backText, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    api.start({
      rotation: [0, isFlipped ? 0 : Math.PI, 0],
      config: { duration: 800 },
    });
  };

  return (
    <animated.mesh position={position} rotation={spring.rotation} onClick={handleClick}>
      <Box args={[3.2, 1.6, 0.1]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.25}
        color="black"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.8}
      >
        {isFlipped ? backText : frontText}
      </Text>
    </animated.mesh>
  );
};

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'DevSkillHub',
      location: 'Remote',
      period: 'July–Aug 2024',
      description: 'Built responsive UI, implemented React components, improved load time, and used Git, Chrome DevTools, Postman.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Chrome DevTools', 'Postman'],
      color: '#facc15', // Yellow
      achievements: [
        'Built responsive UI with HTML, CSS, JavaScript',
        'Implemented React components & optimized performance',
        'Improved load time by 25%, added lazy loading',
        'Used Git, Chrome DevTools, Postman',
      ],
    },
  ];

  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A journey through my professional experience, showcasing growth and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - 3D Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <Canvas camera={{ position: [0, 0, 10] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              {experiences.map((exp, index) => (
                <FlipCard3D
                  key={exp.id}
                  position={[0, 2 - index * 2.5, 0]}
                  frontText={exp.title}
                  backText={exp.company}
                  color={exp.color}
                />
              ))}
            </Canvas>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-primary-500/30" />
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-6 rounded-lg relative"
                  onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-[#facc15] rounded-full" />

                  <div className="ml-12">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Building size={16} />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-primary-400 text-sm">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-900/50 text-primary-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {selectedExp === exp.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-gray-700">
                            <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                            <ul className="text-gray-300 space-y-1 text-sm">
                              {exp.achievements.map((achievement) => (
                                <li key={achievement}>• {achievement}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* View Details Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      {selectedExp === exp.id ? 'Hide Details' : 'View Details'}
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
