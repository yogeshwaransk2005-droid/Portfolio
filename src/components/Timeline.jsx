import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2026",
    title: "B.E. Computer Science Engineering Completed",
    description:
      "Graduated with a strong foundation in software engineering, data structures, and system design.",
  },
  {
    year: "2025",
    title: "AI Document Summarizer Project",
    description:
      "Built an AI-powered summarization prototype that extracts insights from long reports and documents.",
  },
  {
    year: "2024",
    title: "Started Full Stack Development",
    description:
      "Focused on full stack applications, modern front-end UIs, and backend API development.",
  },
];

function Timeline() {
  return (
    <section className="section timeline-section" id="experience">
      <div className="section-title">
        <span>Experience</span>
        <h2>Development Journey</h2>
      </div>

      <div className="timeline">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.year}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <span className="timeline-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
