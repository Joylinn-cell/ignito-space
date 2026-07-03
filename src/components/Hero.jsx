import Background from "./hero/Background";
import HeroContent from "./hero/HeroContent";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Background />
      <HeroContent />
    </section>
  );
}

export default Hero;