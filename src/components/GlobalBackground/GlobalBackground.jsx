import { motion } from "framer-motion";

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#131d38]">

      {/* =====================================================
          BASE GRADIENT
      ====================================================== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b38] via-[#131d38] to-[#211947]" />

      {/* =====================================================
          SOFT BLUE GLOW
      ====================================================== */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/10
          blur-[140px]
        "
      />

      {/* =====================================================
          SOFT PURPLE GLOW
      ====================================================== */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-40
          bottom-10
          h-[520px]
          w-[520px]
          rounded-full
          bg-purple-600/10
          blur-[150px]
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          opacity-40
          bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
          bg-[size:64px_64px]
        "
      />

      {/* =====================================================
          CONNECTED NETWORK
      ====================================================== */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >

        {/* ---------------- CONNECTION LINES ---------------- */}

        <g
          fill="none"
          stroke="rgba(80,160,255,0.22)"
          strokeWidth="1"
        >

          <motion.path
            d="M20 180 L150 110 L280 175 L420 100 L550 175"
            animate={{ opacity: [0.2, 0.45, 0.2] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.path
            d="M650 155 L780 90 L910 160 L1040 105 L1180 180"
            animate={{ opacity: [0.18, 0.42, 0.18] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.path
            d="M0 520 L150 420 L290 500 L430 410 L570 500"
            animate={{ opacity: [0.18, 0.4, 0.18] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.path
            d="M650 500 L800 410 L940 490 L1080 400 L1200 470"
            animate={{ opacity: [0.18, 0.42, 0.18] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Vertical connections */}

          <motion.path
            d="M150 110 L150 420"
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{
              duration: 9,
              repeat: Infinity,
            }}
          />

          <motion.path
            d="M420 100 L430 410"
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          <motion.path
            d="M780 90 L800 410"
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />

          <motion.path
            d="M1040 105 L1080 400"
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{
              duration: 9,
              repeat: Infinity,
            }}
          />

        </g>

        {/* =================================================
            NORMAL BLUE NODES
        ================================================== */}

        <g fill="#60a5fa">

          <circle cx="20" cy="180" r="2.5" />
          <circle cx="150" cy="110" r="3" />
          <circle cx="280" cy="175" r="2.5" />
          <circle cx="420" cy="100" r="3" />
          <circle cx="550" cy="175" r="2.5" />

          <circle cx="650" cy="155" r="2.5" />
          <circle cx="780" cy="90" r="3" />
          <circle cx="910" cy="160" r="2.5" />
          <circle cx="1040" cy="105" r="3" />
          <circle cx="1180" cy="180" r="2.5" />

          <circle cx="0" cy="520" r="2.5" />
          <circle cx="150" cy="420" r="3" />
          <circle cx="290" cy="500" r="2.5" />
          <circle cx="430" cy="410" r="3" />
          <circle cx="570" cy="500" r="2.5" />

          <circle cx="650" cy="500" r="2.5" />
          <circle cx="800" cy="410" r="3" />
          <circle cx="940" cy="490" r="2.5" />
          <circle cx="1080" cy="400" r="3" />
          <circle cx="1200" cy="470" r="2.5" />

        </g>

        {/* =================================================
            SOFT NODE HALOS
            LOW GLOW — NOT DISTRACTING
        ================================================== */}

        <g fill="rgba(96,165,250,0.10)">

          <circle cx="150" cy="110" r="9" />
          <circle cx="420" cy="100" r="9" />
          <circle cx="780" cy="90" r="9" />
          <circle cx="1040" cy="105" r="9" />

          <circle cx="150" cy="420" r="9" />
          <circle cx="430" cy="410" r="9" />
          <circle cx="800" cy="410" r="9" />
          <circle cx="1080" cy="400" r="9" />

        </g>

      </svg>


      <motion.span
        animate={{
          opacity: [0.25, 0.55, 0.25],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[18%]
          top-[22%]
          h-1
          w-1
          rounded-full
          bg-blue-400
        "
      />

      <motion.span
        animate={{
          opacity: [0.2, 0.5, 0.2],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[22%]
          top-[27%]
          h-1
          w-1
          rounded-full
          bg-purple-400
        "
      />

      <motion.span
        animate={{
          opacity: [0.2, 0.45, 0.2],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[38%]
          bottom-[20%]
          h-1
          w-1
          rounded-full
          bg-blue-300
        "
      />

      <motion.span
        animate={{
          opacity: [0.2, 0.5, 0.2],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[38%]
          bottom-[26%]
          h-1
          w-1
          rounded-full
          bg-purple-300
        "
      />

    </div>
  );
};

export default GlobalBackground;



// import { motion } from "framer-motion";

// const GlobalBackground = () => {
//   return (
//     <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

//       {/* Base Background */}
//       <div className="absolute inset-0 bg-[#131d38]" />

//       {/* ================= BLUE GLOW ================= */}
//       <motion.div
//         animate={{
//           x: [0, 40, 0],
//           y: [0, -20, 0],
//           scale: [1, 1.08, 1],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           -left-32
//           top-[10%]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-blue-600/15
//           blur-[150px]
//         "
//       />

//       {/* ================= PURPLE GLOW ================= */}
//       <motion.div
//         animate={{
//           x: [0, -35, 0],
//           y: [0, 25, 0],
//           scale: [1, 1.08, 1],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           -right-32
//           top-[25%]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-purple-600/15
//           blur-[150px]
//         "
//       />

//       {/* ================= SUBTLE CENTER GLOW ================= */}
//       <div
//         className="
//           absolute
//           left-1/2
//           top-[40%]
//           h-[350px]
//           w-[350px]
//           -translate-x-1/2
//           rounded-full
//           bg-blue-500/[0.025]
//           blur-[130px]
//         "
//       />

//       {/* ================= GRID ================= */}
//       <div
//         className="
//           absolute
//           inset-0
//           bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
//           bg-[size:60px_60px]
//         "
//       />

//       {/* ================= SUBTLE SHINE ================= */}
//       <motion.div
//         initial={{
//           x: "-100%",
//           opacity: 0,
//         }}
//         animate={{
//           x: ["-100%", "100%"],
//           opacity: [0, 0.08, 0],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           repeatDelay: 8,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           top-0
//           h-full
//           w-[30%]
//           rotate-[12deg]
//           bg-gradient-to-r
//           from-transparent
//           via-white
//           to-transparent
//           blur-3xl
//         "
//       />

//       {/* ================= STARS ================= */}

//       <span
//         className="
//           absolute
//           left-[10%]
//           top-[15%]
//           h-1
//           w-1
//           rounded-full
//           bg-blue-400
//           shadow-[0_0_8px_rgba(96,165,250,0.7)]
//           animate-pulse
//         "
//       />

//       <span
//         className="
//           absolute
//           left-[30%]
//           top-[28%]
//           h-1.5
//           w-1.5
//           rounded-full
//           bg-purple-400
//           shadow-[0_0_10px_rgba(192,132,252,0.7)]
//           animate-pulse
//         "
//       />

//       <span
//         className="
//           absolute
//           right-[20%]
//           top-[18%]
//           h-1
//           w-1
//           rounded-full
//           bg-blue-300
//           shadow-[0_0_8px_rgba(96,165,250,0.6)]
//           animate-pulse
//         "
//       />

//       <span
//         className="
//           absolute
//           right-[15%]
//           top-[60%]
//           h-1.5
//           w-1.5
//           rounded-full
//           bg-purple-300
//           shadow-[0_0_10px_rgba(192,132,252,0.6)]
//           animate-pulse
//         "
//       />

//       <span
//         className="
//           absolute
//           bottom-[20%]
//           left-[20%]
//           h-1
//           w-1
//           rounded-full
//           bg-blue-400
//           shadow-[0_0_8px_rgba(96,165,250,0.6)]
//           animate-pulse
//         "
//       />

//       <span
//         className="
//           absolute
//           bottom-[10%]
//           right-[40%]
//           h-1
//           w-1
//           rounded-full
//           bg-purple-400
//           shadow-[0_0_8px_rgba(192,132,252,0.6)]
//           animate-pulse
//         "
//       />

//     </div>
//   );
// };

// export default GlobalBackground;
