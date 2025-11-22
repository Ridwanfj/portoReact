import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectSidebar from "./ProjectSidebar";

export default function ProjectList() {
  const [filter, setFilter] = useState("website");
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = projects.filter(p => p.type === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div id="projects" ref={ref} className="text-theme">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl text-center font-extrabold text-theme mb-2">
          PROJECTS
        </h2>
        <p className="text-center text-soft opacity-70 mb-8">
          Explore my latest work in web development and design
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div 
        className="flex justify-center gap-4 mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button 
          onClick={() => setFilter("website")} 
          className={`
            px-6 py-2.5 rounded-full font-semibold text-sm
            transition-all duration-300
            ${filter === 'website' 
              ? 'bg-accent text-dark shadow-lg' 
              : 'bg-card text-soft border border-theme hover:bg-accent hover:text-dark hover:border-accent'
            }
          `}
          style={filter !== 'website' ? {
            background: 'var(--card-bg)',
            borderColor: 'var(--border-color)'
          } : {}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Website
        </motion.button>

        <motion.button 
          onClick={() => setFilter("design")} 
          className={`
            px-6 py-2.5 rounded-full font-semibold text-sm
            transition-all duration-300
            ${filter === 'design' 
              ? 'bg-accent text-dark shadow-lg' 
              : 'bg-card text-soft border border-theme hover:bg-accent hover:text-dark hover:border-accent'
            }
          `}
          style={filter !== 'design' ? {
            background: 'var(--card-bg)',
            borderColor: 'var(--border-color)'
          } : {}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Design
        </motion.button>
      </motion.div>

      {/* Projects Grid Container */}
      <motion.div 
        className="mt-8 bg-card p-6 rounded-2xl border border-theme shadow-xl"
        style={{ 
          background: 'var(--card-bg)',
          borderColor: 'var(--border-color)'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 scrollbar" 
          style={{ 
            maxHeight: "520px", 
            overflowY: "auto", 
            padding: 8 
          }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={filter} // Re-animate when filter changes
        >
          {filtered.map((p, index) => (
            <motion.div
              key={p.id}
              variants={itemVariants}
              custom={index}
            >
              <ProjectCard project={p} onOpen={setActive} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Sidebar Detail */}
      {active && <ProjectSidebar project={active} onClose={() => setActive(null)} />}
    </div>
  );
}