import heroVideo from "../../assets/zyn/video.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Blue / Purple Theme Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1431] via-[#050816]/75 to-[#0B0B2A]/40" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090d21] to-transparent" />

      </div>


      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-10">

        <div className="max-w-4xl">

          {/* ================= HEADING ================= */}
          <h1
            className="hero-reveal text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl"
          >
            Zyntro{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h1>


          {/* ================= TAGLINE ================= */}
          <p
            className="hero-reveal hero-delay-1 mt-6 max-w-xl text-lg font-medium leading-8 text-slate-300 sm:text-xl"
          >
            Innovating Today. Empowering Tomorrow.
          </p>


          {/* ================= BUTTONS ================= */}
          <div
            className="hero-reveal hero-delay-2 mt-9 flex flex-wrap gap-4"
          >

            <Link
              to="/portfolio"
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.30)] transition-transform duration-300 hover:scale-105"
            >
              Explore Our Work
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
            >
              Get In Touch
            </Link>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;





// import { motion } from "framer-motion";
// import heroVideo from "../../assets/zyn/video.mp4";
// import { Link } from "react-router-dom";
// const Hero = () => {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#050816]">

//       {/* ================= BACKGROUND VIDEO ================= */}
//       <div className="absolute inset-0 z-0 overflow-hidden">

//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="h-full w-full object-cover"
//         >
//           <source src={heroVideo} type="video/mp4" />
//         </video>


//         {/* Blue / Purple Theme Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0d1431] via-[#050816]/75 to-[#0B0B2A]/40" />

//         {/* Bottom Fade */}
//         <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090d21] to-transparent" />

//       </div>


//       {/* ================= HERO CONTENT ================= */}
//       <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-10">

//         <div className="max-w-4xl">

//           {/* Company Name */}
//           <motion.h1
//             initial={{
//               opacity: 0,
//               y: 35,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl"
//           >
//             Zyntro{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Software Solutions
//             </span>
//           </motion.h1>


//           {/* Tagline */}
//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 25,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.2,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mt-6 max-w-xl text-lg font-medium leading-8 text-slate-300 sm:text-xl"
//           >
//             Innovating Today. Empowering Tomorrow.
//           </motion.p>


//           {/* Buttons */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 25,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.35,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mt-9 flex flex-wrap gap-4"
//           >

//              <Link
//   to="/portfolio"
//   className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.30)] transition-all duration-300 hover:scale-105"
// >
//   Explore Our Work
// </Link>

//             <Link
//   to="/contact"
//   className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
// >
//   Get In Touch
// </Link>

//           </motion.div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;
