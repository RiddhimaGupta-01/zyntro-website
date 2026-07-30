import { motion } from "framer-motion";

const particles = [
  { size: 8, top: "15%", left: "20%", duration: 18 },
  { size: 6, top: "30%", left: "75%", duration: 22 },
  { size: 10, top: "65%", left: "15%", duration: 20 },
  { size: 7, top: "75%", left: "82%", duration: 24 },
  { size: 5, top: "45%", left: "55%", duration: 16 },
  { size: 9, top: "20%", left: "50%", duration: 26 },
];
const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Left Orb */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      className="absolute -left-72 top-0 h-[700px] w-[700px]"

      >
        <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-[140px]" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
       className="absolute inset-10 rounded-full border border-blue-400/15 shadow-[0_0_30px_rgba(96,165,250,0.2)]"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 150,
            repeat: Infinity,
            ease: "linear",
          }}
         className="absolute inset-20 rounded-full border border-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,.18)]"
        />
        <motion.div
  animate={{
    scale: [0.8, 1.2, 0.8],
    opacity: [0.1, 0.35, 0.1],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute inset-0 rounded-full bg-blue-500/20 blur-[100px]"
 />
      </motion.div>

      {/* Right Orb */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
       className="absolute -right-72 top-0 h-[700px] w-[700px]"

      >
        <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-[140px]" />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
        
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 140,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-10 rounded-full border border-blue-400/15 shadow-[0_0_30px_rgba(96,165,250,0.2)]"
        />
         <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 150,
            repeat: Infinity,
            ease: "linear",
          }}
         className="absolute inset-20 rounded-full border border-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,.18)]"
        />
      </motion.div>
      {particles.map((p, i) => (
  <motion.div
    key={i}
    className="absolute rounded-full bg-blue-400"
    style={{
      width: p.size,
      height: p.size,
      top: p.top,
      left: p.left,
      boxShadow: "0 0 18px rgba(59,130,246,.8)",
    }}
    animate={{
      y: [0, -15, 0],
      x: [0, 8, 0],
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.4, 1],
    }}
    transition={{
      duration: p.duration,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
))}
<div
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage:
      "radial-gradient(circle, white 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  }}
/>

    </div>
  );
};

export default TechBackground;