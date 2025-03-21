import React from "react";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
  const headerData = {
    name: "Rushikesh Medhe",
  };

  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto text-center space-y-6">
        {/* Name and Tagline */}
        <h4 className="text-lg font-semibold text-gray-300">
          {headerData.name}
        </h4>
        <p className="text-sm text-gray-400">
          Dedicated to creating innovative solutions and achieving excellence.
        </p>

        {/* Contact and Social Links */}
        <div className="flex justify-center items-center space-x-8">
          <a
            href="mailto:Rushikeshpmedhe@gmail.com"
            className="flex items-center space-x-2 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <Email fontSize="small" />
            <span>Email</span>
          </a>
          <a
            href="http://www.linkedin.com/in/rushikesh-medhe-87869b214"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedIn fontSize="small" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/RushikeshAshXpert123/RushikeshMedhe.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHub fontSize="small" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {headerData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
