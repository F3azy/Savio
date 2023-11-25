import { ContactCard, TypingText } from "../components";
import { contacts } from "../constans";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer(0.5)}
      className="w-full flex flex-col items-center gap-y-16 md:gap-y-8 pt-12 relative z-10"
    >
      {/* <h3
        className="
        font-normal 
        text-[14px] 
        tracking-widest
      "
      >
        | Kontakt
      </h3> */}
      <TypingText text="| Kontakt" />
      <motion.div
        variants={staggerContainer(0.5)}
        className="w-full grid md:grid-cols-2 gap-10"
      >
        {contacts.map((contact) => (
          <ContactCard
            key={contact.name}
            Icon={contact.icon}
            value={contact.value}
            name={contact.name}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
