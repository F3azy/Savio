import { Hero, About, Team, Contact } from "../sections";

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
        <Contact />
        <div className="gradient-3 bottom-[0] right-[5%]" />
        <div className="gradient-5 top-[10%] right-[-10%] opacity-60" />
      </div>
    </>
  );
};

export default Home;
