import React from "react";
import { motion } from "framer-motion";
import { Code } from "@mui/icons-material";

const ProfileSummary = () => {
  const sections = [
    {
      id: "profile-summary",
      title: "Profile Summary",
      icon: <Code className="text-white" />,
      content: (
        <>
          <p className="leading-relaxed">
            Experienced Full Stack Developer with expertise in both front-end and back-end development. Proficient in Python,
            Flask, MongoDB, and Node.js for backend development, and skilled in React.js, SvelteKit, and Next.js for frontend.
            Adept at creating visually appealing and interactive user interfaces using Bootstrap, TailwindCSS, and D3.js.
          </p>
          <p className="mt-4 leading-relaxed">
            Highly experienced in developing RESTful APIs, optimizing databases, and implementing MicroFrontend architectures
            to build scalable and modular applications. Committed to delivering high-quality, performance-optimized solutions
            with a strong focus on innovation and exceptional user experience.
          </p>
        </>
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
            <div className="mr-4 p-3 bg-indigo-500 rounded-full text-white shadow-md">
              {section.icon}
            </div>
            <h2 className="sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide text-indigo-300">
              {section.title}
            </h2>
          </div>
          <div className="text-gray-200 text-lg">
            {section.content}
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default ProfileSummary;
