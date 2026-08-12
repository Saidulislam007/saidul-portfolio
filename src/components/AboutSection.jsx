"use client";

import { motion } from "framer-motion";
import { Blocks, MapPin, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import EducationSection from "./EducationSection";
import { reveal } from "@/lib/motion";

export default function AboutSection() {
  return (
    <section className="manifesto section-wrap" id="about">
      <motion.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={reveal}>
         About the developer
      </motion.div>
      <div className="about-grid">
        <motion.figure
          className="about-portrait"
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portrait-frame">
            <Image
              src="/saidul-about.webp"
              alt="Saidul Islam standing outdoors in Khulna, Bangladesh"
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
            />
            <div className="portrait-overlay" />
            <span className="portrait-index">PORTRAIT / 2026</span>
            <span className="portrait-role"><i /> MERN · FULL-STACK</span>
          </div>
          <figcaption>
            <span>Saidul Islam</span>
            <span>Developer · Problem solver</span>
          </figcaption>
        </motion.figure>

        <motion.div className="about-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
          <div className="about-location"><MapPin size={15} /> Khulna, Bangladesh</div>
          <h2>About <em>Me</em></h2>
          <p className="about-lead">
            Hi, I&apos;m <strong>Saidul Islam</strong>, a passionate MERN Stack Developer who enjoys building modern, scalable, and user-friendly web applications.
          </p>
          <div className="about-story">
            <p>
              My programming journey started with curiosity about how websites work behind the scenes. I began with HTML, CSS, and JavaScript, then expanded into <strong>React, Next.js, Node.js, Express.js, and MongoDB</strong>. Building real-world projects strengthened my understanding of frontend architecture, backend development, authentication, REST APIs, database design, and responsive UI.
            </p>
            <p>
              I enjoy creating full-stack applications that solve practical problems—from intuitive interfaces and secure backend systems to performance optimization and polished production experiences. I&apos;m especially interested in scalable code, thoughtful user experience, and modern engineering practices.
            </p>
            <p>
              Outside of programming, I explore new technologies, read about software engineering, improve personal projects, and spend time with family and friends. That balance keeps me curious, focused, and consistent as a developer.
            </p>
          </div>
          <div className="about-principles">
            <span><ShieldCheck /> Secure foundations</span>
            <span><Zap /> Performance-aware</span>
            <span><Blocks /> Scalable structure</span>
          </div>
          <div className="about-statement">
            I&apos;m a curious, patient, and detail-oriented developer. My goal is not just to write code, but to build meaningful digital experiences that provide real value to users.
          </div>
        </motion.div>
      </div>
      <EducationSection />
    </section>
  );
}
