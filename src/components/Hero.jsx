import React from "react";
import TiltedCard from './TiltedCard/TiltedCard';
import TiltedCardContainer from "./TiltedCard/TiltedCardContainer";
export default function Hero() {
  return (
    <section id="home" className="grid md:grid-cols-2 gap-8 items-center mt-8">
      <div className="text-left">
        <h1 className="text-[55px] font-bold text-soft leading-tight">Hello, I am Ridwan Fajariansyah</h1>
        <p className="mt-4 text-4xl text-accent">Website Developer</p>
        <button className="mt-8 bg-soft text-dark px-6 py-3 rounded-xl font-semibold">GET IN TOUCH</button>
      </div>

      <div className="flex justify-end">
        <TiltedCardContainer
          rotateAmplitude={12}
          scaleOnHover={1.03}
          className="relative w-[410px] h-[480px] bg-accent rounded-tr-[177px] overflow-hidden"
        >
          {/* Wrapper full area agar img tetap ketengah walaupun tilted */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <img
              src="/assets/hero.png"
              alt="Ridwan"
              className="w-80 h-auto object-cover"
              style={{ transform: "translateZ(30px)" }}
            />
          </div>
        </TiltedCardContainer>
      </div>
    </section>
  );
}
