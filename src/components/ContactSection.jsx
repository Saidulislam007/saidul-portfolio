"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, MessageCircle, Phone } from "lucide-react";
import { socials } from "@/data/portfolioData";
import { reveal } from "@/lib/motion";
import MagneticLink from "./MagneticLink";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("said38383742@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="contact section-wrap" id="contact">
      <div className="contact-orb" aria-hidden="true"><span /></div>
      <motion.div className="contact-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
        <div className="eyebrow"><i /> Available for full-time opportunities</div>
        <h2>Have a role, a product,<br />or a hard problem?</h2>
        <p>Let&apos;s build something useful, reliable, and impossible to ignore.</p>
        <div className="contact-actions">
          <MagneticLink href="mailto:said38383742@gmail.com" className="primary-button light-button">
            Start a conversation <Mail size={18} />
          </MagneticLink>
          <button className="copy-button" onClick={copyEmail}>
            {copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "Email copied" : "Copy email"}
          </button>
          <a className="copy-button contact-direct-button" href="tel:+8801911625953" aria-label="Call Saidul Islam at 01911625953">
            <Phone size={17} /> Phone · 01911625953
          </a>
          <a
            className="copy-button contact-direct-button"
            href="https://wa.me/8801911625953"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Saidul Islam on WhatsApp"
          >
            <MessageCircle size={17} /> WhatsApp · 01911625953
          </a>
        </div>
      </motion.div>
      <div className="contact-footer">
        <div><strong>Saidul Islam</strong><span>MERN Stack Developer</span></div>
        <div className="social-row">
          {socials.map(({ label, href, mark }) => (
            <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={label}>
              <b className="brand-icon">{mark}</b><span>{label}</span>
            </a>
          ))}
        </div>
        <p>© 2026 · Designed &amp; engineered with intent.</p>
      </div>
    </section>
  );
}