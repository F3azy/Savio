import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center gap-y-2 py-12">
      <h3
        className="
        font-normal 
        text-[14px] 
      "
      >
        | O nas
      </h3>
      <p
        className="
        w-1/2
      text-neutral-600 
        leading-[1.5] 
        tracking-wide
        text-center
        font-normal
        text-[20px]
        "
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <FaArrowDownLong size={20}/>
    </section>
  );
};

export default About;
