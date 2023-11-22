import React from "react";
import { Hero, About, Team } from "../sections";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <About />
        <div className="gradient-1 top-[10%] right-[-30%]" />
        <div className="gradient-2 top-[30%] left-[-20%]" />
      </div>
      <div className="relative">
        <Team />
        <div className="gradient-3 bottom-[10%] right-0" />
      </div>
    </>
  );
};

export default Home;
