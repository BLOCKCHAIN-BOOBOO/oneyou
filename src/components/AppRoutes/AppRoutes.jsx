import "../../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login";
import Signup from "../signup";
import Home from "../home";
import Usersettings from "../Usersettings/usersettings";
import Subscriptionsetting from "../Usersettings/subscriptionsetting";
import Editupi from "../Usersettings/editupi";
import Upgradeplan from "../Usersettings/upgradeplan";
import Subscriptionpayment from "../Usersettings/subscriptionpayment";
import Aboutoneyou from "../Usersettings/aboutoneyou";


function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {/* <Route path="/signup" element={<Signup />}></Route> */}
        <Route path="/profile" element={<Home />}></Route>
        <Route path="/usersettings" element={<Usersettings />}></Route>
        <Route path="/subscriptionsetting" element={<Subscriptionsetting />}></Route>
        <Route path="/editupi" element={<Editupi />}></Route>
        <Route path="/upgradeplan" element={<Upgradeplan />}></Route>
        <Route path="/subscriptionpayment" element={<Subscriptionpayment />}></Route>
        <Route path="/about" element={<Aboutoneyou />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
