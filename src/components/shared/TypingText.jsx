import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../utils/motion";

const TypingText = ({ text }) => {
  return (
    <motion.h3
      variants={staggerContainer(0.1)}
      className="
    font-normal 
    tracking-widest
  "
    >
      {Array.from(text).map((char, idx) =>  
        <motion.span
        className="inline-block"
          key={idx}
          variants={textVariant}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      )}
    </motion.h3>
  );
};

export default TypingText;
