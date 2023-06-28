import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./root.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Footercard from "./components/Footercard";
import Batman from "./components/Batman";
function App() {
  return (
    <>
      {/* <Hero /> */}
      <Batman />
      <Footer />

      <Footercard />
    </>
  );
}

export default App;
