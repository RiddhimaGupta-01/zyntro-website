import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-4 pb-2">

      {/* Blue Glow */}
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />

      {/* Purple Glow */}
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[150px]" />

      {/* Floating Dots */}
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-32 left-24 h-3 w-3 rounded-full bg-cyan-400"
      />

      <motion.div
        animate={{ y: [12, -12, 12] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-32 top-44 h-2 w-2 rounded-full bg-blue-500"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="flex justify-center text-sm text-gray-400"
        >
      
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mt-8 sm:mt-12 text-center text-3xl md:text-4xl font-bold text-white leading-tight"
        >
          Let's Build The
          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Future Together
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-gray-400"
        >
          Whether you're planning a custom software solution,
          ERP platform, mobile application, or enterprise
          digital transformation, our experts are ready to help.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
          className="mt-6 flex justify-center"
        >
        </motion.div>

        {/* Scroll */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-8 flex justify-center"
        >
          <FaArrowDown className="text-blue-400 text-xl" />
        </motion.div>

      </div>
    </section>
  );
};

export default ContactHero;