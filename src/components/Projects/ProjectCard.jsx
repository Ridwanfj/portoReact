import React from "react";

export default function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden group cursor-pointer border border-theme transition-all duration-300 hover:shadow-2xl"
      style={{ minHeight: 180 }}
      onClick={() => onOpen(project)}
    >
      {/* Thumbnail */}
      <img
        src={project.thumb}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Gradient Overlay - adapts to theme */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          translate-y-full group-hover:translate-y-0
          transition-all duration-500 ease-out
        "
      />

      {/* Text Content */}
      <div className="absolute bottom-4 left-4 text-white z-10 transition-all duration-300">
        <div className="text-xl font-bold drop-shadow-lg">{project.title}</div>
        <div className="text-sm text-accent/90 drop-shadow-md">{project.subtitle}</div>
      </div>

      {/* ID Badge */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpen(project);
        }}
        className="
          absolute top-4 left-4 
          bg-card backdrop-blur-md
          px-3 py-1 rounded-md 
          text-soft text-sm font-semibold
          z-20 
          border border-theme
          hover:bg-accent hover:text-dark hover:border-accent
          transition-all duration-300
          active:scale-95
        "
        style={{
          background: 'var(--card-bg)',
          borderColor: 'var(--border-color)'
        }}
      >
        #{project.id}
      </button>
    </div>
  );
}