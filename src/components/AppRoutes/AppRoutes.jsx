import "../../App.css";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "../login";
import Signup from "../signup";
import Home from "../home";
import Usersettings from "../Usersettings/usersettings";
import Subscriptionsetting from "../Usersettings/subscriptionsetting";
import Editupi from "../Usersettings/editupi";
import Upgradeplan from "../Usersettings/upgradeplan";
import Subscriptionpayment from "../Usersettings/subscriptionpayment";
import Aboutoneyou from "../Usersettings/aboutoneyou";
import Account from "../Usersettings/account";
import Footer from "../Footer/Footer";
import Menunavbar from "../Navbar/Menunavbar";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { ValidateToken } from "../TokenValidtor";
import { useEffect } from "react";

const AppRoutes=()=> {
const dispatch=useDispatch()

  let navigate=useNavigate()
let userauth=useSelector(state=>{
    console.log("state update",state,state?.googleToken?.userInfo

)
return state?.googleToken?.state ?state?.googleToken?.state :state?.googleToken

  })



    const SignOut=()=>{
       dispatch(SignOut())
      navigate("/login")
    }


useEffect(() => {
    if (userauth?.token) {
      if (ValidateToken()) {
        console.log("Token Valid");
        return;
      } else {
        console.log("Session Expired, Signingout");
        SignOut();
      }
    }
  }, [userauth?.token]);


  return (
    <div className="App">
      {/* {userauth?.token && ValidateToken() ?<Menunavbar/>:  <Navbar/>}  */}
      <Menunavbar/>
      <Routes>
        <Route path="/" element={<Login />}></Route>
         <Route path="/login" element={<Login />}></Route>
          
        <Route path="/signup" element={<Signup />}></Route>
         
       {/* {userauth?.token && ValidateToken()? ( */}
       <>
       
       <Route path="/profile" element={<Home />}>
      
       </Route>

        <Route path="/usersettings" element={<Usersettings />}> 
         <Route path="account" element={<Account />}></Route>
        
         <Route path="subscriptionsetting" element={<Subscriptionsetting />}></Route>
          <Route path="subscriptions/upgradeplan" element={<Upgradeplan />}></Route>
           <Route path="subscriptions/editupi" element={<Editupi />}></Route>
          <Route path="subscriptions/subscriptionpayment" element={<Subscriptionpayment />}></Route>

          <Route path="about" element={<Aboutoneyou />}></Route></Route>
         
           {/* </>) */}

           {/* :
           ( <> */}
           <Route path="/login" element={<Login />}></Route>
           </>
            {/* ) } */}

         <Route path="/*" element={<Login />}></Route>
       </Routes>
      
      <Footer/>
      
    </div>
  );
}

export default AppRoutes;
