import { FaArrowDownLong } from "react-icons/fa6";
import { TypingText, StaggerContainer } from "../../components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { useWindowWidth } from "../../hooks";

const About = () => {
  const windowWidth = useWindowWidth();

  return (
    <StaggerContainer
      variants={
        windowWidth >= 768 ? staggerContainer(0.7, 2.5) : staggerContainer(0.7)
      }
      className="w-full flex flex-col items-center gap-y-3 
      py-16 lg:py-14 2xl:py-12
      "
    >
      <TypingText text="| O Nas" />
      <motion.p
        variants={fadeIn("up", "spring", 1)}
        className="
        md:w-[80%] lg:w-1/2
        text-neutral-600 
        leading-[1.5] 
        tracking-wide
        text-center
        font-normal
        text-xl
        "
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </motion.p>
      <motion.div variants={fadeIn("up", "spring", 1)}>
        <FaArrowDownLong size={20} />
      </motion.div>
    </StaggerContainer>
  );
};

export default About;
