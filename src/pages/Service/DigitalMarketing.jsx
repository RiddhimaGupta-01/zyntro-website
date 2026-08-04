
import digitalMarketingVideo from "../../assets/services/Digital Marketing.webm";

import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const features = [
  "Search Engine Optimization (SEO) — Improve rankings through keyword research, on-page optimization, technical SEO, and quality link building.",
  "Pay-Per-Click (PPC) Advertising — Targeted ad campaigns with audience segmentation, budget management, and performance optimization.",
  "Social Media Marketing — Build brand awareness through engaging content, community management, and paid social campaigns.",
  "Content Marketing — Create high-quality blogs, videos, infographics, and content strategies that drive engagement.",
  "Email Marketing — Personalized email campaigns with automation, audience segmentation, and performance tracking.",
  "Affiliate & Influencer Marketing — Expand brand reach through trusted partnerships and influencer collaborations.",
  "Online Reputation Management & CRO — Enhance brand credibility while optimizing websites for higher conversions.",
  "Mobile & Video Marketing — Reach customers with mobile-first campaigns and engaging video marketing strategies.",
];

const DigitalMarketing = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-white">
      <div className="relative z-10 overflow-x-hidden">
        <Navbar />

        {/* ================= HERO ================= */}
        <section className="overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* ================= HEADING ================= */}
            <div className="mb-12 flex justify-center sm:mb-14 lg:mb-16">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.8,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  w-full
                  max-w-4xl
                  px-2
                  text-center
                  text-3xl
                  font-bold
                  leading-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                <span className="text-white">
                  Digital{" "}
                </span>

                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Marketing
                </span>
              </motion.h1>
            </div>

            {/* ================= IMAGE + CONTENT ================= */}
            <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">

              {/* ================= IMAGE ================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -80,
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
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  flex
                  min-w-0
                  justify-center
                  overflow-hidden
                  lg:justify-start
                "
              >

                {/* BLUE GLOW */}
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                    opacity: [0.25, 0.4, 0.25],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    h-[280px]
                    w-[280px]
                    rounded-full
                    bg-blue-500/20
                    blur-[100px]
                    sm:h-[400px]
                    sm:w-[400px]
                  "
                />

                {/* PURPLE GLOW */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-10
                    top-10
                    h-[200px]
                    w-[200px]
                    rounded-full
                    bg-purple-500/10
                    blur-[80px]
                    sm:h-[260px]
                    sm:w-[260px]
                  "
                />

                {/* VIDEO */}
                <motion.video
                  src={digitalMarketingVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    z-10
                    h-auto
                    w-[260px]
                    max-w-full
                    object-contain
                    sm:w-80
                    md:w-96
                    lg:w-full
                    lg:max-w-xl
                  "
                />
              </motion.div>

              {/* ================= CONTENT ================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
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
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  min-w-0
                  text-center
                  lg:text-left
                "
              >
                <p className="text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
                  Our{" "}
                  <span className="font-semibold text-white">
                    Digital Marketing
                  </span>{" "}
                  services help businesses establish a strong online presence,
                  attract the right audience, and generate measurable growth.
                  From SEO and paid advertising to social media, content
                  marketing, and email campaigns, we create data-driven
                  strategies that maximize visibility, engagement, and
                  conversions.
                </p>

                {/* CTA */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35,
                  }}
                  className="mt-8 flex justify-center lg:justify-start"
                >
                  <ServiceCTA />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= KEY FEATURES ================= */}
        <section className="overflow-hidden pb-16 lg:pb-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
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
              }}
              className="
                mb-8
                text-3xl
                font-bold
                text-white
                sm:text-4xl
              "
            >
              Key Features
            </motion.h2>

            {/* FEATURE CARDS */}
            <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    flex
                    min-w-0
                    items-start
                    gap-4
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-5
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-blue-500/40
                    hover:bg-white/[0.06]
                    hover:shadow-lg
                    hover:shadow-blue-500/10
                  "
                >
                  <FaCheckCircle
                    className="
                      mt-1
                      flex-shrink-0
                      text-lg
                      text-blue-500
                    "
                  />

                  <span className="min-w-0 break-words text-sm leading-7 text-gray-300 sm:text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OTHER SERVICES ================= */}
        <OtherServices currentSlug="digital-marketing" />

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </main>
  );
};

export default DigitalMarketing;


// import digitalMarketingGif from "../../assets/services/Digital Marketing.gif";
// import { FaCheckCircle } from "react-icons/fa";

// import OtherServices from "../../components/Services/OtherServices";
// import ServiceCTA from "../../components/Services/ServiceCTA";
// import Footer from "../../components/Footer/Footer";
// import Navbar from "../../components/Navbar/Navbar";
// import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

// const features = [
//   "Search Engine Optimization (SEO) — Improve rankings through keyword research, on-page optimization, technical SEO, and quality link building.",
//   "Pay-Per-Click (PPC) Advertising — Targeted ad campaigns with audience segmentation, budget management, and performance optimization.",
//   "Social Media Marketing — Build brand awareness through engaging content, community management, and paid social campaigns.",
//   "Content Marketing — Create high-quality blogs, videos, infographics, and content strategies that drive engagement.",
//   "Email Marketing — Personalized email campaigns with automation, audience segmentation, and performance tracking.",
//   "Affiliate & Influencer Marketing — Expand brand reach through trusted partnerships and influencer collaborations.",
//   "Online Reputation Management & CRO — Enhance brand credibility while optimizing websites for higher conversions.",
//   "Mobile & Video Marketing — Reach customers with mobile-first campaigns and engaging video marketing strategies.",
// ];

// const DigitalMarketing = () => {
//   return (
//     <main className="min-h-screen  text-white">
//          {/* Global Background */}
//       <GlobalBackground />

//       {/* Main Content */}
//       <div className="relative z-10">
//       <Navbar />

//       {/* ================= HERO SECTION ================= */}
//       <section className="overflow-hidden pt-32 pb-12 lg:pt-36 lg:pb-14">
//         <div className="mx-auto max-w-7xl px-6">

//           {/* Main Heading */}
//           <h1 className="mb-14 text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
//             Digital{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Marketing
//             </span>
//           </h1>

//           {/* Image + Content */}
//           <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

//             {/* LEFT IMAGE */}
//             <div className="relative flex justify-center lg:justify-start">

//               {/* Blue Glow */}
//               <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[100px] sm:h-[420px] sm:w-[420px]" />

//               {/* Purple Glow */}
//               <div className="absolute left-10 top-10 h-[220px] w-[220px] rounded-full bg-purple-500/15 blur-[80px] sm:h-[280px] sm:w-[280px]" />

//               <img
//                 src={digitalMarketingGif}
//                 alt="Digital Marketing"
//                 className="relative z-10 w-64 sm:w-80 md:w-96 lg:w-full max-w-xl  object-contain"
//               />
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="text-center lg:text-left">

//               <p className="text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
//                 Our{" "}
//                 <span className="font-semibold text-white">
//                   Digital Marketing
//                 </span>{" "}
//                 services help businesses establish a strong online presence,
//                 attract the right audience, and generate measurable growth.
//                 From SEO and paid advertising to social media, content
//                 marketing, and email campaigns, we create data-driven
//                 strategies that maximize visibility, engagement, and
//                 conversions.
//               </p>

//               {/* CTA UNDER CONTENT */}
//               <div className="mt-8">
//                 <ServiceCTA />
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= KEY FEATURES ================= */}
//       <section className="pb-16 lg:pb-20">
//         <div className="mx-auto max-w-7xl px-6">

//           <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
//             Key Features
//           </h2>

//           <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="
//                   flex items-start gap-4
//                   rounded-xl
//                   border border-white/10
//                   bg-[#0B1220]
//                   p-5
//                   transition-all duration-300
//                   hover:-translate-y-1
//                   hover:border-blue-500/40
//                   hover:shadow-lg
//                   hover:shadow-blue-500/10
//                 "
//               >
//                 <FaCheckCircle className="mt-1 flex-shrink-0 text-lg text-blue-500" />

//                 <span className="text-sm leading-7 text-gray-300 sm:text-base">
//                   {feature}
//                 </span>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ================= OTHER SERVICES ================= */}
//       <OtherServices currentSlug="digital-marketing" />

//       {/* ================= FOOTER ================= */}
//       <Footer />
//    </div>
//     </main>
//   );
// };

// export default DigitalMarketing;
