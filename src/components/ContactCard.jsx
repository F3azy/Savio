const ContactCard = ({ Icon, value, name }) => {
  return (
    <div
      className={`
    ${name==="location" ? "md:col-span-2 p-1" : "p-8"}
    relative 
    border-2
    rounded-lg
     border-brand-secondary/30 
     bg-[#FCFCFC]`}
    >
      <div
        className="
      p-2
      rounded-full
      border-2
      border-brand-secondary/30
      absolute 
      -top-[32px] 
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
    </div>
  );
};

export default ContactCard;
