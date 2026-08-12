"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LOADER_SESSION_KEY } from "@/lib/loaderSession";

export default function PortfolioLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 450 : 2300;
    const startedAt = performance.now();
    let frameId;
    let completionTimer;

    document.body.style.overflow = "hidden";

    const updateProgress = (time) => {
      window.sessionStorage.setItem(LOADER_SESSION_KEY, "true");
      const ratio = Math.min((time - startedAt) / duration, 1);
      setProgress(Math.round(ratio * 100));

      if (ratio < 1) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        completionTimer = window.setTimeout(() => onCompleteRef.current(), reducedMotion ? 60 : 280);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(completionTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const status =
    progress < 24 ? "Booting interface" :
    progress < 52 ? "Mapping projects" :
    progress < 78 ? "Calibrating motion" :
    progress < 100 ? "Finalizing experience" : "Ready to explore";

  return (
    <motion.div
      className="portfolio-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.025, filter: "blur(12px)" }}
      transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
      role="status"
      aria-live="polite"
      aria-label="Loading Saidul Islam portfolio"
    >
      <div className="loader-grid" aria-hidden="true" />
      <div className="loader-scan" aria-hidden="true" />

      <div className="loader-corner loader-corner-left">
        <span>PORTFOLIO / 2026</span>
        <small>ENGINEERED WITH INTENT</small>
      </div>
      <div className="loader-corner loader-corner-right">
        <span>KHULNA — BD</span>
        <small>22.8456° N / 89.5403° E</small>
      </div>

      <div className="loader-core">
        <div className="loader-emblem" aria-hidden="true">
          <div className="loader-ring loader-ring-one" />
          <div className="loader-ring loader-ring-two" />
          <div className="loader-mark"><span>SI</span><i /></div>
        </div>

        <div className="loader-identity">
          <p>INITIALIZING DIGITAL EXPERIENCE</p>
          <h1>SAIDUL <span>ISLAM</span></h1>
          <small>MERN STACK DEVELOPER</small>
        </div>

        <div className="loader-progress-wrap">
          <div className="loader-progress-meta">
            <span><i /> {status}</span>
            <strong>{String(progress).padStart(3, "0")}%</strong>
          </div>
          <div
            className="loader-progress-track"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={progress}
            aria-label="Portfolio loading progress"
          >
            <span style={{ width: `${progress}%` }} />
          </div>
          <div className="loader-modules" aria-hidden="true">
            <span className={progress >= 10 ? "active" : ""}>UI</span>
            <span className={progress >= 35 ? "active" : ""}>API</span>
            <span className={progress >= 60 ? "active" : ""}>DATA</span>
            <span className={progress >= 85 ? "active" : ""}>MOTION</span>
          </div>
        </div>
      </div>

      <button className="loader-skip" onClick={onComplete} aria-label="Skip portfolio introduction">
        Skip intro <ArrowUpRight size={14} />
      </button>
      <div className="loader-system"><i /> SYSTEM ONLINE</div>
    </motion.div>
  );
}
