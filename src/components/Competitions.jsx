import { motion } from "framer-motion";

const competitions = [
  {
    mission: "Mission Alpha",
    title: "Hackathon",
    prize: "₹50,000 Prize Pool",
    crew: "2 - 4 Members",
    duration: "24 Hours",
    status: "Boarding Open",
    difficulty: "★★★★☆",
    desc: "Develop innovative solutions within 24 hours and solve real-world challenges through technology.",
  },
  {
    mission: "Mission RoboX",
    title: "Robo Race",
    prize: "₹30,000 Prize Pool",
    crew: "2 Members",
    duration: "3 Hours",
    status: "Launch Ready",
    difficulty: "★★★☆☆",
    desc: "Design, build and race autonomous robots through thrilling obstacle tracks.",
  },
  {
    mission: "Mission Cipher",
    title: "Capture The Flag",
    prize: "₹25,000 Prize Pool",
    crew: "Solo / Duo",
    duration: "5 Hours",
    status: "Signal Active",
    difficulty: "★★★★★",
    desc: "Break into simulated systems, solve security puzzles and showcase your cybersecurity skills.",
  },
  {
    mission: "Mission Nova",
    title: "Ideathon",
    prize: "₹20,000 Prize Pool",
    crew: "1 - 3 Members",
    duration: "4 Hours",
    status: "Entries Open",
    difficulty: "★★☆☆☆",
    desc: "Present futuristic ideas capable of transforming industries through innovation and creativity.",
  },
];

function Competitions() {
  return (
    <section
      id="competitions"
      className="relative py-32 px-6 bg-gradient-to-b from-[#09031d] via-[#12062d] to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-black"
        >
          SPACE{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
            MISSIONS
          </span>
        </motion.h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-400">
          Every competition is a mission. Assemble your crew, prepare your
          strategy and launch into an unforgettable journey beyond infinity.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {competitions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(168,85,247,.35)]"
            >
              <span className="rounded-full bg-violet-500/20 px-4 py-2 text-sm font-medium text-violet-300">
                 {item.mission}
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {item.desc}
              </p>

              <div className="mt-8 space-y-3 text-gray-300">

                <div className="flex justify-between">
                  <span> Prize Pool</span>
                  <span>{item.prize}</span>
                </div>

                <div className="flex justify-between">
                  <span> Crew Size</span>
                  <span>{item.crew}</span>
                </div>

                <div className="flex justify-between">
                  <span> Duration</span>
                  <span>{item.duration}</span>
                </div>

                <div className="flex justify-between">
                  <span> Difficulty</span>
                  <span>{item.difficulty}</span>
                </div>

              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-300">
                  🟢 {item.status}
                </span>

                <button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-400 px-6 py-3 font-semibold transition hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,.45)]">
                  Launch Mission →
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Competitions;