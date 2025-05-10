import React, { useState } from "react";
import { motion } from "framer-motion";
import { Build, Link, CalendarToday, Web, Code } from "@mui/icons-material";

const Projects = ({ darkMode = true }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  const projects = [
    {
      company: "Pinaca Technologies",
      date: "May 2024 - Present",
      projectTitle:
        "Maharashtra Advanced Research and Vigilance for Enforcement of Reformed Laws (MARVEL)",
      role: "Full Stack Developer",
      details: [
        "Contributed to the development of the MARVEL project, focusing on creating an efficient and user-friendly interface.",
        "Utilized SvelteKit and React.js for building dynamic and responsive frontend components.",
        "Employed Bootstrap and TailwindCSS to design attractive, functional, and consistent UI layouts.",
        "Ensured seamless user experience and optimized performance across different platforms.",
      ],
      tags: [
        "SvelteKit",
        "React.js",
        "Bootstrap",
        "TailwindCSS",
        "UI/UX",
        "Responsive Design",
        "Flask",
        "Python",
        "MongoDB",
        "PostgreSQL",
      ],
      color: "from-indigo-500 to-purple-400",
    },
    {
      company: "AshXpert",
      link: "https://www.ashxpert.in/",
      date: "Sept 2024 - Feb 2025",
      projectTitle: "Web Application Development for AshXpert",
      role: "Full Stack Developer",
      details: [
        "Developed a robust and scalable online web application using modern web technologies.",
        "Designed a high-performance and responsive frontend with SvelteKit.",
        "Implemented an efficient backend using Flask and Python for API handling and business logic.",
        "Integrated MongoDB for seamless data management, ensuring flexibility and scalability.",
        "Delivered an exceptional user experience with a focus on performance and functionality.",
      ],
      tags: ["SvelteKit", "Flask", "Python", "MongoDB", "Responsive Design"],
      color: "from-blue-400 to-cyan-300",
    },
    {
      company: "Pinaca Technologies",
      date: "June 2023 - April 2024",
      projectTitle: "Thunderbolt",
      role: "Full Stack Developer",
      details: [
        "Worked as a Full Stack Developer on the Thunderbolt project, delivering end-to-end solutions.",
        "Developed the backend using Python, Flask, and MongoDB to create scalable and efficient APIs.",
        "Built the frontend with SvelteKit and Bootstrap, ensuring a responsive and visually appealing user interface.",
        "Integrated backend and frontend seamlessly to provide a smooth and functional user experience.",
      ],
      tags: [
        "Python",
        "Flask",
        "MongoDB",
        "SvelteKit",
        "Bootstrap",
        "API Development",
      ],
      color: "from-amber-500 to-yellow-400",
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
            <Build className="text-white" />
          </div>
          <h2
            className={`text-2xl md:text-3xl font-bold ${
              darkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
                : "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700"
            }`}
          >
            Projects
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
          <motion.div variants={itemVariants} className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-xl p-5 transition-all ${
                  darkMode
                    ? "bg-gray-800/50 border border-gray-700/50 hover:border-gray-600"
                    : "bg-white/70 border border-gray-200 hover:border-gray-300"
                } shadow-lg`}
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-2 bg-gradient-to-r ${project.color} rounded-lg shadow-md`}
                    >
                      <Web className="text-white" fontSize="small" />
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      {project.company}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-blue-400 hover:text-blue-300 transition-colors`}
                        >
                          <Link fontSize="small" />
                        </a>
                      )}
                    </h3>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <CalendarToday fontSize="small" />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Project Title & Role */}
                <div className="mb-4">
                  <h4
                    className={`text-lg font-semibold ${
                      darkMode ? "text-blue-300" : "text-blue-600"
                    } mb-1`}
                  >
                    {project.projectTitle}
                  </h4>
                  <p
                    className={`italic flex items-center gap-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <Code fontSize="small" />
                    <span>{project.role}</span>
                  </p>
                </div>

                {/* Project Details */}
                <ul
                  className={`space-y-2 pl-5 mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="relative pl-2">
                      <span className="absolute -left-5 top-2 w-3 h-3 bg-blue-400/30 rounded-full"></span>
                      <span className="absolute -left-4 top-3 w-1 h-1 bg-blue-400 rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Technologies Used */}
                <div
                  className={`flex flex-wrap gap-2 mt-4 pt-4 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-sm rounded-full transition-all ${
                        darkMode
                          ? "bg-blue-900/30 text-blue-300 border border-blue-700/30 hover:bg-blue-800/40"
                          : "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
