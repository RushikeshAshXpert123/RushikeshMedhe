import React from "react";
import { motion } from "framer-motion";
import {
  Translate, // For Languages icon
} from "@mui/icons-material";

const Language = () => {
  const languagesData = [
    {
      language: "Marathi",
      proficiency: "Native",
      rating: 5, // 5 out of 5
    },
    {
      language: "Hindi",
      proficiency: "Native",
      rating: 5, // 5 out of 5
    },
    {
      language: "English",
      proficiency: "Proficient",
      rating: 4, // 4 out of 5
    },
  ];
  const sections = [
    {
      id: "languages",
      title: "Languages",
      icon: <Translate className="text-white" />,
      content: (
        <div>
          {languagesData.map((lang, index) => (
            <div key={index} className="mb-4 flex flex-col">
              {/* Language Name & Proficiency */}
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-100">{lang.language}</p>
                <p className="text-sm text-gray-400">{lang.proficiency}</p>
              </div>
              {/* Rating as circles */}
              <div className="flex gap-2 mt-1">
                {Array(lang.rating)
                  .fill(0)
                  .map((_, circleIndex) => (
                    <span key={circleIndex} className="text-blue-400">
                      ●
                    </span>
                  ))}
              </div>
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
                <div className="mr-4 p-3 bg-pink-500 rounded-full text-white shadow-md">
                  {section.icon}
                </div>
                <h2 className="sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide text-pink-300">
                  {section.title}
                </h2>
              </div>
              <div className="text-gray-200 text-lg">{section.content}</div>
            </motion.section>
          ))}
        </div>
  );
};
export default Language;
