import { staggerContainer } from "../utils/motion";
import { useWindowWidth } from "../hooks";
import { Video, Image } from "../sections/Gallery";
import { StaggerContainer } from "../components";

const Gallery = () => {
  const windowWidth = useWindowWidth();

  return (
    <StaggerContainer
      variants={
        windowWidth >= 768
          ? staggerContainer(1.4, 0.3)
          : staggerContainer(1, 0.3)
      }
      className="flex flex-col gap-y-[36px] py-2"
    >
      <Video />
      <Image />
    </StaggerContainer>
  );
};

export default Gallery;
