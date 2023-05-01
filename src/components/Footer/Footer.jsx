
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-3 footer px-2 sm:px-2 md:px-5 xl:px-10" > 
    <footer className="">   
        <div className="flex justify-between xl:flex-row md:flex-row sm:flex-row flex-col w-full relative">
           {/* py-4 */}
        <div className="footer-text flex self-center">© 2024 . All rights are reserved by Oneyou.in </div>
         
        
        <div>
       <ul className="flex self-center py-2 justify-center">
            <li className="cursor-pointer xl:mx-4 md:mx-4 sm:mx-2 mx-2 footer-text flex">
              {/* hidden sm:hidden md:flex xl: */}
              <NavLink
                to="/"
                className=""
              >
                About
              </NavLink>
            </li>

            <li className="cursor-pointer xl:mx-4 md:mx-4 sm:mx-2 mx-2 footer-text">
              <NavLink
                to="/exploreNFT/nfts"
                className=""
              >
               Support
              </NavLink>
            </li>
             <li className="cursor-pointer xl:mx-4 md:mx-4 sm:mx-2 mx-2 footer-text ">
              {/* hidden sm:hidden md:flex xl:flex */}
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