import { HomeCarouselImages } from "../../assets/Carousel_Images";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "../../utils/motion";

const GalleryImageList = ({onClick}) => {
  return (
    <motion.div
      variants={staggerContainer(0.25)}
      className="grid
    grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    gap-6
    relative
    z-10
    "
    >
      {HomeCarouselImages.map((image, idx) => (
        <motion.div
          variants={zoomIn(0.3)}
          key={idx}
          onClick={() => onClick(image)}
        >
          <img
            className="
          w-full
          cursor-pointer
          rounded-lg 
          shadow-[2px_12px_20px_#1f1f1f60]
          transition ease-in-out duration-[300ms]
          hover:-translate-y-2
          hover:shadow-[12px_16px_20px_#1f1f1f99]
          "
            src={image}
            alt={"Image" + 1}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryImageList;
