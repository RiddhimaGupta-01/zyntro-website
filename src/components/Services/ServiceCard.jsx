import { motion } from "framer-motion";

const ServiceCard = ({ service, compact = false }) => {
  const Icon = service.icon;

  /* =========================
     Compact Card
  ========================= */
  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group h-full"
      >
        <div
          className="
            relative flex h-[170px]
            cursor-default flex-col
            items-center justify-center
            overflow-hidden rounded-2xl
            border border-white/10
            bg-[#121c30]
            p-5 text-center
            transition-all duration-300
            group-hover:border-blue-400/40
            group-hover:shadow-[0_20px_45px_rgba(37,99,235,0.15)]
          "
          style={{
            transformOrigin: "50% 50%",
          }}
        >
          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute -right-12 -top-12
              h-32 w-32
              rounded-full
              bg-blue-500/10
              blur-3xl
              transition-all duration-500
              group-hover:scale-125
              group-hover:bg-blue-500/20
            "
          />

          {/* Border Glow */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              rounded-2xl
              border border-blue-400/0
              transition-all duration-500
              group-hover:border-blue-400/40
            "
          />

          {/* Icon */}
          <motion.div
            initial={false}
            whileHover={{
              y: -7,
              scale: 1.08,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "50% 50%",
            }}
            className="
              relative z-10
              flex w-full
              justify-center
            "
          >
            <Icon
              className="
                h-8 w-8
                text-blue-500
                transition-all duration-500
                group-hover:text-cyan-400
                group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.55)]
                sm:h-9 sm:w-9
                lg:h-10 lg:w-10
              "
            />
          </motion.div>

          {/* Title */}
          <motion.h3
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "50% 50%",
            }}
            className="
              relative z-10
              mt-4
              text-sm font-semibold
              text-white
              transition-colors duration-300
              group-hover:text-blue-400
              sm:text-xl
            "
          >
            {service.title}
          </motion.h3>
        </div>
      </motion.div>
    );
  }

  /* =========================
     Home Page Card
  ========================= */
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{
        rest: {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          y: 0,
        },

        hover: {
          rotateX: 3,
          rotateY: 0,
          scale: 1.02,
          y: -6,
        },
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transformOrigin: "50% 50%",
      }}
      className="group relative h-[200px]"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
        }}
        className="
          relative flex h-full
          flex-col
          overflow-visible
          rounded-2xl
          border border-white/10
          bg-[#081632]
          p-4
          sm:p-5
          lg:p-6
        "
      >
        {/* =========================
            Background Glow
        ========================= */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-blue-500/10
            blur-3xl
            transition-all
            duration-700
            group-hover:scale-150
            group-hover:bg-blue-500/20
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-24
            bg-gradient-to-t
            from-blue-500/10
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* =========================
            Border
        ========================= */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            border
            border-transparent
            transition-all
            duration-500
            group-hover:border-blue-500/50
            group-hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]
          "
        />

        {/* =========================
            Icon
        ========================= */}
       {/* Icon */}
<motion.div
  variants={{
    rest: {
      y: 0,
      scale: 1,
    },

    hover: {
      y: -8,
      scale: 1.08,
    },
  }}
  transition={{
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  }}
  style={{
    transformOrigin: "50% 50%",
  }}
  className="
    relative
    z-10
    flex
    w-fit
    justify-start
  "
>
  <Icon
    className="
      h-7
      w-7
      text-blue-500
      transition-all
      duration-500
      group-hover:text-cyan-400
      group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.55)]
      sm:h-8
      sm:w-8
      lg:h-10
      lg:w-10
    "
  />
</motion.div>

        {/* =========================
            Title
        ========================= */}
        <motion.h3
          variants={{
            rest: {
              y: 0,
              scale: 1,
            },

            hover: {
              y: -5,
              scale: 1.01,
            },
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "50% 50%",
          }}
          className="
            relative
            z-10
            mt-3
            min-h-[52px]
            text-base
            font-semibold
            leading-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-blue-400
            sm:text-lg
            lg:text-xl
          "
        >
          {service.title}
        </motion.h3>

        {/* =========================
            Description
        ========================= */}
        <p
          className="
            relative
            z-10
            mt-2
            flex-1
            text-xs
            leading-6
            text-gray-400
            transition-colors
            duration-300
            group-hover:text-gray-300
            sm:text-sm
            lg:text-base
          "
        >
          {service.description}
        </p>

        {/* =========================
            Hover Line
        ========================= */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "45%" }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            bg-gradient-to-r
            from-blue-500
            to-cyan-400
          "
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;


// import { motion } from "framer-motion";

// const ServiceCard = ({ service, compact = false }) => {
//   const Icon = service.icon;

//   /* =========================
//      Compact Card
//   ========================= */
//   if (compact) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{
//           duration: 0.6,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         whileHover={{
//           y: -8,
//           transition: { duration: 0.3 },
//         }}
//         className="group h-full"
//       >
//         <div className="relative flex h-[170px] cursor-default flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#121c30] p-5 text-center">
//           {/* Animated glow */}
//           <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/25" />

//           {/* Border glow */}
//           <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//             <div className="absolute inset-0 rounded-2xl border border-blue-400/40" />
//           </div>
//           {/* Icon */}
// <motion.div
//   variants={{
//     rest: {
//       y: 0,
//       scale: 1,
//       rotate: 0,
//     },

//     hover: {
//       y: -22,
//       scale: 1.2,
//       rotate: 0,
//     },
//   }}
//   transition={{
//     type: "spring",
//     stiffness: 180,
//     damping: 16,
//   }}
//   style={{
//     transformStyle: "preserve-3d",
//     transformOrigin: "center center",
//   }}
//   className="
//     relative
//     z-10
//     flex
//     w-full
//     justify-center
//   "
// >
//   <Icon
//     className="
//       h-7 w-7
//       text-blue-500
//       transition-all
//       duration-500
//       group-hover:text-cyan-400
//       group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.55)]
//       sm:h-8 sm:w-8
//       lg:h-10 lg:w-10
//     "
//   />
// </motion.div>


//           {/* Title */}
//           <h3 className="relative z-10 mt-3 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-blue-400 sm:mt-5 sm:text-xl">
//             {service.title}
//           </h3>
//         </div>
//       </motion.div>
//     );
//   }

//   /* =========================
//      Home Page Card
//   ========================= */
//   return (
// <motion.div
//   initial="rest"
//   animate="rest"
//   whileHover="hover"
//   variants={{
//     rest: {
//       rotateX: 0,
//       rotateY: 0,
//       scale: 1,
//       y: 0,
//     },

//    hover: {
//   rotateX: 5,
//   rotateY: -5,
//   scale: 1.03,
//   y: -10,
// },
//   }}
//   transition={{
//     type: "spring",
//     stiffness: 180,
//     damping: 15,
//   }}
//   style={{
//     transformStyle: "preserve-3d",
//     perspective: "1000px",
//     transformOrigin: "center center",
//   }}
//   className="group relative h-[200px]"
// >
//      <div
//   style={{
//     transformStyle: "preserve-3d",
//   }}
//   className="relative flex h-full flex-col overflow-visible rounded-2xl border border-white/10 bg-[#081632] p-4 sm:p-5 lg:p-6"
// >
//         {/* Background glow */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             -right-16
//             -top-16
//             h-40
//             w-40
//             rounded-full
//             bg-blue-500/10
//             blur-3xl
//             transition-all
//             duration-700
//             group-hover:scale-150
//             group-hover:bg-blue-500/20
//           "
//         />

//         {/* Bottom gradient */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-x-0
//             bottom-0
//             h-24
//             bg-gradient-to-t
//             from-blue-500/10
//             to-transparent
//             opacity-0
//             transition-opacity
//             duration-500
//             group-hover:opacity-100
//           "
//         />

//         {/* Animated border */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             rounded-2xl
//             border
//             border-transparent
//             transition-all
//             duration-500
//             group-hover:border-blue-500/50
//             group-hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]
//           "
//         />
// <motion.div
//   variants={{
//     rest: {
//       y: 0,
//       scale: 1,
//       rotate: 0,
//     },
//     hover: {
//       y: -18,
//       scale: 1.15,
//       rotate: 0,
//     },
//   }}
//   transition={{
//     type: "spring",
//     stiffness: 180,
//     damping: 15,
//   }}
//   style={{
//     transformOrigin: "center center",
//   }}
//   className="relative z-10 flex w-full justify-center"
// >

//           <Icon
//             className="
//               h-7
//               w-7
//               text-blue-500
//               transition-all
//               duration-500
//               group-hover:text-cyan-400
//               group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.55)]
//               sm:h-8
//               sm:w-8
//               lg:h-10
//               lg:w-10
//             "
//           />
//         </motion.div>

//         {/* Title */}
//  <motion.h3
//   variants={{
//     rest:{
//       y:0,
//       z:0,
//     },

//     hover:{
//       y:-15,
//       z:50,
//     },
//   }}
//   transition={{
//     type: "spring",
//     stiffness: 180,
//     damping: 14,
//   }}
  
//           className="
//             relative
//             z-10
//             mt-3
//             min-h-[52px]
//             text-base
//             font-semibold
//             leading-tight
//             text-white
//             transition-all
//             duration-300
//             group-hover:translate-x-1
//             group-hover:text-blue-400
//             sm:text-lg
//             lg:text-xl
//           "
//         >
//           {service.title}
//         </motion.h3>

//         {/* Description */}
//         <motion.p
//   variants={{
//     rest:{
//       z:0,
//     },

//     hover:{
//       z:20,
//     },
//   }}
//   transition={{
//     duration:0.01
//   }}
  
//           className="
//             relative
//             z-10
//             mt-2
//             flex-1
//             text-xs
//             leading-6
//             text-gray-400
//             transition-colors
//             duration-300
//             group-hover:text-gray-300
//             sm:text-sm
//             lg:text-base
//           "
//         >
//           {service.description}
//         </motion.p>

//         {/* Hover line */}
//         <motion.div
//           initial={{ width: 0 }}
//           whileHover={{ width: "45%" }}
//           transition={{ duration: 0.4 }}
//           className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceCard;

// const ServiceCard = ({ service, compact = false }) => {
//   const Icon = service.icon;

//   // Compact Card (Service Pages)
//   if (compact) {
//     return (
//       <div className="block h-full">
//         <div className="group h-[170px] cursor-default rounded-2xl border border-white/10 bg-[#121c30] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] flex flex-col items-center justify-center text-center">
//           <div className="h-12 flex items-center justify-center">
//           <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
//           </div>

//       <h3 className="mt-3 sm:mt-5 text-sm sm:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
//   {service.title}
// </h3>
//         </div>
//       </div>
//     );
//   }

//   // Home Page Card
// return (
//   <div className="group relative flex h-[200px] flex-col rounded-2xl border border-white/10 bg-[#081632] p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]">

//     <Icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-blue-500 transition-transform duration-300 group-hover:scale-110" />

//     <h3 className="mt-3 min-h-[52px] text-base sm:text-lg lg:text-xl font-semibold leading-tight text-white group-hover:text-blue-400">
//       {service.title}
//     </h3>

//     <p className="mt-2 flex-1 text-xs sm:text-sm lg:text-base leading-6 text-gray-400">
//       {service.description}
//     </p>

//   </div>
// );
// };

// export default ServiceCard;

// import { Link } from "react-router-dom";

// const ServiceCard = ({ service, compact = false }) => {
//   const Icon = service.icon;

//   // Compact Card (Service Pages)

// if (compact) {
//   return (
//     <Link to={`/services/${service.slug}`} className="block h-full">
//       <div className="group h-[170px] cursor-pointer rounded-2xl border border-white/10 bg-[#121c30] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] flex flex-col items-center justify-center text-center">

//         <div className="h-12 flex items-center justify-center">
//           <Icon className="h-10 w-10 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
//         </div>

//         <h3 className="mt-5 h-14 flex items-center justify-center text-lg font-semibold leading-snug text-white group-hover:text-blue-400">
//           {service.title}
//         </h3>

//       </div>
//     </Link>
//   );
// }

//   // Home Page Card
//   return (
//     <div className="group relative h-full w-full rounded-2xl border border-white/10 bg-[#081632] p-3 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]">
//       <Icon className="h-7 w-7 sm:h-10 sm:w-10 text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />

//       <h3 className="mt-3 sm:mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
//         {service.title}
//       </h3>

//       <p className="mt-2 sm:mt-3 text-xs sm:text-base leading-relaxed text-gray-400">
//         {service.description}
//       </p>
//     </div>
//   );
// };

// export default ServiceCard;
