import React, { useState } from "react";
import emailjs from "emailjs-com";
const themeStyle = { color: "var(--text-main)" , background: "transparent" };


export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

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
        },
        () => {
          setLoading(false);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 md:px-20 text-soft flex flex-col items-center"
     style={themeStyle}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        CONTACT ME
      </h2>
      <p className="text-soft/70 text-center mb-12 max-w-xl">
        Have a project, question, or collaboration idea?  
        Feel free to send me a message!
      </p>

      <form
        onSubmit={sendEmail}
        className="w-full max-w-4xl bg-white/5 p-8 rounded-2xl shadow-xl
                   backdrop-blur-sm border border-white/10 flex flex-col gap-6" style={{background: "var(--card-bg)", borderColor: "rgba(255,255,255,0.08)"}} 
      >
        {/* NAME */}
        <div className="flex flex-col">
          <label className="text-soft font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="px-4 py-3 rounded-lg bg-dark border border-white/10 
                       focus:border-accent outline-none" style={{background: "var(--card-bg)", borderColor: "rgba(255,255,255,0.08)"}}
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="text-soft font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="px-4 py-3 rounded-lg bg-dark border border-white/10
                       focus:border-accent outline-none" style={{background: "var(--card-bg)", borderColor: "rgba(255,255,255,0.08)"}}
          />
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col">
          <label className="text-soft font-semibold mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="px-4 py-3 rounded-lg bg-dark border border-white/10
                       focus:border-accent outline-none resize-none" style={{background: "var(--card-bg)", borderColor: "rgba(255,255,255,0.08)"}}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 px-6 py-3 bg-accent text-dark font-bold rounded-xl hover:opacity-90 
                     transition active:scale-95" style={{background: "var(--card-bg)", borderColor: "rgba(255,255,255,0.08)"}}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {sent && (
          <p className="text-accent mt-3">Message sent successfully ✔</p>
        )}
      </form>
    </section>
  );
}
