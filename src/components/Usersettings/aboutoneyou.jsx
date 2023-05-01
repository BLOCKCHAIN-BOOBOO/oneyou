import React, {useState} from "react";
import { Accordion } from "react-bootstrap-accordion";
import settings from "../../images/settings.png";
import headerlogo from "../../images/header-logo.png"

const Aboutoneyou = () => {

    return (
          
        <div className="flex flex-col w-full h-full m-2">
          {/* <div className="flex self-center justify-center mx-auto"> */}
           
            <div className=" flex w-full h-full right-0 ">
              {/*home-about  dir="ltr" */}
             
                <div className="home-about-me w-full">
                    
                     <div className="home-profile-edit-header w-full self-center justify-center flex text-center border-b-2">
            About Oneyou.in
            </div>
          
<div className="flex flex-row self-start float-left m-5">
    <div className="flex flex-col payment-header">
        <div className="flex payment-header">
          <span className="flex self-center">Some Content</span> 
        </div>
         <div className="flex py-2"><img src={headerlogo} className=""/></div>
    </div>

</div>

            </div>
            </div>
          {/* </div> */}
        </div>
     
  );
};

export default Aboutoneyou;
