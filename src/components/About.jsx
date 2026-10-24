import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Box, Text } from '@react-three/drei';
import { Html } from '@react-three/drei';
import { Bot, Code, Database, GitBranch, Palette, Server, Zap } from 'lucide-react';
import { FaGithub, FaJava, FaJs, FaNodeJs, FaPython, FaReact, FaUsers } from 'react-icons/fa';
import {
  SiBootstrap,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGithubactions,
  SiGraphql,
  SiLangchain,
  SiMongodb,
  SiMui,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSocketdotio,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si';

// 3D Skill Cube Component
const SkillCube = function({ position, color, icon: Icon }) {
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
      {/* Render the icon in the center of the cube, fallback to text if icon is missing */}
      <Html position={[0, 0, 0.6]} center>
        {Icon ? <Icon size={28} className="text-white" /> : <span style={{color: 'white'}}>?</span>}
      </Html>
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
  languages: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Java'],
  frameworks: ['React.js', 'Redux', 'React Native', 'Next.js', 'Bootstrap', 'Material UI'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.IO'],
  agenticAi: ['LangChain', 'LangGraph', 'LangSmith', 'n8n'],
  databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase Firestore', 'Supabase'],
  tools: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Postman', 'FastAPI (Basic)', 'SDLC/STLC'],
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

const techIconColors = {
  Python: '#3776AB',
  'JavaScript (ES6+)': '#F7DF1E',
  TypeScript: '#3178C6',
  Java: '#ED8B00',
  'React.js': '#61DAFB',
  Redux: '#764ABC',
  'React Native': '#61DAFB',
  'Next.js': '#FFFFFF',
  Bootstrap: '#7952B3',
  'Material UI': '#007FFF',
  'Node.js': '#339933',
  'Express.js': '#FFFFFF',
  'REST APIs': '#38BDF8',
  GraphQL: '#E10098',
  'Socket.IO': '#FFFFFF',
  LangChain: '#1C3C3C',
  LangGraph: '#5B5BD6',
  LangSmith: '#F59E0B',
  n8n: '#EA4B71',
  MongoDB: '#47A248',
  MySQL: '#4479A1',
  PostgreSQL: '#4169E1',
  'Firebase Firestore': '#FFCA28',
  Supabase: '#3FCF8E',
  Git: '#F05032',
  GitHub: '#FFFFFF',
  'GitHub Actions': '#2088FF',
  'CI/CD': '#14B8A6',
  Postman: '#FF6C37',
  'FastAPI (Basic)': '#009688',
  'SDLC/STLC': '#F59E0B',
};

const About = function() {
  const skills = [
    {
      name: 'Languages',
      icon: Code,
      color: '#0ea5e9',
      techIcons: [
        { icon: FaPython, label: 'Python' },
        { icon: FaJs, label: 'JavaScript (ES6+)' },
        { icon: SiTypescript, label: 'TypeScript' },
        { icon: FaJava, label: 'Java' },
      ],
    },
    {
      name: 'Frontend',
      icon: Code,
      color: '#8b5cf6',
      techIcons: [
        { icon: FaReact, label: 'React.js' },
        { icon: SiRedux, label: 'Redux' },
        { icon: FaReact, label: 'React Native' },
        { icon: SiNextdotjs, label: 'Next.js' },
        { icon: SiBootstrap, label: 'Bootstrap' },
        { icon: SiMui, label: 'Material UI' },
      ],
    },
    {
      name: 'Backend',
      icon: Server,
      color: '#10b981',
      techIcons: [
        { icon: FaNodeJs, label: 'Node.js' },
        { icon: SiExpress, label: 'Express.js' },
        { icon: Server, label: 'REST APIs' },
        { icon: SiGraphql, label: 'GraphQL' },
        { icon: SiSocketdotio, label: 'Socket.IO' },
      ],
    },
    {
      name: 'Agentic AI',
      icon: Bot,
      color: '#f59e0b',
      techIcons: [
       
        { icon: SiLangchain, label: 'LangGraph' },
        { icon: SiLangchain, label: 'LangSmith' },
        { icon: SiN8N, label: 'n8n' },
      ],
    },
    {
      name: 'Databases',
      icon: Database,
      color: '#ef4444',
      techIcons: [
        { icon: SiMongodb, label: 'MongoDB' },
        { icon: SiMysql, label: 'MySQL' },
        { icon: SiPostgresql, label: 'PostgreSQL' },
        { icon: SiFirebase, label: 'Firebase Firestore' },
        { icon: SiSupabase, label: 'Supabase' },
      ],
    },
    {
      name: 'Dev Tools',
      icon: GitBranch,
      color: '#14b8a6',
      techIcons: [
        { icon: GitBranch, label: 'Git' },
        { icon: FaGithub, label: 'GitHub' },
        { icon: SiGithubactions, label: 'GitHub Actions' },
        { icon: GitBranch, label: 'CI/CD' },
        { icon: SiPostman, label: 'Postman' },
        { icon: SiFastapi, label: 'FastAPI (Basic)' },

      ],
    },
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
              <SkillCube position={[-2, 1, 0]} color="#0ea5e9" icon={Code} />
              <SkillCube position={[2, 1, 0]} color="#8b5cf6" icon={Palette} />
              <SkillCube position={[-2, -1, 0]} color="#10b981" icon={Zap} />
              <SkillCube position={[2, -1, 0]} color="#f59e0b" icon={FaUsers} />
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
              I'm Prashant Kumar, a Software Engineer and Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, Express.js, REST APIs, and modern database systems. I build fast, responsive, and scalable web applications, including AI-powered products, using clean architecture and user-focused design. My experience with MongoDB, PostgreSQL, Supabase, Git, and cloud-ready development helps turn complex ideas into reliable digital experiences.
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
                    <skill.icon size={24} style={{ color: skill.color }} />
                    <div>
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        {skill.techIcons.map(({ icon: Icon, label }) => (
                          <span key={label} title={label} aria-label={label} className="text-xl transition-transform hover:scale-125" style={{ color: techIconColors[label] }}>
                            <Icon />
                          </span>
                        ))}
                      </div>
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