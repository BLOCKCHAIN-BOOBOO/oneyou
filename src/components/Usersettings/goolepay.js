// import React from "react";
// import { useStripe } from "@stripe/react-stripe-js";
// import { loadStripe, GooglePayButton } from "@stripe/google-pay-button";
// const Googlepay = () => {
//   // Set up Stripe
//   const Stripe = useStripe();

//   const stripe = Stripe(
//     "pk_test_51NI8VwSGDsTZO4O0VAP1F9yfev7Pq0PxaVf2ujzHZGHxwqitSTBM0XtXsM9zKfdq2zhy3AkAchibIkVqJe0cmELg00gm1Qolhz"
//   );

//   // Initialize Google Pay
//   const googlePayClient = new google.payments.api.PaymentsClient({
//     environment: "TEST", // Use 'PRODUCTION' for live environment
//   });

//   // Create the Google Pay button
//   const googlePayButton = googlePayClient.createButton({
//     buttonColor: "default", // Customize the button color
//     buttonType: "plain", // Customize the button type
//     onClick: onGooglePayButtonClicked,
//   });

//   // Add the Google Pay button to your HTML element
//   document.getElementById("google-pay-button").appendChild(googlePayButton);

//   // Handle Google Pay button click
//   async function onGooglePayButtonClicked() {
//     try {
//       const paymentMethods = await stripe.paymentMethods.list({
//         type: "card",
//       });

//       const tokenizationSpecification = {
//         type: "PAYMENT_GATEWAY",
//         parameters: {
//           gateway: "stripe",
//           "stripe:version": "2020-08-27", // Replace with the desired Stripe API version
//           "stripe:publishableKey": "YOUR_STRIPE_PUBLIC_KEY",
//         },
//       };

//       const paymentDataRequest = {
//         apiVersion: 2,
//         apiVersionMinor: 0,
//         allowedPaymentMethods: [
//           {
//             type: "CARD",
//             parameters: {
//               allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
//               allowedCardNetworks: ["AMEX", "DISCOVER", "MASTERCARD", "VISA"],
//             },
//             tokenizationSpecification: tokenizationSpecification,
//           },
//         ],
//         merchantInfo: {
//           merchantId: "YOUR_MERCHANT_ID",
//           merchantName: "Your Merchant Name",
//         },
//         transactionInfo: {
//           totalPriceStatus: "FINAL",
//           totalPrice: "10.00", // Replace with the actual amount
//           currencyCode: "USD", // Replace with the desired currency code
//         },
//       };

//       const paymentData = await googlePayClient.loadPaymentData(
//         paymentDataRequest
//       );

//       // Send the payment data to your server to create a payment intent
//       const response = await fetch("/create-payment-intent", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           paymentMethodType: "card",
//           paymentMethodId: paymentData.paymentMethodData.tokenizationData.token,
//           amount: 1000, // Replace with the actual amount (in cents)
//           currency: "usd", // Replace with the desired currency code
//         }),
//       });

//       if (response.ok) {
//         // Payment successful, show success message to the user
//         console.log("Payment successful!");
//       } else {
//         // Payment failed, show error message to the user
//         console.error("Payment failed:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error processing Google Pay payment:", error);
//     }
//   }

//   return (
//     <div>google pay</div>
//     // <Googlepay
//     //   environment="TEST" // Use 'PRODUCTION' for live environment
//     //   paymentRequest={{
//     //     apiVersion: 2,
//     //     apiVersionMinor: 0,
//     //     allowedPaymentMethods: [
//     //       {
//     //         type: "CARD",
//     //         parameters: {
//     //           allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
//     //           allowedCardNetworks: ["AMEX", "DISCOVER", "MASTERCARD", "VISA"],
//     //         },
//     //         tokenizationSpecification: {
//     //           type: "PAYMENT_GATEWAY",
//     //           parameters: {
//     //             gateway: "stripe",
//     //             "stripe:version": "2020-08-27", // Replace with the desired Stripe API version
//     //             "stripe:publishableKey":
//     //               "pk_test_51NI8VwSGDsTZO4O0VAP1F9yfev7Pq0PxaVf2ujzHZGHxwqitSTBM0XtXsM9zKfdq2zhy3AkAchibIkVqJe0cmELg00gm1Qolhz",
//     //           },
//     //         },
//     //       },
//     //     ],
//     //     merchantInfo: {
//     //       merchantId: "BCR2DN4TULIN3VSC",
//     //       merchantName: "Food",
//     //     },
//     //     transactionInfo: {
//     //       totalPriceStatus: "FINAL",
//     //       totalPrice: "10.00", // Replace with the actual amount
//     //       currencyCode: "USD", // Replace with the desired currency code
//     //     },
//     //     callback: (response) => {
//     //       // Handle the Google Pay response
//     //       console.log("Google Pay response:", response);
//     //     },
//     //     onError: (error) => {
//     //       // Handle any error during the Google Pay flow
//     //       console.error("Google Pay error:", error);
//     //     },
//     //   }}
//     // />
//   );
// };

// export default Googlepay;
