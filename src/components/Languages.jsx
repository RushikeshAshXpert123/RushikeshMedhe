import React, { useState } from "react";
import { motion } from "framer-motion";
import { Translate } from "@mui/icons-material";

const Language = ({ darkMode = true }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  const languagesData = [
    {
      language: "Marathi",
      proficiency: "Native",
      rating: 5,
    },
    {
      language: "Hindi",
      proficiency: "Native",
      rating: 5,
    },
    {
      language: "English",
      proficiency: "Proficient",
      rating: 4,
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${darkMode ? 'bg-gradient-to-br from-pink-600 to-purple-600' : 'bg-gradient-to-br from-pink-500 to-purple-500'} shadow-lg`}>
            <Translate className="h-6 w-6 text-white" />
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700'}`}>
            Languages
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
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            {languagesData.map((lang, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="mb-4"
              >
                {/* Language Name & Proficiency */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    {lang.language}
                  </h3>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {lang.proficiency}
                  </span>
                </div>
                
                {/* Rating as circles */}
                <div className="flex gap-2">
                  {Array(5).fill(0).map((_, i) => (
                    <span 
                      key={i}
                      className={`h-3 w-3 rounded-full ${i < lang.rating ? 
                        (darkMode ? 'bg-pink-400' : 'bg-pink-500') : 
                        (darkMode ? 'bg-gray-600' : 'bg-gray-300')}`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-700/70' : 'border-gray-200'}`}
          >
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Fluent in multiple languages with native proficiency in Marathi and Hindi, 
              and professional working proficiency in English. Able to communicate 
              effectively in multicultural environments.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Language;