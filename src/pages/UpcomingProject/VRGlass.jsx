import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import VRGlassAnimation from "../../components/upcoming/VRGlassAnimation";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

const VRGlass = () => {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-20">
        {/* Global Background */}
        <GlobalBackground />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Upcoming Project */}
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md"
          >
            Upcoming Project
          </motion.div>

          {/* ================= HERO ================= */}
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left */}
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="order-1 text-center lg:text-left"
            >
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
                Enterprise

                <span className="block">
                  <span className="relative inline-block align-bottom">

                    {/* Typewriter */}
                    <motion.span
                      className="inline-block overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: "100%",
                      }}
                      transition={{
                        duration: 1.15,
                        ease: "linear",
                      }}
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      VR Glasses
                    </motion.span>


                  </span>
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
                <strong>Zyntro Software Solutions</strong> is thrilled to unveil
                our ambitious <strong>VR Glasses project,</strong> a
                next-generation virtual reality platform that promises to
                transform how users experience digital content, interactive
                environments, and immersive applications. This cutting-edge
                technology represents our commitment to pushing the boundaries
                of human-computer interaction, creating experiences that blur
                the lines between physical and digital realities.
                <br />
                <br />
                Our VR Glasses combine state-of-the-art optics, advanced motion
                tracking, and powerful processing capabilities to deliver an
                unparalleled immersive experience. Whether for gaming,
                professional training, virtual collaboration, educational
                simulations, or entertainment, our solution offers crystal-clear
                visuals, intuitive controls, and seamless integration with
                existing digital ecosystems, making virtual reality accessible
                and practical for everyday use.
              </p>
            </motion.div>

            {/* Right Animation */}
            <div className="order-2 flex justify-center lg:justify-end">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.65,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px] lg:h-[620px] lg:w-[620px]"
              >
                <VRGlassAnimation />
              </motion.div>
            </div>
          </div>

          {/* ================= CARD 1 ================= */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.65,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: {
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="group relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)] sm:p-8 lg:p-10"
          >
            {/* Hover Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

            <h2 className="relative z-10 text-3xl font-bold text-white md:text-4xl">
              Immersive{" "}
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Technology & Design Innovation
              </span>
            </h2>

            <p className="relative z-10 mt-6 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
              Our VR Glasses combine advanced display and optical technologies
              to deliver realistic visuals and immersive depth perception.
              High-resolution OLED displays, wide field of view, and advanced
              lenses create a detailed and engaging virtual experience.
            </p>

            <p className="relative z-10 mt-5 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
              A 120Hz refresh rate, low-latency processing, and foveated
              rendering provide smooth performance while optimizing power and
              thermal efficiency. This allows demanding VR applications to run
              comfortably without compromising visual quality.
            </p>

            <p className="relative z-10 mt-5 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
              Comfort is also a key part of the design, with lightweight
              materials, adjustable head straps, IPD customization, spatial
              audio, and ventilation. These features support comfortable and
              immersive experiences during extended use.
            </p>

            {/* Bottom Light */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:w-3/4" />
          </motion.div>

          {/* ================= CARD 2 ================= */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.65,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: {
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="group relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)] sm:p-8 lg:p-10"
          >
            {/* Hover Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

            <h2 className="relative z-10 text-3xl font-bold text-white md:text-4xl">
              Applications
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                & Ecosystem Integration
              </span>
            </h2>

            <p className="relative z-10 mt-6 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
              Our VR Glasses support a wide range of applications across
              entertainment, professional, and educational environments.
              Gaming experiences benefit from immersive visuals, intuitive
              controls, haptic feedback, and hand-tracking technology.
            </p>

            <p className="relative z-10 mt-5 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
              In professional environments, VR can support medical training,
              architectural visualization, manufacturing simulations, and
              remote collaboration. Organizations can create realistic virtual
              environments that improve training, teamwork, and operational
              efficiency.
            </p>

            <p className="relative z-10 mt-5 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
              Educational institutions can use immersive experiences to explore
              historical locations, scientific concepts, space, and real-world
              environments, making complex subjects more interactive and easier
              to understand.
            </p>

            {/* Bottom Light */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:w-3/4" />
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default VRGlass;





// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import VRGlassAnimation from "../../components/upcoming/VRGlassAnimation";

// const VRGlass = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-24 pb-16 lg:pt-36 lg:pb-20">
//         {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-32 pb-20"> */}

//         {/* Grid */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="h-full w-full"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//               `,
//               backgroundSize: "60px 60px",
//             }}
//           />
//         </div>

//         {/* Glow */}
//         <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6">
//           <div className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
//             Upcoming Project
//           </div>
//           <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
//             {/* Left */}
//             <div className="order-1 text-center lg:text-left">
//               <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
//                 Enterprise
//                 <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//                   VR Glasses
//                 </span>
//               </h1>

//               <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
//                 <strong>Zyntro Software Solutions</strong> is thrilled to unveil
//                 our ambitious <strong>VR Glasses project,</strong>a
//                 next-generation virtual reality platform that promises to
//                 transform how users experience digital content, interactive
//                 environments, and immersive applications. This cutting-edge
//                 technology represents our commitment to pushing the boundaries
//                 of human-computer interaction, creating experiences that blur
//                 the lines between physical and digital realities.
//                 <br />
//                 <br />
//                 Our VR Glasses combine state-of-the-art optics, advanced motion
//                 tracking, and powerful processing capabilities to deliver an
//                 unparalleled immersive experience. Whether for gaming,
//                 professional training, virtual collaboration, educational
//                 simulations, or entertainment, our solution offers crystal-clear
//                 visuals, intuitive controls, and seamless integration with
//                 existing digital ecosystems, making virtual reality accessible
//                 and practical for everyday use.
//               </p>
//             </div>

//             {/* Right */}
//             <div className="order-2 flex justify-center lg:justify-end">
//               <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[620px] lg:h-[620px]">
//                 <VRGlassAnimation />
//               </div>
//             </div>
//           </div>

//           {/* About */}

//           {/* <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"> */}

//           <div className="group rounded-[32px] mt-20 border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">

//   <h2 className="text-3xl font-bold text-white  md:text-4xl">
//     Immersive{" "}
//     <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//       Technology & Design Innovation
//     </span>
//   </h2>

//   <p className="mt-6 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     Our VR Glasses combine advanced display and optical technologies to
//     deliver realistic visuals and immersive depth perception. High-resolution
//     OLED displays, wide field of view, and advanced lenses create a detailed
//     and engaging virtual experience.
//   </p>

//   <p className="mt-5 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     A 120Hz refresh rate, low-latency processing, and foveated rendering
//     provide smooth performance while optimizing power and thermal efficiency.
//     This allows demanding VR applications to run comfortably without
//     compromising visual quality.
//   </p>

//   <p className="mt-5 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     Comfort is also a key part of the design, with lightweight materials,
//     adjustable head straps, IPD customization, spatial audio, and ventilation.
//     These features support comfortable and immersive experiences during
//     extended use.
//   </p>

// </div>


// <div className="group rounded-[32px] mt-20 border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">

//   <h2 className="text-3xl font-bold text-white  md:text-4xl">
//     Applications
//     <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//       & Ecosystem Integration
//     </span>
//   </h2>

//   <p className="mt-6 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     Our VR Glasses support a wide range of applications across entertainment,
//     professional, and educational environments. Gaming experiences benefit
//     from immersive visuals, intuitive controls, haptic feedback, and
//     hand-tracking technology.
//   </p>

//   <p className="mt-5 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     In professional environments, VR can support medical training,
//     architectural visualization, manufacturing simulations, and remote
//     collaboration. Organizations can create realistic virtual environments
//     that improve training, teamwork, and operational efficiency.
//   </p>

//   <p className="mt-5 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     Educational institutions can use immersive experiences to explore
//     historical locations, scientific concepts, space, and real-world
//     environments, making complex subjects more interactive and easier to
//     understand.
//   </p>

// </div>
//         </div>
//         {/* </div> */}
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default VRGlass;
