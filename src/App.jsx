import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import "./App.css";
import "../src/components/css/input.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menunavbar from "./components/Navbar/Menunavbar";
import { useSelector } from "react-redux";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NI8VwSGDsTZO4O0VAP1F9yfev7Pq0PxaVf2ujzHZGHxwqitSTBM0XtXsM9zKfdq2zhy3AkAchibIkVqJe0cmELg00gm1Qolhz"
);

const App = () => {
  let userauth = useSelector((state) => {
    console.log("state update", state, state?.googleToken?.userInfo);
    return state?.googleToken?.userInfo
      ? state?.googleToken?.userInfo
      : state?.userinfo;
  });
  console.log("usertoken", userauth);

  return (
    <div className="App">
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <AppRoutes />
        </Elements>
      </BrowserRouter>
    </div>
  );
};

export default App;
