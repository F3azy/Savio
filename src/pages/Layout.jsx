import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main
        className="
        px-[16px] 2xl:px-[340px] 
        py-[12px] 2xl:py-[18px]
      "
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
