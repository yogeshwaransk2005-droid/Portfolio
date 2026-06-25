import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function FloatingSocial() {
  return (
    <aside className="floating-social">
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
    </aside>
  );
}

export default FloatingSocial;
