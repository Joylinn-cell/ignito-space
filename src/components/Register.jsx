import { motion } from "framer-motion";

function Register() {
  return (
    <section
    id="register"
    className="min-h-screen bg-gradient-to-b from-slate-950 via-[#12062d] to-[#09031d] px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-violet-500/20 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,.15)]"
        >

          <h1 className="text-center text-5xl font-black">
            REGISTER FOR
          </h1>

          <h2 className="mt-2 bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-center text-6xl font-black text-transparent">
            IGNITO 2026
          </h2>

          <p className="mt-6 text-center text-gray-400">
            Begin your journey Beyond Infinity.
            Register now and become part of Kerala's futuristic techfest.
          </p>

          <div className="mt-12 space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-violet-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-violet-400"
            />

            <input
              type="text"
              placeholder="College Name"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-violet-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-violet-400"
            />

            <select
              className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-violet-400"
            >
              <option>Choose Competition</option>
              <option>Hackathon</option>
              <option>Robo Race</option>
              <option>Capture The Flag</option>
              <option>Ideathon</option>
            </select>

            <input
              type="text"
              placeholder="Team Name (Optional)"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-violet-400"
            />

            <button
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-400 py-4 text-lg font-bold transition hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,.5)]"
            >
               Join the Mission
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Register;