import { HeroBlob } from "../../assets";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "../../utils/motion";
import {
  HeroIntroduction,
  HeroCarousel,
  StaggerContainer,
} from "../../components";

const Hero = () => {
  return (
    <StaggerContainer
      variants={staggerContainer(1.5, 0.3)}
      className="
      flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10
      py-4 lg:py-14 2xl:py-12
      "
    >
      <HeroIntroduction />
      <motion.div
        variants={zoomIn(0.5)}
        className="md:w-[60%] lg:w-full flex-[0.4] relative"
      >
        <HeroCarousel />
        <img
          className="
          absolute
          -right-16 md:-right-24 lg:right-0
          -bottom-24
          z-10     
          "
          src={HeroBlob}
          alt="Hero-Blob"
        />
      </motion.div>
    </StaggerContainer>
  );
};

export default Hero;
