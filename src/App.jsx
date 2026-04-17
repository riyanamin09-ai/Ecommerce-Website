import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LastSection from "./components/LastSec/LastSection";
import MenuBtn from "./components/LandingPage/FirstSec/MenuBtn";
import LandingPage from "./components/LandingPage/LandingPage";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="bg-blue-50">
      <Header />
      <Outlet/>
      <Footer />
      <LastSection />
    </div>
  );
}

export default App;
