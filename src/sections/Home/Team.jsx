import {
  TypingText,
  StaggerContainer,
  TeamMemberCardList,
} from "../../components";
import { staggerContainer } from "../../utils/motion";

const Team = () => {
  return (
    <StaggerContainer
      variants={staggerContainer(0.5, 0.3)}
      className="w-full 
      flex flex-col items-center gap-y-14 
      lg:py-14 xl:mb-20
      relative z-10
      "
    >
      <TypingText text="| Nasz Skład" />
      <TeamMemberCardList />
    </StaggerContainer>
  );
};

export default Team;
