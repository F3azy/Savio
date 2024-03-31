import TeamMemberCard from "./TeamMemberCard";
import Image1 from "../../assets/Carousel_Images/Image1.png";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const TeamMemberCardList = () => {
  return (
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
  );
};

export default TeamMemberCardList;
