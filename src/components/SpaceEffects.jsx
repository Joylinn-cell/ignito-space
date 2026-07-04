import { motion } from "framer-motion";

function SpaceEffects() {
  // Twinkling stars
  const stars = Array.from({ length: 180 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  // Shooting stars
  const shootingStars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: Math.random() * 40,
    left: Math.random() * 100,
    delay: i * 3,
    duration: 1.8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((shoot) => (
        <motion.div
          key={shoot.id}
          className="absolute h-[2px] w-36 rounded-full bg-gradient-to-r from-white via-cyan-300 to-transparent"
          style={{
            top: `${shoot.top}%`,
            left: `${shoot.left}%`,
            rotate: "25deg",
          }}
          animate={{
            x: [-600, 600],
            y: [-200, 200],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: shoot.duration,
            delay: shoot.delay,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "linear",
          }}
        />
      ))}

      {/* Purple Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

    </div>
  );
}

export default SpaceEffects;