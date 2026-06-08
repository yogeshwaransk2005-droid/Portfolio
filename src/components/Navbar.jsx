import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.href.replace("#", "")));

    const updateActiveSection = () => {
      const offset = window.scrollY + 170;
      let current = "#home";

      sections.forEach((section) => {
        if (section && section.offsetTop <= offset) {
          current = `#${section.id}`;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="brand">YOGESH</div>

      <button
        className={`nav-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

      <motion.nav
        className={`nav-list ${menuOpen ? "open" : ""}`}
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href ? "nav-link active" : "nav-link"}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </motion.nav>
    </motion.header>
  );
}

export default Navbar;
