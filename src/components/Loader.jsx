import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05010f] overflow-hidden"
    >
      {/* 🌌 deep glow */}
      <motion.div
        className="absolute h-[900px] w-[900px] bg-gradient-to-r from-violet-600/20 via-cyan-500/10 to-transparent blur-[200px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* 🌠 SHOOTING STARS */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] w-32 bg-gradient-to-r from-white via-cyan-300 to-transparent rounded-full"
          style={{
            top: `${Math.random() * 40}%`,
            left: `${Math.random() * 100}%`,
            rotate: "25deg",
          }}
          animate={{
            x: [-500, 700],
            y: [-200, 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* ✨ floating particles */}
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 200, -200],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* ⚡ IGNITO CORE */}
      <div className="relative flex flex-col items-center">

        {/* glow aura */}
        <motion.div
          className="absolute h-[180px] w-[480px] bg-violet-500/25 blur-[90px] rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* IGNITO */}
        <motion.h1
          animate={{
            scale: [0.98, 1.04, 0.98],
            letterSpacing: ["0.05em", "0.12em", "0.05em"],
            textShadow: [
              "0px 0px 10px #000",
              "0px 0px 45px #7c3aed",
              "0px 0px 10px #000",
            ],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
          }}
          className="relative text-[120px] font-black bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent"
        >
          IGNITO
        </motion.h1>
      </div>

      {/* 🧠 STATIC TEXT */}
      <h2 className="mt-4 text-2xl tracking-[16px] text-violet-300">
        2026
      </h2>

      <p className="mt-10 text-gray-300 tracking-[8px]">
        INITIALIZING MISSION...
      </p>

      {/* 🔵 progress (3.5s sync) */}
      <div className="mt-8 h-2 w-80 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
          }}
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-500"
        />
      </div>

      {/* 💫 footer */}
      <p className="mt-8 text-sm tracking-[6px] text-gray-500">
        BEYOND INFINITY
      </p>
    </motion.div>
  );
}

export default Loader;