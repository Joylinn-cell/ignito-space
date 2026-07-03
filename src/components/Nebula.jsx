import { motion } from "framer-motion";

function Nebula() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        right-[-200px]
        top-[-120px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-purple-600/20
        blur-[170px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        left-[-150px]
        bottom-[-180px]
        w-[600px]
        h-[600px]
        rounded-full
        bg-cyan-500/20
        blur-[170px]
        "
      />
    </>
  );
}

export default Nebula;