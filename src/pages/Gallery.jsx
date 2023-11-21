import React from "react";
import Carousel from "../components/Carousel";
import { FaPlay } from "react-icons/fa";
import { YTThumbnail, YTVideos } from "../constans";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-y-[8px]">
      <h3 className="text-[24px] font-bold">Video</h3>
      <div className="mx-[-340px] overflow-hidden">
        <Carousel
          elementsTotal={YTThumbnail.length}
          visibleElements={3}
          carouselTitle="Video"
          noGap={false}
        >
          {YTThumbnail.map((thumbnail, idx) => (
            <div key={idx} className="overflow-hidden relative rounded-3xl">
              <img
                className="my-[-10%] w-full"
                src={thumbnail}
                alt={"Video " + idx + 1}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40" />
              <FaPlay
                className="
                absolute 
                top-[50%] 
                right-[50%]
                transform 
                translate-y-[-50%] 
                translate-x-[50%]
                "
                fill="#9361FF"
                size={70}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {/* <div>
            <iframe
              className="w-full aspect-video"
              src={yt}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div> */}
    </div>
  );
};

export default Gallery;
