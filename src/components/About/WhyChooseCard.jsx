
import { motion } from "framer-motion";

const WhyChooseCard = ({ icon: Icon, title, desc }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="
        group relative
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.05]
        backdrop-blur-md
        p-4 sm:p-6 lg:p-7
        shadow-[0_10px_35px_rgba(0,0,0,0.20)]
        transition-colors duration-300
        hover:border-blue-500/50
        hover:bg-white/[0.07]
        hover:shadow-[0_20px_55px_rgba(37,99,235,0.18)]
      "
    >
      {/* Blue / Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute -right-10 -top-10
          h-28 w-28
          rounded-full
          bg-blue-500/10
          blur-3xl
          transition-all duration-500
          group-hover:scale-125
          group-hover:bg-purple-500/20
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          pointer-events-none
          absolute -bottom-12 -left-10
          h-24 w-24
          rounded-full
          bg-purple-500/10
          blur-3xl
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        style={{
          transform: "translateZ(35px)",
        }}
        className="
          relative z-10 mb-4
          flex h-12 w-12
          sm:h-14 sm:w-14
          items-center justify-center
          rounded-xl sm:rounded-2xl
          border border-blue-400/20
          bg-gradient-to-br
          from-blue-500/15
          to-purple-500/10
          text-blue-400
          shadow-[0_0_20px_rgba(59,130,246,0.10)]
          transition-all duration-500
          group-hover:scale-110
          group-hover:border-blue-400/40
          group-hover:text-purple-400
          group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
        "
      >
        {Icon && <Icon className="h-6 w-6 sm:h-7 sm:w-7" />}
      </div>

      {/* Title */}
      <h3
        style={{
          transform: "translateZ(25px)",
        }}
        className="
          relative z-10
          mb-2
          text-base
          font-bold
          text-white
          transition-colors duration-300
          sm:mb-3 sm:text-xl
          group-hover:text-blue-300
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          transform: "translateZ(15px)",
        }}
        className="
          relative z-10
          text-sm
          leading-6
          text-gray-400
          sm:text-base
        "
      >
        {desc}
      </p>

      {/* Shine */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[120%]
          top-0
          h-full
          w-[60%]
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/[0.06]
          to-transparent
          transition-all duration-700
          group-hover:left-[130%]
        "
      />
    </motion.div>
  );
};

export default WhyChooseCard;



// const WhyChooseCard = ({ icon, title, desc }) => {
//   return (
//     <div className="p-4 sm:p-6 lg:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/50 hover:-translate-y-2 transition duration-300">

//       <div className="text-3xl sm:text-4xl mb-3 sm:mb-5">
//         {icon}
//       </div>

//       <h3 className= "text-base sm:text-xl font-bold mb-2 sm:mb-3">
//         {title}
//       </h3>

//       <p className="text-gray-400 text:sm sm:text-base leading-6">
//         {desc}
//       </p>

//     </div>
//   );
// };

// export default WhyChooseCard;
