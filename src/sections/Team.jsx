import { TeamMemberCard, TypingText } from "../components";
import Image1 from "../assets/Carousel_Images/Image1.png";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const Team = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer(0.5, 0.3)}
      className="w-full 
    flex flex-col items-center gap-y-14 
    lg:py-14 xl:mb-20
    relative z-10
    "
    >
      <TypingText text="| Nasz Skład" />
      <motion.div
        variants={staggerContainer(0.5, 0.5)}
        className="w-full 
      grid 
      md:grid-cols-2 xl:grid-cols-4 
      gap-y-16 md:gap-x-8 xl:gap-x-5
      "
      >
        <TeamMemberCard
          image={Image1}
          name={"Jan Kowalski"}
          positions={"Wokalista, Basista"}
          desription={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.`}
        />
        <TeamMemberCard
          image={Image1}
          name={"Jan Kowalski"}
          positions={"Wokalista, Basista"}
          desription={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.`}
        />
        <TeamMemberCard
          image={Image1}
          name={"Jan Kowalski"}
          positions={"Wokalista, Basista"}
          desription={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.`}
        />
        <TeamMemberCard
          image={Image1}
          name={"Jan Kowalski"}
          positions={"Wokalista, Basista"}
          desription={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.`}
        />
      </motion.div>
    </motion.section>
  );
};

export default Team;
