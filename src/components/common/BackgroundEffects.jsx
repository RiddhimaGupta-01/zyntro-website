import { motion } from "framer-motion";

const blobs = [
  {
    size: 420,
    color: "bg-blue-500/20",
    top: "-120px",
    left: "-100px",
    duration: 18,
    x: [0, 80, 0],
    y: [0, -70, 0],
  },
  {
    size: 380,
    color: "bg-cyan-400/20",
    top: "35%",
    right: "-120px",
    duration: 22,
    x: [0, -70, 0],
    y: [0, 60, 0],
  },
  {
    size: 320,
    color: "bg-violet-500/15",
    bottom: "-120px",
    left: "25%",
    duration: 20,
    x: [0, 60, 0],
    y: [0, -80, 0],
  },
  {
    size: 260,
    color: "bg-sky-400/15",
    bottom: "10%",
    right: "15%",
    duration: 16,
    x: [0, -40, 0],
    y: [0, 40, 0],
  },
];

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Aurora Gradient */}
      <motion.div
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(-45deg,#050816,#0d1b3a,#0a2342,#050816)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow Blobs */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: blob.x,
            y: blob.y,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className={`absolute rounded-full ${blob.color} blur-xl`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffects;