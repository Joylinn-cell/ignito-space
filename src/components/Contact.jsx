import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#12062d] to-[#09031d] py-32 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-black"
        >
          CONTACT{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
            MISSION CONTROL
          </span>
        </motion.h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-400">
          Have a question, an idea, or want to be part of IGNITO 2026?
          Send us a transmission and we'll get back to you.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

            <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="mb-4 text-2xl font-bold text-violet-300">
                 Launch Site
              </h3>

              <p className="leading-8 text-gray-300">
                Model Engineering College
                <br />
                Thrikkakara
                <br />
                Kochi, Kerala
              </p>
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="mb-4 text-2xl font-bold text-cyan-300">
                 Mission Email
              </h3>

              <p className="text-gray-300">
                ignito2026@example.com
                <br />
                ignito_excel@gmail.com
                <br />
                i2026gnito@example.com
              </p>
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="mb-4 text-2xl font-bold text-purple-300">
                Communication Line
              </h3>

              <p className="text-gray-300">
                +91 98765 43210
                +91 23456 78901
              </p>
            </div>

          </motion.div>

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-violet-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-violet-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-violet-400"
              />

              <textarea
                rows="6"
                placeholder="Type your message..."
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-violet-400"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-400 py-4 text-lg font-bold transition hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(168,85,247,.45)]"
              >
                 Send Transmission
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;