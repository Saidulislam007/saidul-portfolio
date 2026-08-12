"use client";

import { motion } from "framer-motion";

export default function MagneticLink({ href, children, className = "", external = false, ...props }) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={className}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
