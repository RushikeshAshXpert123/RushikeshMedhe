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

const WorkExperience = () => {
  const workExperiences = [
    {
      company: "Pinaca Technologies",
      date: "April 2023 - March 2025",
      location: "Nagpur",
      title: "Full Stack Developer",
      description: `I am an experienced Full Stack Developer proficient in Python, Flask, MongoDB, 
          SvelteKit, React.js, JSX, and MicroFrontend. I am passionate about crafting robust 
          and scalable web applications and leveraging innovative technologies to deliver 
          exceptional user experiences.`,
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
    },
    {
      company: "WinProxy Institute",
      date: "Sept 2021 - Feb 2022",
      location: "Mumbai",
      title: "Computer Lab Assistance cum Teacher",
      description: `At WinProxy Computer Institute, I managed the computer lab operations, 
          taught computer skills to students, and provided technical support to ensure a 
          productive learning environment.`,
    },
  ];
  const sections = [
    {
      id: "experience",
      title: "Work Experience",
      icon: <Work className="text-white" />,
      content: (
        <div>
          {workExperiences.map((job, index) => (
            <div key={index} className="mb-8">
              {/* Top row: Company, Dates, Location */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-100">
                  {job.company}
                </h3>
                <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-gray-400 mt-1 sm:mt-0">
                  <span>{job.date}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              {/* Role Title */}
              <p className="mt-2 font-semibold text-gray-200">{job.title}</p>
              {/* Description */}
              <p className="text-gray-400 mt-1 leading-relaxed">
                {job.description}
              </p>
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
            <div className="mr-4 p-3 bg-green-500 rounded-full text-white shadow-md">
              {section.icon}
            </div>
            <h2 className="sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide text-green-300">
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

export default WorkExperience;