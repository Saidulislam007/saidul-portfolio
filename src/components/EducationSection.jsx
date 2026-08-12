"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, School } from "lucide-react";
import { reveal } from "@/lib/motion";

const qualifications = [
  {
    number: "01",
    eyebrow: "Secondary education",
    title: "Secondary School Certificate (SSC)",
    institution: "H. R. H. Prince Aga Khan Secondary School, Khulna",
    meta: [
      { label: "Board", value: "Jessore" },
      { label: "Group", value: "Science" },
      { label: "Passing year", value: "2016" },
      { label: "GPA", value: "4.78 / 5.00" },
    ],
    summary:
      "My secondary education built a strong foundation in science, quantitative reasoning, disciplined study, and curiosity for technology—skills that later supported my transition into software development.",
    mark: "S",
    Icon: School,
  },
  {
    number: "02",
    eyebrow: "Higher secondary education",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Bangabandhu College",
    meta: [
      { label: "Board", value: "Jessore" },
      { label: "Group", value: "Science" },
      { label: "Passing year", value: "2018" },
      { label: "GPA", value: "4.08 / 5.00" },
    ],
    summary:
      "Advanced study in mathematics and science strengthened my logical reasoning, data interpretation, and systematic approach to solving complex problems.",
    mark: "H",
    Icon: BookOpen,
  },
  {
    number: "03",
    eyebrow: "Undergraduate degree",
    title: "B.Sc. (Honours) in Mathematics",
    institution: "National University, Bangladesh",
    meta: [
      { label: "University", value: "National University" },
      { label: "Discipline", value: "Mathematics" },
      { label: "Degree", value: "B.Sc. (Honours)" },
      { label: "Passing year", value: "2024" },
      { label: "GPA", value: "3.08 / 5.00" },
    ],
    summary:
      "Pure mathematics trained me to decompose complex real-world problems into structured logic, algorithmic models, and optimized system architectures—the analytical foundation I apply to software engineering today.",
    mark: "∑",
    Icon: GraduationCap,
  },
];

export default function EducationSection() {
  return (
    <div className="education-section">
      <motion.div className="education-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}>
        <p>Academic Background</p>
        <h2>Educational <em>qualification.</em></h2>
      </motion.div>

      <div className="education-grid">
        {qualifications.map(({ Icon, ...qualification }, index) => (
          <motion.article
            className="education-card"
            key={qualification.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="education-card-top">
              <div className="education-icon"><Icon /></div>
              <span className="education-order">{qualification.number}</span>
            </div>
            <div className="education-details">
              <p>{qualification.eyebrow}</p>
              <h3>{qualification.title}</h3>
              <strong className="education-institution">{qualification.institution}</strong>
              <div className="education-meta">
                {qualification.meta.map((item) => (
                  <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>
                ))}
              </div>
              <p className="education-summary">{qualification.summary}</p>
            </div>
            <div className="math-mark">{qualification.mark}</div>
          </motion.article>
        ))}
      </div>

      <motion.article
        className="focus-card education-focus"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="focus-title"><Award /> Core focus &amp; capabilities</div>
        <div className="focus-list">
          <span><i /> Applied Analytical Logic</span>
          <span><i /> Mathematical Structures</span>
          <span><i /> Problem-Solving</span>
          <span><i /> Computational Thinking</span>
        </div>
      </motion.article>
    </div>
  );
}