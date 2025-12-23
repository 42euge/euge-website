"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 px-6 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Eugenio Rivera Ramos
            </h3>
            <p className="text-neutral-500">Software Development Engineer</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/42euge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-neutral-400 hover:text-emerald-500 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} Eugenio Rivera Ramos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
