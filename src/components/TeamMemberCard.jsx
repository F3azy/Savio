const TeamMemberCard = ({ image, name, positions, desription }) => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-[#FCFCFC]">
      <img src={image} alt={"Zdjecie " + name} />
      <div className="p-4 flex flex-col gap-3">
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
    </div>
  );
};

export default TeamMemberCard;
