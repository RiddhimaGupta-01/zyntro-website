import { motion } from "framer-motion";
import { features } from "../../data/featureData";
import FeatureCard from "./FeatureCard";
import TechBackground from "../common/TechBackground";
const WhyChooseUs = () => {
  return (
 <section className="relative overflow-hidden bg-[#050816] py-28">
<TechBackground />
<div className="relative z-10 mx-auto max-w-7xl px-6">
   <div className="relative">

  {/* Heading Glow */}
  <motion.div
    animate={{
      opacity: [0.15, 0.3, 0.15],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-1/2 top-12 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]"
  />

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative z-10 text-center text-blue-500 font-extrabold tracking-[4px]"
  >
    WHY CHOOSE ZYNTRO
  </motion.p>

  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative z-10 mt-4 text-center text-3xl sm:text-5xl font-bold text-white"
  >
    Empowering Businesses Through Smart Technology
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="relative z-10 mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400"
  >
    We combine innovation, security and industry expertise to build
    reliable digital solutions that help businesses grow with confidence.
  </motion.p>

</div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;