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
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 rounded-xl bg-white border-3 border-indigo-950 cartoon-btn">
            <FaFolder className="w-6 h-6 text-violet-600" />
          </div>
          <h2 className="text-3xl font-black text-indigo-950">Projects</h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl cartoon-card hover:-translate-y-1 transition-transform duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-violet-100 text-violet-600 border-2 border-violet-300">
                  <FaFolder className="w-5 h-5" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-950/50 hover:text-violet-600 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-950/50 hover:text-violet-600 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-indigo-950 mb-3 group-hover:text-violet-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-indigo-900/70 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono font-bold bg-indigo-100 text-indigo-700 rounded border-2 border-indigo-200"
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
            className="inline-flex items-center gap-2 text-indigo-950 hover:text-violet-600 transition-colors font-bold"
          >
            <span>View more on GitHub</span>
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
