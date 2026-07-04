import { useEffect, useRef } from "react";

/**
 * Global space effects:
 * - twinkling stars
 * - shooting stars
 * - subtle motion glow
 */

function SpaceEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // STARS
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5,
      opacity: Math.random(),
      speed: Math.random() * 0.5,
    }));

    // SHOOTING STARS
    const shootingStars = [];

    function createShootingStar() {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        len: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 6,
        opacity: 1,
      });
    }

    setInterval(createShootingStar, 2000);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // BACKGROUND STARS
      stars.forEach((s) => {
        s.opacity += (Math.random() - 0.5) * 0.05;

        if (s.opacity < 0) s.opacity = 0;
        if (s.opacity > 1) s.opacity = 1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.fill();
      });

      // SHOOTING STARS
      for (let i = 0; i < shootingStars.length; i++) {
        const s = shootingStars[i];

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.len, s.y + s.len * 0.3);

        ctx.strokeStyle = `rgba(180, 120, 255, ${s.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        s.x += s.speed;
        s.y += s.speed;

        s.opacity -= 0.01;

        if (s.opacity <= 0) {
          shootingStars.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

export default SpaceEffects;