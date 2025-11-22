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
        bg-dark/90 backdrop-blur-xl
        border-l border-white/10
        p-8 text-soft shadow-2xl
        overflow-y-auto
      "
      style={{ zIndex: 60 }}
    >
      {/* Back Button */}
      <button
        onClick={onClose}
        className="
          mb-6 text-sm flex items-center gap-2 
          text-accent hover:text-soft transition
        "
      >
        <span className="text-lg">←</span> Back
      </button>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

      {/* Thumbnail */}
      <img
        src={project.large}
        alt={project.title}
        className="w-full rounded-xl mb-6 object-cover shadow-lg"
      />

      {/* Tech Stack / Software */}
      <div className="mb-6">
        <div className="text-accent font-semibold mb-2">
          {isDesign ? "Software :" : "Tech Stack :"}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="
                px-3 py-1 rounded-full text-xs 
                bg-white/10 border border-white/10
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Description</h4>
        <p className="text-sm leading-relaxed text-accent/80">
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
              className="
                px-4 py-3 rounded-xl text-center
                bg-white/10 hover:bg-white/20 transition
                border border-white/10
              "
            >
              Github
            </a>

            <a
              href={project.website}
              className="
                px-4 py-3 rounded-xl text-center
                bg-accent hover:bg-accent/80 transition text-dark
              "
            >
              Website
            </a>
          </>
        ) : (
          <>
            <a
              href={project.drive}
              className="
                px-4 py-3 rounded-xl text-center
                bg-white/10 hover:bg-white/20 transition
                border border-white/10
              "
            >
              Drive
            </a>

            <a
              href={project.download}
              className="
                px-4 py-3 rounded-xl text-center
                bg-accent hover:bg-accent/80 transition text-dark
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
