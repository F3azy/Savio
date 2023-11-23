import { Link } from "react-router-dom";
import { SavioLogo } from "../assets";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const backGround =
    scrollPosition > 0
      ? "bg-blue-50 bg-opacity-60 backdrop-blur-md border-b-[1px] border-brand-secondary/20"
      : "bg-transparent";

  return (
    <nav
      className={`
      w-full max-h-[68px] flex justify-between 
    px-[16px] 2xl:px-[340px] 
    py-[12px] 2xl:py-[16px]
    sticky top-0 z-[100]
    ${backGround}
     `}
    >
      <Link to="/">
        <img className="w-[100px]" src={SavioLogo} alt="logo" />
      </Link>
      <div
        className="flex
      items-center
      gap-x-6 2xl:gap-x-16 
      font-semibold 
      tracking-wider
      text-neutral-900
      "
      >
        <Link
          className="p-1.5 rounded-md
          hover:bg-blue-200
          active:bg-blue-300"
          to="/"
        >
          Strona Główna
        </Link>
        <Link
          className="p-1.5 rounded-md
         hover:bg-blue-200
          active:bg-blue-300"
          to="/galeria"
        >
          Galeria
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
