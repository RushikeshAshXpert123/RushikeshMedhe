import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Languages from "./Languages";
import Contact from "./Contact";
import ProfileSummary from "./ProfileSummary";
import Certification from "./Certification";

const Resume = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white">
      {/* Main Header */}
      <Header />

      {/* Resume Sections */}
      <main className="container mx-auto py-12 px-6 sm:px-8 lg:px-12 space-y-16">
        <section className="transition-all duration-300">
          <ProfileSummary />
        </section>
        <section className="transition-all duration-300">
          <WorkExperience />
        </section>
        <section className="transition-all duration-300">
          <Projects />
        </section>
        <section className="transition-all duration-300">
          <Education />
        </section>
        <section className="transition-all duration-300">
          <Skills />
        </section>
        <section className="transition-all duration-300">
          <Certification />
        </section>
        <section className="transition-all duration-300">
          <Languages />
        </section>
        <section className="transition-all duration-300">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Resume;
