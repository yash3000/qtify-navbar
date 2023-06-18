import NavBar from "./components/NavBar/NavBar";
import HeroCardComponent from "./components/HeroCardComponent/HeroCardComponent";
import CardLayoutGrid from "./components/CardLayoutGrid/CardLayoutGrid";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroCardComponent />
      <CardLayoutGrid />
    </div>
  );
}
