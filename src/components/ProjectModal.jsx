"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Code2, X } from "lucide-react";
import Image from "next/image";
import MagneticLink from "./MagneticLink";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKey = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
      role="presentation"
    >
      <motion.article
        className="project-modal"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 22, scale: 0.97 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
        <div className={`modal-visual ${project.gradient}`}>
  {project.image && (
    <Image
      className="modal-project-image"
      src={project.image}
      alt={project.imageAlt || `${project.title} project preview`}
      fill
      sizes="(max-width: 900px) 100vw, 66vw"
      loading="eager"
    />
  )}

  <div className="modal-image-overlay" />
  <div className="modal-grid" />
  <span>{project.number}</span>
</div>
        <div className="modal-content">
          <p className="kicker">{project.eyebrow}</p>
          <h3 id="project-modal-title">{project.title}</h3>
          <p className="modal-description">{project.description}</p>
          <ul className="detail-list">
            {project.details.map((detail) => (
              <li key={detail}><Check size={16} /><span>{detail}</span></li>
            ))}
          </ul>
          <div className="modal-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="modal-actions">
            <MagneticLink href={project.github} external className="primary-button modal-button">
              Explore repository <Code2 size={18} />
            </MagneticLink>
            {project.liveUrl && (
              <MagneticLink href={project.liveUrl} external className="live-project-button modal-button">
                Live Project <ArrowUpRight size={18} />
              </MagneticLink>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}