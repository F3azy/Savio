import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const ContactCard = ({ Icon, value, name }) => {
  return (
    <motion.div
      variants={fadeIn("up", "", 0.5)}
      className={`
    ${name === "location" ? "md:col-span-2 p-1" : "py-10"}
    relative 
    border-2
    rounded-lg
     border-brand-secondary/30 
     bg-[#FCFCFC]`}
    >
      <div
        className="
        p-3
      flex
      justify-center
      items-center
      rounded-full
      border-2
      border-brand-secondary/30
      absolute 
      -top-[34px] 
      left-[50%]
      translate-x-[-50%]
      bg-[#FCFCFC]
      "
      >
        <Icon className="w-[40px] h-[40px]" />
      </div>
      {name === "location" ? (
        <iframe
          src={value}
          className="w-full h-[500px] rounded-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <p className="text-xl tracking-wider text-center">{value}</p>
      )}
    </motion.div>
  );
};

export default ContactCard;
