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
function App() {
  return (
    <>
      <BackToTop />
      <PreLoader />
      <Hero />
      <Featured />
      <BuildCard />
      <BuildingBlockchain />
      <Applications />
      <Batman />
      <Footer />
      <Footercard />
    </>
  );
}

export default App;
