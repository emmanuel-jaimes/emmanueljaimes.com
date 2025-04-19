import Hero from "./components/Hero";
import Card from "./components/Card";
import { p } from "framer-motion/client";
import Switch from "./components/Switch";

function App() {
  return (
    <div className="p-8 justify-center items-center min-h-screen bg-black font-sans">
      <Hero/>
      <Switch/>
    </div>
    
  );
}

export default App;
