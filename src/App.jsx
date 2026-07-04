import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Competitions from "./components/Competitions";
import Contact from "./components/Contact";
import Register from "./components/Register";
import SpaceEffects from "./components/SpaceEffects";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <SpaceEffects />
      <main>
        <Hero />
        <About />
        <Events />
        <Competitions />
        <Contact />
        <Register />
      </main>
    </div>
  );
}

export default App;