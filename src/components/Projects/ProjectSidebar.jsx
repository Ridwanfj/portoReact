import React from "react";
import { motion } from "framer-motion";

export default function ProjectSidebar({ project, onClose }) {
  const isDesign = project.type === "design";

  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 90, damping: 20 }}
      className="
        fixed right-0 top-0 h-full w-[420px]
        bg-card backdrop-blur-xl
        border-l border-theme
        p-8 text-theme shadow-2xl
        overflow-y-auto scrollbar
      "
      style={{ 
        zIndex: 60,
        background: 'var(--card-bg)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)'
      }}
    >
      {/* Back Button */}
      <button
        onClick={onClose}
        className="
          mb-6 text-sm flex items-center gap-2 
          text-accent hover:opacity-80 transition-all
          font-medium
        "
      >
        <span className="text-lg">←</span> Back
      </button>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 text-theme">{project.title}</h3>

      {/* Thumbnail */}
      <div className="w-full rounded-xl mb-6 overflow-hidden shadow-lg border border-theme">
        <img
          src={project.large}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Tech Stack / Software */}
      <div className="mb-6">
        <div className="text-accent font-semibold mb-3 text-base">
          {isDesign ? "Software :" : "Tech Stack :"}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="
                px-3 py-1.5 rounded-full text-xs font-medium
                bg-card border border-theme
                text-soft transition-all
                hover:bg-accent hover:text-dark hover:border-accent
              "
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-color)'
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-3 text-theme">Description</h4>
        <p className="text-sm leading-relaxed text-soft opacity-90">
          {project.desc}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        {/* Jika WEBSITE: tampil Github & Website */}
        {!isDesign ? (
          <>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-3 rounded-xl text-center font-semibold text-sm
                bg-card border border-theme
                hover:bg-accent hover:text-dark hover:border-accent
                transition-all duration-300
                active:scale-95
              "
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-color)'
              }}
            >
              Github
            </a>

            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-3 rounded-xl text-center font-semibold text-sm
                bg-accent text-dark
                hover:opacity-90
                transition-all duration-300
                active:scale-95
                shadow-lg
              "
            >
              Website
            </a>
          </>
        ) : (
          <>
            <a
              href={project.drive}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-3 rounded-xl text-center font-semibold text-sm
                bg-card border border-theme
                hover:bg-accent hover:text-dark hover:border-accent
                transition-all duration-300
                active:scale-95
              "
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-color)'
              }}
            >
              Drive
            </a>

            <a
              href={project.download}
              download
              className="
                px-4 py-3 rounded-xl text-center font-semibold text-sm
                bg-accent text-dark
                hover:opacity-90
                transition-all duration-300
                active:scale-95
                shadow-lg
              "
            >
              Unduh
            </a>
          </>
        )}
      </div>
    </motion.aside>
  );
}