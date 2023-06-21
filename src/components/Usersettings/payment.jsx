import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";
import Googlepay from "./goolepay";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  let userauth = useSelector((state) => {
    console.log("state update", state, state?.googleToken?.userInfo);
    return state?.googleToken?.state
      ? state?.googleToken?.state
      : state?.googleToken;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        email: "customer@google.com",
      },
    });

    console.log("paymentstatus", error, paymentMethod);

    if (error) {
      setError(error.message);
      setIsProcessing(false);
      return;
    }
    let data = {
      paymentMethodId: paymentMethod.id,
      amount: 10,
    };

    // Send the payment method ID to your server to create a payment intent
    const response = await axios
      .post("http://localhost:3000/profile/create-payment-intent", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("response", res);
        return res;
      });

    // const response = await fetch(
    //   "http://localhost:3000/profile/create-payment-intent",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",

    //     },
    //     body: JSON.stringify({
    //       paymentMethodId: paymentMethod.id,
    //       amount: 100,
    //     }),
    //   }
    // );
    console.log("success", response);
    if (response.status === 200) {
      console.log("success");
      // Payment intent created successfully
      console.log("payment intent response", response);
      window.open(response.data.authenticationUrl, "_blank");
      setIsPaymentComplete(true);
      setError(null);
    } else {
      console.log("error");
      // Handle error response from the server
      const data = await response;
      setError(data.error);
    }
    setIsProcessing(false);
  };
  const getINvoice = async () => {
    const response = await axios
      .get("http://localhost:3000/profile/getpaymentlist", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("payment list response ", res);
        return res;
      });
  };

  useEffect(() => {
    getINvoice();
    return () => {};
  }, []);

  return (
    <form onSubmit={handleSubmit} className="xl:w-2/4 md:w-3/4 sm:w-full w-full">
      <div className="payment-form w-full flex flex-col">
        <div className="form-col w-full">
          {/* <label htmlFor="card-element">card</label> */}
          <div id="upi-element" className="flex flex-col payment-inputs">
            {/* <CardElement options={{ style: { base: { fontSize: "16px" } } }} /> */}
            <div className="flex flex-col">
               <div className="flex flex-col py-1">
                <label className="flex text-md py-2 font-semibold">Username</label>
                 <input
                  type="text"
                  className=" border rounded-md p-2 w-3/4"
                  placeholder="Username"
                />
                </div>

               <div className="flex flex-col py-1">
                <label className="flex text-md py-2 font-semibold">Email</label>
                 <input
                  type="text"
                  className="border rounded-md p-2 w-3/4"
                  placeholder="Email"
                />
                </div>

               <div className="flex flex-col py-1">
                <label className="flex text-md py-2 font-semibold">Phone no</label>
                 <input
                  type="text"
                  className="border rounded-md p-2 w-3/4"
                  placeholder="Phone no"
                />
                </div>

            </div>
            <div className="flex">
            <div className="flex">
               <i class="fa fa-credit-card flex self-center text-gray-400"></i> <input
                  type="text"
                  className="mx-auto border-none w-3/4 "
                  placeholder="Card Number"
                />
                </div>
                 <div className="flex">
                 <input
                  type="text"
                  className="mx-auto border-0 w-3/4"
                  placeholder="MM/YY"
                />
                </div>
                <div className="flex">
                 <input
                  type="text"
                  className="mx-auto border-0 w-3/4"
                  placeholder="CVV"
                />
                </div>
                </div>
          </div>
        </div>
        <div className="flex flex-col self-center">
        <button className="publish-site  w-full py-2 m-2 px-3" type="submit" disabled={!stripe}>
          {isProcessing ? "Processing..." : "Pay"}
        </button>
        </div>
        {error && <div className="error">{error}</div>}
        {isPaymentComplete && (
          <div className="success">Payment successful!</div>
        )}
      </div>
    </form>
  );
};

export default Payment;
