function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">IGNITO</h1>

        <div className="hidden md:flex gap-8">
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Competitions</a>
          <a href="#">Contact</a>
        </div>

        <button className="px-5 py-2 rounded-full border border-cyan-400">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;