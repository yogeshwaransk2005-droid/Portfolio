import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="loader-content"
        initial={{ y: 20, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.4em", y: 20 }}
          animate={{ opacity: 1, letterSpacing: "0.8em", y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Yogeshwaran SK
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          FULL STACK DEVELOPER
        </motion.p>
        <motion.div
          className="loader-dots"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Loader;
