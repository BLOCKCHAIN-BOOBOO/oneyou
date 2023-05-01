import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import './App.css';
import "../src/components/css/input.css"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menunavbar from "./components/Navbar/Menunavbar";
import { useSelector } from "react-redux";

const  App=()=> {

  let userauth=useSelector(state=>{
    console.log("state update",state,state?.googleToken?.userInfo

)
return state?.googleToken?.userInfo ?state?.googleToken?.userInfo :state?.userinfo

  })
 console.log(userauth)
  return (
    <div className="App">
       <BrowserRouter>
     {userauth?.token ?<Menunavbar/>:  <Navbar/>} 
       
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
