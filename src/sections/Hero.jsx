import { HeroBlob } from "../assets";
import { Carousel } from "../components";
import { HomeCarouselImages } from "../assets/Carousel_Images";

const Hero = () => {
  return (
    <section className="
    flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-10
    py-3 lg:py-14 2xl:py-12
    ">
      <div className="flex-[0.5]">
        <h2 className="leading-[1.1] text-4xl md:text-6xl font-bold">
          <p className="text-brand-secondary">Zespół Muzyczny</p>
          <p
            className="
          w-min
          relative
          z-10
          before:content-['']
          before:absolute
          before:bottom-0
          before:left-0
          before:-z-10
          before:w-full
          before:h-3 lg:before:h-5
          before:bg-brand-secondary
          "
          >
            Savio
          </p>
        </h2>
        <p
          className="
        text-neutral-700 
        leading-[1.5] 
        tracking-widest
        text-justify
        pt-6
        "
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="md:w-[60%] lg:w-full flex-[0.4] relative">
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
        <img
          className="
          absolute
          -right-16 md:-right-24 lg:right-0
          -bottom-28
          z-10     
          "
          src={HeroBlob}
          alt="Hero-Blob"
        />
      </div>
    </section>
  );
};

export default Hero;
