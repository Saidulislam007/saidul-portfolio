"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2 } from "lucide-react";
import Image from "next/image";
import { projects, projectsPerPage } from "@/data/portfolioData";
import { reveal } from "@/lib/motion";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectPage, setProjectPage] = useState(1);
  const totalProjectPages = Math.max(1, Math.ceil(projects.length / projectsPerPage));
  const visibleProjects = projects.slice((projectPage - 1) * projectsPerPage, projectPage * projectsPerPage);

  const changeProjectPage = (nextPage) => {
    const safePage = Math.min(Math.max(nextPage, 1), totalProjectPages);
    if (safePage === projectPage) return;

    setSelectedProject(null);
    setProjectPage(safePage);
    window.requestAnimationFrame(() => {
      document.querySelector(".work-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <section className="work section-wrap" id="work">
        <motion.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
         Selected work
        </motion.div>
        <div className="section-heading-row work-heading">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            Built to solve.<br /><em>Designed to last.</em>
          </motion.h2>
          <a href="https://github.com/Saidulislam007?tab=repositories" target="_blank" rel="noreferrer">
            View all repositories <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (index % 2) * 0.1, duration: 0.65 }}
            >
              <button className={`project-visual ${project.gradient}`} onClick={() => setSelectedProject(project)} aria-label={`Open ${project.title} case study`}>
                {project.image && (
                  <Image
                    className="project-preview-image"
                    src={project.image}
                    alt={project.imageAlt || `${project.title} project preview`}
                    width={1600}
                    height={800}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                )}
                <div className="project-image-overlay" />
                <div className="project-grid-lines" />
                <span className="project-number">{project.number}</span>
                <span className="open-project">Open case study <ArrowUpRight size={18} /></span>
              </button>
              <div className="project-copy">
                <p>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
                <div className="project-impact">{project.impact}</div>
                <div className="project-footer">
                  <div>{project.stack.map((item) => <small key={item}>{item}</small>)}</div>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}><Code2 size={19} /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <nav className="project-pagination" aria-label="Projects pagination">
          <button type="button" onClick={() => changeProjectPage(projectPage - 1)} disabled={projectPage === 1} aria-label="Show previous projects">
            <ChevronLeft size={17} /> <span>Previous</span>
          </button>
          <div className="project-page-numbers">
            {Array.from({ length: totalProjectPages }, (_, index) => index + 1).map((page) => (
              <button
                type="button"
                key={page}
                className={page === projectPage ? "is-active" : ""}
                onClick={() => changeProjectPage(page)}
                aria-label={`Show project page ${page}`}
                aria-current={page === projectPage ? "page" : undefined}
              >
                {String(page).padStart(2, "0")}
              </button>
            ))}
          </div>
          <button type="button" onClick={() => changeProjectPage(projectPage + 1)} disabled={projectPage === totalProjectPages} aria-label="Show next projects">
            <span>Next</span> <ChevronRight size={17} />
          </button>
        </nav>
      </section>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  );
}