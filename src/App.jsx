import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Competitions from "./components/Competitions";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import SpaceEffects from "./components/SpaceEffects";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative">
      <Cursor />
      {/* BACKGROUND */}
      <SpaceEffects />

      {/* LOADER OVERLAY */}
      {loading && (
        <div className="fixed inset-0 z-[100]">
          <Loader />
        </div>
      )}

      {/* MAIN CONTENT */}
      {!loading && (
        <>
          <Navbar />

          <main>
            <Hero />
            <About />
            <Events />
            <Competitions />
            <FAQ />
            <Register />
            <Contact />
            <Footer />
          </main>
        </>
      )}

    </div>
  );
}

export default App;