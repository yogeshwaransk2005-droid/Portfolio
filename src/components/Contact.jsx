import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2800);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-title">
        <span>Contact</span>
        <h2>Let's Connect</h2>
      </div>

      <motion.form
        className="glass-panel contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="form-grid">
          <label>
            Name
            <input type="text" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your Email" required />
          </label>
        </div>

        <label>
          Message
          <textarea rows="6" placeholder="Your Message" required />
        </label>

        <button type="submit" className="btn btn-primary form-button">
          {submitted ? "Message Sent" : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
}

export default Contact;
