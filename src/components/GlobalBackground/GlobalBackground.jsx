const GlobalBackground = () => {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
        bg-[#131d38]
      "
      aria-hidden="true"
    >
      {/* BASE GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#0d1b38]
          via-[#131d38]
          to-[#211947]
        "
      />

      {/* BLUE GLOW */}
      <div
        className="
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-600/10
          blur-[110px]
        "
      />

      {/* PURPLE GLOW */}
      <div
        className="
          absolute
          -right-40
          bottom-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
      />

      {/* SUBTLE GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-20
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:64px_64px]
        "
      />

      {/* NETWORK */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <g
          fill="none"
          stroke="rgba(80,160,255,0.14)"
          strokeWidth="1"
        >
          <path d="M20 180 L150 110 L280 175 L420 100 L550 175" />
          <path d="M650 155 L780 90 L910 160 L1040 105 L1180 180" />

          <path d="M0 520 L150 420 L290 500 L430 410 L570 500" />
          <path d="M650 500 L800 410 L940 490 L1080 400 L1200 470" />

          <path d="M150 110 L150 420" />
          <path d="M420 100 L430 410" />
          <path d="M780 90 L800 410" />
          <path d="M1040 105 L1080 400" />
        </g>

        {/* NODES */}
        <g fill="#60a5fa">
          <circle cx="150" cy="110" r="2.5" />
          <circle cx="420" cy="100" r="2.5" />
          <circle cx="780" cy="90" r="2.5" />
          <circle cx="1040" cy="105" r="2.5" />

          <circle cx="150" cy="420" r="2.5" />
          <circle cx="430" cy="410" r="2.5" />
          <circle cx="800" cy="410" r="2.5" />
          <circle cx="1080" cy="400" r="2.5" />
        </g>
      </svg>
    </div>
  );
};

export default GlobalBackground;

// const GlobalBackground = () => {
//   return (
//     <div
//       className="
//         pointer-events-none
//         fixed
//         inset-0
//         z-0
//         overflow-hidden
//         bg-[#131d38]
//       "
//       aria-hidden="true"
//     >
//       {/* Base gradient */}
//       <div
//         className="
//           absolute
//           inset-0
//           bg-gradient-to-br
//           from-[#0d1b38]
//           via-[#131d38]
//           to-[#211947]
//         "
//       />

//       {/* Blue glow */}
//       <div
//         className="
//           absolute
//           -left-40
//           top-20
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-blue-600/20
//           blur-[140px]
//         "
//       />

//       {/* Purple glow */}
//       <div
//         className="
//           absolute
//           -right-40
//           bottom-10
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-purple-600/20
//           blur-[150px]
//         "
//       />

//       {/* Grid */}
//       <div
//         className="
//           absolute
//           inset-0
//           opacity-30
//           bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
//           bg-[size:64px_64px]
//         "
//       />

//       {/* Network */}
//       <svg
//         className="absolute inset-0 h-full w-full opacity-70"
//         viewBox="0 0 1200 800"
//         preserveAspectRatio="none"
//       >
//         <g
//           fill="none"
//           stroke="rgba(80,160,255,0.18)"
//           strokeWidth="1"
//         >
//           <path d="M20 180 L150 110 L280 175 L420 100 L550 175" />
//           <path d="M650 155 L780 90 L910 160 L1040 105 L1180 180" />
//           <path d="M0 520 L150 420 L290 500 L430 410 L570 500" />
//           <path d="M650 500 L800 410 L940 490 L1080 400 L1200 470" />

//           <path d="M150 110 L150 420" />
//           <path d="M420 100 L430 410" />
//           <path d="M780 90 L800 410" />
//           <path d="M1040 105 L1080 400" />
//         </g>

//         <g fill="#60a5fa">
//           <circle cx="20" cy="180" r="2.5" />
//           <circle cx="150" cy="110" r="3" />
//           <circle cx="280" cy="175" r="2.5" />
//           <circle cx="420" cy="100" r="3" />
//           <circle cx="550" cy="175" r="2.5" />

//           <circle cx="650" cy="155" r="2.5" />
//           <circle cx="780" cy="90" r="3" />
//           <circle cx="910" cy="160" r="2.5" />
//           <circle cx="1040" cy="105" r="3" />
//           <circle cx="1180" cy="180" r="2.5" />

//           <circle cx="0" cy="520" r="2.5" />
//           <circle cx="150" cy="420" r="3" />
//           <circle cx="290" cy="500" r="2.5" />
//           <circle cx="430" cy="410" r="3" />
//           <circle cx="570" cy="500" r="2.5" />

//           <circle cx="650" cy="500" r="2.5" />
//           <circle cx="800" cy="410" r="3" />
//           <circle cx="940" cy="490" r="2.5" />
//           <circle cx="1080" cy="400" r="3" />
//           <circle cx="1200" cy="470" r="2.5" />
//         </g>

//         <g fill="rgba(96,165,250,0.08)">
//           <circle cx="150" cy="110" r="9" />
//           <circle cx="420" cy="100" r="9" />
//           <circle cx="780" cy="90" r="9" />
//           <circle cx="1040" cy="105" r="9" />

//           <circle cx="150" cy="420" r="9" />
//           <circle cx="430" cy="410" r="9" />
//           <circle cx="800" cy="410" r="9" />
//           <circle cx="1080" cy="400" r="9" />
//         </g>
//       </svg>
//     </div>
//   );
// };

// export default GlobalBackground;

// const GlobalBackground = () => {
//   return (
//     <div
//       className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-[#131d38]"
//       aria-hidden="true"
//     >
//       {/* BASE GRADIENT */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b38] via-[#131d38] to-[#211947]" />

//       {/* BLUE GLOW */}
//       <div
//         className="
//           absolute
//           -left-40
//           top-20
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-blue-600/10
//           blur-[140px]
//           animate-[slowFloat_18s_ease-in-out_infinite]
//         "
//       />

//       {/* PURPLE GLOW */}
//       <div
//         className="
//           absolute
//           -right-40
//           bottom-10
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-purple-600/10
//           blur-[150px]
//           animate-[slowFloatReverse_20s_ease-in-out_infinite]
//         "
//       />

//       {/* SUBTLE GRID */}
//       <div
//         className="
//           absolute
//           inset-0
//           opacity-30
//           bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
//           bg-[size:64px_64px]
//         "
//       />

//       {/* NETWORK */}
//       <svg
//         className="absolute inset-0 h-full w-full opacity-70"
//         viewBox="0 0 1200 800"
//         preserveAspectRatio="none"
//       >
//         {/* CONNECTION LINES */}
//         <g
//           fill="none"
//           stroke="rgba(80,160,255,0.18)"
//           strokeWidth="1"
//         >
//           <path d="M20 180 L150 110 L280 175 L420 100 L550 175" />
//           <path d="M650 155 L780 90 L910 160 L1040 105 L1180 180" />

//           <path d="M0 520 L150 420 L290 500 L430 410 L570 500" />
//           <path d="M650 500 L800 410 L940 490 L1080 400 L1200 470" />

//           <path d="M150 110 L150 420" />
//           <path d="M420 100 L430 410" />
//           <path d="M780 90 L800 410" />
//           <path d="M1040 105 L1080 400" />
//         </g>

//         {/* NODES */}
//         <g fill="#60a5fa">
//           <circle cx="20" cy="180" r="2.5" />
//           <circle cx="150" cy="110" r="3" />
//           <circle cx="280" cy="175" r="2.5" />
//           <circle cx="420" cy="100" r="3" />
//           <circle cx="550" cy="175" r="2.5" />

//           <circle cx="650" cy="155" r="2.5" />
//           <circle cx="780" cy="90" r="3" />
//           <circle cx="910" cy="160" r="2.5" />
//           <circle cx="1040" cy="105" r="3" />
//           <circle cx="1180" cy="180" r="2.5" />

//           <circle cx="0" cy="520" r="2.5" />
//           <circle cx="150" cy="420" r="3" />
//           <circle cx="290" cy="500" r="2.5" />
//           <circle cx="430" cy="410" r="3" />
//           <circle cx="570" cy="500" r="2.5" />

//           <circle cx="650" cy="500" r="2.5" />
//           <circle cx="800" cy="410" r="3" />
//           <circle cx="940" cy="490" r="2.5" />
//           <circle cx="1080" cy="400" r="3" />
//           <circle cx="1200" cy="470" r="2.5" />
//         </g>

//         {/* SOFT NODE HALOS */}
//         <g fill="rgba(96,165,250,0.08)">
//           <circle cx="150" cy="110" r="9" />
//           <circle cx="420" cy="100" r="9" />
//           <circle cx="780" cy="90" r="9" />
//           <circle cx="1040" cy="105" r="9" />

//           <circle cx="150" cy="420" r="9" />
//           <circle cx="430" cy="410" r="9" />
//           <circle cx="800" cy="410" r="9" />
//           <circle cx="1080" cy="400" r="9" />
//         </g>
//       </svg>

//       {/* FLOATING DOTS */}
//       <span className="absolute left-[18%] top-[22%] h-1 w-1 rounded-full bg-blue-400/60 animate-[dotFloat_5s_ease-in-out_infinite]" />

//       <span className="absolute right-[22%] top-[27%] h-1 w-1 rounded-full bg-purple-400/60 animate-[dotFloatReverse_6s_ease-in-out_infinite]" />

//       <span className="absolute left-[38%] bottom-[20%] h-1 w-1 rounded-full bg-blue-300/50 animate-[dotFloat_7s_ease-in-out_infinite]" />

//       <span className="absolute right-[38%] bottom-[26%] h-1 w-1 rounded-full bg-purple-300/50 animate-[dotFloatReverse_6s_ease-in-out_infinite]" />
//     </div>
//   );
// };

// export default GlobalBackground;

// 