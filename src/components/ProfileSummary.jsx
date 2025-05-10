import React, { useState } from "react";
import { motion } from "framer-motion";

const ProfileSummary = ({ darkMode = true }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => setExpanded(!expanded);

  // Skill categories for better organization
  const skillCategories = [
    {
      title: "Frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      skills: ["React.js", "SvelteKit", "Next.js", "TailwindCSS", "Bootstrap", "D3.js"]
    },
    {
      title: "Backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
      skills: ["Python", "Flask", "Node.js", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>
      ),
      skills: ["MongoDB", "SQL"]
    },
    {
      title: "Architecture",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      ),
      skills: ["MicroFrontend", "Scalable Systems"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${darkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-purple-500 to-blue-500'} shadow-lg`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700'}`}>
            Profile Summary
          </h2>
        </div>
        
        <button 
          onClick={toggleExpand}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-700'} transition-colors self-start md:self-center`}
        >
          <span>{expanded ? 'Collapse' : 'Expand'}</span>
          {expanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
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
          <motion.div 
            variants={itemVariants} 
            className="space-y-4"
          >
            <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Experienced <span className={`font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>Full Stack Developer</span> with a strong background in both front-end and back-end development. 
              Proficient in <span className={`font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Python, Flask, MongoDB, and Node.js</span> for backend development, and highly skilled in <span className={`font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>React.js, 
              SvelteKit, and Next.js</span> for frontend frameworks. Extensive experience in JavaScript development, building 
              dynamic, high-performance web applications with a focus on scalability and efficiency.
            </p>
            
            <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Expert in designing and developing <span className={`font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>RESTful APIs</span>, optimizing database performance, and implementing 
              <span className={`font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}> MicroFrontend architectures</span> to create modular and scalable applications. Adept at crafting visually appealing, 
              interactive user interfaces using <span className={`font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Bootstrap, TailwindCSS, and D3.js</span>, ensuring seamless user experiences.
            </p>
            
            <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Passionate about leveraging both server-side and client-side technologies to develop innovative, high-quality 
              solutions. Committed to delivering performance-optimized applications with a strong emphasis on usability, 
              maintainability, and cutting-edge web development best practices.
            </p>
          </motion.div>

          {/* Skills showcase */}
          <motion.div variants={itemVariants} className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-700/70' : 'border-gray-200'}`}>
            <h3 className={`text-xl md:text-2xl font-semibold mb-6 ${darkMode ? 'text-white/90' : 'text-gray-800'}`}>
              Technology Stack
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className={`rounded-xl p-5 ${darkMode ? 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600' : 'bg-white/70 border border-gray-200 hover:border-gray-300'} shadow-lg transition-all`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${
                      idx === 0 ? `${darkMode ? 'bg-blue-900/70 text-blue-300' : 'bg-blue-100 text-blue-600'}` :
                      idx === 1 ? `${darkMode ? 'bg-purple-900/70 text-purple-300' : 'bg-purple-100 text-purple-600'}` :
                      idx === 2 ? `${darkMode ? 'bg-green-900/70 text-green-300' : 'bg-green-100 text-green-600'}` :
                      `${darkMode ? 'bg-amber-900/70 text-amber-300' : 'bg-amber-100 text-amber-600'}`
                    }`}>
                      {category.icon}
                    </div>
                    <h4 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        variants={skillVariants}
                        custom={skillIdx}
                        className={`px-3 py-1 text-sm rounded-full transition-all ${
                          idx === 0 ? `${darkMode ? 'bg-blue-900/30 text-blue-300 border border-blue-700/30 hover:bg-blue-800/40' : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'}` :
                          idx === 1 ? `${darkMode ? 'bg-purple-900/30 text-purple-300 border border-purple-700/30 hover:bg-purple-800/40' : 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'}` :
                          idx === 2 ? `${darkMode ? 'bg-green-900/30 text-green-300 border border-green-700/30 hover:bg-green-800/40' : 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100'}` :
                          `${darkMode ? 'bg-amber-900/30 text-amber-300 border border-amber-700/30 hover:bg-amber-800/40' : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'}`
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileSummary;