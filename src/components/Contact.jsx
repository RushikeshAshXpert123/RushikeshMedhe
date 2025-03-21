import React from "react";
import { motion } from "framer-motion";
import {
  Email,
  Phone,
  LinkedIn, // For Languages icon
} from "@mui/icons-material";

const Contact = () => {
  const headerData = {
    name: "Rushikesh Medhe",
    position: "Full Stack Developer",
    mobile: "+91 9637645941",
    email: "Rushikeshpmedhe@gmail.com",
    linkedin: "http://www.linkedin.com/in/rushikesh-medhe-87869b214",
    image: "/Photo.jpg", // Replace with your actual image path
  };
  const sections = [
    {
      id: "contact",
      title: "Contact Me",
      icon: <Email className="text-white" />,
      content: (
        <div className="grid grid-cols-1 gap-4">
          <a href={`mailto:${headerData.email}`} className="flex items-center gap-2 text-sm ">
            <Email />
            {headerData.email}
          </a>
          <p className="flex items-center gap-2 text-sm">
            <Phone />
            {headerData.mobile}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <LinkedIn />
            <a
              href={headerData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-wrap"
            >
              LinkedIn Profile
            </a>
          </p>
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
          className="my-12 w-auto p-8 bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex items-center mb-6">
            <div className="mr-4 p-3 bg-purple-500 rounded-full text-white shadow-md">
              {section.icon}
            </div>
            <h2 className="sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide text-purple-300">
              {section.title}
            </h2>
          </div>
          <div className="text-gray-200 text-lg">{section.content}</div>
        </motion.section>
      ))}
    </div>
  );
};
export default Contact;
