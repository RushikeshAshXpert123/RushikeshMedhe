import React from "react";
import { motion } from "framer-motion";
import { Build, Link } from "@mui/icons-material";

const Projects = () => {
  const projects = [
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
    },
    {
      company: "Pinaca Technologies",
      date: "May 2024 - March 2025",
      projectTitle:
        "MARVEL (Maharashtra Research and Vigilance for Law Enforcement)",
      role: "Frontend Developer",
      details: [
        "Contributed to the development of the MARVEL project, focusing on creating an efficient and user-friendly interface.",
        "Utilized SvelteKit and React.js for building dynamic and responsive frontend components.",
        "Employed Bootstrap and TailwindCSS to design attractive, functional, and consistent UI layouts.",
        "Ensured seamless user experience and optimized performance across different platforms.",
      ],
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
    },
  ];
  const sections = [
    {
      id: "projects",
      title: "Projects",
      icon: <Build className="text-white" />,
      content: (
        <div>
          {projects.map((proj, index) => (
            <div key={index} className="mb-8">
              {/* Top row: Company, Date */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-100 flex gap-2">
                  {proj.company}
                  {proj.company === "AshXpert" && proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Project"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Link />
                      </a>
                  )}
                </h3>
                <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-gray-400 mt-1 sm:mt-0">
                  <span>{proj.date}</span>
                </div>
              </div>

              {/* Project Title & Role */}
              <p className="mt-2 font-semibold text-gray-200">
                {proj.projectTitle}
              </p>
              <p className="text-gray-400 italic mb-2">Role: {proj.role}</p>

              {/* Details (bullet points) */}
              <ul className="list-disc pl-6 text-gray-400 leading-relaxed">
                {proj.details.map((point, i) => (
                  <li key={i} className="mb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="my-12 p-8 bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex items-center mb-6">
            <div className="mr-4 p-3 bg-blue-500 rounded-full text-white shadow-md">
              {section.icon}
            </div>
            <h2 className="sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide text-blue-300">
              {section.title}
            </h2>
          </div>
          <div className="text-gray-200 text-lg">{section.content}</div>
        </motion.section>
      ))}
    </div>
  );
};
export default Projects;
