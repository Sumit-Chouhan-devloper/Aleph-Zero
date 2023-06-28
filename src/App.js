import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./root.css";
import Hero from './components/Hero';
import Featured from './components/Featured';
import '@splidejs/react-splide/css/skyblue';
import BuildCard from './components/BuildCard';
import BuildingBlockchain from './components/BuildingBlockchain';
function App() {
  return (
   <>
   <Hero/>
   <Featured/>
   <BuildCard/>
   <BuildingBlockchain/>
   </>

);}

export default App;
