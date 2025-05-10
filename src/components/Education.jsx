import React, { useState } from "react";
import { motion } from "framer-motion";
import { School } from "@mui/icons-material";

const Education = ({ darkMode = true }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  const educationDetails = [
    {
      institution: "RTM Nagpur University",
      date: "2018 - 2021",
      degree: "Bachelor of Commerce",
      details: [
        "Achieved a CGPA of 9.28 with an overall percentage of 80%.",
        "Graduated as the highest-ranking student in the college.",
        "Demonstrated strong academic excellence with a focus on financial accounting principles and practices.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-lg ${
              darkMode
                ? "bg-gradient-to-br from-purple-600 to-blue-600"
                : "bg-gradient-to-br from-purple-500 to-blue-500"
            } shadow-lg`}
          >
            <School className="text-white" />
          </div>
          <h2
            className={`text-2xl md:text-3xl font-bold ${
              darkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
                : "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700"
            }`}
          >
            Education
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
          className="space-y-8"
        >
          {educationDetails.map((ed, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-xl p-5 shadow-lg transition-all ${
                darkMode
                  ? "bg-gray-800/50 border border-gray-700/50 hover:border-gray-600"
                  : "bg-white/70 border border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className={`text-lg font-semibold ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                  {ed.institution}
                </h3>
                <div
                  className={`flex flex-col sm:flex-row sm:gap-4 text-sm mt-1 sm:mt-0 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  <span>{ed.date}</span>
                </div>
              </div>
              <p className={`mt-2 font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{ed.degree}</p>
              <ul className={`list-disc pl-6 mt-1 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {ed.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Education;
