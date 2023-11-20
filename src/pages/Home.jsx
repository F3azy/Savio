import React from "react";

const Home = () => {
  return (
    <div className="flex gap-x-10">
      <div className="flex-1 flex flex-col gap-y-6">
        <h2 className="leading-[1.2] text-6xl">
          <p
            className="
          font-bold text-brand-secondary"
          >
            Zespół Muzyczny
          </p>
          <p
            className="
          font-bold 
          w-min
          relative
          z-10
          before:content-['']
          before:absolute
          before:bottom-0
          before:left-0
          before:-z-10
          before:w-full
          before:h-5
          before:bg-brand-secondary
          "
          >
            Savio
          </p>
        </h2>
        <p className="text-neutral-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="flex-1">
        
      </div>
    </div>
  );
};

export default Home;
