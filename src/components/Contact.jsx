import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Box, Text } from '@react-three/drei';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';

// 3D Form Element Component
const FormElement3D = ({ position, label, type, color }) => {
  const [spring, api] = useSpring(() => ({
    scale: 1,
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  const handleHover = () => {
    api.start({
      scale: 1.1,
      rotation: [0, Math.PI / 12, 0],
      config: { duration: 300 },
    });
  };

  const handleLeave = () => {
    api.start({
      scale: 1,
      rotation: [0, 0, 0],
      config: { duration: 300 },
    });
  };

  return (
    <animated.mesh
      position={position}
      scale={spring.scale}
      rotation={spring.rotation}
      onPointerOver={handleHover}
      onPointerOut={handleLeave}
    >
      <Box args={type === 'textarea' ? [3, 1.5, 0.1] : [2, 0.5, 0.1]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.1}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={type === 'textarea' ? 2.8 : 1.8}
      >
        {label}
      </Text>
    </animated.mesh>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const formRef = useRef(null);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pkgupta93100@gmail.com',
      href: 'mailto:pkgupta93100@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9310062469',
      href: 'tel:+91 9310062469',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Muzaffarpur, INDIA',
      href: '#',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Replace these with your EmailJS values
    const SERVICE_ID = 'service_0wa4uv8';
    const TEMPLATE_ID = 'template_q3eemkw';
    const USER_ID = 'UUc4g1VsWEo6gDsQg';

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        USER_ID
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none"
                  placeholder="Messege"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-green-400 bg-green-900/20 p-3 rounded-lg"
                  >
                    <CheckCircle size={20} />
                    Message sent successfully!
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-400 bg-red-900/20 p-3 rounded-lg"
                  >
                    <AlertCircle size={20} />
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right Column - 3D and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative h-64 mb-8">
              <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FormElement3D position={[-2, 1, 0]} label="Name" type="text" color="#0ea5e9" />
                <FormElement3D position={[2, 1, 0]} label="Email" type="email" color="#8b5cf6" />
                <FormElement3D position={[0, -0.5, 0]} label="Subject" type="text" color="#10b981" />
                <FormElement3D position={[0, -2, 0]} label="Message" type="textarea" color="#f59e0b" />
              </Canvas>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:bg-primary-900/20"
                >
                  <div className="p-3 bg-primary-600 rounded-lg">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.label}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-gray-700"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Prashant78793"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-dark-700 hover:bg-primary-600 rounded-lg"
                >
                  <Github className="text-white" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/prashant-kumar-04790624a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-dark-700 hover:bg-primary-600 rounded-lg"
                >
                  <Linkedin className="text-white" />
                </motion.a>
                <motion.a
                  href="https://x.com/pkgupta93100"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-dark-700 hover:bg-primary-600 rounded-lg"
                >
                  <Twitter className="text-white" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/__prashant___69/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-dark-700 hover:bg-primary-600 rounded-lg"
                >
                  <Instagram className="text-white" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
