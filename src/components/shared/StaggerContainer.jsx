import { motion } from "framer-motion";

const StaggerContainer = (props) => {
  const { children } = props;
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default StaggerContainer;
