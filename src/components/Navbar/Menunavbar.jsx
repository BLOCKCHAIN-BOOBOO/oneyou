
import React,{useState} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import settings from "../../images/settings.png"
import home from "../../images/home.png";


const Menunavbar = () => {
      const [menuActive, setMenuActive] = useState("Profile");
 
    const handleMenuActive = (menutype) => {
    setMenuActive(menutype);
    console.log(menutype)
    };
  return (
    <>
    <div className="w-full z-40 header absolute " style={{ position: "sticky" }}>
      <nav className="w-full z-40 header relative px-2 sm:px-2 md:px-5 xl:px-10">
        <div className="flex justify-between py-4 sm:py-4 md:py-1 xl:py-1 w-full relative">
        {/* <div className="hidden sm:hidden md:flex xl:flex"><img src={headerlogo} className=""/></div> */}
         
          <div className="header-text self-center text-center">
            Oneyou.in
          </div>
           <div className="flex">
                <button onClick={() => handleMenuActive("profile")} 
                  className={`flex profile-button-text m-2  ${menuActive === "profile" && " profile-button-active"}`} > 
                <img src={home} className="m-2" height="18" width="18" />Profile</button>
               
                <button onClick={() => handleMenuActive("web settings")}  
                className={`flex profile-button-text m-2  ${menuActive === "user settings" && " profile-button-active"}`}>
                    <img src={settings} className="m-2" height="15" width="15" /> User Settings</button>
            </div>

                   
        </div>
      
      </nav>
    </div>

      {/* {menuActive === "profile" && (
                <div>

                </div>

            )} */}
            </>
  );
};

export default Menunavbar;
