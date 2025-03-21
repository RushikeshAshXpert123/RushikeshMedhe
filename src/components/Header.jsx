import React from "react";
import { Email, Phone, LinkedIn, CloudDownload } from "@mui/icons-material";

const Header = () => {
  const headerData = {
    name: "Rushikesh Medhe",
    position: "Full Stack Developer",
    mobile: "+91 9637645941",
    email: "Rushikeshpmedhe@gmail.com",
    linkedin: "http://www.linkedin.com/in/rushikesh-medhe-87869b214",
    image: "/Photo.jpg",
    resume: "/RushikeshMedhe_FullStackDeveloper_Resume.pdf",
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 py-12 px-6 shadow-lg rounded-b-3xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={headerData.image}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-600 shadow-md"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              {headerData.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 italic">
              {headerData.position}
            </p>
          </div>
        </div>

        {/* Contact and Action Links */}
        <div className="mt-8 md:mt-0 space-y-4">
          <a
            href={`tel:${headerData.mobile}`}
            className="flex items-center gap-3 bg-gray-700 text-white py-2 px-4 rounded-xl shadow hover:text-blue-600 transition-colors duration-300"
          >
            <Phone className="text-gray-300" />
            <span>{headerData.mobile}</span>
          </a>
          <a
            href={`mailto:${headerData.email}`}
            className="flex items-center gap-3 bg-gray-700 text-white py-2 px-4 rounded-xl shadow hover:text-blue-600 transition-colors duration-300"
          >
            <Email className="text-gray-300" />
            <span>{headerData.email}</span>
          </a>
          <a
            href={headerData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-700 text-white py-2 px-4 rounded-xl shadow hover:text-blue-600 transition-colors duration-300"
          >
            <LinkedIn className="text-gray-300" />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href={headerData.resume}
            download
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-700 text-white py-2 px-4 rounded-xl shadow hover:text-blue-600 transition-colors duration-300"
          >
            <CloudDownload className="text-gray-300" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
