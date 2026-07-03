import { motion } from "framer-motion";
import rocket from "../../assets/rockets/rocket.webp";

function Rocket() {
  return (
    <motion.img
      src={rocket}
      alt="Rocket"
      className="absolute right-28 bottom-20 w-48 pointer-events-none"
      animate={{
        y: [-15, 15, -15],
        rotate: [-4, 4, -4],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
    />
  );
}

export default Rocket;