import { GalleryVideoCarousel, VideoModal } from "../../components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { useModal } from "../../hooks";

const Video = () => {
  const { isOpen, onClose, onClick, source } = useModal();

  return (
    <>
      <motion.div
        variants={staggerContainer(0.3)}
        className="flex flex-col gap-y-[8px] relative"
      >
        <div className="gradient-4 xl:left-[-37%] xl:bottom-0" />
        <motion.h3
          variants={fadeIn("left", "", 0.5)}
          className="text-[24px] font-bold tracking-wider relative z-10"
        >
          Video
        </motion.h3>
        <GalleryVideoCarousel onClick={onClick} />
      </motion.div>
      <VideoModal isOpen={isOpen} onClose={onClose} source={source} />
    </>
  );
};

export default Video;
