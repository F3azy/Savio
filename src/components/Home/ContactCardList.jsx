import ContactCard from "./ContactCard";
import { contacts } from "../../constans";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const ContactCardList = () => {
  return (
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
  );
};

export default ContactCardList;
