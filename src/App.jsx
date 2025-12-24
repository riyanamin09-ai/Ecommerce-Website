import "./App.css";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import LastSection from "./components/LastSec/LastSection";
import { LandingPage } from "./components/LandingPage/LandingPage";


function App() {
  return (
    <div className="bg-blue-50">
      <Header />
      <LandingPage />
      <Footer />
      <LastSection />
    </div>
  );
}

export default App;
