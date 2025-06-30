import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Box, Text } from '@react-three/drei';
import { Code, Palette, Zap, Users } from 'lucide-react';

// 3D Skill Cube Component
const SkillCube = function({ position, color, skill }) {
  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    scale: 1,
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  const handleClick = () => {
    api.start({
      rotation: [spring.rotation.get()[0] + Math.PI, spring.rotation.get()[1] + Math.PI, 0],
      scale: 1.2,
      config: { duration: 600 },
    });
  };

  return (
    <animated.mesh position={position} rotation={spring.rotation} scale={spring.scale} onClick={handleClick}>
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </animated.mesh>
  );
};

// About Section for Prashant Kumar
const aboutData = {
  name: 'Prashant Kumar',
  location: 'Muzaffarpur, Bihar',
  email: '20224084@sbsstc.ac.in',
  phone: '+91-9310062469',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/prashant-kumar-04790624a/' },
    { label: 'GitHub', url: 'https://github.com/Prashant78793' },
    { label: 'Codeforces', url: 'https://codeforces.com/profile/prashant__69' },
    { label: 'LeetCode', url: 'https://leetcode.com/u/prashant_93100/' },
    { label: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/pkgupta9mhu/' },
  ]
};

// Education Section
const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  years: '2022–2026',
  university: 'Shaheed Bhagat Singh State University, Punjab',
  cgpa: '7.67',
};

// Skills Section
const skills = {
  languages: ['Java', 'C++', 'JavaScript', 'SQL', 'MongoDB'],
  frameworks: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'IntelliJ'],
};

// Coursework
const coursework = ['DSA', 'OS', 'OOPs', 'DBMS', 'CN', 'Software Engineering', 'Web Dev'];

// Certifications
const certifications = [
  'Mastering JavaScript – Udemy',
  'C++ – Udemy',
  'Cyber Security Essentials – Udemy',
];

// Extras
const extras = [
  'Taught Java offline (June–Aug 2024)',
  'Runner-up in SEGA Football 2022',
];

const About = function() {
  const skills = [
    { name: 'Frontend', icon: Code, color: '#0ea5e9', description: 'React, JavaScript, Tailwind CSS,HTML5' },
    { name: 'Design', icon: Palette, color: '#8b5cf6', description: 'UI/UX, Figma, Adobe' },
    { name: 'Backend', icon: Zap, color: '#10b981', description: 'Node.js, Express.js,MongoDB' },
    { name: 'Team', icon: Users, color: '#f59e0b', description: 'Agile, Leadership' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - 3D Scene */}
          <motion.div variants={itemVariants} className="relative h-96">
            <Canvas camera={{ position: [0, 0, 8] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <SkillCube position={[-2, 1, 0]} color="#0ea5e9" skill="React" />
              <SkillCube position={[2, 1, 0]} color="#8b5cf6" skill="3D" />
              <SkillCube position={[-2, -1, 0]} color="#10b981" skill="Node" />
              <SkillCube position={[2, -1, 0]} color="#f59e0b" skill="Team" />
            </Canvas>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-4"
              >
                About <span className="gradient-text">Me</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-20 h-1 bg-primary-500 mb-6"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              I'm a passionate Full Stack Developer with over 5 years of experience creating 
              innovative digital solutions. My journey in tech started with a curiosity about 
              how things work, which evolved into a love for building user-centric applications 
              that make a difference.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              When I'm not coding, you'll find me exploring the latest in 3D graphics, 
              experimenting with new technologies, or mentoring junior developers. I believe 
              in continuous learning and pushing the boundaries of what's possible on the web.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <skill.icon size={24} className="text-primary-400" />
                    <div>
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 