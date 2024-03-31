import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { ImageModal, GalleryImageList } from "../../components";
import { useModal } from "../../hooks";

const Image = () => {
  const { isOpen, onClose, onClick, source } = useModal();
  return (
    <>
      <motion.div
        variants={staggerContainer(0.3)}
        className="flex flex-col gap-y-[8px] relative"
      >
        <div className="gradient-1 xl:left-[-10%] top-[50%]" />
        <div className="gradient-2 right-[0] xl:right-[-35%] top-0" />
        <div className="gradient-5 bottom-0 left-[70%]" />
        <motion.h3
          variants={fadeIn("left", "", 0.5)}
          className="text-[24px] font-bold tracking-wider relative z-10"
        >
          Zdjęcia
        </motion.h3>
        <GalleryImageList onClick={onClick} />
      </motion.div>

      <ImageModal isOpen={isOpen} onClose={onClose} source={source} />
    </>
  );
};

export default Image;
