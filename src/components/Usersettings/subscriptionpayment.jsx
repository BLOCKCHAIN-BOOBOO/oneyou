import React, {useState} from "react";
import { Accordion } from "react-bootstrap-accordion";
import home from "../../images/home.png";
import file from "../../images/file.png";
import downarrow from "../../images/downarrow.png";
import arrow from "../../images/arrow.png";
import refresh from "../../images/refresh.png";
import downarrowwhite from "../../images/downarrowwhite.png";
import forwardarrow from "../../images/forward-arrow.png";
import settings from "../../images/settings.png";
import backarrow from "../../images/back-arrow.png"
import deleteicon from "../../images/delete-icon.png";
import settingrefresh from "../../images/setting-refresh.png";
import upiicon from "../../images/upi-icon.png"
import download from "../../images/download.png"
import publishicon from "../../images/publish-icon.png"

const Subscriptionpayment = () => {

    return (
    <div className="page-background page-body flex self-center align-middle justify-center">
    
     <div className="m-8 flex flex-row w-full h-full settings-page">
    <div className="flex flex-row w-full h-5/6 mt-16" >      
      {/* dir="ltr" */}     
        
       
        <div className="flex flex-col w-3/4 h-full m-2">
          {/* <div className="flex self-center justify-center mx-auto"> */}
           
            <div className=" flex w-full h-full right-0 ">
              {/*home-about  dir="ltr" */}
             
                <div className="home-about-me w-full">
                <div className="flex w-full  border-b-2">
                     <button className="float-left text-left py-2 m-2 px-3"><img className="flex bg-gray-300 rounded-2xl p-3" height="" width="" src={backarrow} /></button>
                     <div className="home-profile-edit-header w-full self-center justify-center flex text-center"> Payment</div>
                     </div>   
          
<div className="flex flex-row self-start float-left m-2">
    <div className="flex flex-col payment-method-card payment-header">
        <div className="flex payment-header py-1">
          <span className="flex self-center">Invoice ID:</span> 
          <span>UX207564</span>
       </div>
         <div className="flex py-1">
          <span className="flex self-center">Date of Plan:</span> 
          <span>15 May 2023</span>
       </div>
         <div className="flex py-1">
          <span className="flex self-center">Amount:</span> 
          <span>50 INR</span>
       </div>
         <div className="flex py-1">
          <span className="flex self-center">Plan:</span> 
          <span>Starter Premium Plan / Monthly</span>
       </div>
       <div className="flex py-1">
          <span className="flex self-center">Method:</span> 
          <span>UPI ID</span>
       </div>
    </div>
  
  
  
  
    <div className="flex flex-col payment-method-card mx-2">
        <span className="flex self-start payment-method-name">Payment Method</span> 
        <div className="flex flex-row m-2">
            {/* <span className="flex self-center ">UPI:</span>
            <span className="flex self-center">abcabc@ybl</span>
            <img src={upiicon} className="self-center flex justify-center ml-2" width="15" height="15" /> */}
             <input type="text" className="mx-auto input-border w-3/4 input-text" placeholder="Enter UPI ID" />
              <button className="publish-site w-full py-2 m-2 px-3">Verify & Proceed</button>
        </div>
       

         <button className="publish-site py-2 px-7 m-2 text-left float-left self-start">Generate QR</button>
    </div>

   


</div>

            </div>
            </div>
          {/* </div> */}
        </div>
       </div>

    </div>
    </div>
  );
};

export default Subscriptionpayment;
