import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="max-w-xl"
    >
      <p className="mb-4 uppercase tracking-[10px] text-cyan-400">
        Welcome To
      </p>

      <h1 className="text-7xl md:text-8xl font-black leading-none">
        <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(139,92,246,.8)]">
          IGNITO
        </span>
      </h1>

      <h2 className="mt-3 text-4xl md:text-6xl font-bold text-purple-400">
        Beyond Infinity
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-300">
        Ignite Ideas. Explore Infinity.
        Experience Kerala's most futuristic
        techfest inspired by the mysteries of space.
      </p>

      <div className="mt-12 flex gap-6">

        <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-semibold shadow-[0_0_40px_rgba(59,130,246,.45)] transition duration-300 hover:scale-105">

          Explore Events

          <FaArrowRight className="transition group-hover:translate-x-2" />

        </button>

        <button className="rounded-full border border-purple-500 bg-white/5 px-8 py-4 font-semibold backdrop-blur-md transition hover:border-cyan-400 hover:bg-purple-500/20">

          Register

        </button>

      </div>
    </motion.div>
  );
}

export default HeroText;