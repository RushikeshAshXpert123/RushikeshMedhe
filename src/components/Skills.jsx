import React from "react";
import { motion } from "framer-motion";
import {
  Work,
  School,
  Code,
  Email,
  Phone,
  LinkedIn,
  Build,
  CheckCircle,
  Translate, // For Languages icon
} from "@mui/icons-material";

const Skills = () => {
  const skillsData = {
    personal: [
      "Management Skills",
      "Time Management",
      "Critical Thinking",
      "Communication Skills",
      "Leadership",
      "Quick Learner with the ability to adopt new skills quickly and effectively",
    ],
    professional: [
      "Python",
      "Flask",
      "MongoDB",
      "SvelteKit",
      "ReactJS",
      "NextJS",
      "GraphQL",
      "NodeJS",
      "Bootstrap",
      "TailwindCSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Chart.JS",
      "D3.JS",
      "GitHub",
    ],
  };
  const sections = [
    {
      id: "skills",
      title: "Skills",
      icon: <CheckCircle className="text-white" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Personal
            </h3>
            <ul className="list-disc pl-6 text-gray-400 leading-relaxed">
              {skillsData.personal.map((skill, i) => (
                <li key={i} className="mb-1">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          {/* Professional Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Professional
            </h3>
            <ul className="list-disc pl-6 text-gray-400 leading-relaxed grid grid-cols-2">
              {skillsData.professional.map((skill, i) => (
                <li key={i} className="mb-1">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
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
            <div className="mr-4 p-3 bg-yellow-500 rounded-full text-white shadow-md">
              {section.icon}
            </div>
            <h2 className="sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide text-yellow-300">
              {section.title}
            </h2>
          </div>
          <div className="text-gray-200 text-lg">{section.content}</div>
        </motion.section>
      ))}
    </div>
  );
};
export default Skills;
