"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b-3 border-indigo-950"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-black text-indigo-950 hover:text-violet-600 transition-colors"
          >
            WhoIsEugen.io
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-indigo-950/70 hover:text-violet-600 transition-colors font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/42euge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-950/70 hover:text-violet-600 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/eriveraramos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-950/70 hover:text-violet-600 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="ml-4 px-4 py-2 bg-violet-500 text-white rounded-xl font-bold border-2 border-indigo-950 shadow-[3px_3px_0px_#1e1b4b] hover:shadow-[4px_4px_0px_#1e1b4b] hover:-translate-y-0.5 transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-indigo-950"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-indigo-950/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-indigo-950/70 hover:text-violet-600 transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t-2 border-indigo-950/20">
                <a
                  href="https://github.com/42euge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-950/70 hover:text-violet-600 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/eriveraramos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-950/70 hover:text-violet-600 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
