import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import './App.css';
import "../src/components/css/input.css"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menunavbar from "./components/Navbar/Menunavbar";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       {/* <Menunavbar/> */}
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
