import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

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
        <Footer />
      </main>
    </>
  );
};

export default Layout;
