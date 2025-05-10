import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Work,
  LocationOn,
  CalendarToday,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";

const WorkExperience = ({ darkMode = true }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  const workExperiences = [
    {
      company: "Pinaca Technologies",
      date: "April 2023 - Present",
      location: "Nagpur",
      title: "Full Stack Developer",
      description: `I am an experienced Full Stack Developer proficient in Python, Flask, MongoDB, 
          SvelteKit, React.js, JSX, and MicroFrontend. I am passionate about crafting robust 
          and scalable web applications and leveraging innovative technologies to deliver 
          exceptional user experiences.`,
      skills: [
        "Python",
        "Flask",
        "MongoDB",
        "SvelteKit",
        "React.js",
        "TailwindCSS",
        "Bootstrap",
        "PostgreSQL",
        "D3.js",
        "GraphQL",
      ],
    },
    {
      company: "HDFC Life",
      date: "April 2022 - Sept 2022",
      location: "Pune",
      title: "SDM - (Sales Development Manager)",
      description: `As a Sales Development Manager at HDFC Life, I engaged with customers 
          to provide tailored insurance solutions, achieved sales targets, and mentored a team 
          of financial advisors. Focused on building strong relationships and driving business 
          growth while ensuring compliance with company standards.`,
      skills: [
        "Sales",
        "Team Leadership",
        "Customer Engagement",
        "Financial Advisory",
      ],
    },
    {
      company: "WinProxy Institute",
      date: "Sept 2021 - Feb 2022",
      location: "Mumbai",
      title: "Computer Lab Assistance cum Teacher",
      description: `At WinProxy Computer Institute, I managed the computer lab operations, 
          taught computer skills to students, and provided technical support to ensure a 
          productive learning environment.`,
      skills: [
        "Teaching",
        "Technical Support",
        "Lab Management",
        "Computer Skills",
      ],
    },
  ];

  // Animation variants
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
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
            <Work className="text-white" />
          </div>
          <h2
            className={`text-2xl md:text-3xl font-bold ${
              darkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
                : "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700"
            }`}
          >
            Work Experience
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
          {/* Profile paragraphs */}
          <motion.div variants={itemVariants} className="space-y-4">
            {workExperiences.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-10 last:mb-0"
              >
                <div className={`relative pl-6 border-l-2 ${darkMode ? "border-white/20" : "border-black/20"} hover:border-green-400 transition-colors duration-300`}>
                  {/* Timeline dot */}
                  <div className="absolute w-4 h-4 bg-green-400 rounded-full -left-[9px] top-1 shadow-lg shadow-green-400/20"></div>

                  {/* Company & Title */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } group-hover:text-green-300`}
                    >
                      {job.company}
                    </h3>
                    <h4 className={`text-lg font-medium ${darkMode ? "text-blue-300" : "text-blue-600"}`}>
                      {job.title}
                    </h4>
                  </div>

                  {/* Meta info */}
                  <div
                    className={`flex flex-wrap gap-4 text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } mb-3`}
                  >
                    <div className="flex items-center gap-1">
                      <CalendarToday fontSize="small" />
                      <span>{job.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LocationOn fontSize="small" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } leading-relaxed mb-4`}
                  >
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        variants={skillVariants}
                        className={`px-3 py-1 text-sm rounded-full transition-all ${
                          darkMode
                            ? "bg-blue-900/30 text-blue-300 border border-blue-700/30 hover:bg-blue-800/40"
                            : "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Separator except for last item */}
                {index < workExperiences.length - 1 && (
                  <div className="h-8"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default WorkExperience;
