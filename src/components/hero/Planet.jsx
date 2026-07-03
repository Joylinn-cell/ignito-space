import { motion } from "framer-motion";
import planet from "../../assets/planets/planet.webp";

function Planet() {
  return (
    <motion.img
      src={planet}
      alt="Planet"
      className="absolute -left-72 top-16 w-[900px] opacity-90 select-none pointer-events-none"
      animate={{
        y: [-20, -20, -20],
        rotate: [0, 3, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
      }}
    />
  );
}

export default Planet;