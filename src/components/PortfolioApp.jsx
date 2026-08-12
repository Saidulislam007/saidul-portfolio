"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ExpertiseSection from "./ExpertiseSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PortfolioLoader from "./PortfolioLoader";
import ProjectsSection from "./ProjectsSection";

export default function PortfolioApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 55, damping: 20 });
  const rotateY = useTransform(smoothX, [0, 1], [-9, 9]);
  const rotateX = useTransform(smoothY, [0, 1], [8, -8]);
  const glowX = useTransform(smoothX, [0, 1], ["18%", "82%"]);
  const glowY = useTransform(smoothY, [0, 1], ["15%", "80%"]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("saidul-portfolio-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : preferredTheme;

    document.documentElement.dataset.theme = initialTheme;
    const frameId = window.requestAnimationFrame(() => setTheme(initialTheme));

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      window.localStorage.setItem("saidul-portfolio-theme", nextTheme);
      return nextTheme;
    });
  };

  const handlePointerMove = (event) => {
    pointerX.set(event.clientX / window.innerWidth);
    pointerY.set(event.clientY / window.innerHeight);
  };

  const finishLoading = useCallback(() => setIsLoading(false), []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <PortfolioLoader key="portfolio-loader" onComplete={finishLoading} />
      ) : (
        <motion.main
          key="portfolio-content"
          className="portfolio-shell"
          onPointerMove={handlePointerMove}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div className="scroll-progress" style={{ scaleX: progress }} />
          <motion.div className="cursor-glow" style={{ left: glowX, top: glowY }} />
          <div className="noise" aria-hidden="true" />

          <Header theme={theme} onToggleTheme={toggleTheme} />
          <HeroSection rotateX={rotateX} rotateY={rotateY} />
          <AboutSection />
          <ExpertiseSection />
          <ProjectsSection />
          <ContactSection />
        </motion.main>
      )}
    </AnimatePresence>
  );
}