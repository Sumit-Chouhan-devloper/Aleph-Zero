import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./root.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Footercard from "./components/Footercard";
import Batman from "./components/Batman";
import Azercards from "./components/Azercards";
import Drivingslider from "./components/Drivingslider";
import Environment from "./components/Environment";
import Network from "./components/Network";
function App() {
  return (
    <>
      {/* <Hero /> */}
      <Network />
      <Drivingslider />
      <Environment />
      <Batman />
      <Azercards />
      <Footer />
      <Footercard />
    </>
  );
}

export default App;
