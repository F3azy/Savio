import React from "react";
import Carousel from "../components/Carousel";
import { FaPlay } from "react-icons/fa";

const YTVideos = [
  "https://www.youtube.com/embed/u1kDmE2Ou3I",
  "https://www.youtube.com/embed/PfqsHIITt8c",
  "https://www.youtube.com/embed/KxVqCoKfujU",
  "https://www.youtube.com/embed/yCWpOTJIXzM",
  "https://www.youtube.com/embed/ToFWx29MZzs",
  "https://www.youtube.com/embed/K9CWddpjq1E",
  "https://www.youtube.com/embed/ZUTLz8hPYJs",
  "https://www.youtube.com/embed/BiVdV2tFOZw",
  "https://www.youtube.com/embed/heF1N3B9SPM",
  "https://www.youtube.com/embed/ksWY6Kfa7qE",
  "https://www.youtube.com/embed/ChuwrrY0gtk",
  "https://www.youtube.com/embed/GfAKAqbyVXc",
  "https://www.youtube.com/embed/RCmoQ80J6m4",
  "https://www.youtube.com/embed/b3qisotgfmc",
  "https://www.youtube.com/embed/LRoq10n8DOo",
];

const YTThumbnail = [
  "http://img.youtube.com/vi/u1kDmE2Ou3I/0.jpg",
  "http://img.youtube.com/vi/PfqsHIITt8c/0.jpg",
  "http://img.youtube.com/vi/KxVqCoKfujU/0.jpg",
  "http://img.youtube.com/vi/yCWpOTJIXzM/0.jpg",
  "http://img.youtube.com/vi/ToFWx29MZzs/0.jpg",
  "http://img.youtube.com/vi/K9CWddpjq1E/0.jpg",
  "http://img.youtube.com/vi/ZUTLz8hPYJs/0.jpg",
  "http://img.youtube.com/vi/BiVdV2tFOZw/0.jpg",
  "http://img.youtube.com/vi/heF1N3B9SPM/0.jpg",
  "http://img.youtube.com/vi/ksWY6Kfa7qE/0.jpg",
  "http://img.youtube.com/vi/ChuwrrY0gtk/0.jpg",
  "http://img.youtube.com/vi/GfAKAqbyVXc/0.jpg",
  "http://img.youtube.com/vi/RCmoQ80J6m4/0.jpg",
  "http://img.youtube.com/vi/b3qisotgfmc/0.jpg",
  "http://img.youtube.com/vi/LRoq10n8DOo/0.jpg",
];

const Gallery = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Carousel
          elementsTotal={YTThumbnail.length}
          visibleElements={3}
          carouselTitle="Video"
          noGap={false}
        >
          {YTThumbnail.map((thumbnail, idx) => (
            <div key={idx} className="overflow-hidden relative">
              <img
                className="my-[-10%]"
                src={thumbnail}
                alt={"Video " + idx + 1}
              />
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
    </>
  );
};

export default Gallery;
