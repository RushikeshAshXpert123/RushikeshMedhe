import React from "react";
import { motion } from "framer-motion";
import { Box, Chip, IconButton, Tooltip } from "@mui/material";
import { Email, LinkedIn, GitHub, FileDownload, ArrowUpward } from "@mui/icons-material";

const Footer = ({ darkMode = true }) => {
  
  // Personal info (consistent with Header)
  const personalInfo = {
    name: "Rushikesh Medhe",
    email: "Rushikeshpmedhe@gmail.com",
    linkedin: "http://www.linkedin.com/in/rushikesh-medhe-87869b214",
    github: "https://github.com/RushikeshAshXpert123/RushikeshMedhe.git",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-100 to-blue-50'}`}>
      {/* Animated background elements (consistent with Header) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0.1,
              scale: 0.5
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: [0.05, 0.15, 0.05],
              scale: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className={`absolute rounded-full ${darkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'}`}
            style={{
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main footer content */}
      <footer className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`rounded-3xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur-xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/70'} shadow-xl overflow-hidden p-8`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Left section - Name and tagline */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700'}`}>
                  {personalInfo.name}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                  Building digital experiences that matter
                </p>
              </motion.div>

              {/* Middle section - Contact links */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3"
              >
                <Tooltip title="Email me" arrow>
                  <Chip
                    icon={<Email />}
                    label="Email"
                    onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                    variant="outlined"
                    sx={{
                      backgroundColor: darkMode ? 'rgba(55, 65, 81, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                      color: darkMode ? '#e5e7eb' : '#374151',
                      borderColor: darkMode ? 'rgba(107, 114, 128, 0.5)' : 'rgba(209, 213, 219, 0.7)',
                      '&:hover': {
                        backgroundColor: darkMode ? 'rgba(55, 65, 81, 0.9)' : 'rgba(255, 255, 255, 0.9)'
                      }
                    }}
                    className="transition-all cursor-pointer"
                  />
                </Tooltip>

                <Tooltip title="LinkedIn Profile" arrow>
                  <Chip
                    icon={<LinkedIn />}
                    label="LinkedIn"
                    onClick={() => window.open(personalInfo.linkedin, '_blank')}
                    sx={{
                      backgroundColor: darkMode ? 'rgba(10, 102, 194, 0.2)' : 'rgba(10, 102, 194, 0.1)',
                      color: darkMode ? '#93c5fd' : '#1e40af',
                      borderColor: darkMode ? 'rgba(37, 99, 235, 0.3)' : 'rgba(59, 130, 246, 0.3)',
                      '&:hover': {
                        backgroundColor: darkMode ? 'rgba(10, 102, 194, 0.3)' : 'rgba(10, 102, 194, 0.2)'
                      }
                    }}
                    className="transition-all cursor-pointer"
                  />
                </Tooltip>

                <Tooltip title="GitHub Profile" arrow>
                  <Chip
                    icon={<GitHub />}
                    label="GitHub"
                    onClick={() => window.open(personalInfo.github, '_blank')}
                    sx={{
                      backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(243, 244, 246, 0.7)',
                      color: darkMode ? '#e5e7eb' : '#374151',
                      borderColor: darkMode ? 'rgba(107, 114, 128, 0.5)' : 'rgba(209, 213, 219, 0.7)',
                      '&:hover': {
                        backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.9)' : 'rgba(243, 244, 246, 0.9)'
                      }
                    }}
                    className="transition-all cursor-pointer"
                  />
                </Tooltip>
              </motion.div>

              {/* Right section - Back to top */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Tooltip title="Back to top" arrow>
                  <IconButton
                    onClick={scrollToTop}
                    className={`!p-3 ${darkMode ? '!bg-gray-800/70 !text-purple-300' : '!bg-white/70 !text-purple-700'} shadow-lg`}
                    sx={{
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        transition: 'transform 0.3s ease'
                      }
                    }}
                  >
                    <ArrowUpward />
                  </IconButton>
                </Tooltip>
              </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              className={`mt-8 pt-6 border-t ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} text-center`}
            >
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;