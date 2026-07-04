import { motion } from "framer-motion";

const events = [
  {
    title: "Hackathon",
    desc: "24-hour coding challenge to build innovative solutions.",
  },
  {
    title: "Robo War",
    desc: "Battle of robots in an arena of strategy and power.",
  },
  {
    title: "AI Summit",
    desc: "Explore the future of artificial intelligence and ML.",
  },
  {
    title: "Gaming Arena",
    desc: "Competitive esports tournaments for gamers.",
  },
  {
    title: "Ideathon",
    desc: "Pitch your ideas and turn imagination into reality.",
  },
  {
    title: "Workshops",
    desc: "Hands-on sessions with industry experts.",
  },
];

function Events() {
  return (
    <section
      id="events"
      className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-[#0b0620] to-slate-950"
    >
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black"
        >
          OUR{" "}
          <span className="text-purple-400">EVENTS</span>
        </motion.h2>

        <p className="mt-4 text-gray-400">
          Explore the most exciting competitions and tech experiences
        </p>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
            >
              {/* Glow line */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>

              <h3 className="text-2xl font-bold text-white">
                {event.title}
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                {event.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;