import { motion } from "framer-motion";

function ShootingStars() {
  return (
    <>
      <motion.div
        className="absolute left-32 top-40 h-[2px] w-28 bg-white shadow-[0_0_20px_white]"
        animate={{
          x: [0, 700],
          y: [0, 250],
          opacity: [1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 4,
        }}
      />

      <motion.div
        className="absolute right-96 top-20 h-[2px] w-24 bg-cyan-300 shadow-[0_0_20px_cyan]"
        animate={{
          x: [0, 500],
          y: [0, 180],
          opacity: [1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 6,
        }}
      />
    </>
  );
}

export default ShootingStars;