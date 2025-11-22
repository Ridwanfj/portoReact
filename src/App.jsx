import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectList from "./components/Projects/ProjectList";
import Squares from "./components/Background/Squares";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-theme text-theme transition-colors duration-300">
      
      {/* Background Animation */}
      <div className="absolute inset-0">
        <Squares
          direction="diagonal"
          speed={0.4}
          squareSize={40}
        />
      </div>

      {/* Main Content */}
      <div className="relative">
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 md:px-8">
          <Hero />

          <section className="mt-12">
            <AboutMe />
          </section>

          <section className="mt-20">
            <ProjectList />
          </section>

          <section className="mt-20">
            <Contact />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}