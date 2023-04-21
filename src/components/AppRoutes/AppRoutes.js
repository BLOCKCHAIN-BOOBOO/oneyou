import "../../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login";
import Signup from "../signup";
import Home from "../home";
import Usersettings from "../Usersettings/usersettings";
import Subscriptionsetting from "../Usersettings/subscriptionsetting";


function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/usersettings" element={<Usersettings />}></Route>
        <Route path="/subscriptionsetting" element={<Subscriptionsetting />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
