import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Box, Html } from '@react-three/drei';
import { ExternalLink, Github, X, Eye } from 'lucide-react';

// 3D Project Cube Component
const ProjectCube3D = ({ position, project, color, onProjectClick }) => {
  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    scale: 1,
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  const handleClick = () => {
    api.start({
      rotation: [spring.rotation[0] + Math.PI / 2, spring.rotation[1] + Math.PI / 2, 0],
      scale: 1.1,
      config: { duration: 600 },
    });
    onProjectClick();
  };

  return (
    <animated.mesh position={position} rotation={spring.rotation} scale={spring.scale} onClick={handleClick}>
      <Box args={[2, 2, 0.2]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Html position={[0, 0, 0.11]} center>
        <div className="text-center text-white text-xs p-2">
          <div className="font-bold mb-1">{project.title}</div>
          <div className="text-xs opacity-80">Click to view</div>
        </div>
      </Html>
    </animated.mesh>
  );
};

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-dark-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Project Image */}
            <div className="w-full h-48 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title + ' preview'}
                  className="object-contain w-full h-full"
                />
              ) : (
                <div className="text-white text-center">
                  <Eye size={48} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm opacity-70">Project Preview</p>
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-white mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-900/50 text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg transition-colors"
                >
                  <Github size={20} />
                  View Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Gym Equipment E-Commerce',
      year: 2025,
      description: 'Admin Dashboard, Inventory & Orders, Search/Filter',
      technologies: ['React', 'JS', 'MongoDB'],
      techStack: ['React', 'JS', 'MongoDB'],
      features: ['Admin Dashboard', 'Inventory & Orders', 'Search/Filter'],
      github: 'https://github.com/Prashant78793/gym-equipment-ecommerce.github.io',
      demo: '',
      color: '#0ea5e9',
      image: '/Gym.png',
    },
    {
      id: 2,
      title: 'Redtape Clone',
      year: 2024,
      description: 'Product listing, filtering, authentication',
      technologies: ['MERN Stack', 'Tailwind', 'Redux', 'JWT'],
      techStack: ['MERN Stack', 'Tailwind', 'Redux', 'JWT'],
      features: ['Product listing', 'filtering', 'authentication'],
      github: 'https://github.com/Prashant78793/Redtape',
      demo: '',
      color: '#8b5cf6',
      image: '/redtape.png',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and cutting-edge technologies
          </p>
        </motion.div>

        {/* 3D Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 mb-12"
        >
          <Canvas camera={{ position: [0, 0, 12] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {projects.map((project, index) => (
              <ProjectCube3D
                key={project.id}
                position={[
                  (index % 2 === 0 ? -2 : 2) * 3,
                  (index < 2 ? 1 : -1) * 2,
                  0
                ]}
                project={project}
                color={project.color}
                onProjectClick={() => handleProjectClick(project)}
              />
            ))}
          </Canvas>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div 
                className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}80)` }}
              >
                <div className="text-white text-center">
                  <Eye size={48} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm opacity-70">Click to view</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-900/50 text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    <Eye size={16} />
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default Projects; 