import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { useWindowWidth } from "../../hooks";

const HeroIntroduction = () => {
  const windowWidth = useWindowWidth();

  return (
    <motion.div variants={staggerContainer(1)} className="flex-[0.5]">
      <motion.h2
        variants={staggerContainer(0.5)}
        className="leading-[1.1] text-4xl md:text-6xl font-bold"
      >
        <motion.p
          variants={fadeIn(windowWidth >= 768 ? "down" : "right", "spring", 1)}
          className="text-brand-secondary"
        >
          Zespół Muzyczny
        </motion.p>
        <motion.p
          variants={fadeIn(windowWidth >= 768 ? "down" : "right", "spring", 1)}
          className="
      w-min
      relative
      z-10
      before:content-['']
      before:absolute
      before:bottom-0
      before:left-0
      before:-z-10
      before:w-full
      before:h-3 lg:before:h-5
      before:bg-brand-secondary
      "
        >
          Savio
        </motion.p>
      </motion.h2>
      <motion.p
        variants={fadeIn(windowWidth >= 768 ? "down" : "right", "spring", 1)}
        className="
    text-neutral-700 
    leading-[1.5] 
    tracking-widest
    text-justify
    mt-4 md:mt-6
    "
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </motion.p>
    </motion.div>
  );
};

export default HeroIntroduction;
