import React from "react";
const themeStyle = { color: "var(--text-main)" , background: "transparent" };


export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full py-32 text-soft px-8 md:px-20 py-24 flex flex-col gap-16"
     style={themeStyle}>
      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">LET’S INTRODUCE</h2>
        <h2 className="text-3xl md:text-4xl font-bold mt-1">ABOUT MYSELF</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* LEFT — TECH STACK */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              <img src="/assets/html.png" className="w-12" />
              <img src="/assets/react.png" className="w-14" />
              <img src="/assets/js.png" className="w-14" />
              <img src="/assets/java.png" className="w-12" />
              <img src="/assets/python.png" className="w-12" />
              <img src="/assets/laravel.png" className="w-12" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4">Software</h3>
            <div className="flex flex-wrap gap-4">
              <img src="/assets/ai.png" className="w-12" />
              <img src="/assets/figma.png" className="w-12" />
              <img src="/assets/canva.png" className="w-12" />
            </div>
          </div>
        </div>

        {/* MIDDLE — PHOTO */}
        <div className="flex justify-center">
          <div className="w-[300px] h-[380px] bg-accent rounded-t-[180px] overflow-hidden shadow-xl">
            <img
              src="/assets/aboutme.png"
              alt="Ridwan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT — DESCRIPTION */}
        <div className="text-soft/90 text-justify leading-relaxed">
          <p>
            I enjoy learning new things and adapt quickly to dynamic
            environments.
            <span className="text-accent">
              {" "}
              I’m a third-year Informatics Engineering student at Universitas
              Negeri Semarang
            </span>{" "}
            with experience in several web projects that strengthened my skills
            in
            <span className="text-accent"> HTML5, CSS, JavaScript, Java, and Python.</span>
          </p>

          <a
            href="/cv.pdf"
            download
            className="mt-8 inline-block px-6 py-3 bg-soft text-dark font-semibold rounded-xl"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
}
