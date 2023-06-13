import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        email: "customer@example.com",
      },
    });

    console.log("paymentstatus", error, paymentMethod);

    if (error) {
      setError(error.message);
      setIsProcessing(false);
      return;
    }
    // Send the payment method ID to your server to create a payment intent
    const response = await fetch(
      "http://localhost:3000/profile/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
        }),
      }
    );

    if (response.ok) {
      console.log("success");
      // Payment intent created successfully
      setIsPaymentComplete(true);
      setError(null);
    } else {
      console.log("error");
      // Handle error response from the server
      const data = await response.json();
      setError(data.error);
    }
    setIsProcessing(false);
  };

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
