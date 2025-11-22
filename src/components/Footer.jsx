import React from "react";

const themeStyle = { color: "var(--text-main)" , background: "transparent" };


export default function Footer() {
  return (
    <footer className="w-full mt-20 py-10 px-6 md:px-20 text-soft border-t border-white/10 backdrop-blur-sm" style={themeStyle}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT — NAME */}
        <h3 className="text-xl font-semibold text-soft/90 tracking-wide">
          Ridwan Fajariansyah
        </h3>

        {/* CENTER — SOCIAL ICONS */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:your-email@gmail.com"
            className="hover:text-accent transition"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8l8 7 8-7v10H4Z"/></svg>
          </a>

          <a
            href="https://github.com/yourgithub"
            target="_blank"
            className="hover:text-accent transition"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.69-3.87-1.54-3.87-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.73 1.26 3.4.96.11-.75.41-1.26.75-1.55-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.53-1.46.11-3.04 0 0 1-.32 3.3 1.18a11.5 11.5 0 0 1 6 0c2.31-1.5 3.3-1.18 3.3-1.18.64 1.58.23 2.75.11 3.04.75.81 1.2 1.84 1.2 3.1 0 4.45-2.69 5.43-5.25 5.71.42.36.8 1.09.8 2.21v3.28c0 .3.21.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>
          </a>

          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            className="hover:text-accent transition"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5Zm.02 4h-.02C3.88 7.5 3 6.62 3 5.5S3.88 3.5 5 3.5 7 4.38 7 5.5 6.12 7.5 5 7.5ZM3 9h4v12H3V9Zm7 0h4v1.71c.58-.86 1.67-1.71 3.47-1.71 3.28 0 4.53 2.15 4.53 5.32V21h-4v-6.14c0-1.47-.03-3.36-2.05-3.36-2.06 0-2.38 1.6-2.38 3.25V21h-4V9Z"/></svg>
          </a>
        </div>

        {/* RIGHT — COPYRIGHT */}
        <p className="text-soft/60 text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
