import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Document Summarizer",
    description:
      "Automatic summarization for long-form text with high-quality, enterprise-ready output and fast results.",
    tech: "React, Node.js, OpenAI, Tailwind",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/yogesh/ai-document-summarizer",
    demo: "https://example.com/document-summarizer",
  },
  {
    title: "Cyber Threat Detection Dashboard",
    description:
      "A security operations platform that visualizes attack signals, risk levels, and real-time alert prioritization.",
    tech: "React, Spring Boot, Elasticsearch, Kubernetes",
    image:
      "https://images.unsplash.com/photo-1551033406-611cf9ab3ec3?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/yogesh/cyber-threat-dashboard",
    demo: "https://example.com/cyber-threat-dashboard",
  },
  {
    title: "Real-Time Chat Experience",
    description:
      "A polished, ultra-responsive chat application with encrypted messaging, channel controls, and instant presence.",
    tech: "React, Socket.io, Node.js, PostgreSQL",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/yogesh/realtime-chat-app",
    demo: "https://example.com/realtime-chat",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-title">
        <span>Projects</span>
        <h2>Featured Work</h2>
      </div>

      <motion.div
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="project-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <div className="project-headline">
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">Technologies: {project.tech}</div>
            </div>

            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn project-btn btn-secondary">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn project-btn btn-primary">
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
