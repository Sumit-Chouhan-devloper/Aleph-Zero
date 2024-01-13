import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./root.css";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import "@splidejs/react-splide/css/skyblue";
import BuildCard from "./components/BuildCard";
import BuildingBlockchain from "./components/BuildingBlockchain";
import Footer from "./components/Footer";
import Footercard from "./components/Footercard";
import Batman from "./components/Batman";
import Applications from "./components/Applications";
import PreLoader from "./components/PreLoader";
import BackToTop from "./components/BackToTop";
import Network from "./components/Network";
import Drivingslider from "./components/Drivingslider";
import Environment from "./components/Environment";
import Azercards from "./components/Azercards";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
function App() {
  console.log("hello");
  return (
    <>
      <BackToTop />
      <PreLoader />
      <Hero />
      <Featured />
      <BuildCard />
      <BuildingBlockchain />
      <Applications />
      <Network />
      <Drivingslider />
      <Environment />
      <Batman />
      <Azercards />
      <Footer />
      <Footercard />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Featured" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
