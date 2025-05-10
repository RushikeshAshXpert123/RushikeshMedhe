import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Chip, IconButton, Tooltip } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub, FileDownload, LightMode, DarkMode } from "@mui/icons-material";

const Header = () => {
  // Theme toggle
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };
  
  // Typing effect
  const [displayPosition, setDisplayPosition] = useState("");
  const [positionIndex, setPositionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const positions = [
    "Full Stack Developer", 
    "React Specialist", 
    "Python Expert", 
    "SvelteKit Enthusiast",
    "UI/UX Designer"
  ];

  // Skills with icons and proficiency levels
  const skills = [
    { name: "React.js", level: 90, color: "bg-blue-500" },
    { name: "SvelteKit", level: 90, color: "bg-orange-500" },
    { name: "Python", level: 80, color: "bg-yellow-500" },
    { name: "Flask", level: 80, color: "bg-gray-500" },
    { name: "TailwindCSS", level: 90, color: "bg-teal-400" },
    { name: "Bootstrap", level: 90, color: "bg-black" },
    { name: "JSX", level: 80, color: "bg-pink-600" },
    { name: "TypeScript", level: 80, color: "bg-blue-600" },
    { name: "MongoDB", level: 80, color: "bg-green-500" },
    { name: "PostgreSQL", level: 80, color: "bg-red-600" }
  ];

  // Personal info
  const personalInfo = {
    name: "Rushikesh Medhe",
    mobile: "+91 9637645941",
    email: "Rushikeshpmedhe@gmail.com",
    linkedin: "http://www.linkedin.com/in/rushikesh-medhe-87869b214",
    github: "https://github.com/RushikeshAshXpert123/RushikeshMedhe.git",
    image: "/Photo.jpg",
    resume: "/RushikeshMedhe_FullStack_Developer_Resume.pdf",
  };

  useEffect(() => {
    const typing = setTimeout(() => {
      const currentPosition = positions[positionIndex];
      
      if (!isDeleting) {
        // Typing
        setDisplayPosition(currentPosition.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === currentPosition.length) {
          setTypingSpeed(1500); // Pause at end
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setDisplayPosition(currentPosition.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setTypingSpeed(50);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setPositionIndex((positionIndex + 1) % positions.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(typing);
  }, [charIndex, isDeleting, positionIndex, positions, typingSpeed]);

  return (
    <div className={`min-h-screen w-full ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-100 to-blue-50'} flex items-center justify-center p-4 relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating bubbles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0.2,
              scale: 0.5
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className={`absolute rounded-full ${darkMode ? 'bg-purple-500/10' : 'bg-purple-300/30'}`}
            style={{
              width: `${10 + Math.random() * 40}px`,
              height: `${10 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Animated gradient circles */}
        <motion.div 
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className={`absolute -top-24 -left-24 w-64 h-64 rounded-full ${darkMode ? 'bg-gradient-to-r from-purple-600/10 to-blue-600/10' : 'bg-gradient-to-r from-purple-300/20 to-blue-300/20'} blur-3xl`}
        />
        
        <motion.div 
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className={`absolute top-1/2 -right-24 w-80 h-80 rounded-full ${darkMode ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10' : 'bg-gradient-to-r from-blue-300/20 to-purple-300/20'} blur-3xl`}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-full mx-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`mx-auto rounded-3xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur-xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/70'} shadow-2xl overflow-hidden`}
        >
          <div className="p-6 sm:p-10">
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
              {/* Left side: Profile */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex-shrink-0 relative"
              >
                <div className="relative group">
                  <div className={`w-48 h-48 rounded-full overflow-hidden border-4 ${darkMode ? 'border-purple-500/40' : 'border-purple-400/40'} shadow-lg relative z-10`}>
                    <img 
                      src={personalInfo.image} 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-purple-600/30' : 'bg-purple-400/30'} blur-md scale-90 group-hover:scale-95 transition-all duration-500`}></div>
                  
                  {/* Theme toggle button */}
                  <Tooltip title={darkMode ? "Light mode" : "Dark mode"} arrow>
                    <IconButton
                      onClick={toggleDarkMode}
                      className={`absolute -bottom-2 -right-2 !p-3 ${darkMode ? '!bg-gray-800 !text-yellow-400' : '!bg-white !text-gray-800'} shadow-lg z-20`}
                      sx={{
                        '&:hover': {
                          transform: 'rotate(180deg)',
                          transition: 'transform 0.5s ease'
                        }
                      }}
                    >
                      {darkMode ? <LightMode /> : <DarkMode />}
                    </IconButton>
                  </Tooltip>
                </div>
              </motion.div>
              
              {/* Right side: Content */}
              <div className="flex-1">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h1 className={`text-4xl sm:text-5xl font-extrabold mb-2 ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-700 to-purple-700'} tracking-tight`}>
                    {personalInfo.name}
                  </h1>
                  
                  <div className="h-10 mb-4 flex items-center">
                    <h2 className={`text-xl sm:text-2xl italic font-medium ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                      <span className="inline-block min-w-[20ch]">
                        {displayPosition}<span className="animate-pulse">|</span>
                      </span>
                    </h2>
                  </div>
                  
                  {/* Skills with proficiency bars */}
                  <div className="mt-6 mb-8">
                    <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Technical Skills</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + (index * 0.1), duration: 0.3 }}
                          className="w-full"
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</span>
                          </div>
                          <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ delay: 0.6 + (index * 0.1) + 0.3, duration: 1 }}
                              className={`h-full rounded-full ${skill.color}`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex flex-wrap gap-3 mt-8"
                  >
                    <Tooltip title="Email me" arrow>
                      <Chip
                        icon={<Email />}
                        label={personalInfo.email}
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

                    <Tooltip title="Call me" arrow>
                      <Chip
                        icon={<Phone />}
                        label={personalInfo.mobile}
                        onClick={() => window.location.href = `tel:${personalInfo.mobile}`}
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
                  
                  {/* Resume */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mt-8"
                  >
                    <Box
                      component="button"
                      onClick={() => window.open(personalInfo.resume, '_blank')}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 4,
                        py: 2,
                        borderRadius: '12px',
                        background: darkMode 
                          ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%)' 
                          : 'linear-gradient(135deg, rgba(124, 58, 237, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%)',
                        color: 'white',
                        fontWeight: 'medium',
                        transition: 'all 0.3s ease',
                        boxShadow: darkMode 
                          ? '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: darkMode 
                            ? '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)' 
                            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        }
                      }}
                    >
                      <FileDownload />
                      Download Resume
                    </Box>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;