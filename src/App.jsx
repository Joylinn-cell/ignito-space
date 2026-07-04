import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Competitions from "./components/Competitions";
import Register from "./components/Register";
import Contact from "./components/Contact";
import SpaceEffects from "./components/SpaceEffects";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <SpaceEffects />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Events />
        <Competitions />
        <Register />
        <Contact />
      </main>
    </div>
  );
}

export default App;