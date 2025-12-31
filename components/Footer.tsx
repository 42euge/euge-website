"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="cartoon-card rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-black text-indigo-950 mb-2">
                Eugenio Rivera Ramos
              </h3>
              <p className="text-indigo-900/70 font-semibold">Software Development Engineer</p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/42euge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-violet-100 text-violet-600 rounded-xl border-2 border-violet-300 hover:bg-violet-200 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/eriveraramos"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-violet-100 text-violet-600 rounded-xl border-2 border-violet-300 hover:bg-violet-200 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:42euge@gmail.com"
                className="p-3 bg-violet-100 text-violet-600 rounded-xl border-2 border-violet-300 hover:bg-violet-200 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t-2 border-indigo-950/10 text-center">
            <p className="text-indigo-900/60 text-sm font-semibold">
              &copy; {currentYear} Eugenio Rivera Ramos. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
