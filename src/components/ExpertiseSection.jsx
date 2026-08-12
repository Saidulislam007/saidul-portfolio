"use client";

import { motion } from "framer-motion";
import { Database, Layers3, ServerCog } from "lucide-react";
import { capabilities, marqueeItems } from "@/data/portfolioData";
import { reveal } from "@/lib/motion";

const iconMap = {
  frontend: Layers3,
  backend: ServerCog,
  database: Database,
};

const skillColorMap = {
  React: "97 218 251",
  "Next.js": "148 163 184",
  "JavaScript ES6+": "247 223 30",
  "Tailwind CSS": "56 189 248",
  "Framer Motion": "192 132 252",
  "HTML5 / CSS3": "241 101 41",
  "Node.js": "104 159 56",
  "Express.js": "148 163 184",
  "REST API": "45 212 191",
  JWT: "236 72 153",
  "Web Security": "245 158 11",
  MongoDB: "71 162 72",
  Firebase: "255 167 18",
  Git: "240 80 50",
  Vercel: "148 163 184",
};

export default function ExpertiseSection() {
  return (
    <section className="expertise section-wrap" id="expertise">
      <motion.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
         Technical expertise
      </motion.div>
      <div className="section-heading-row">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          One developer.<br /><em>The complete stack.</em>
        </motion.h2>
        <p>From first pixel to final endpoint, I connect the layers that turn a concept into a dependable product.</p>
      </div>
      <div className="capability-grid">
        {capabilities.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.article
              key={item.label}
              className="capability-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.12, duration: 0.65 }}
              whileHover={{ y: -8 }}
            >
              <div className="capability-top"><span>0{index + 1}</span><Icon /></div>
              <h3>{item.label}</h3>
              <p>{item.copy}</p>
              <div className="tag-cloud">
                {item.tags.map((tag) => (
                  <span
                    className="skill-tag"
                    key={tag}
                    style={{ "--skill-rgb": skillColorMap[tag] ?? "102 246 197" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
      <div className="marquee" aria-label="Technology list">
        <div className="marquee-track">
          {marqueeItems.map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}
        </div>
      </div>
    </section>
  );
}