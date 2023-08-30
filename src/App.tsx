import "./App.css";
import BgAnnimation from "./components/BgAnnimation";
import BottomBoxes from "./components/BottomBoxes";
import Images from "./components/Images";
import MainMsg from "./components/MainMsg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen relative overflow-hidden">
      <BgAnnimation />
      <Navbar />
      <BottomBoxes />
      <MainMsg />
      <Images />
    </div>
  );
}

export default App;
