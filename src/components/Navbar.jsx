import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
      w-full flex justify-between 
    px-[16px] 2xl:px-[340px] 
    py-[12px] 2xl:py-[16px]
    sticky top-0
    bg-blue-50
     "
    >
      <img src="vite.svg" alt="logo" />
      <div
        className="flex flex-wrap 
      content-center 
      gap-x-6 2xl:gap-x-16 
      font-semibold 
      tracking-wide
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