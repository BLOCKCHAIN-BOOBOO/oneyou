import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import './App.css';
import "../src/components/css/input.css"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
      <AppRoutes />
      {/* <Footer/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
