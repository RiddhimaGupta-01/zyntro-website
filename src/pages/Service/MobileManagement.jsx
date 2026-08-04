
import mobileManagementWebm from "../../assets/services/MobileManagement.webm";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const features = [
  "Device Configuration — Configure devices with apps, Wi-Fi, email, and security policies automatically.",
  "Security & Compliance — Enforce encryption, passcodes, remote lock, and remote wipe.",
  "Application Management — Install, update, and manage enterprise applications remotely.",
  "Device Monitoring — Monitor device health, usage, compliance, and security threats.",
  "Network Management — Secure access to enterprise Wi-Fi, VPN, and corporate resources.",
  "Remote Management — Troubleshoot devices and push updates from a centralized dashboard.",
  "Inventory & Reporting — Track devices and generate detailed reports.",
];

const MobileManagement = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden text-white">
      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar />

        {/* ================= HERO SECTION ================= */}
        <section className="w-full overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* ================= HEADING ================= */}
            <div className="mb-14 flex w-full justify-center px-2 lg:mb-16">
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
                  max-w-full
                  text-center
                  text-4xl
                  font-bold
                  leading-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                <span className="text-white">Mobile </span>

                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Management
                </span>
              </motion.h1>
            </div>

            {/* ================= IMAGE + CONTENT ================= */}
            <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">

              {/* ================= LEFT VIDEO ================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -120,
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
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  flex
                  min-w-0
                  justify-center
                  overflow-visible
                  lg:justify-start
                "
              >
                {/* ================= BLUE GLOW ================= */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.3, 0.45, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-blue-500/20
                    blur-[100px]
                    sm:h-[420px]
                    sm:w-[420px]
                  "
                />

                {/* ================= PURPLE GLOW ================= */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-10
                    top-10
                    h-[220px]
                    w-[220px]
                    rounded-full
                    bg-purple-500/15
                    blur-[80px]
                    sm:h-[280px]
                    sm:w-[280px]
                  "
                />

                {/* ================= VIDEO ================= */}
                <motion.video
                  src={mobileManagementWebm}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Mobile Management"
                  initial={{
                    scale: 0.9,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.1,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    z-10
                    block
                    h-auto
                    w-64
                    max-w-full
                    object-contain
                    sm:w-80
                    md:w-96
                    lg:w-full
                    lg:max-w-xl
                  "
                />
              </motion.div>

              {/* ================= RIGHT CONTENT ================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 120,
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
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  min-w-0
                  text-center
                  lg:text-left
                "
              >
                {/* ================= DESCRIPTION ================= */}
                <p className="text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
                  Mobile Management enables organizations to securely manage,
                  monitor, and protect smartphones, tablets, and other mobile
                  devices from a centralized platform. At Zyntro, we provide
                  enterprise-grade Mobile Device Management (MDM) solutions
                  that simplify administration, strengthen security, and
                  improve productivity.
                </p>

                {/* ================= CTA ================= */}
                <motion.div
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
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5,
                  }}
                  className="
                    mt-8
                    flex
                    justify-center
                    lg:justify-start
                  "
                >
                  <ServiceCTA />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= KEY FEATURES ================= */}
        <section className="w-full overflow-hidden pb-16 lg:pb-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* ================= SECTION HEADING ================= */}
            <motion.h2
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mb-8
                text-center
                text-3xl
                font-bold
                text-white
                sm:text-4xl
                lg:text-left
              "
            >
              Key Features
            </motion.h2>

            {/* ================= FEATURE CARDS ================= */}
            <div className="grid w-full min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
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
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-[#0B1220]
                    p-5
                    transition-colors
                    duration-300
                    hover:border-blue-500/40
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
        <OtherServices currentSlug="mobile-management" />

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </main>
  );
};

export default MobileManagement;



// import mobileManagementGif from "../../assets/services/Mobile Management.gif";
// import { FaCheckCircle } from "react-icons/fa";
// import OtherServices from "../../components/Services/OtherServices";
// import ServiceCTA from "../../components/Services/ServiceCTA";
// import Footer from "../../components/Footer/Footer";
// import Navbar from "../../components/Navbar/Navbar";
// import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

// const features = [
//   "Device Configuration — Configure devices with apps, Wi-Fi, email, and security policies automatically.",
//   "Security & Compliance — Enforce encryption, passcodes, remote lock, and remote wipe.",
//   "Application Management — Install, update, and manage enterprise applications remotely.",
//   "Device Monitoring — Monitor device health, usage, compliance, and security threats.",
//   "Network Management — Secure access to enterprise Wi-Fi, VPN, and corporate resources.",
//   "Remote Management — Troubleshoot devices and push updates from a centralized dashboard.",
//   "Inventory & Reporting — Track devices and generate detailed reports.",
// ];

// const MobileManagement = () => {
//   return (
//     <main className="min-h-screen  text-white">
//          {/* Global Background */}
//             <GlobalBackground />
      
//             {/* Main Content */}
//             <div className="relative z-10">
//       <Navbar />

//       {/* ================= HERO SECTION ================= */}
//       <section className="overflow-hidden pt-32 pb-12 lg:pt-36 lg:pb-14">
//         <div className="mx-auto max-w-7xl px-6">

//           {/* Main Heading */}
//           <h1 className="mb-14 text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
//             Mobile{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Management
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
//                 src={mobileManagementGif}
//                 alt="Mobile Management"
//                 className="relative z-10 w-64 sm:w-80 md:w-96 lg:w-full max-w-xl  object-contain"
//                 // className="relative z-10 h-[400px] w-full max-w-[420px] rounded-3xl object-contain sm:h-[340px]"
//               />
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="text-center lg:text-left">

//               <p className="text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
//                 Mobile Management enables organizations to securely manage,
//                 monitor, and protect smartphones, tablets, and other mobile
//                 devices from a centralized platform. At Zyntro, we provide
//                 enterprise-grade Mobile Device Management (MDM) solutions that
//                 simplify administration, strengthen security, and improve
//                 productivity.
//               </p>

//               {/* CTA */}
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
//       <OtherServices currentSlug="mobile-management" />

//       {/* ================= FOOTER ================= */}
//       <Footer />
//    </div>
//     </main>
//   );
// };

// export default MobileManagement;



