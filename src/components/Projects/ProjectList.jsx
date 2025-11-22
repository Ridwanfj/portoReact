import React, { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectSidebar from "./ProjectSidebar";
const themeStyle = { color: "var(--text-main)" , background: "transparent" };


export default function ProjectList() {
  const [filter, setFilter] = useState("website");
  const [active, setActive] = useState(null);

  const filtered = projects.filter(p => p.type === filter);

  return (
    <div id="projects" style={themeStyle}>
      <h2  className="text-5xl text-center font-extrabold text-soft">PROJECT</h2>
      <div className="flex justify-center gap-6 mt-4">
        <button onClick={() => setFilter("website")} className={`px-4 py-2 rounded-full ${filter==='website' ? 'bg-accent text-dark' : 'text-soft'}`}>Website</button>
        <button onClick={() => setFilter("design")} className={`px-4 py-2 rounded-full ${filter==='design' ? 'bg-accent text-dark' : 'text-soft'}`}>Design</button>
      </div>

      <div className="mt-8 bg-card p-6 rounded-2xl" style={{ borderRadius: 24 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scrollbar" style={{ maxHeight: "520px", overflowY: "auto", padding: 8 }}>
          {filtered.map(p => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      {/* Sidebar detail */}
      {active && <ProjectSidebar project={active} onClose={() => setActive(null)} />}
    </div>
  );
}
