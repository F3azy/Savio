import { HeroBlob } from "../assets";
import Carousel from "../components/Carousel";
import { HomeCarouselImages } from "../assets/Carousel_Images";

const Hero = () => {
  return (
    <div className="flex justify-between content-center gap-x-5 py-16">
      <div className="flex-[0.5] flex flex-col justify-center gap-y-6">
        <h2 className="leading-[1.2] text-6xl">
          <p
            className="
          font-bold text-brand-secondary"
          >
            Zespół Muzyczny
          </p>
          <p
            className="
          font-bold 
          w-min
          relative
          z-10
          before:content-['']
          before:absolute
          before:bottom-0
          before:left-0
          before:-z-10
          before:w-full
          before:h-5
          before:bg-brand-secondary
          "
          >
            Savio
          </p>
        </h2>
        <p
          className="
        text-neutral-600 
        leading-[1.5] 
        tracking-wider
        text-justify
        font-medium
        "
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="flex-[0.4] relative">
        <div
          className="
        w-[75%]
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
        <img
          className="
          absolute
          right-0
          top-16
          z-10     
          "
          src={HeroBlob}
          alt="Hero-Blob"
        />
      </div>
    </div>
  )
}

export default Hero