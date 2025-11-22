import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full py-4">
      <div
        className="
          max-w-4xl mx-auto
          px-8 py-3
          rounded-full
          backdrop-blur-xl bg-dark/40 dark:bg-white/20
          border border-white/10
          shadow-lg
          flex justify-between items-center
          text-soft dark:text-dark
        "
      >
        <div className="flex gap-8">
          <a href="#home" className="opacity-80 hover:text-accent transition">Home</a>
          <a href="#about" className="opacity-80 hover:text-accent transition">About</a>
          <a href="#projects" className="opacity-80 hover:text-accent transition">Projects</a>
          <a href="#contact" className="opacity-80 hover:text-accent transition">Contact</a>
        </div>

        {/* THEME BUTTON */}
        <button
          onClick={toggleTheme}
          className="
            w-10 h-10 flex items-center justify-center 
            rounded-full
            bg-white/20 dark:bg-dark/40
            border border-white/20
            backdrop-blur-md
            transition-all duration-300
          "
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-400 transition-all" />
          ) : (
            <Moon className="w-5 h-5 text-blue-500 transition-all" />
          )}
        </button>
      </div>
    </nav>
  );
}
