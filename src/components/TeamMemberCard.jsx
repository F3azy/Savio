import React from "react";

const TeamMemberCard = ({ image, name, desription }) => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-[#FCFCFC]">
    <img src={image} alt={"Zdjecie " + name} />
      <div className="p-4 flex flex-col gap-2">
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
