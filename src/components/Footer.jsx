import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-violet-500/20 bg-gradient-to-b from-[#09031d] via-[#12062d] to-black">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_70%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-4xl font-black text-transparent">
              IGNITO 2026
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Beyond Infinity isn't just our theme—it's our vision.
              Join innovators, creators and dreamers for an unforgettable
              journey into the future of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">
              Quick Links
            </h3>

            <div className="space-y-3 text-gray-400">
              <a href="#home" className="block hover:text-violet-300 transition">
                Home
              </a>

              <a href="#about" className="block hover:text-violet-300 transition">
                About
              </a>

              <a href="#events" className="block hover:text-violet-300 transition">
                Events
              </a>

              <a href="#competitions" className="block hover:text-violet-300 transition">
                Competitions
              </a>

              <a href="#register" className="block hover:text-violet-300 transition">
                Register
              </a>

              <a href="#contact" className="block hover:text-violet-300 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">
              Connect With Us
            </h3>

            <p className="text-gray-400">
              Model Engineering College
            </p>

            <p className="text-gray-400">
              Thrikkakara, Kochi
            </p>

            <p className="mt-3 text-gray-400">
              ignito@mec.ac.in
            </p>

            <div className="mt-8 flex gap-5 text-2xl">

              <a
                href="#"
                className="transition hover:scale-125 hover:text-violet-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="transition hover:scale-125 hover:text-violet-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="transition hover:scale-125 hover:text-violet-300"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:ignito@mec.ac.in"
                className="transition hover:scale-125 hover:text-violet-300"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">
          © 2026 IGNITO • Beyond Infinity • All Rights Reserved
          <br />
          <span className="text-sm">
            Crafted with ❤️ for the IGNITO Web Team Selection
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;