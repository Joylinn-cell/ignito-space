import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Who can participate in IGNITO 2026?",
    answer:
      "IGNITO is open to students from colleges across India who are passionate about technology, innovation, and creativity.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Most events are free to participate in, while selected competitions may have a nominal registration fee. Details will be available during registration.",
  },
  {
    question: "Will participants receive certificates?",
    answer:
      "Yes. All registered participants will receive participation certificates, while winners will receive certificates and exciting prizes.",
  },
  {
    question: "Can I participate as a team?",
    answer:
      "Absolutely! Team-based events like Hackathon and Robo Race allow you to register with your teammates according to the event rules.",
  },
  {
    question: "How can I register?",
    answer:
      "Simply visit the Register section on this website, fill in your details, and you'll be ready to join the mission.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-28 px-6 bg-gradient-to-b from-slate-950 via-[#12062d] to-[#09031d]"
    >
      <div className="max-w-5xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-black"
        >
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
            Questions
          </span>
        </motion.h2>

        <p className="mt-6 text-center text-gray-400 text-lg max-w-2xl mx-auto">
          Everything you need to know before embarking on your journey Beyond
          Infinity.
        </p>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-violet-500/20 bg-white/5 backdrop-blur-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: open === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-violet-300" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="px-6 pb-6 text-gray-300 leading-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;