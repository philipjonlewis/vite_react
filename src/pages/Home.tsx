import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container display-flex jc-center"
    >
      <motion.p
        initial={{
          color: "#ff9754",
          fontSize: "1rem",
          y: "-250px",
        }}
        transition={{ type: "spring" }}
        animate={{ color: "#ff2994", fontSize: "2rem", y: "0px", scale: 1.2 }}
      >
        Hello
      </motion.p>
    </motion.div>
  );
};

export default Home;
