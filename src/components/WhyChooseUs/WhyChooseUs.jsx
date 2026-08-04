import { motion } from "framer-motion";
import { features } from "../../data/featureData";
import FeatureCard from "./FeatureCard";

const WhyChooseUs = () => {
  return (
 <section className="relative overflow-hidden  py-28">
 
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

  {/* Badge */}
  <div className="flex mb-10 mt-[-5] justify-center">
    <span className="inline-flex items-center gap-2  rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-2 text-sm font-semibold tracking-[3px] uppercase text-white backdrop-blur-xl">
      Why Choose Zyntro
    </span>
  </div>

  {/* Heading */}
   <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl font-bold text-white md:text-5xl"
          >
           Empowering{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
               Businesses Through Smart Technology
            </span>
          </motion.h2>
  {/* <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative z-10 mt-4 text-center text-3xl font-bold text-white sm:text-5xl"
  >
    Empowering Businesses Through Smart Technology
  </motion.h2> */}

  {/* Description */}
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
    {features.map((item, index) => (
  <motion.div
    key={index}
    initial={{
      opacity: 0,
      x: index < 2 ? -80 : 80
    }}
    whileInView={{
      opacity: 1,
      x: 0
    }}
    viewport={{
      once: true,
      amount: 0.3
    }}
    transition={{
      duration: 0.8,
      delay: index * 0.15,
      ease: "easeOut"
    }}
  >
    <FeatureCard feature={item} index={index} />
  </motion.div>
))}
        </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;