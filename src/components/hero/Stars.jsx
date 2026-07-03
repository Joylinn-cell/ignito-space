import { motion } from "framer-motion";

function Stars() {
  return (
    <motion.div
      className="absolute inset-0 opacity-70"
      animate={{
        opacity: [0.4, 0.9, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      style={{
        backgroundImage: `
        radial-gradient(2px 2px at 20px 30px,#fff,transparent),
        radial-gradient(2px 2px at 120px 80px,#fff,transparent),
        radial-gradient(1.5px 1.5px at 250px 150px,#fff,transparent),
        radial-gradient(2px 2px at 500px 250px,#fff,transparent),
        radial-gradient(1.5px 1.5px at 800px 120px,#fff,transparent),
        radial-gradient(2px 2px at 1000px 350px,#fff,transparent)
        `,
        backgroundSize: "1200px 700px",
      }}
    />
  );
}

export default Stars;