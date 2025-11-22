import React from "react";
import { motion } from "framer-motion";
import TiltedCardContainer from "./TiltedCard/TiltedCardContainer";

export default function Hero() {
  return (
    <section id="home" className="grid md:grid-cols-2 gap-8 items-center mt-8 min-h-[calc(100vh-120px)] md:min-h-0">
      {/* LEFT — Text Content */}
      <motion.div 
        className="text-left order-2 md:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1 
          className="text-[32px] sm:text-[40px] md:text-[55px] font-bold text-theme leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hello, I am <br />
          <motion.span 
            className="text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Ridwan Fajariansyah
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="mt-4 text-2xl sm:text-3xl md:text-4xl text-soft font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Website Developer
        </motion.p>
        
        <motion.a 
          href="#contact"
          className="
            inline-block mt-6 md:mt-8 
            bg-accent text-dark 
            px-6 md:px-8 py-2.5 md:py-3 rounded-xl 
            font-semibold text-base md:text-lg
            shadow-lg
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05, opacity: 0.9 }}
          whileTap={{ scale: 0.95 }}
        >
          GET IN TOUCH
        </motion.a>
      </motion.div>

      {/* RIGHT — Tilted Card Image */}
      <motion.div 
        className="flex justify-center md:justify-end order-1 md:order-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <TiltedCardContainer
          rotateAmplitude={12}
          scaleOnHover={1.03}
          className="relative w-[280px] h-[340px] sm:w-[350px] sm:h-[420px] md:w-[410px] md:h-[480px] bg-accent rounded-tr-[120px] md:rounded-tr-[177px] overflow-hidden shadow-2xl"
        >
          {/* Image Wrapper */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <img
              src="/assets/hero.png"
              alt="Ridwan"
              className="w-64 sm:w-72 md:w-80 h-auto object-cover"
              style={{ transform: "translateZ(30px)" }}
            />
          </div>
        </TiltedCardContainer>
      </motion.div>
    </section>
  );
}