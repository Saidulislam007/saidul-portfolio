"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "@/data/portfolioData";

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Saidul Islam home">
          <span className="brand-mark">SI</span>
          <span className="brand-copy"><strong>SAIDUL</strong><small>FULL-STACK STUDIO</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="availability-pill" href="#contact"><i /> Available for opportunities</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "light"}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <motion.span key={theme} initial={{ opacity: 0, rotate: -35, scale: 0.7 }} animate={{ opacity: 1, rotate: 0, scale: 1 }}>
              {theme === "dark" ? <Moon size={16} /> : <Sun size={17} />}
            </motion.span>
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}<ArrowDownRight />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
