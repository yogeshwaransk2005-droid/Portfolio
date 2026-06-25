import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        src="https://assets.mixkit.co/videos/preview/mixkit-background-swirling-digital-particles-1264-large.mp4"
      />

      <div className="hero-overlay" />

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hero-pretitle">Hello, I am</span>
          <h1>Yogeshwaran SK</h1>
          <div className="typed-line">
            <Typed
              strings={[
                "Java Developer",
                "Full Stack Developer",
                ".NET Developer",
                
              ]}
              typeSpeed={60}
              backSpeed={45}
              backDelay={1600}
              loop
            />
          </div>
          <p>
            Premium full stack engineer focused on high-performance applications
            with modern UI, robust backend architecture, and polished experiences.
          </p>

          <div className="hero-actions">
            <a href="Yogesh_SK_Resume.pdf" className="btn btn-primary" download>
              Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://linkedin.com/in/yogeshwaransk"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yogeshwaransk2005-droid"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href="mailto:yogeshwaransk2005@gmail.com" aria-label="Email">
              <HiOutlineMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-avatar">
            <img
              src="Yogii_Image.jpg"
              alt="Yogesh profile"
            />
          </div>
          <div className="hero-card-copy">
            <h2>Premium Full Stack Talent</h2>
            <p>
              I craft polished digital experiences with premium UI, strong APIs,
              and scalable architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
