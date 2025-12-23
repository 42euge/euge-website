"use client";

import { FaFolder, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with modern technologies. Features include user authentication, real-time updates, and a responsive design.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/42euge",
    live: "#",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "An open-source tool that helps developers streamline their workflow. Built with performance and developer experience in mind.",
    technologies: ["React", "Node.js", "GraphQL", "Docker"],
    github: "https://github.com/42euge",
    featured: true,
  },
  {
    title: "Project Three",
    description:
      "A mobile-first application designed to solve everyday problems. Clean UI and intuitive user experience.",
    technologies: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/42euge",
    live: "#",
  },
  {
    title: "Project Four",
    description:
      "Backend service powering data processing pipelines. Handles high throughput with reliability.",
    technologies: ["Python", "FastAPI", "Redis", "Kubernetes"],
    github: "https://github.com/42euge",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
            <FaFolder className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-white">Projects</h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-card border border-card-border hover:border-emerald-500/50 transition-all duration-300 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <FaFolder className="w-5 h-5" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-emerald-500 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-emerald-500 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-neutral-800 text-neutral-400 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/42euge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-emerald-500 transition-colors"
          >
            <span>View more on GitHub</span>
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
