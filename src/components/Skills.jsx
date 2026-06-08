import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { DiJava } from "react-icons/di";
import { SiSpringboot, SiReact, SiDotnet, SiJavascript } from "react-icons/si";
import { AiOutlineDatabase } from "react-icons/ai";

const skillData = [
  { name: "Java", value: 90, Icon: DiJava, gradient: "gradient-java" },
  { name: "Spring Boot", value: 85, Icon: SiSpringboot, gradient: "gradient-spring" },
  { name: "React", value: 92, Icon: SiReact, gradient: "gradient-react" },
  { name: ".NET", value: 82, Icon: SiDotnet, gradient: "gradient-dotnet" },
  { name: "SQL", value: 80, Icon: AiOutlineDatabase, gradient: "gradient-sql" },
  { name: "JavaScript", value: 88, Icon: SiJavascript, gradient: "gradient-js" },
];

const stats = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Certifications", value: 8, suffix: "+" },
  { label: "CGPA", value: 7.9, suffix: "" },
];

function Counter({ value, suffix }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(Number.isInteger(value) ? Math.round(latest).toString() : latest.toFixed(1));
      },
    });
    return () => controls.stop();
  }, [count, value]);

  return (
    <span className="stat-number">
      {display}
      {suffix}
    </span>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-title">
        <span>SKILLS & TECHNOLOGIES</span>
        <h2>Technologies I work with to build modern applications.</h2>
      </div>

      <div className="skills-card">
        <div className="skills-header">
          <p className="skills-subtitle">
            I deliver polished app experiences using industry-leading tools, modern frameworks, and proven architecture.
          </p>
        </div>

        <div className="skills-grid">
          {skillData.map((skill, index) => {
            const Icon = skill.Icon;
            return (
              <motion.div
                key={skill.name}
                className="skill-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="skill-head">
                  <div className="skill-meta">
                    <span className="skill-icon">
                      <Icon />
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percent">{skill.value}%</span>
                </div>

                <div className="skill-track">
                  <motion.div
                    className={`skill-fill ${skill.gradient}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="skills-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.12 + index * 0.08 }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
