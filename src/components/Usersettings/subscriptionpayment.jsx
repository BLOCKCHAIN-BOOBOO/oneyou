import React, { useState } from "react";
import { Accordion } from "react-bootstrap-accordion";
import home from "../../images/home.png";
import file from "../../images/file.png";
import downarrow from "../../images/downarrow.png";
import arrow from "../../images/arrow.png";
import refresh from "../../images/refresh.png";
import downarrowwhite from "../../images/downarrowwhite.png";
import forwardarrow from "../../images/forward-arrow.png";
import settings from "../../images/settings.png";
import backarrow from "../../images/back-arrow.png";
import deleteicon from "../../images/delete-icon.png";
import settingrefresh from "../../images/setting-refresh.png";
import upiicon from "../../images/upi-icon.png";
import download from "../../images/download.png";
import publishicon from "../../images/publish-icon.png";
import { useNavigate } from "react-router-dom";
import Payment from "./payment";

const Subscriptionpayment = () => {
  const naviaget = useNavigate();
  // useEffect(() => {
  //   initialize();
  // }, []);

  // const initialize = () => {
  //   let orderId = "Order_" + new Date().getTime();

  //   // Sandbox Credentials
  //   let mid = ""; // Merchant ID
  //   let mkey = ""; // Merchant Key
  //   var paytmParams = {};

  //   paytmParams.body = {
  //     requestType: "Payment",
  //     mid: mid,
  //     websiteName: "WEBSTAGING",
  //     orderId: orderId,
  //     callbackUrl: "https://merchant.com/callback",
  //     txnAmount: {
  //       value: 100,
  //       currency: "INR",
  //     },
  //     userInfo: {
  //       custId: "1001",
  //     },
  //   };

  //   PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), mkey).then(
  //     function (checksum) {
  //       console.log(checksum);
  //       paytmParams.head = {
  //         signature: checksum,
  //       };

  //       var post_data = JSON.stringify(paytmParams);

  //       var options = {
  //         /* for Staging */
  //         // hostname: "securegw-stage.paytm.in" /* for Production */,

  //         hostname: "securegw.paytm.in",

  //         port: 443,
  //         path: `/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${orderId}`,
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Content-Length": post_data.length,
  //         },
  //       };

  //       var response = "";
  //       var post_req = https.request(options, function (post_res) {
  //         post_res.on("data", function (chunk) {
  //           response += chunk;
  //         });
  //         post_res.on("end", function () {
  //           console.log("Response: ", response);
  //           // res.json({data: JSON.parse(response), orderId: orderId, mid: mid, amount: amount});
  //           setPaymentData({
  //             ...paymentData,
  //             token: JSON.parse(response).body.txnToken,
  //             order: orderId,
  //             mid: mid,
  //             amount: 100,
  //           });
  //         });
  //       });

  //       post_req.write(post_data);
  //       post_req.end();
  //     }
  //   );
  // };

  // const makePayment = () => {
  //   var config = {
  //     root: "",
  //     style: {
  //       bodyBackgroundColor: "#fafafb",
  //       bodyColor: "",
  //       themeBackgroundColor: "#0FB8C9",
  //       themeColor: "#ffffff",
  //       headerBackgroundColor: "#284055",
  //       headerColor: "#ffffff",
  //       errorColor: "",
  //       successColor: "",
  //       card: {
  //         padding: "",
  //         backgroundColor: "",
  //       },
  //     },
  //     data: {
  //       orderId: paymentData.order,
  //       token: paymentData.token,
  //       tokenType: "TXN_TOKEN",
  //       amount: paymentData.amount /* update amount */,
  //     },
  //     payMode: {
  //       labels: {},
  //       filter: {
  //         exclude: [],
  //       },
  //       order: ["CC", "DC", "NB", "UPI", "PPBL", "PPI", "BALANCE"],
  //     },
  //     website: "WEBSTAGING",
  //     flow: "DEFAULT",
  //     merchant: {
  //       mid: paymentData.mid,
  //       redirect: false,
  //     },
  //     handler: {
  //       transactionStatus: function transactionStatus(paymentStatus) {
  //         console.log(paymentStatus);
  //       },
  //       notifyMerchant: function notifyMerchant(eventName, data) {
  //         console.log("Closed");
  //       },
  //     },
  //   };

  //   if (window.Paytm && window.Paytm.CheckoutJS) {
  //     window.Paytm.CheckoutJS.init(config)
  //       .then(function onSuccess() {
  //         window.Paytm.CheckoutJS.invoke();
  //       })
  //       .catch(function onError(error) {
  //         console.log("Error => ", error);
  //       });
  //   }
  // };

  const payments = () => {
    naviaget("/payment");
  };

  return (
    <div className="flex flex-col w-full h-full m-2">
      {/* <div className="flex self-center justify-center mx-auto"> */}

      <div className=" flex w-full h-full right-0 ">
        {/*home-about  dir="ltr" */}

        <div className="home-about-me w-full">
          <div className="flex w-full  border-b-2">
            <button className="float-left text-left py-2 m-2 px-3">
              <img
                className="flex bg-gray-300 rounded-2xl p-3"
                height=""
                width=""
                src={backarrow}
              />
            </button>
            <div className="home-profile-edit-header w-full self-center justify-center flex text-center">
              {" "}
              Payment
            </div>
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
              <span className="flex self-start payment-method-name">
                Payment Method
              </span>
              <div className="flex flex-row m-2">
                {/* <span className="flex self-center ">UPI:</span>
            <span className="flex self-center">abcabc@ybl</span>
            <img src={upiicon} className="self-center flex justify-center ml-2" width="15" height="15" /> */}
                <input
                  type="text"
                  className="mx-auto input-border w-3/4 input-text"
                  placeholder="Enter UPI ID"
                />
                <button
                  className="publish-site w-full py-2 m-2 px-3"
                  onClick={payments}
                >
                  Verify & Proceed
                </button>
              </div>
              <button className="publish-site py-2 px-7 m-2 text-left float-left self-start">
                Generate QR
              </button>
            </div>
            {/* paytmpayment button */}
            {/* <div>
              {loading ? (
                <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
              ) : (
                <button onClick={makePayment}>Pay Now</button>
              )}
            </div> */}
          </div>
          <div className="w-full flex">
            <Payment />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Subscriptionpayment;
