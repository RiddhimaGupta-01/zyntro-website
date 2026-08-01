import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img from "../../assets/portfolio/img.png";
import bg from "../../assets/bg/bg.png";
import { Link } from "react-router-dom";
import GlobalBackground from "../GlobalBackground/GlobalBackground";

const HomePortfolio = () => {
  const statsRef = useRef(null);

  // Scroll animation for stats cards
  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });

  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.88, 1, 0.92]
  );

  const cardY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [40, 0, -20]
  );

  return (
    <section className="relative overflow-hidden py-18">
       <GlobalBackground />
      

      {/* Content */}
      <div className="relative z-30 mx-auto max-w-7xl px-5">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl font-bold text-white md:text-5xl"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400"
          >
            Showcasing innovative digital platforms that empower
            businesses across India.
          </motion.p>

          <div className="mt-8 flex justify-center">
            <div className="relative h-px w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent">
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
            </div>
          </div>
        </div>

        {/* ================= STATS CARDS ================= */}
       <div
  ref={statsRef}
  className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3"
  style={{ perspective: "1200px" }}
>
  {/* =========================
      3K+ Retailers
  ========================= */}
  <motion.div
    whileHover={{
      rotateX: 5,
      rotateY: -5,
      y: -8,
      scale: 1.02,
    }}
    transition={{
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }}
    style={{
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50%",
    }}
    className="
      group relative overflow-hidden
      rounded-2xl
      border border-white/10
      bg-white/5
      p-8 text-center
      backdrop-blur-sm
      transition-colors duration-300
      hover:border-cyan-400/40
      hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]
    "
  >
    {/* Glow */}
    <div
      className="
        pointer-events-none absolute inset-0
        rounded-2xl
        bg-gradient-to-br
        from-cyan-400/10
        via-transparent
        to-blue-500/10
        opacity-0
        transition-opacity duration-500
        group-hover:opacity-100
      "
    />

    {/* Content */}
    <div
      className="relative z-10"
      style={{
        transform: "translateZ(25px)",
        transformStyle: "preserve-3d",
      }}
    >
      <h3 className="
        text-4xl font-bold
        text-cyan-400
        drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
      ">
        3K+
      </h3>

      <p className="mt-2 text-slate-400">
        Retailers
      </p>
    </div>
  </motion.div>


  {/* =========================
      400+ Distributors
  ========================= */}
  <motion.div
    whileHover={{
      rotateX: 5,
      rotateY: 5,
      y: -8,
      scale: 1.02,
    }}
    transition={{
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }}
    style={{
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50%",
    }}
    className="
      group relative overflow-hidden
      rounded-2xl
      border border-white/10
      bg-white/5
      p-8 text-center
      backdrop-blur-sm
      transition-colors duration-300
      hover:border-cyan-400/40
      hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]
    "
  >
    {/* Glow */}
    <div
      className="
        pointer-events-none absolute inset-0
        rounded-2xl
        bg-gradient-to-br
        from-cyan-400/10
        via-transparent
        to-blue-500/10
        opacity-0
        transition-opacity duration-500
        group-hover:opacity-100
      "
    />

    {/* Content */}
    <div
      className="relative z-10"
      style={{
        transform: "translateZ(25px)",
        transformStyle: "preserve-3d",
      }}
    >
      <h3 className="
        text-4xl font-bold
        text-cyan-400
        drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
      ">
        400+
      </h3>

      <p className="mt-2 text-slate-400">
        Distributors
      </p>
    </div>
  </motion.div>


  {/* =========================
      Pan India
  ========================= */}
  <motion.div
    whileHover={{
      rotateX: 5,
      rotateY: -5,
      y: -8,
      scale: 1.02,
    }}
    transition={{
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }}
    style={{
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50%",
    }}
    className="
      group relative overflow-hidden
      rounded-2xl
      border border-white/10
      bg-white/5
      p-8 text-center
      backdrop-blur-sm
      transition-colors duration-300
      hover:border-cyan-400/40
      hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]
    "
  >
    {/* Glow */}
    <div
      className="
        pointer-events-none absolute inset-0
        rounded-2xl
        bg-gradient-to-br
        from-cyan-400/10
        via-transparent
        to-blue-500/10
        opacity-0
        transition-opacity duration-500
        group-hover:opacity-100
      "
    />

    {/* Content */}
    <div
      className="relative z-10"
      style={{
        transform: "translateZ(25px)",
        transformStyle: "preserve-3d",
      }}
    >
      <h3 className="
        text-4xl font-bold
        text-cyan-400
        drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
      ">
        Pan India
      </h3>

      <p className="mt-2 text-slate-400">
        Presence
      </p>
    </div>
  </motion.div>
</div>
        {/* ================= PORTFOLIO CONTENT ================= */}
        <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
              Featured Projects
            </span>

            <h3 className="mt-5 text-4xl font-bold leading-tight text-white">
              Innovation That <br />
              Delivers Results
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              We create reliable digital solutions that help businesses
              streamline operations, enhance customer experiences, and
              accelerate growth. Our portfolio reflects our commitment
              to innovation, performance, and scalable technology.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Custom Software Development",
                "Web & Mobile Applications",
                "Enterprise Business Solutions",
                "Secure & Scalable Architecture",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/portfolio"
              className="
                mt-10 inline-block
                rounded-xl
                bg-blue-600
                px-6 py-3
                font-semibold text-white
                transition-all duration-300
                hover:bg-blue-700
                hover:shadow-lg
                hover:shadow-blue-500/30
              "
            >
              Explore Our Portfolio →
            </Link>
          </div>

          {/* Laptop */}
          <div className="relative flex items-center justify-center">

            {/* Background Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />


<motion.img
  initial={{
    opacity: 0,
    scale: 0.65,
    x: 40,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.15,
  }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
  className="relative z-10 w-full max-w-xl drop-shadow-2xl"
  src={img}
  alt="Portfolio Laptop"
/>
           {/* <motion.img
  initial={{
    opacity: 0,
    scale: 0.75,
    x: 40,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative z-10 w-full max-w-xl drop-shadow-2xl"
  src={img}
  alt="Portfolio Laptop"
/> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;

// import { motion } from "framer-motion";
// import img from "../../assets/portfolio/img.png";
// import bg from "../../assets/bg/bg.png"
// import { Link } from "react-router-dom";
// import { HiArrowRight } from "react-icons/hi2";

// const HomePortfolio = () => {
//   return (
//  <section className="relative overflow-hidden py-18">

//   {/* Background Image */}
//   <img
//     src={bg}
//     className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none z-0"
//     alt=""
//   />

// <motion.div
//   animate={{
//     x: [0, 120, 0],
//     y: [0, -60, 0],
//     scale: [1, 1.15, 1],
//   }}
//   transition={{
//     duration: 20,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}
//   className="absolute left-0 top-10 z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]"
// />

// <motion.div
//   animate={{
//     x: [0, -100, 0],
//     y: [0, 80, 0],
//     scale: [1.1, 0.9, 1.1],
//   }}
//   transition={{
//     duration: 22,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}
//   className="absolute right-0 bottom-0 z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]"
// />

//   {/* Content */}
//     <div className="relative z-30 mx-auto max-w-7xl px-5">

//         {/* Section Heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <motion.h2
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.6 }}
//   className="text-center text-4xl font-bold text-white md:text-5xl"
// >
//   Our{" "}
//   <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//     Portfolio
//   </span>
// </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400"
//           >
//             Showcasing innovative digital platforms that empower
//             businesses across India.
//           </motion.p>
//        <div
//   className="mt-12 mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3"
//   style={{ perspective: "1200px" }}
// >
//   {/* Card */}
//   <motion.div
//     whileHover={{
//       rotateX: 8,
//       rotateY: -8,
//       y: -10,
//       scale: 1.02,
//     }}
//     transition={{
//       type: "spring",
//       stiffness: 260,
//       damping: 18,
//     }}
//     style={{
//       transformStyle: "preserve-3d",
//     }}
//     className="
//       group relative overflow-hidden
//       rounded-2xl
//       border border-white/10
//       bg-white/5
//       p-8 text-center
//       backdrop-blur-sm
//       hover:border-cyan-400/40
//       hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]
//     "
//   >
//     <div
//       className="
//         pointer-events-none absolute inset-0
//         rounded-2xl
//         bg-gradient-to-br
//         from-cyan-400/10
//         via-transparent
//         to-blue-500/10
//         opacity-0
//         transition-opacity duration-300
//         group-hover:opacity-100
//       "
//     />

//     <div
//       className="relative z-10"
//       style={{
//         transform: "translateZ(40px)",
//       }}
//     >
//       <h3 className="text-4xl font-bold text-cyan-400">
//         3K+
//       </h3>

//       <p className="mt-2 text-slate-400">
//         Retailers
//       </p>
//     </div>
//   </motion.div>

//   {/* Card 2 */}
//   <motion.div
//     whileHover={{
//       rotateX: 8,
//       rotateY: -8,
//       y: -10,
//       scale: 1.02,
//     }}
//     transition={{
//       type: "spring",
//       stiffness: 260,
//       damping: 18,
//     }}
//     style={{
//       transformStyle: "preserve-3d",
//     }}
//     className="
//       group relative overflow-hidden
//       rounded-2xl
//       border border-white/10
//       bg-white/5
//       p-8 text-center
//       backdrop-blur-sm
//       hover:border-cyan-400/40
//       hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]
//     "
//   >
//     <div
//       className="
//         pointer-events-none absolute inset-0
//         rounded-2xl
//         bg-gradient-to-br
//         from-cyan-400/10
//         via-transparent
//         to-blue-500/10
//         opacity-0
//         transition-opacity duration-300
//         group-hover:opacity-100
//       "
//     />

//     <div
//       className="relative z-10"
//       style={{ transform: "translateZ(40px)" }}
//     >
//       <h3 className="text-4xl font-bold text-cyan-400">
//         400+
//       </h3>

//       <p className="mt-2 text-slate-400">
//         Distributors
//       </p>
//     </div>
//   </motion.div>

//   {/* Card 3 */}
//   <motion.div
//     whileHover={{
//       rotateX: 8,
//       rotateY: -8,
//       y: -10,
//       scale: 1.02,
//     }}
//     transition={{
//       type: "spring",
//       stiffness: 260,
//       damping: 18,
//     }}
//     style={{
//       transformStyle: "preserve-3d",
//     }}
//     className="
//       group relative overflow-hidden
//       rounded-2xl
//       border border-white/10
//       bg-white/5
//       p-8 text-center
//       backdrop-blur-sm
//       hover:border-cyan-400/40
//       hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]
//     "
//   >
//     <div
//       className="
//         pointer-events-none absolute inset-0
//         rounded-2xl
//         bg-gradient-to-br
//         from-cyan-400/10
//         via-transparent
//         to-blue-500/10
//         opacity-0
//         transition-opacity duration-300
//         group-hover:opacity-100
//       "
//     />

//     <div
//       className="relative z-10"
//       style={{ transform: "translateZ(40px)" }}
//     >
//       <h3 className="text-4xl font-bold text-cyan-400">
//         Pan India
//       </h3>

//       <p className="mt-2 text-slate-400">
//         Presence
//       </p>
//     </div>
//   </motion.div>
// </div>
// </div>


//         {/* Content */}
// <div className="mt-14 lg:mt-16 grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
//         <div>
//   <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
//     Featured Projects
//   </span>

//   <h3 className="mt-5 text-4xl font-bold leading-tight text-white">
//     Innovation That <br />
//     Delivers Results
//   </h3>

//   <p className="mt-6 text-lg leading-8 text-slate-400">
//     We create reliable digital solutions that help businesses streamline
//     operations, enhance customer experiences, and accelerate growth. Our
//     portfolio reflects our commitment to innovation, performance, and
//     scalable technology.
//   </p>

//   <div className="mt-8 space-y-4">
//     {[
//       "Custom Software Development",
//       "Web & Mobile Applications",
//       "Enterprise Business Solutions",
//       "Secure & Scalable Architecture",
//     ].map((item) => (
//       <div key={item} className="flex items-center gap-3">
//         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/20">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 text-blue-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2.5}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>

//         <span className="text-slate-300">{item}</span>
//       </div>
//     ))}
//   </div>

//   <Link
//   to="/portfolio"
//   className="mt-10 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
// >
//   Explore Our Portfolio →
// </Link>
// </div>

//       <div className="relative flex items-center justify-center">

//   {/* Background Glow */}
//   <div className="absolute h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

//   {/* Laptop */}
//   <motion.img
//     initial={{ opacity: 0, x: 40 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//     animate={{
//       y: [0, -10, 0],
//     }}
//     className="relative z-10 w-full max-w-xl drop-shadow-2xl"
//     src={img}
//     alt="Portfolio Laptop"
//   />

// </div>


//         </div>
     

//       </div>
//     </section>
//   );
// };

// export default HomePortfolio;