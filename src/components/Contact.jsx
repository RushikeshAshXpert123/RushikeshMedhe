import React, { useState } from "react";
import { motion } from "framer-motion";
import { Email, Phone, LinkedIn } from "@mui/icons-material";

const Contact = ({ darkMode = true }) => {
  const [expanded, setExpanded] = useState(false); // Default expanded since contact info is usually important
  const toggleExpand = () => setExpanded(!expanded);

  const contactData = {
    email: "Rushikeshpmedhe@gmail.com",
    mobile: "+91 9637645941",
    linkedin: "http://www.linkedin.com/in/rushikesh-medhe-87869b214",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${darkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-purple-500 to-blue-500'} shadow-lg`}>
            <Email className="h-6 w-6 text-white" />
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700'}`}>
            Contact Me
          </h2>
        </div>
        
        <button 
          onClick={toggleExpand}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-700'} transition-colors self-start md:self-center`}
        >
          <span>{expanded ? 'Collapse' : 'Expand'}</span>
          {expanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Content */}
      {expanded && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-10 last:mb-0"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Email */}
            <motion.div 
              variants={itemVariants}
              className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'} transition-colors`}
            >
              <div className={`p-2 rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-600'}`}>
                <Email />
              </div>
              <a 
                href={`mailto:${contactData.email}`} 
                className={`text-lg ${darkMode ? 'text-gray-100 hover:text-blue-300' : 'text-gray-800 hover:text-blue-600'} transition-colors`}
              >
                {contactData.email}
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div 
              variants={itemVariants}
              className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'} transition-colors`}
            >
              <div className={`p-2 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                <Phone />
              </div>
              <p className={`text-lg ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                {contactData.mobile}
              </p>
            </motion.div>

            {/* LinkedIn */}
            <motion.div 
              variants={itemVariants}
              className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'} transition-colors`}
            >
              <div className={`p-2 rounded-full ${darkMode ? 'bg-sky-900/30 text-sky-300' : 'bg-sky-100 text-sky-600'}`}>
                <LinkedIn />
              </div>
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg ${darkMode ? 'text-sky-300 hover:text-sky-200' : 'text-sky-600 hover:text-sky-700'} transition-colors`}
              >
                LinkedIn Profile
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;