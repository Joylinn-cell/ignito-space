function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide text-cyan-400">
          IGNITO
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-12 text-lg text-white">

          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#events" className="hover:text-cyan-400 transition">
            Events
          </a>

          <a href="#competitions" className="hover:text-cyan-400 transition">
            Competitions
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

        {/* Register Button */}
        <a
        href="#register"
        className="relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-400 px-7 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(168,85,247,.55)]"
      >
        Register Now →
      </a>

      </div>
    </nav>
  );
}

export default Navbar;