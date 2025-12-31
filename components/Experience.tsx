"use client";

import { FaBriefcase } from "react-icons/fa";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Blue Origin",
    role: "Software Development Engineer III",
    period: "Nov 2024 - Present",
    description:
      "Building internal platforms for anomaly detection and proactive issue identification. Developing systems software for ground station operations and mission-critical telemetry processing.",
    technologies: ["C++", "Python", "ML/AI", "REST APIs"],
  },
  {
    company: "Amazon - Project Kuiper",
    role: "Digital RF Systems Engineer",
    period: "Apr 2020 - Jul 2024",
    description:
      "Designed APIs and infrastructure for hardware control and validation. Built scalable cloud infrastructure for simulations and Hardware-in-the-Loop CI/CD pipelines.",
    technologies: ["Python", "C++", "AWS", "MATLAB", "CI/CD"],
  },
  {
    company: "Quantenna (acquired by ON Semi)",
    role: "Systems Design Engineer",
    period: "Jun 2017 - Mar 2020",
    description:
      "Developed software interfaces for wireless systems and channel emulation. Implemented firmware features and built automation frameworks for testing and data collection.",
    technologies: ["Python", "C", "WiFi", "DSP", "Automation"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 rounded-xl bg-white border-3 border-indigo-950 cartoon-btn">
            <FaBriefcase className="w-6 h-6 text-violet-600" />
          </div>
          <h2 className="text-3xl font-black text-indigo-950">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-indigo-950 -translate-x-1/2 rounded-full" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-violet-500 rounded-full -translate-x-1/2 border-4 border-indigo-950 z-10" />

              {/* Content */}
              <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className="p-6 rounded-2xl cartoon-card">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <span className="text-violet-600 font-bold">
                      {exp.company}
                    </span>
                    <span className="text-sm text-indigo-950/60 font-semibold">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-950 mb-3">
                    {exp.role}
                  </h3>
                  <p className="text-indigo-900/70 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full font-semibold border-2 border-violet-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
