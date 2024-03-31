import {
  TypingText,
  StaggerContainer,
  ContactCardList,
} from "../../components";
import { staggerContainer } from "../../utils/motion";

const Contact = () => {
  return (
    <StaggerContainer
      variants={staggerContainer(0.5, 0.3)}
      className="w-full 
      flex flex-col items-center gap-y-16 md:gap-y-8 
      pt-14
      relative z-10"
    >
      <TypingText text="| Kontakt" />
      <ContactCardList />
    </StaggerContainer>
  );
};

export default Contact;
