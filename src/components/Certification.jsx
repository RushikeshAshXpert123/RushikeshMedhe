import React, { useState } from "react";
import { motion } from "framer-motion";
import { School } from "@mui/icons-material";

const Certification = ({ darkMode = true }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  const educationDetails = [
    {
      institution: "VIP Institute",
      date: "Sept 2022 - March 2023",
      degree: "Python Full Stack Developer",
      details: [
        "Achieved an overall percentage of 95%.",
        "Learned Core Python, including data types, control structures, and object-oriented programming.",
        "Explored Advanced Python concepts such as decorators, generators, and multi-threading.",
        "Gained proficiency in front-end technologies: HTML, CSS, and JavaScript.",
        "Developed expertise in Django for building robust web applications.",
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
            Certifications
          </h2>
        </div>

        <button
          onClick={toggleExpand}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
              : "bg-white hover:bg-gray-100 text-gray-700"
          } transition-colors self-start md:self-center`}
        >
          <span>{expanded ? "Collapse" : "Expand"}</span>
          {expanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
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
              className="mb-10 last:mb-0"
            >
              {/* Institution Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {ed.institution}
                </h3>
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {ed.date}
                </span>
              </div>

              {/* Degree */}
              <p
                className={`text-md font-medium mb-3 ${
                  darkMode ? "text-blue-300" : "text-blue-600"
                }`}
              >
                {ed.degree}
              </p>

              {/* Details */}
              <ul
                className={`list-disc pl-6 leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
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

export default Certification;