import React from "react";
import { motion } from "framer-motion";
import { School } from "@mui/icons-material";

const Certification = () => {
  const educationDetails = [
    {
      institution: "VIP Institute",
      date: "Sept 2022 - March 2022",
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

  const sections = [
    {
      id: "certificate",
      title: "Certifications",
      icon: <School className="text-white" fontSize="large" />,
      content: (
        <div>
          {educationDetails.map((ed, index) => (
            <div key={index} className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-100">
                  {ed.institution}
                </h3>
                <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-gray-400 mt-1 sm:mt-0">
                  <span>{ed.date}</span>
                </div>
              </div>
              <p className="mt-2 font-semibold text-gray-200">{ed.degree}</p>
              <ul className="list-disc pl-6 text-gray-400 mt-1 leading-relaxed">
                {ed.details.map((item, i) => (
                  <li key={i}>{item}</li>
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
            <div className="mr-4 p-3 bg-orange-500 rounded-full text-white shadow-md">
              {section.icon}
            </div>
            <h2 className="sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide text-orange-300">
              {section.title}
            </h2>
          </div>
          <div className="text-gray-200 text-lg">{section.content}</div>
        </motion.section>
      ))}
    </div>
  );
};

export default Certification;
