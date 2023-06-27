import React, {useState} from "react";
import {  useNavigate } from "react-router-dom";
import { Accordion } from "react-bootstrap-accordion";
import home from "../../images/home.png";
import file from "../../images/file.png";
import downarrow from "../../images/downarrow.png";
import arrow from "../../images/arrow.png";
import refresh from "../../images/refresh.png";
import downarrowwhite from "../../images/downarrowwhite.png";
import forwardarrow from "../../images/forward-arrow.png";
import settings from "../../images/settings.png";
import deleteicon from "../../images/delete-icon.png";
import settingrefresh from "../../images/setting-refresh.png";
import upiicon from "../../images/upi-icon.png"
import download from "../../images/download.png"
import publishicon from "../../images/publish-icon.png"

const Editupi = () => {
     const navigate=useNavigate()

   const navigateToUpgrade = async () => {
    navigate('/usersettings/subscriptions/upgradeplan');
  };

    return (
   
        
        <div className="flex flex-col w-full h-full m-2">
          {/* <div className="flex self-center justify-center mx-auto"> */}
           
            <div className=" flex w-full right-0 h-full">
              {/*home-about  dir="ltr" */}
             
                <div className="home-about-me w-full">
                    
                     <div className="home-profile-edit-header w-full self-center justify-center flex text-center border-b-2">
             User Subscription Settings
            </div>
          
<div className="flex flex-col self-start float-left">
    <div className="flex">
        <span className="flex self-center">Current Plan</span> 
        <button className="publish-site py-2 px-7 m-4" onClick={navigateToUpgrade}>Upgrade <img src={publishicon} className="ml-2" height="15" width="15" /></button>
    </div>
    <div className="flex">
        <span className="flex self-center">Payment Method</span> 
        <div className="flex flex-row m-4">
            {/* <span className="flex self-center ">UPI:</span>
            <span className="flex self-center">abcabc@ybl</span>
            <img src={upiicon} className="self-center flex justify-center ml-2" width="15" height="15" /> */}
             <input type="text" className="mx-auto input-border w-full input-text" placeholder="Enter UPI ID" />
        </div>
        <button className="publish-site py-2 px-7 m-4">Verify & Save <img src={settingrefresh} className="ml-2" height="15" width="15" /></button>
    </div>

    <div className="flex flex-col mt-2">
        <span className="flex self-start float-left">Payment History</span>
        <div className="mt-5 block overflow-auto" style={{height:"300px"}}>
        <table className="table w-full flex payment-table">
           <thead>
                <tr>
                <th>Invoice Id</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Frequency</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
               </thead>
               <tbody>
                <tr>
                    <td>UX27032001</td>
                    <td>15 May 2023</td>
                    <td>50</td>
                    <td>Monthly</td>
                    <td className="flex self-center justify-center"><button className="paid-btn py-2 px-7">PAID</button></td>
                    <td><div className="flex self-center  cursor-pointer"><span className="flex self-center">Download Invoice </span><img src={download} className="flex self-center m-1" width="12" height="12" /></div></td>
                </tr>
                <tr>
                    <td>UX27032001</td>
                    <td>15 May 2023</td>
                    <td>50</td>
                    <td>Monthly</td>
                    <td className="flex self-center justify-center"><button className="paid-btn py-2 px-7">PAID</button></td>
                    <td><div className="flex self-center cursor-pointer"><span className="flex self-center">Download Invoice</span> <img src={download} className="flex self-center m-1" width="12" height="12" /></div></td>
                </tr>
                <tr>
                    <td>UX27032001</td>
                    <td>15 May 2023</td>
                    <td>50</td>
                    <td>Monthly</td>
                    <td className="flex self-center justify-center"><button className="paid-btn py-2 px-7">PAID</button></td>
                    <td><div className="flex self-center cursor-pointer"><span className="flex self-center">Download Invoice </span><img src={download} className="flex self-center m-1" width="12" height="12" /></div></td>
                </tr>
             </tbody>
          
        </table>
        </div>
    </div>



</div>

            </div>
            </div>
          {/* </div> */}
        </div>
      
  );
};

export default Editupi;
