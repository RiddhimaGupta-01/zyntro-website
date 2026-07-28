import { motion } from "framer-motion";
import HolographicDashboard from "./HolographicDashboard";
import StatsCard from "./StatsCard";

const stats = [
  {
    number: "3K+",
    title: "Retailers",
  },
  {
    number: "400+",
    title: "Distributors",
  },
  {
    number: "1.5 Lakh+",
    title: "Customers Served",
  },
  {
    number: "Pan-India",
    title: "Digital Reach",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      
      {/* Aurora Background */}
      {/* Aurora Background */}
<div className="absolute inset-0 -z-10 overflow-hidden">

  <motion.div
    animate={{
      x: [0, 80, 0],
      y: [0, 50, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-20 left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
  />


  <motion.div
    animate={{
      x: [0, -70, 0],
      y: [0, 60, 0],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-20 top-40 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]"
  />


  <motion.div
    animate={{
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute bottom-10 left-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"
  />

</div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 inline-block rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2 text-sm text-blue-300"
            >
              Enterprise Software Solutions
            </motion.p>


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold leading-tight md:text-6xl"
            >
              Transforming Ideas Into
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-xl text-gray-400"
            >
              We build scalable software solutions, modern applications and
              digital experiences that help businesses grow faster.
            </motion.p>


            {/* <div className="mt-8 flex flex-wrap gap-4">
            <button
className="
rounded-xl 
bg-gradient-to-r 
from-blue-500 
to-cyan-400
px-7 py-3 
font-semibold
shadow-lg
shadow-blue-500/30
transition
hover:scale-105
"
>
Get Started
</button>
              

              <button className="rounded-xl border border-white/20 px-7 py-3 font-medium transition hover:bg-white/10">
                Explore Solutions
              </button>
            </div> */}


            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {stats.map((item, index) => (
                <StatsCard
                  key={index}
                  number={item.number}
                  title={item.title}
                />
              ))}
            </div>

          </div>


          {/* Right Dashboard */}
          <div className="flex justify-center">
            <HolographicDashboard />
          </div>

        </div>

      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border border-white/30 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="h-2 w-2 rounded-full bg-white"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;