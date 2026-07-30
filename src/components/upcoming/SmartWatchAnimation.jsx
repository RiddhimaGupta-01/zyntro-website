import { motion } from "framer-motion";
import watch from "../../assets/upcoming/watch.png";

const particles = [
  { left: "20%", top: "25%" },
  { left: "75%", top: "20%" },
  { left: "15%", top: "60%" },
  { left: "82%", top: "70%" },
  { left: "35%", top: "12%" },
  { left: "60%", top: "85%" },
  { left: "45%", top: "40%" },
  { left: "70%", top: "55%" },
];
const SmartWatchAnimation = () => {
  return (
  <div className="relative flex h-[300px] w-[300px] items-center justify-center overflow-hidden sm:h-[390px] sm:w-[390px] md:h-[450px] md:w-[450px] lg:h-[620px] lg:w-[620px]">
     <div className="absolute h-[300px] w-[320px] sm:h-[420px] sm:w-[440px] md:h-[520px] md:w-[540px] lg:h-[700px] lg:w-[740px] rounded-full" />

      {/* Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[420px] md:w-[420px] lg:h-[580px] lg:w-[580px] rounded-full border border-cyan-400/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute h-[260px] w-[260px] sm:h-[280px] sm:w-[280px] md:h-[360px] md:w-[360px] lg:h-[500px] lg:w-[500px] rounded-full border border-pink-400/20"
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
          className="absolute h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px] lg:h-[330px] lg:w-[330px]"
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
        <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-pink-400 shadow-[0_0_20px_#ec4899]" />
      </motion.div>
      {/* {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-cyan-400"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }} */}

      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-cyan-400"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random(),
          }}
        />
      ))}

      {/* Devices */}

      <motion.img
        src={watch}
        alt="Finance Approved Tablet & Phone"
                className="relative z-20 w-[90%] sm:w-[92%] md:w-[90%] lg:w-[85%] max-w-[620px] object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.45)]"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random(),
        }}
      />
    </div>
  );
};

export default SmartWatchAnimation;
