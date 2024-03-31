import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const TeamMemberCard = ({ image, name, positions, desription }) => {
  return (
    <motion.div 
    variants={fadeIn("right", "spring", 1)}
    className="flex flex-col rounded-lg bg-[#FCFCFC]">
      <img className="w-[85%] m-auto rounded-lg relative -top-6 shadow-[8px_12px_16px_#1f1f1f60]" src={image} alt={"Zdjecie " + name} />
      <div className="px-4 pb-4 flex flex-col gap-2 md:gap-3">
        <div className="flex flex-col">
          <h4 className="font-semibold tracking-wider text-xl">{name}</h4>
          <p
            className="        
          text-neutral-500 
          tracking-widest
          font-medium
          text-justify
          "
          >
            {positions}
          </p>
        </div>
        <p
          className="        
        text-neutral-800 
        tracking-wider
        font-medium
        text-justify
        "
        >
          {desription}
        </p>
      </div>
    </motion.div >
  );
};

export default TeamMemberCard;
