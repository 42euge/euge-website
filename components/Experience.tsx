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
    company: "Your Company",
    role: "Software Development Engineer",
    period: "2023 - Present",
    description:
      "Building scalable web applications and services. Working with modern technologies to deliver high-quality software solutions.",
    technologies: ["TypeScript", "React", "Node.js", "AWS"],
  },
  {
    company: "Previous Company",
    role: "Software Engineer",
    period: "2021 - 2023",
    description:
      "Developed and maintained full-stack applications. Collaborated with cross-functional teams to ship new features.",
    technologies: ["JavaScript", "Python", "PostgreSQL", "Docker"],
  },
  {
    company: "First Company",
    role: "Junior Developer",
    period: "2020 - 2021",
    description:
      "Started my professional journey building web applications and learning best practices in software development.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
            <FaBriefcase className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-white">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full -translate-x-1/2 border-4 border-background" />

              {/* Content */}
              <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                <div className="p-6 rounded-2xl bg-card border border-card-border hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-500 font-medium">
                      {exp.company}
                    </span>
                    <span className="text-sm text-neutral-500">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {exp.role}
                  </h3>
                  <p className="text-neutral-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-neutral-800 text-neutral-300 rounded-full"
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
