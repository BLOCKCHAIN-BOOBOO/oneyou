
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import headerlogo from "../../images/header-logo.png"


const Navbar = () => {
  return (
    <div className="w-full z-40 header absolute " style={{ position: "sticky" }}>
      <nav className="w-full z-40 header relative px-2 sm:px-2 md:px-5 xl:px-10">
        <div className="flex justify-between py-4 sm:py-4 md:py-1 xl:py-1 w-full relative">
        <div className="hidden sm:hidden md:flex xl:flex"><img src={headerlogo} className=""/></div>
         
          <div className="header-text self-center text-center">
            Oneyou.in
          </div>
          <div className="flex help-support-text">Help & Support</div>
          {/* hidden sm:hidden md:flex xl: */}
        </div>
      
      </nav>
    </div>
  );
};

export default Navbar;
