import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div>
          <p>© 2026 Yogesh. Built for premium engineering interviews.</p>
          <div className="footer-icons">
            <a
              href="https://linkedin.com/in/yogeshwaransk"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/yogesh" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:yogeshwaransk2005@gmail.com" aria-label="Email">
              <HiOutlineMail />
            </a>
          </div>
        </div>

        <a href="#home" className="back-top">
          Back To Top <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
