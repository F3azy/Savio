import { useState } from "react";
import { Carousel, Modal } from "../components";
import { FaPlay } from "react-icons/fa";
import { YTThumbnail, YTVideos } from "../constans";
import { HomeCarouselImages } from "../assets/Carousel_Images";
import { useDisclosure } from "../hooks/useDisclosure";

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

  return (
    <div className="flex flex-col gap-y-[36px] py-2">
      <div className="flex flex-col gap-y-[8px] relative">
        <div className="gradient-4 left-[-37%] bottom-0" />
        <h3 className="text-[24px] font-bold relative z-10">Video</h3>
        <div className="relative z-10">
          <Carousel
            elementsTotal={YTThumbnail.length}
            visibleElements={3}
            carouselTitle="Video"
            gap={20}
            gapClass="gap-x-[20px]"
            gridColTem={"grid-cols-[repeat(" + YTThumbnail.length + ",_1fr)]"}
          >
            {YTThumbnail.map((thumbnail, idx) => (
              <div key={idx} className="overflow-hidden relative rounded-xl">
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
                "
                  size={70}
                  onClick={() => {
                    setModalVideo(YTVideos[idx]);
                    onVideoOpen();
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col gap-y-[8px] relative">
        <div className="gradient-1 left-[-10%] top-[50%]" />
        <div className="gradient-2 right-[-35%] top-0" />
        <div className="gradient-5 bottom-0 left-[70%]" />
        <h3 className="text-[24px] font-bold relative z-10">Zdjęcia</h3>
        <div
          className="grid
          grid-cols-[repeat(4,_1fr)]
          gap-6
          relative
          z-10
          "
        >
          {HomeCarouselImages.map((image, idx) => (
            <div
              key={idx}
              className="
            rounded-lg 
            overflow-hidden 
            cursor-pointer 
            shadow-[2px_12px_20px_#1f1f1f60]
            transition ease-in-out duration-[300ms]
            hover:-translate-y-2
            hover:shadow-[12px_16px_20px_#1f1f1f99]
            "
              onClick={() => {
                setModalImage(image);
                onImageOpen();
              }}
            >
              <img className="w-full" src={image} alt={"Image" + 1} />
            </div>
          ))}
          {HomeCarouselImages.map((image, idx) => (
            <div
              key={idx}
              className="
            rounded-lg 
            overflow-hidden 
            cursor-pointer 
            shadow-[2px_12px_20px_#1f1f1f60]
            transition ease-in-out duration-[300ms]
            hover:-translate-y-2
            hover:shadow-[12px_16px_20px_#1f1f1f99]
            "
              onClick={() => {
                setModalImage(image);
                onImageOpen();
              }}
            >
              <img className="w-full" src={image} alt={"Image" + 1} />
            </div>
          ))}
          {HomeCarouselImages.map((image, idx) => (
            <div
              key={idx}
              className="
            rounded-lg 
            overflow-hidden 
            cursor-pointer 
            shadow-[2px_12px_20px_#1f1f1f60]
            transition ease-in-out duration-[300ms]
            hover:-translate-y-2
            hover:shadow-[12px_16px_20px_#1f1f1f99]
            "
              onClick={() => {
                setModalImage(image);
                onImageOpen();
              }}
            >
              <img className="w-full" src={image} alt={"Image" + 1} />
            </div>
          ))}
          {HomeCarouselImages.map((image, idx) => (
            <div
              key={idx}
              className="
            rounded-lg 
            overflow-hidden 
            cursor-pointer 
            shadow-[2px_12px_20px_#1f1f1f60]
            transition ease-in-out duration-[300ms]
            hover:-translate-y-2
            hover:shadow-[12px_16px_20px_#1f1f1f99]
            "
              onClick={() => {
                setModalImage(image);
                onImageOpen();
              }}
            >
              <img className="w-full" src={image} alt={"Image" + 1} />
            </div>
          ))}

        </div>
      </div>

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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
