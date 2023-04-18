
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-3 footer px-2 sm:px-2 md:px-5 xl:px-10" > 
    <footer className="">   
        <div className="flex justify-between py-4 w-full relative">
        <div className="footer-text">© 2024 . All rights are reserved by Oneyou.in </div>
         
        
        <div>
       <ul className="flex ">
            <li className="cursor-pointer mx-4 footer-text hidden sm:hidden md:flex xl:flex">
              <NavLink
                to="/"
                className=""
              >
                About
              </NavLink>
            </li>

            <li className="cursor-pointer mx-4 footer-text">
              <NavLink
                to="/exploreNFT/nfts"
                className=""
              >
               Support
              </NavLink>
            </li>
             <li className="cursor-pointer mx-4 footer-text hidden sm:hidden md:flex xl:flex">
              <NavLink
                to="/exploreNFT/nfts"
                className=""
              >
              Contact Us
              </NavLink>
            </li>
            </ul>

        </div>
        </div>
      
   </footer>
    </div>
  );
};

export default Footer;
