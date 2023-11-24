import { TeamMemberCard } from "../components";
import Image1 from "../assets/Carousel_Images/Image1.png";

const Team = () => {
  return (
    <section className="w-full 
    flex flex-col items-center gap-y-14 
    lg:py-14 2xl:py-12
    relative z-10
    ">
      <h3
        className="
        font-normal 
        text-[14px] 
        tracking-widest
      "
      >
        | Nasz Skład
      </h3>
      <div className="w-full 
      grid 
      md:grid-cols-2 xl:grid-cols-4 
      gap-y-16 md:gap-x-8 xl:gap-x-5
      ">
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


      </div>
    </section>
  );
};

export default Team;
