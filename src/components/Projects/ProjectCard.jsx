import React from "react";
const themeStyle = { color: "var(--text-main)" , background: "transparent" };


export default function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden group cursor-pointer"
      style={{ minHeight: 180 }}
      onClick={() => onOpen(project)} // Klik card buka sidebar
    >
      {/* Thumbnail */}
      <img
        src={project.thumb}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      {/* BLACK OVERLAY (muncul dari bawah) */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-t from-black/70 to-transparent
          translate-y-full group-hover:translate-y-0
          transition-all duration-500 ease-out
        "
      />

      {/* Text Content */}
      <div className="absolute bottom-4 left-4 text-white z-10">
        <div className="text-xl font-bold">{project.title}</div>
        <div className="text-sm text-accent/80">{project.subtitle}</div>
      </div>

      {/* ID Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Hindari trigger card click
          onOpen(project);
        }}
        className="absolute top-4 left-4 bg-white/10 px-3 py-1 rounded-md text-soft z-20 backdrop-blur-md"
      >
        #{project.id}
      </button>
    </div>
  );
}
