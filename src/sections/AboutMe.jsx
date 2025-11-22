import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const techIcons = [
    { src: "/assets/html.png", alt: "HTML" },
    { src: "/assets/react.png", alt: "React" },
    { src: "/assets/js.png", alt: "JavaScript" },
    { src: "/assets/java.png", alt: "Java" },
    { src: "/assets/python.png", alt: "Python" },
    { src: "/assets/laravel.png", alt: "Laravel" },
  ];

  const softwareIcons = [
    { src: "/assets/ai.png", alt: "Illustrator" },
    { src: "/assets/figma.png", alt: "Figma" },
    { src: "/assets/canva.png", alt: "Canva" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="w-full py-32 text-theme px-8 md:px-20 flex flex-col gap-16"
    >
      {/* TITLE */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-theme">
          LET'S INTRODUCE
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mt-1 text-accent">
          ABOUT MYSELF
        </h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* LEFT — TECH STACK */}
        <motion.div className="flex flex-col gap-8" variants={itemVariants}>
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-theme">Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              {techIcons.map((icon, index) => (
                <motion.div
                  key={icon.alt}
                  className="w-12 h-12 bg-card rounded-lg p-2 border border-theme"
                  style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4 text-theme">Software</h3>
            <div className="flex flex-wrap gap-4">
              {softwareIcons.map((icon, index) => (
                <motion.div
                  key={icon.alt}
                  className="w-12 h-12 bg-card rounded-lg p-2 border border-theme"
                  style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MIDDLE — PHOTO */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.div 
            className="w-[300px] h-[380px] bg-accent rounded-t-[180px] overflow-hidden shadow-2xl border-4 border-theme"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/assets/aboutme.png"
              alt="Ridwan"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT — DESCRIPTION */}
        <motion.div className="text-soft leading-relaxed" variants={itemVariants}>
          <p className="text-justify mb-6">
            I enjoy learning new things and adapt quickly to dynamic
            environments.
            <span className="text-accent font-semibold">
              {" "}
              I'm a third-year Informatics Engineering student at Universitas
              Negeri Semarang
            </span>{" "}
            with experience in several web projects that strengthened my skills
            in
            <span className="text-accent font-semibold"> HTML5, CSS, JavaScript, Java, and Python.</span>
          </p>

          <motion.a
            href="/cv.pdf"
            download
            className="
              inline-block mt-4
              px-8 py-3 
              bg-accent text-dark 
              font-semibold rounded-xl
              shadow-lg
            "
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}