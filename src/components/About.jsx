import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#09031d] via-[#12062d] to-slate-950"></div>

      <div className="absolute -z-10 left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[180px]"></div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl md:text-6xl font-black"
        >
          ABOUT{" "}
          <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
            IGNITO
          </span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 1 }}
          className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="mt-14 text-xl leading-10 text-gray-300"
        >
          IGNITO is not just another college techfest—
          it is a journey beyond imagination, where innovation,
          technology and creativity converge to shape the future.
          Inspired by the limitless mysteries of space,
          IGNITO invites passionate minds to explore ideas that
          challenge boundaries and redefine possibilities.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 text-xl leading-10 text-gray-300"
        >
          From thrilling hackathons and robotics competitions to
          immersive workshops, keynote sessions, gaming arenas,
          AI innovations, cybersecurity challenges and startup showcases,
          every experience is designed to ignite curiosity and inspire
          the next generation of creators.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-8 text-xl leading-10 text-gray-300"
        >
          This year, under the theme
          <span className="font-bold text-violet-300">
            {" "}Beyond Infinity
          </span>,
          we invite dreamers, innovators and explorers to push beyond
          limits, discover new horizons and become part of a future
          where every idea has the power to transform the world.
        </motion.p>

      </div>
    </section>
  );
}

export default About;