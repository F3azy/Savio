import { useState, useEffect } from "react";
import { Carousel, Modal } from "../components";
import { FaPlay } from "react-icons/fa";
import { YTThumbnail, YTVideos, YTModalVideos } from "../constans";
import { HomeCarouselImages } from "../assets/Carousel_Images";
import useDisclosure from "../hooks/useDisclosure";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import useWindowSize from "../hooks/useWindowSize";

const Gallery = () => {
  const {
    isOpen: isImageOpen,
    onOpen: onImageOpen,
    onClose: onImageClose,
  } = useDisclosure();
  const {
    isOpen: isVideoOpen,
    onOpen: onVideoOpen,
    onClose: onVideoClose,
  } = useDisclosure();

  const [modalImage, setModalImage] = useState("");
  const [modalVideo, setModalVideo] = useState("");
  const [visibleElements, setVisibleElements] = useState(3);
  const [YTExternal, setYTExternal] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setVisibleElements(3);
      setYTExternal(false);
    } else if (window.innerWidth >= 768) {
      setVisibleElements(2.5);
      setYTExternal(true);
    } else {
      setVisibleElements(1.5);
      setYTExternal(true);
    }
  }, [windowSize]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer(0.75, 0.5)}
      className="flex flex-col gap-y-[36px] py-2"
    >
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
                    if (YTExternal) window.open(YTVideos[idx], "_blank");
                    else {
                      setModalVideo(YTModalVideos[idx]);
                      onVideoOpen();
                    }
                  }}
                />
              </motion.div>
            ))}
          </Carousel>
        </div>
      </motion.div>
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
              onClick={() => {
                setModalImage(image);
                onImageOpen();
              }}
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
      </motion.div>

      {/*Image Modal*/}
      <Modal isOpen={isImageOpen} onClose={onImageClose}>
        <div
          className="
        bg-gray-600 
        rounded-[20px] 
        p-3 
        "
        >
          <img className="rounded-lg" src={modalImage} alt="Selected Image" />
        </div>
      </Modal>

      {/*Video Modal*/}
      <Modal isOpen={isVideoOpen} onClose={onVideoClose}>
        <div
          className="
        bg-gray-600 
        p-3 
        w-[60vw]
        "
        >
          <iframe
            className="w-full aspect-video"
            src={modalVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </motion.div>
  );
};

export default Gallery;
