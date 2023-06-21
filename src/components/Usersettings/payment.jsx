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
    <form onSubmit={handleSubmit} className="w-full">
      <div className="payment-form w-full flex">
        <div className="form-row w-full">
          <label htmlFor="card-element">card</label>
          <div id="upi-element">
            <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
          </div>
        </div>
        <button type="submit" disabled={!stripe}>
          {isProcessing ? "Processing..." : "Pay"}
        </button>
        {error && <div className="error">{error}</div>}
        {isPaymentComplete && (
          <div className="success">Payment successful!</div>
        )}
      </div>
    </form>
  );
};

export default Payment;
