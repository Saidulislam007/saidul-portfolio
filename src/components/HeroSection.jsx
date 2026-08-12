"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, MapPin, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import MagneticLink from "./MagneticLink";
import { reveal } from "@/lib/motion";

export default function HeroSection({ rotateX, rotateY }) {
  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-copy">
       <motion.div
  className="eyebrow"
  initial="hidden"
  animate="visible"
  variants={reveal}
>
  <Sparkles size={18} />
  <span>
    Hi, I&apos;m <strong className="hero-name">Saidul Islam.</strong>
  </span>
</motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.1 }}>
          Full-Stack
          <span className="hero-gradient">Developer.</span>
        </motion.h1>
        <motion.p className="hero-tagline" initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.16 }}>
          Building <em>Fast, Scalable</em> &amp; Impactful Web Applications.
        </motion.p>
        <motion.p className="hero-intro" initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.2 }}>
          Full-Stack Software Engineer specializing in scalable web architecture, fluid micro-interactions, and high-performance digital products.
        </motion.p>
        <motion.div className="hero-actions" initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.3 }}>
          <MagneticLink href="https://docs.google.com/document/d/1bflPiymWGmhlgkTOAmgIMrsV6NKkZ6bbWRN3tFtVYRA/export?format=pdf" className="primary-button">
            Download Resume <Download size={18} />
          </MagneticLink>
          <MagneticLink href="#contact" className="text-button">Get in Touch <ArrowUpRight size={18} /></MagneticLink>
        </motion.div>
        <motion.div className="hero-meta" initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.4 }}>
          <div><strong>04+</strong><span>Production-minded<br />case studies</span></div>
          <div><strong>100%</strong><span>Responsive<br />by default</span></div>
          <div><strong>MERN</strong><span>End-to-end<br />capability</span></div>
        </motion.div>
      </div>

      <motion.div className="hero-stage" style={{ rotateX, rotateY }}>
        <div className="orbit orbit-one"><span>REACT</span></div>
        <div className="orbit orbit-two"><span>NODE</span></div>
        <div className="stage-halo" />
        <div className="profile-card">
          <div className="profile-topline"><span>Developer profile</span><i /></div>
          <div className="avatar-frame">
            <Image
              src="/projects/saidul-profile.webp"
              alt="Saidul Islam"
              fill
              sizes="(max-width: 760px) 72vw, 370px"
              priority
            />
            <div className="avatar-scan" />
          </div>
          <div className="profile-info">
            <p>SAIDUL ISLAM</p>
            <span>MERN STACK DEVELOPER</span>
          </div>
          <div className="profile-footer"><MapPin size={14} /> Bangladesh <span>● Open to work</span></div>
        </div>
        <motion.div className="floating-code" animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
          <div><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
          <div>&nbsp;&nbsp;craft: <span className="code-green">&quot;clean&quot;</span>,</div>
          <div>&nbsp;&nbsp;mindset: <span className="code-green">&quot;solve&quot;</span></div>
          <div>{'};'}</div>
        </motion.div>
        <motion.div className="floating-chip" animate={{ y: [0, 8, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}>
          <Zap size={15} fill="currentColor" /> Built for impact
        </motion.div>
      </motion.div>

      <motion.div className="hero-connect" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.6 }}>
        <span>Connect:</span>
        <div className="hero-socials">
          <a href="https://github.com/Saidulislam007" target="_blank" rel="noreferrer" aria-label="Visit Saidul Islam on GitHub"><b className="hero-social-mark">GH</b></a>
          <a href="https://www.linkedin.com/in/saidulislam007" target="_blank" rel="noreferrer" aria-label="Visit Saidul Islam on LinkedIn"><b className="hero-social-mark hero-social-mark-in">in</b></a>
          <a href="https://www.facebook.com/saidul.islam.519928" target="_blank" rel="noreferrer" aria-label="Visit Saidul Islam on Facebook"><b className="hero-social-mark hero-social-mark-fb">f</b></a>
        </div>
      </motion.div>
    </section>
  );
}