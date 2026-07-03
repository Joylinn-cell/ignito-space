import Stars from "./Stars";
import Planet from "./Planet";
import Galaxy from "./Galaxy";
import ShootingStars from "./ShootingStars";

function Background() {
  return (
    <>

      <div className="absolute inset-0 bg-gradient-to-br from-[#040612] via-[#09051f] to-[#01030d]" />

      <Stars />

      <Planet />

      <Galaxy />

      <ShootingStars />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

    </>
  );
}

export default Background;