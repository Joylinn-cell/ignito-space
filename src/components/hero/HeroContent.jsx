import { motion } from "framer-motion";

function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-screen items-center justify-center pt-24">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="mb-5 tracking-[12px] uppercase text-cyan-300">
          Welcome To
        </p>

         <h1 className="bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-7xl md:text-[9rem] lg:text-[10rem] font-black text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.9)]">
          IGNITO
        </h1>
        <h2 className="mt-2 text-5xl font-bold tracking-[8px] text-purple-300">
          2026
        </h2>

        <p className="mt-5 text-4xl tracking-[10px] text-purple-200">
          BEYOND INFINITY
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Ignite Ideas. Explore Infinity. Experience Kerala's most futuristic
          techfest inspired by the mysteries of space.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-10 py-4 font-semibold text-white shadow-[0_0_40px_rgba(147,51,234,.6)] transition hover:scale-105">
            Explore Events
          </button>

          <button className="rounded-xl border border-purple-500 px-10 py-4 font-semibold text-white transition hover:bg-purple-600/20">
            Register
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroContent;