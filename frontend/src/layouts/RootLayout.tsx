import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen scroll-smooth antialiased">
        <Navbar/>
        <div className="pt-20">
          <Outlet/>
        </div>
    </div>
  );
};

export default RootLayout;