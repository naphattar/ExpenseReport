import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen scroll-smooth antialiased">
        <Navbar/>
        <Outlet />
    </div>
  );
};

export default RootLayout;