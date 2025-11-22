import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_sedeh1q",
        "template_5req9tq",
        e.target,
        "F1zLTUQrYoV7wu2er"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          e.target.reset();
          setTimeout(() => setSent(false), 5000);
        },
        () => {
          setLoading(false);
          alert("Failed to send message.");
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-20 text-theme flex flex-col items-center"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-theme">
          CONTACT ME
        </h2>
        <p className="text-soft opacity-70 text-center mb-8 md:mb-12 max-w-xl text-sm sm:text-base px-4">
          Have a project, question, or collaboration idea?  
          Feel free to send me a message!
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={sendEmail}
        className="
          w-full max-w-4xl 
          bg-card p-6 sm:p-8 rounded-2xl shadow-xl
          backdrop-blur-sm border border-theme 
          flex flex-col gap-5 md:gap-6
        "
        style={{
          background: "var(--card-bg)", 
          borderColor: "var(--border-color)"
        }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* NAME */}
        <motion.div className="flex flex-col" variants={itemVariants}>
          <label className="text-theme font-semibold mb-2 text-sm sm:text-base">Name</label>
          <motion.input
            type="text"
            name="name"
            required
            className="
              px-4 py-2.5 md:py-3 rounded-lg text-sm sm:text-base
              bg-card border border-theme 
              focus:border-accent focus:ring-2 focus:ring-accent/20
              outline-none transition-all
              text-theme placeholder-soft/50
            "
            style={{
              background: "var(--card-bg)", 
              borderColor: "var(--border-color)"
            }}
            placeholder="Your name"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* EMAIL */}
        <motion.div className="flex flex-col" variants={itemVariants}>
          <label className="text-theme font-semibold mb-2 text-sm sm:text-base">Email</label>
          <motion.input
            type="email"
            name="email"
            required
            className="
              px-4 py-2.5 md:py-3 rounded-lg text-sm sm:text-base
              bg-card border border-theme
              focus:border-accent focus:ring-2 focus:ring-accent/20
              outline-none transition-all
              text-theme placeholder-soft/50
            "
            style={{
              background: "var(--card-bg)", 
              borderColor: "var(--border-color)"
            }}
            placeholder="your.email@example.com"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* MESSAGE */}
        <motion.div className="flex flex-col" variants={itemVariants}>
          <label className="text-theme font-semibold mb-2 text-sm sm:text-base">Message</label>
          <motion.textarea
            name="message"
            rows="5"
            required
            className="
              px-4 py-2.5 md:py-3 rounded-lg text-sm sm:text-base
              bg-card border border-theme
              focus:border-accent focus:ring-2 focus:ring-accent/20
              outline-none resize-none transition-all
              text-theme placeholder-soft/50
            "
            style={{
              background: "var(--card-bg)", 
              borderColor: "var(--border-color)"
            }}
            placeholder="Tell me about your project or idea..."
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
        </motion.div>

        {/* SUBMIT BUTTON */}
        <motion.button
          type="submit"
          disabled={loading}
          className="
            mt-2 px-6 py-2.5 md:py-3 text-sm sm:text-base
            bg-accent text-dark 
            font-bold rounded-xl 
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg
          "
          variants={itemVariants}
          whileHover={{ scale: 1.05, opacity: 0.9 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                ⚙️
              </motion.span>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </motion.button>

        {/* SUCCESS MESSAGE */}
        {sent && (
          <motion.div 
            className="flex items-center gap-2 text-accent mt-2 bg-accent/10 px-4 py-3 rounded-lg border border-accent/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="font-semibold text-sm sm:text-base">Message sent successfully!</span>
          </motion.div>
        )}
      </motion.form>
    </section>
  );
}