import Carousel from "../shared/Carousel";
import { HomeCarouselImages } from "../../assets/Carousel_Images";

const HeroCarousel = () => {
  return (
    <div
      className="
 w-[90%] lg:w-[75%]
  m-auto lg:m-0
  overflow-hidden
  rounded-xl 
  shadow-[8px_16px_25px_#1f1f1f99]
  relative
  z-20
  "
    >
      <Carousel
        elementsTotal={HomeCarouselImages.length}
        visibleElements={1}
        animate={true}
        showButtons={false}
      >
        {HomeCarouselImages.map((image, idx) => (
          <img className="w-full" key={idx} src={image} alt={"Image" + 1} />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
