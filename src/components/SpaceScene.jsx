import Galaxy from "./Galaxy";
import Planet from "./Planet";
import Rocket from "./Rocket";
import Asteroids from "./Asteroids";
import Nebula from "./Nebula";
import Stars from "./Stars";

function SpaceScene() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <Nebula />
      <Stars />
      <Galaxy />
      <Planet />
      <Asteroids />
      <Rocket />

    </div>
  );
}

export default SpaceScene;