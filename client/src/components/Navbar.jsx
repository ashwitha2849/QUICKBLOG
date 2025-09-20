import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-5 px-4 sm:px-12 xl:px-32 bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      {/* Logo / App Name */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-40 md:w-44 cursor-pointer mb-3 sm:mb-0 transition-transform duration-300 hover:scale-105"
      />

      {/* Dashboard/Login Button */}
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm sm:text-base bg-primary text-white px-8 sm:px-10 py-2.5 sm:py-3 cursor-pointer shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        {token ? "Dashboard" : "Login"}
        <img src={assets.arrow} className="w-3 sm:w-4" alt="arrow" />
      </button>
    </nav>
  );
};

export default Navbar;
