import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Languages from "./Languages";
import Contact from "./Contact";
import ProfileSummary from "./ProfileSummary";
import Certification from "./Certification";

const Resume = () => {
  // Share dark mode state with header
  const [darkMode, setDarkMode] = useState(true);
  
  // Update dark mode from localStorage if header component changes it
  useEffect(() => {
    const handleStorageChange = () => {
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode !== null) {
        setDarkMode(storedDarkMode === 'true');
      }
    };
    
    // Set up listener
    window.addEventListener('storage', handleStorageChange);
    
    // Initial check
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === 'true');
    }
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [localStorage.getItem('darkMode')]);
  
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  // For observing sections and triggering animations
  const [activeSections, setActiveSections] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSections(prev => ({ 
              ...prev, 
              [entry.target.id]: true 
            }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('section[id]').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div 
      className={`min-h-screen ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-900 via-purple-950 to-gray-950' 
          : 'bg-gradient-to-b from-blue-50 via-purple-50 to-white'
      } text-${darkMode ? 'white' : 'gray-800'} transition-colors duration-500`}
    >
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute top-0 right-0 w-1/3 h-1/3 rounded-full ${darkMode ? 'bg-purple-800/10' : 'bg-purple-200/30'} blur-3xl transform translate-x-1/4 -translate-y-1/4`}></div>
        <div className={`absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full ${darkMode ? 'bg-blue-800/10' : 'bg-blue-200/30'} blur-3xl transform -translate-x-1/4 translate-y-1/4`}></div>
      </div>

      {/* Main Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Resume Sections */}
      <main className="container mx-auto py-12 px-6 sm:px-8 lg:px-16 space-y-24 relative z-10">
        {/* Section Divider - decorative element */}
        <div className="absolute left-0 h-full w-px top-0 hidden lg:block">
          <div className={`w-px h-full ${darkMode ? 'bg-gradient-to-b from-transparent via-purple-500/30 to-transparent' : 'bg-gradient-to-b from-transparent via-purple-300/50 to-transparent'}`}></div>
        </div>
        
        <motion.section 
          id="profile"
          initial="hidden"
          animate={activeSections.profile ? "visible" : "hidden"}
          variants={sectionVariants}
          className="transition-all duration-300"
        >
          <div className={`relative rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur-sm border ${darkMode ? 'border-gray-800' : 'border-gray-200'} shadow-xl p-6 sm:p-8`}>
            <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-purple-400 to-blue-400'}`}></div>
            <ProfileSummary darkMode={darkMode} />
          </div>
        </motion.section>
        
        <motion.section 
          id="experience"
          initial="hidden"
          animate={activeSections.experience ? "visible" : "hidden"}
          variants={sectionVariants}
          className="transition-all duration-300"
        >
          <div className={`relative rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur-sm border ${darkMode ? 'border-gray-800' : 'border-gray-200'} shadow-xl p-6 sm:p-8`}>
            <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${darkMode ? 'bg-gradient-to-r from-blue-600 to-teal-600' : 'bg-gradient-to-r from-blue-400 to-teal-400'}`}></div>
            <WorkExperience darkMode={darkMode} />
          </div>
        </motion.section>
        
        <motion.section 
          id="projects"
          initial="hidden"
          animate={activeSections.projects ? "visible" : "hidden"}
          variants={sectionVariants}
          className="transition-all duration-300"
        >
          <div className={`relative rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur-sm border ${darkMode ? 'border-gray-800' : 'border-gray-200'} shadow-xl p-6 sm:p-8`}>
            <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${darkMode ? 'bg-gradient-to-r from-teal-600 to-green-600' : 'bg-gradient-to-r from-teal-400 to-green-400'}`}></div>
            <Projects darkMode={darkMode} />
          </div>
        </motion.section>
        
        <motion.section 
          id="education"
          initial="hidden"
          animate={activeSections.education ? "visible" : "hidden"}
          variants={sectionVariants}
          className="transition-all duration-300"
        >
          <div className={`relative rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur-sm border ${darkMode ? 'border-gray-800' : 'border-gray-200'} shadow-xl p-6 sm:p-8`}>
            <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${darkMode ? 'bg-gradient-to-r from-green-600 to-yellow-600' : 'bg-gradient-to-r from-green-400 to-yellow-400'}`}></div>
            <Education darkMode={darkMode} />
          </div>
        </motion.section>
        
          <motion.section 
            id="skills"
            initial="hidden"
            animate={activeSections.skills ? "visible" : "hidden"}
            variants={sectionVariants}
            className="transition-all duration-300"
          >
            <div className={`relative rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur-sm border ${darkMode ? 'border-gray-800' : 'border-gray-200'} shadow-xl p-6 sm:p-8 h-full`}>
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${darkMode ? 'bg-gradient-to-r from-yellow-600 to-orange-600' : 'bg-gradient-to-r from-yellow-400 to-orange-400'}`}></div>
              <Skills darkMode={darkMode} />
            </div>
          </motion.section>
          
          <motion.section 
            id="certification"
            initial="hidden"
            animate={activeSections.certification ? "visible" : "hidden"}
            variants={sectionVariants}
            className="transition-all duration-300"
          >
            <div className={`relative rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur-sm border ${darkMode ? 'border-gray-800' : 'border-gray-200'} shadow-xl p-6 sm:p-8 h-full`}>
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${darkMode ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'bg-gradient-to-r from-orange-400 to-red-400'}`}></div>
              <Certification darkMode={darkMode} />
            </div>
          </motion.section>
        
          <motion.section 
            id="languages"
            initial="hidden"
            animate={activeSections.languages ? "visible" : "hidden"}
            variants={sectionVariants}
            className="transition-all duration-300"
          >
            <div className={`relative rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur-sm border ${darkMode ? 'border-gray-800' : 'border-gray-200'} shadow-xl p-6 sm:p-8 h-full`}>
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${darkMode ? 'bg-gradient-to-r from-red-600 to-pink-600' : 'bg-gradient-to-r from-red-400 to-pink-400'}`}></div>
              <Languages darkMode={darkMode} />
            </div>
          </motion.section>
          
          <motion.section 
            id="contact"
            initial="hidden"
            animate={activeSections.contact ? "visible" : "hidden"}
            variants={sectionVariants}
            className="transition-all duration-300"
          >
            <div className={`relative rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur-sm border ${darkMode ? 'border-gray-800' : 'border-gray-200'} shadow-xl p-6 sm:p-8 h-full`}>
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${darkMode ? 'bg-gradient-to-r from-pink-600 to-purple-600' : 'bg-gradient-to-r from-pink-400 to-purple-400'}`}></div>
              <Contact darkMode={darkMode} />
            </div>
          </motion.section>
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Resume;