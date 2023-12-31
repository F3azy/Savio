import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Layout = () => {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <main
        className="
        px-4 xl:px-[100px] 2xl:px-[300px] 
      "
      >
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
