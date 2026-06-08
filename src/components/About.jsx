import { motion } from "framer-motion";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-title">
        <span>About</span>
        <h2>Professional Summary</h2>
      </div>

      <motion.div
        className="glass-panel"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <p>
          I am a passionate Full Stack Developer with a B.E. in Computer Science
          Engineering. I enjoy translating ideas into polished, performant
          applications using Java, Spring Boot, React, .NET, SQL and modern UI
          design.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Experience</h3>
            <p>Building production-ready web applications and AI-powered demos.</p>
          </div>
          <div className="about-card">
            <h3>Approach</h3>
            <p>
              Clean architecture, responsive layouts, and animation for refined
              user journeys.
            </p>
          </div>
          <div className="about-card">
            <h3>Goals</h3>
            <p>Deliver modern digital products while growing in a collaborative team.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
