import { TeamMemberCard } from "../components";
import Image1 from "../assets/Carousel_Images/Image1.png";

const Team = () => {
  return (
    <section className="w-full 
    flex flex-col items-center gap-y-6 
    py-14 
    relative z-10
    ">
      <h3
        className="
        font-normal 
        text-[14px] 
      "
      >
        | Nasz Skład
      </h3>
      <div className="w-full grid grid-cols-2 gap-10">
        <TeamMemberCard
          image={Image1}
          name={"Jan Kowalski"}
          positions={"Wokalista, Basista"}
          desription={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        />
        <TeamMemberCard
          image={Image1}
          name={"Jan Kowalski"}
          positions={"Wokalista, Basista"}
          desription={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        />
        <TeamMemberCard
          image={Image1}
          name={"Jan Kowalski"}
          positions={"Wokalista, Basista"}
          desription={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        />
        <TeamMemberCard
          image={Image1}
          name={"Jan Kowalski"}
          positions={"Wokalista, Basista"}
          desription={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        />

      </div>
    </section>
  );
};

export default Team;
