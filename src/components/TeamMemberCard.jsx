import React from "react";

const TeamMemberCard = ({ image, name, desription }) => {
  return (
    <div className="flex gap-x-4 bg-[#FCFCFC]">
      <img src={image} alt={"Zdjecie " + name} />
      <div className="border-l-2 my-5 border-brand-primary/30" />
      <div className="my-5 pr-4 flex flex-col gap-3">
        <h4 className="font-semibold text-xl">{name}</h4>
        <p
          className="        
        text-neutral-900 
        tracking-wide
        font-medium
        text-justify
        "
        >
          {desription}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
