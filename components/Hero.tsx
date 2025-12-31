"use client";

import { Button } from "./Button";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

// Cartoon cloud SVG component
function Cloud({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 200 100"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="60" cy="70" rx="50" ry="30" />
      <ellipse cx="100" cy="50" rx="40" ry="30" />
      <ellipse cx="140" cy="65" rx="45" ry="35" />
      <ellipse cx="80" cy="55" rx="35" ry="25" />
      <ellipse cx="120" cy="70" rx="30" ry="20" />
    </svg>
  );
}

// Decorative star
function Star({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated clouds background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cloud className="absolute top-20 left-[5%] w-32 opacity-90 float" />
        <Cloud className="absolute top-40 right-[10%] w-40 opacity-80" style={{ animationDelay: "1s" }} />
        <Cloud className="absolute top-60 left-[20%] w-24 opacity-70 float" style={{ animationDelay: "0.5s" }} />
        <Cloud className="absolute bottom-40 right-[25%] w-36 opacity-85 float" style={{ animationDelay: "1.5s" }} />
        <Cloud className="absolute bottom-60 left-[8%] w-28 opacity-75 float" style={{ animationDelay: "2s" }} />
        <Cloud className="absolute top-32 left-[50%] w-20 opacity-60 float" style={{ animationDelay: "0.8s" }} />

        {/* Decorative stars */}
        <Star className="absolute top-24 right-[20%] w-6 text-yellow-300 float" style={{ animationDelay: "0.3s" }} />
        <Star className="absolute top-48 left-[15%] w-4 text-yellow-200 float" style={{ animationDelay: "1.2s" }} />
        <Star className="absolute bottom-48 right-[15%] w-5 text-yellow-300 float" style={{ animationDelay: "0.7s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 border-2 border-indigo-950 mb-8 cartoon-btn">
          <span className="text-2xl">👋</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-indigo-950">
          Eugenio{" "}
          <span className="text-violet-600">Rivera Ramos</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-indigo-900 font-semibold mb-4">
          Software Development Engineer
        </p>

        {/* Tagline */}
        <p className="text-lg text-indigo-800/80 max-w-2xl mx-auto mb-12">
          Passionate about reinforcement learning research. Building RL pipelines for LLM fine-tuning,
          reward modeling, and evaluation systems. Background in systems programming and scalable infrastructure.
        </p>

        {/* CTA Buttons - cartoon style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            icon={HiOutlineDocumentText}
            rightIcon={FaArrowRight}
            href="#projects"
          >
            View Projects
          </Button>

          <Button
            variant="secondary"
            icon={FaGithub}
            rightText="42euge"
            href="https://github.com/42euge"
            external
          >
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
