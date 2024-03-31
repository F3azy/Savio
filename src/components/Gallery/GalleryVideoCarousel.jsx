import Carousel from "../shared/Carousel";
import { FaPlay } from "react-icons/fa";
import { YTThumbnail, YTVideos, YTModalVideos } from "../../constans";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useVisibleItems } from "../../hooks";

const GalleryVideoCarousel = ({ onClick }) => {
  const { visibleElements, isExternal } = useVisibleItems();

  return (
    <div className="relative z-10">
      <Carousel
        elementsTotal={YTThumbnail.length}
        visibleElements={visibleElements}
        isScrollable={true}
        gap={20}
        gapClass="gap-x-[20px]"
        gridColTem={"grid-cols-[repeat(" + YTThumbnail.length + ",_1fr)]"}
      >
        {YTThumbnail.map((thumbnail, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn("left", "", 0.5)}
            className="overflow-hidden relative rounded-xl"
          >
            <img
              className="my-[-10%] w-full"
              src={thumbnail}
              alt={"Video " + idx + 1}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <FaPlay
              className="
              absolute 
              top-[50%] 
              right-[50%]
              transform 
              translate-y-[-50%] 
              translate-x-[50%]
              cursor-pointer
              text-violet-400
              hover:text-brand-secondary
              w-[40px] md:w-[70px]
              h-[40px] md:h-[70px]
              "
              onClick={() => {
                if (isExternal) window.open(YTVideos[idx], "_blank");
                else onClick(YTModalVideos[idx]);
              }}
            />
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryVideoCarousel;
