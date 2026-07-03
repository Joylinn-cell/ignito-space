import { motion } from "framer-motion";
import galaxy from "../../assets/galaxy/galaxy.webp";

function Galaxy() {
  return (
    <motion.img
      src={galaxy}
      alt="Galaxy"
      className="absolute right-0 top-0 w-[700px] opacity-80 pointer-events-none"
      animate={{
  y: [-20, 20, -20],
}}

transition={{
  duration: 40,
  repeat: Infinity,
  ease: "easeInOut",
}}
    />
  );
}

export default Galaxy;