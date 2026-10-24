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

const ExperienceWires = () => {
  const wires = [
    { id: 'full-time', color: '#34d399', sourceY: 150, endY: 150, path: 'M 280 150 C 375 150, 440 150, 505 150' },
    { id: 'trainee', color: '#60a5fa', sourceY: 220, endY: 505, path: 'M 280 220 C 375 260, 425 435, 505 505' },
    { id: 'intern', color: '#facc15', sourceY: 290, endY: 835, path: 'M 280 290 C 375 370, 425 700, 505 835' },
  ];

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full lg:block"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="wire-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {wires.map((wire) => (
        <g key={wire.id}>
          <path d={wire.path} fill="none" stroke={wire.color} strokeOpacity="0.16" strokeWidth="8" />
          <path d={wire.path} fill="none" stroke={wire.color} strokeOpacity="0.8" strokeWidth="1.5" strokeDasharray="7 8" />
          <circle cx="280" cy={wire.sourceY} r="5" fill={wire.color} filter="url(#wire-glow)" />
          <circle cx="505" cy={wire.endY} r="6" fill={wire.color} filter="url(#wire-glow)">
            <animate attributeName="r" values="5;8;5" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle r="5" fill={wire.color} filter="url(#wire-glow)">
            <animateMotion dur="2.8s" begin="0.2s" repeatCount="indefinite" path={wire.path} />
          </circle>
        </g>
      ))}
    </svg>
  );
};

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer | Full-Time',
      company: 'Ascella Infosec',
      logo: '/ascella.jpg',
      website: 'https://ascella.group/',
      location: 'Remote',
      period: 'Jan 2026– Oct 2026',
      description:
        'Improving Next.js performance, SEO, and scalability while building responsive luxury fashion e-commerce platforms with optimized APIs and PostgreSQL integration.',
      technologies: ['Next.js', 'SEO', 'PostgreSQL', 'E-Commerce'],
      color: '#34d399',
      achievements: [
        'Improved Next.js performance by 30% using lazy loading, code splitting, and image optimization',
        'Implemented optimized metadata, sitemaps, canonical URLs, and structured data for SEO',
        'Optimized routing, caching, and API requests for better scalability',
        'Developed responsive luxury fashion platforms with dynamic products',
        'Integrated PostgreSQL and optimized APIs for efficient data retrieval',
      ],
    },
    {
      id: 2,
      title: 'Software Engineer Trainee',
      company: 'Ascella Infosec',
      logo: '/ascella.jpg',
      website: 'https://ascella.group/',
      location: 'Remote',
      period: 'Dec 2025–Jan 2026',
      description:
        'Built responsive web interfaces and interactive application features using React.js, Next.js, Tailwind CSS, and REST APIs.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'REST APIs'],
      color: '#60a5fa',
      achievements: [
        'Built responsive web interfaces using React.js, Next.js, and Tailwind CSS',
        'Integrated REST APIs, authentication flows, and dynamic data features',
        'Collaborated on debugging, testing, and code optimization',
        'Followed Git-based development workflows for maintainable code',
      ],
    },
    {
      id: 3,
      title: 'Web Development Intern',
      company: 'InternPe',
      logo: '/internpe.jpg',
      website: 'https://internpe.in/',
      location: 'Jaipur, India',
      period: 'July 2025–Aug 2025',
      description:
        'Developed reusable React.js components, responsive interfaces, REST APIs, and MongoDB schemas while contributing to performance improvements.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
      color: '#facc15',
      achievements: [
        'Worked on 20+ reusable React.js components and responsive UI for different web pages',
        'Developed and integrated REST APIs using Node.js and Express.js',
        'Created MongoDB schemas and handled basic CRUD operations',
        'Used Git for version control and collaborated on debugging and testing',
        'Improved application performance through frontend and API optimizations',
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

        <div className="relative grid items-start gap-12 lg:grid-cols-2">
          <ExperienceWires />
          {/* Left Column - 3D Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 h-96"
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
            className="relative z-10 space-y-8"
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
                  {/* Company Logo */}
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${exp.company} website`}
                    onClick={(event) => event.stopPropagation()}
                    className="absolute left-4 top-5 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400"
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-8 h-8 rounded-full object-cover border-2 border-slate-600 transition-transform hover:scale-110"
                    />
                  </a>

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
