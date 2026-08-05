import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import FAQ from "./FAQ";
import { motion } from "framer-motion";
import { whyChooseData } from "../../data/WhyChooseData";
import WhyChooseCard from "./WhyChooseCard";

import { useRef } from "react";
import typingSound from "../../assets/typing.mp3";

const About = () => {
  // =========================================================
  // TYPING SOUND
  // =========================================================
  const audioRef = useRef(null);

  const playTypingSound = () => {
    // Stop any previous sound
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(typingSound);

    audio.volume = 0.08;
    audio.loop = true;

    audioRef.current = audio;

    audio.play().catch(() => {
      // Browser can block autoplay.
    });
  };

  const stopTypingSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden text-white">

      {/* ================= NAVBAR ================= */}
      <div className="relative z-[100]">
        <Navbar />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">

        {/* =========================================================
            HERO / ABOUT INTRO
        ========================================================= */}
        <section className="overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mx-auto w-full max-w-4xl text-center">

              {/* Section Label */}
              <div className="mb-2 flex items-center justify-center gap-2 py-8 sm:gap-4 sm:py-10">

                <span
                  className="
                    hidden
                    h-[2px]
                    w-10
                    bg-gradient-to-r
                    from-transparent
                    to-blue-400
                    sm:inline-block
                    sm:w-16
                  "
                />

                <span
                  className="
                    text-lg
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-transparent
                    bg-gradient-to-r
                    from-blue-400
                    to-purple-500
                    bg-clip-text
                    sm:text-2xl
                    sm:tracking-[0.2em]
                    md:text-3xl
                  "
                >
                  About Zyntro
                </span>

                <span
                  className="
                    hidden
                    h-[2px]
                    w-10
                    bg-gradient-to-r
                    from-purple-500
                    to-transparent
                    sm:inline-block
                    sm:w-16
                  "
                />

              </div>

              {/* =====================================================
                  MAIN HEADING
              ===================================================== */}
              <h1 className="mt-5 px-1 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-5xl">

                {/* First Line */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  onAnimationStart={playTypingSound}
                  onAnimationComplete={stopTypingSound}
                  transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  className="
                    block
                    max-w-full
                    overflow-hidden
                    whitespace-normal
                    sm:whitespace-nowrap
                  "
                >
                  Transforming
                </motion.span>

                {/* Second Line */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  onAnimationStart={playTypingSound}
                  onAnimationComplete={stopTypingSound}
                  transition={{
                    duration: 2,
                    delay: 0.8,
                    ease: "easeInOut",
                  }}
                  className="
                    block
                    max-w-full
                    overflow-hidden
                    whitespace-normal
                    sm:whitespace-nowrap
                    bg-gradient-to-r
                    from-blue-400
                    to-purple-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Businesses Through Technology
                </motion.span>

              </h1>

              {/* Description */}
              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  px-1
                  py-2
                  text-sm
                  leading-7
                  text-gray-400
                  sm:text-base
                  sm:leading-8
                  md:text-lg
                "
              >
                Zyntro Software Solutions empowers organizations with
                innovative digital solutions, cybersecurity, cloud services,
                enterprise mobility, and software development to accelerate
                business growth and digital transformation.
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-wrap justify-center gap-5">
                <Link
                  to="/contact"
                  className="
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-blue-500/30
                    sm:px-7
                    sm:py-4
                    sm:text-base
                  "
                >
                  Let's Work Together →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT US SECTION
        ========================================================= */}
        <section className="overflow-hidden px-4 py-16 sm:px-6">
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-7xl
              min-w-0
              items-center
              gap-12
              lg:grid-cols-2
              lg:gap-16
            "
          >

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div className="min-w-0">

              <h2 className="mt-5 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-5xl">

                {/* First Line */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  onAnimationStart={playTypingSound}
                  onAnimationComplete={stopTypingSound}
                  transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  className="
                    block
                    max-w-full
                    overflow-hidden
                    whitespace-normal
                    sm:whitespace-nowrap
                  "
                >
                  Building Digital Solutions
                </motion.span>

                {/* Second Line */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  onAnimationStart={playTypingSound}
                  onAnimationComplete={stopTypingSound}
                  transition={{
                    duration: 2,
                    delay: 0.8,
                    ease: "easeInOut",
                  }}
                  className="
                    block
                    max-w-full
                    overflow-hidden
                    whitespace-normal
                    sm:whitespace-nowrap
                    bg-gradient-to-r
                    from-blue-400
                    to-purple-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  That Drive Success
                </motion.span>

              </h2>

              {/* Description */}
              <p
                className="
                  mt-6
                  text-base
                  leading-7
                  text-gray-400
                  sm:text-lg
                  sm:leading-8
                "
              >
                Zyntro Software Solutions is a technology company focused on
                delivering innovative software solutions, cloud services,
                cybersecurity, enterprise mobility and digital transformation
                services.
              </p>

              <p
                className="
                  mt-4
                  text-base
                  leading-7
                  text-gray-400
                  sm:text-lg
                  sm:leading-8
                "
              >
                We combine creativity, technology and expertise to help
                businesses achieve their goals and grow in the digital era.
              </p>

            </div>

            {/* =====================================================
                STATS
            ===================================================== */}
            <div className="grid min-w-0 grid-cols-2 gap-4 sm:gap-6">

              {/* ================= PROJECTS ================= */}
              <motion.div
                whileHover={{
                  y: -8,
                  rotateX: 3,
                  rotateY: -3,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
                className="
                  group
                  relative
                  min-w-0
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-4
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-blue-500/50
                  hover:bg-white/[0.08]
                  hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
                  sm:p-7
                "
              >
                <div
                  className="
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:scale-125
                  "
                />

                <h3
                  style={{ transform: "translateZ(30px)" }}
                  className="
                    relative
                    z-10
                    text-2xl
                    font-bold
                    text-blue-400
                    sm:text-4xl
                  "
                >
                  500+
                </h3>

                <p
                  style={{ transform: "translateZ(20px)" }}
                  className="
                    relative
                    z-10
                    mt-2
                    text-xs
                    leading-5
                    text-gray-400
                    sm:text-base
                  "
                >
                  Projects Completed
                </p>
              </motion.div>

              {/* ================= SATISFACTION ================= */}
              <motion.div
                whileHover={{
                  y: -8,
                  rotateX: 3,
                  rotateY: 3,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
                className="
                  group
                  relative
                  min-w-0
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-4
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-purple-500/50
                  hover:bg-white/[0.08]
                  hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]
                  sm:p-7
                "
              >
                <div
                  className="
                    absolute
                    -left-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-purple-500/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:scale-125
                  "
                />

                <h3
                  style={{ transform: "translateZ(30px)" }}
                  className="
                    relative
                    z-10
                    text-2xl
                    font-bold
                    text-purple-400
                    sm:text-4xl
                  "
                >
                  98%
                </h3>

                <p
                  style={{ transform: "translateZ(20px)" }}
                  className="
                    relative
                    z-10
                    mt-2
                    text-xs
                    leading-5
                    text-gray-400
                    sm:text-base
                  "
                >
                  Client Satisfaction
                </p>
              </motion.div>

              {/* ================= EXPERIENCE ================= */}
              <motion.div
                whileHover={{
                  y: -8,
                  rotateX: 3,
                  rotateY: -3,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
                className="
                  group
                  relative
                  min-w-0
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-4
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-blue-500/50
                  hover:bg-white/[0.08]
                  hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
                  sm:p-7
                "
              >
                <div
                  className="
                    absolute
                    -bottom-8
                    -right-8
                    h-24
                    w-24
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:scale-125
                  "
                />

                <h3
                  style={{ transform: "translateZ(30px)" }}
                  className="
                    relative
                    z-10
                    text-2xl
                    font-bold
                    text-blue-400
                    sm:text-4xl
                  "
                >
                  10+
                </h3>

                <p
                  style={{ transform: "translateZ(20px)" }}
                  className="
                    relative
                    z-10
                    mt-2
                    text-xs
                    leading-5
                    text-gray-400
                    sm:text-base
                  "
                >
                  Years Experience
                </p>
              </motion.div>

              {/* ================= SUPPORT ================= */}
              <motion.div
                whileHover={{
                  y: -8,
                  rotateX: 3,
                  rotateY: 3,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
                className="
                  group
                  relative
                  min-w-0
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-4
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-purple-500/50
                  hover:bg-white/[0.08]
                  hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]
                  sm:p-7
                "
              >
                <div
                  className="
                    absolute
                    -bottom-8
                    -left-8
                    h-24
                    w-24
                    rounded-full
                    bg-purple-500/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:scale-125
                  "
                />

                <h3
                  style={{ transform: "translateZ(30px)" }}
                  className="
                    relative
                    z-10
                    text-2xl
                    font-bold
                    text-purple-400
                    sm:text-4xl
                  "
                >
                  24/7
                </h3>

                <p
                  style={{ transform: "translateZ(20px)" }}
                  className="
                    relative
                    z-10
                    mt-2
                    text-xs
                    leading-5
                    text-gray-400
                    sm:text-base
                  "
                >
                  Support Available
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================================
            WHY CHOOSE ZYNTRO
        ========================================================= */}
        <section className="overflow-hidden px-4 py-20 sm:px-6">
          <div className="mx-auto w-full max-w-7xl">

            {/* Heading */}
            <div className="mb-12 text-center">

              <h2
                className="
                  text-3xl
                  font-bold
                  leading-[1.2]
                  text-white
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Why{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-400
                    to-purple-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Choose Zyntro
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-400
                  sm:text-base
                "
              >
                We deliver innovative, secure and scalable solutions that help
                businesses grow.
              </p>

            </div>

            {/* Cards */}
            <div className="space-y-6">

              {/* First Row */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.36, 1],
                }}
                className="
                  grid
                  grid-cols-2
                  gap-4
                  sm:gap-5
                  lg:grid-cols-4
                  lg:gap-6
                "
              >
                {whyChooseData.slice(0, 4).map((item, index) => (
                  <WhyChooseCard
                    key={item.id || index}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                  />
                ))}
              </motion.div>

              {/* Second Row */}
              {whyChooseData.length > 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.36, 1],
                  }}
                  className="
                    grid
                    grid-cols-2
                    gap-4
                    sm:gap-5
                    lg:grid-cols-4
                    lg:gap-6
                  "
                >
                  {whyChooseData.slice(4, 8).map((item, index) => (
                    <WhyChooseCard
                      key={item.id || index + 4}
                      icon={item.icon}
                      title={item.title}
                      desc={item.desc}
                    />
                  ))}
                </motion.div>
              )}

            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}
        <FAQ />

        {/* =========================================================
            FOOTER
        ========================================================= */}
        <Footer />

      </main>
    </div>
  );
};

export default About;

// import { Link } from "react-router-dom";
// import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";
// import FAQ from "./FAQ";
// import { motion } from "framer-motion";
// import { whyChooseData } from "../../data/WhyChooseData";
// import WhyChooseCard from "./WhyChooseCard";

// const About = () => {
//   return (
//     <div className="relative min-h-screen w-full max-w-full overflow-x-hidden text-white">
      
//       {/* ================= NAVBAR ================= */}
//       <div className="relative z-[100]">
//         <Navbar />
//       </div>

//       {/* ================= MAIN CONTENT ================= */}
//       <main className="relative z-10 w-full max-w-full overflow-x-hidden">

//         {/* =========================================================
//             HERO / ABOUT INTRO
//         ========================================================= */}
//         <section className="overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
//           <div className="mx-auto w-full max-w-7xl">
//             <div className="mx-auto w-full max-w-4xl text-center">

//               {/* Section Label */}
//               <div className="mb-2 flex items-center justify-center gap-2 py-8 sm:gap-4 sm:py-10">
//                 <span className="hidden h-[2px] w-10 bg-gradient-to-r from-transparent to-blue-400 sm:inline-block sm:w-16" />

//                 <span
//                   className="
//                     text-lg
//                     font-bold
//                     uppercase
//                     tracking-[0.12em]
//                     text-transparent
//                     bg-gradient-to-r
//                     from-blue-400
//                     to-purple-500
//                     bg-clip-text
//                     sm:text-2xl
//                     sm:tracking-[0.2em]
//                     md:text-3xl
//                   "
//                 >
//                   About Zyntro
//                 </span>

//                 <span className="hidden h-[2px] w-10 bg-gradient-to-r from-purple-500 to-transparent sm:inline-block sm:w-16" />
//               </div>

//               {/* Main Heading */}
//               <h1 className="mt-5 px-1 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-5xl">

//                 {/* First Line */}
//                 <motion.span
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.9,
//                     ease: "easeInOut",
//                   }}
//                   className="
//                     block
//                     max-w-full
//                     overflow-hidden
//                     whitespace-normal
//                     sm:whitespace-nowrap
//                   "
//                 >
//                   Transforming
//                 </motion.span>

//                 {/* Second Line */}
//                 <motion.span
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 2,
//                     delay: 0.8,
//                     ease: "easeInOut",
//                   }}
//                   className="
//                     block
//                     max-w-full
//                     overflow-hidden
//                     whitespace-normal
//                     sm:whitespace-nowrap
//                     bg-gradient-to-r
//                     from-blue-400
//                     to-purple-500
//                     bg-clip-text
//                     text-transparent
//                   "
//                 >
//                   Businesses Through Technology
//                 </motion.span>
//               </h1>

//               {/* Description */}
//               <p className="mx-auto mt-6 max-w-3xl px-1 py-2 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
//                 Zyntro Software Solutions empowers organizations with
//                 innovative digital solutions, cybersecurity, cloud services,
//                 enterprise mobility, and software development to accelerate
//                 business growth and digital transformation.
//               </p>

//               {/* CTA */}
//               <div className="mt-7 flex flex-wrap justify-center gap-5">
//                 <Link
//                   to="/contact"
//                   className="
//                     rounded-xl
//                     bg-gradient-to-r
//                     from-blue-600
//                     to-purple-600
//                     px-6
//                     py-3
//                     text-sm
//                     font-semibold
//                     text-white
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1
//                     hover:shadow-lg
//                     hover:shadow-blue-500/30
//                     sm:px-7
//                     sm:py-4
//                     sm:text-base
//                   "
//                 >
//                   Let's Work Together →
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             ABOUT US SECTION
//         ========================================================= */}
//         <section className="overflow-hidden px-4 py-16 sm:px-6">
//           <div className="mx-auto grid w-full max-w-7xl min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16">

//             {/* Left Content */}
//             <div className="min-w-0">

//               <h2 className="mt-5 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-5xl">

//                 {/* First Line */}
//                 <motion.span
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.9,
//                     ease: "easeInOut",
//                   }}
//                   className="
//                     block
//                     max-w-full
//                     overflow-hidden
//                     whitespace-normal
//                     sm:whitespace-nowrap
//                   "
//                 >
//                   Building Digital Solutions
//                 </motion.span>

//                 {/* Second Line */}
//                 <motion.span
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 2,
//                     delay: 0.8,
//                     ease: "easeInOut",
//                   }}
//                   className="
//                     block
//                     max-w-full
//                     overflow-hidden
//                     whitespace-normal
//                     sm:whitespace-nowrap
//                     bg-gradient-to-r
//                     from-blue-400
//                     to-purple-500
//                     bg-clip-text
//                     text-transparent
//                   "
//                 >
//                   That Drive Success
//                 </motion.span>
//               </h2>

//               {/* Description */}
//               <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
//                 Zyntro Software Solutions is a technology company focused on
//                 delivering innovative software solutions, cloud services,
//                 cybersecurity, enterprise mobility and digital transformation
//                 services.
//               </p>

//               <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
//                 We combine creativity, technology and expertise to help
//                 businesses achieve their goals and grow in the digital era.
//               </p>
//             </div>

//             {/* =====================================================
//                 STATS
//             ===================================================== */}
//             <div className="grid min-w-0 grid-cols-2 gap-4 sm:gap-6">

//               {/* Projects */}
//               <motion.div
//                 whileHover={{
//                   y: -8,
//                   rotateX: 3,
//                   rotateY: -3,
//                   scale: 1.02,
//                 }}
//                 transition={{ duration: 0.35 }}
//                 style={{
//                   transformStyle: "preserve-3d",
//                   perspective: 1000,
//                 }}
//                 className="
//                   group
//                   relative
//                   min-w-0
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/[0.05]
//                   p-4
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:border-blue-500/50
//                   hover:bg-white/[0.08]
//                   hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
//                   sm:p-7
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     -right-8
//                     -top-8
//                     h-24
//                     w-24
//                     rounded-full
//                     bg-blue-500/10
//                     blur-3xl
//                     transition-all
//                     duration-500
//                     group-hover:scale-125
//                   "
//                 />

//                 <h3
//                   style={{ transform: "translateZ(30px)" }}
//                   className="
//                     relative
//                     z-10
//                     text-2xl
//                     font-bold
//                     text-blue-400
//                     sm:text-4xl
//                   "
//                 >
//                   500+
//                 </h3>

//                 <p
//                   style={{ transform: "translateZ(20px)" }}
//                   className="
//                     relative
//                     z-10
//                     mt-2
//                     text-xs
//                     leading-5
//                     text-gray-400
//                     sm:text-base
//                   "
//                 >
//                   Projects Completed
//                 </p>
//               </motion.div>

//               {/* Satisfaction */}
//               <motion.div
//                 whileHover={{
//                   y: -8,
//                   rotateX: 3,
//                   rotateY: 3,
//                   scale: 1.02,
//                 }}
//                 transition={{ duration: 0.35 }}
//                 style={{
//                   transformStyle: "preserve-3d",
//                   perspective: 1000,
//                 }}
//                 className="
//                   group
//                   relative
//                   min-w-0
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/[0.05]
//                   p-4
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:border-purple-500/50
//                   hover:bg-white/[0.08]
//                   hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]
//                   sm:p-7
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     -left-8
//                     -top-8
//                     h-24
//                     w-24
//                     rounded-full
//                     bg-purple-500/10
//                     blur-3xl
//                     transition-all
//                     duration-500
//                     group-hover:scale-125
//                   "
//                 />

//                 <h3
//                   style={{ transform: "translateZ(30px)" }}
//                   className="
//                     relative
//                     z-10
//                     text-2xl
//                     font-bold
//                     text-purple-400
//                     sm:text-4xl
//                   "
//                 >
//                   98%
//                 </h3>

//                 <p
//                   style={{ transform: "translateZ(20px)" }}
//                   className="
//                     relative
//                     z-10
//                     mt-2
//                     text-xs
//                     leading-5
//                     text-gray-400
//                     sm:text-base
//                   "
//                 >
//                   Client Satisfaction
//                 </p>
//               </motion.div>

//               {/* Experience */}
//               <motion.div
//                 whileHover={{
//                   y: -8,
//                   rotateX: 3,
//                   rotateY: -3,
//                   scale: 1.02,
//                 }}
//                 transition={{ duration: 0.35 }}
//                 style={{
//                   transformStyle: "preserve-3d",
//                   perspective: 1000,
//                 }}
//                 className="
//                   group
//                   relative
//                   min-w-0
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/[0.05]
//                   p-4
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:border-blue-500/50
//                   hover:bg-white/[0.08]
//                   hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
//                   sm:p-7
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     -bottom-8
//                     -right-8
//                     h-24
//                     w-24
//                     rounded-full
//                     bg-blue-500/10
//                     blur-3xl
//                     transition-all
//                     duration-500
//                     group-hover:scale-125
//                   "
//                 />

//                 <h3
//                   style={{ transform: "translateZ(30px)" }}
//                   className="
//                     relative
//                     z-10
//                     text-2xl
//                     font-bold
//                     text-blue-400
//                     sm:text-4xl
//                   "
//                 >
//                   10+
//                 </h3>

//                 <p
//                   style={{ transform: "translateZ(20px)" }}
//                   className="
//                     relative
//                     z-10
//                     mt-2
//                     text-xs
//                     leading-5
//                     text-gray-400
//                     sm:text-base
//                   "
//                 >
//                   Years Experience
//                 </p>
//               </motion.div>

//               {/* Support */}
//               <motion.div
//                 whileHover={{
//                   y: -8,
//                   rotateX: 3,
//                   rotateY: 3,
//                   scale: 1.02,
//                 }}
//                 transition={{ duration: 0.35 }}
//                 style={{
//                   transformStyle: "preserve-3d",
//                   perspective: 1000,
//                 }}
//                 className="
//                   group
//                   relative
//                   min-w-0
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/[0.05]
//                   p-4
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:border-purple-500/50
//                   hover:bg-white/[0.08]
//                   hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]
//                   sm:p-7
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     -bottom-8
//                     -left-8
//                     h-24
//                     w-24
//                     rounded-full
//                     bg-purple-500/10
//                     blur-3xl
//                     transition-all
//                     duration-500
//                     group-hover:scale-125
//                   "
//                 />

//                 <h3
//                   style={{ transform: "translateZ(30px)" }}
//                   className="
//                     relative
//                     z-10
//                     text-2xl
//                     font-bold
//                     text-purple-400
//                     sm:text-4xl
//                   "
//                 >
//                   24/7
//                 </h3>

//                 <p
//                   style={{ transform: "translateZ(20px)" }}
//                   className="
//                     relative
//                     z-10
//                     mt-2
//                     text-xs
//                     leading-5
//                     text-gray-400
//                     sm:text-base
//                   "
//                 >
//                   Support Available
//                 </p>
//               </motion.div>

//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             WHY CHOOSE ZYNTRO
//         ========================================================= */}
//         <section className="overflow-hidden px-4 py-20 sm:px-6">
//           <div className="mx-auto w-full max-w-7xl">

//             {/* Heading */}
//             <div className="mb-12 text-center">
//               <h2 className="text-3xl font-bold leading-[1.2] text-white sm:text-4xl md:text-5xl">
//                 Why{" "}
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                   Choose Zyntro
//                 </span>
//               </h2>

//               <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
//                 We deliver innovative, secure and scalable solutions that help
//                 businesses grow.
//               </p>
//             </div>

//             {/* Cards */}
//             <div className="space-y-6">

//               {/* First Row - Left to Right */}
//               <motion.div
//                 initial={{ opacity: 0, x: -80 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{
//                   duration: 1.2,
//                   ease: [0.16, 1, 0.36, 1],
//                 }}
//                 className="
//                   grid
//                   grid-cols-2
//                   gap-4
//                   sm:gap-5
//                   lg:grid-cols-4
//                   lg:gap-6
//                 "
//               >
//                 {whyChooseData.slice(0, 4).map((item, index) => (
//                   <WhyChooseCard
//                     key={item.id || index}
//                     icon={item.icon}
//                     title={item.title}
//                     desc={item.desc}
//                   />
//                 ))}
//               </motion.div>

//               {/* Second Row - Right to Left */}
//               {whyChooseData.length > 4 && (
//                 <motion.div
//                   initial={{ opacity: 0, x: 80 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{
//                     duration: 1.2,
//                     ease: [0.16, 1, 0.36, 1],
//                   }}
//                   className="
//                     grid
//                     grid-cols-2
//                     gap-4
//                     sm:gap-5
//                     lg:grid-cols-4
//                     lg:gap-6
//                   "
//                 >
//                   {whyChooseData.slice(4, 8).map((item, index) => (
//                     <WhyChooseCard
//                       key={item.id || index + 4}
//                       icon={item.icon}
//                       title={item.title}
//                       desc={item.desc}
//                     />
//                   ))}
//                 </motion.div>
//               )}

//             </div>
//           </div>
//         </section>

//         {/* =========================================================
//             FAQ
//         ========================================================= */}
//         <FAQ />

//         {/* =========================================================
//             FOOTER
//         ========================================================= */}
//         <Footer />

//       </main>
//     </div>
//   );
// };

// export default About;
