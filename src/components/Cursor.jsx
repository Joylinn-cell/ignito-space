import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Cursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      setHover(
        !!target.closest(
          "button, a, input, textarea, select, .cursor-hover"
        )
      );
    };

    const click = (e) => {
      const colors = [
        "#ffffff",
        "#67e8f9",
        "#a855f7",
        "#c4b5fd",
      ];

      const newSparkles = Array.from({ length: 24 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        dx: (Math.random() - 0.5) * 220,
        dy: (Math.random() - 0.5) * 220,
        size: Math.random() * 8 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        diamond: Math.random() > 0.5,
      }));

      setSparkles((prev) => [...prev, ...newSparkles]);

      setTimeout(() => {
        setSparkles((prev) =>
          prev.filter(
            (sparkle) =>
              !newSparkles.find((s) => s.id === sparkle.id)
          )
        );
      }, 700);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, []);

  return (
    <>
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{
            x: sparkle.x,
            y: sparkle.y,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: sparkle.x + sparkle.dx,
            y: sparkle.y + sparkle.dy,
            opacity: 0,
            scale: 0,
            rotate: sparkle.diamond ? 180 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="fixed pointer-events-none z-[9999]"
        >
          <div
            style={{
              width: sparkle.size,
              height: sparkle.size,
              background: sparkle.color,
              borderRadius: sparkle.diamond ? "3px" : "50%",
              transform: sparkle.diamond ? "rotate(45deg)" : "none",
              boxShadow: `0 0 12px ${sparkle.color}, 0 0 24px ${sparkle.color}`,
            }}
          />
        </motion.div>
      ))}

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: mouse.x - 22,
          y: mouse.y - 22,
          scale: hover ? 1.8 : 1.2,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className="fixed w-11 h-11 rounded-full bg-violet-500/30 blur-2xl pointer-events-none z-[9998]"
      />

      {/* Cursor */}
      <motion.div
        animate={{
          x: mouse.x - 9,
          y: mouse.y - 9,
          scale: hover ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 25,
        }}
        className="fixed pointer-events-none z-[9999]"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [45, 50, 45],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="w-[18px] h-[18px] rounded-sm"
          style={{
            background:
              "linear-gradient(135deg,#7dd3fc,#a855f7,#ffffff)",
            transform: "rotate(45deg)",
            boxShadow: `
              0 0 12px #67e8f9,
              0 0 28px #8b5cf6,
              0 0 45px #06b6d4
            `,
          }}
        />
      </motion.div>
    </>
  );
}

export default Cursor;