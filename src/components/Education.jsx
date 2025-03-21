import React from "react";
import { motion } from "framer-motion";
import {
    School,
  } from "@mui/icons-material";
const Education = () => {
    const educationDetails = [
        {
          institution: "RTM Nagpur University",
          date: "2018 - 2021",
          degree: "Bachelor of Commerce",
          details: [
            "Achieved a CGPA of 9.28 with an overall percentage of 80%.",
            "Graduated as the highest-ranking student in the college.",
            "Demonstrated strong academic excellence with a focus on financial accounting principles and practices.",
          ],
        },
      ];
    const sections = [
        {
              id: "education",
              title: "Education",
              icon: <School className="text-white" />,
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
                   <div className="mr-4 p-3 bg-red-500 rounded-full text-white shadow-md">
                     {section.icon}
                   </div>
                   <h2 className="sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide text-red-300">
                     {section.title}
                   </h2>
                 </div>
                 <div className="text-gray-200 text-lg">
                   {section.content}
                 </div>
               </motion.section>
             ))}
           </div>
    )

}
export default Education;
