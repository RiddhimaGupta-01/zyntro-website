
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import itSupportWebm from "../../assets/services/ITSupport.webm";

import Navbar from "../../components/Navbar/Navbar";
import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";

const features = [
  {
    title: "Help Desk Support",
    desc: "Fast resolution of user issues via phone, email, and remote support.",
  },
  {
    title: "Remote & On-Site Support",
    desc: "Technical assistance delivered remotely or at your business location.",
  },
  {
    title: "Network & Infrastructure",
    desc: "Network monitoring, setup, maintenance, and troubleshooting.",
  },
  {
    title: "Hardware & Software Support",
    desc: "Installation, upgrades, maintenance, and troubleshooting of IT assets.",
  },
  {
    title: "Cybersecurity",
    desc: "Protection against malware, ransomware, phishing, and cyber threats.",
  },
  {
    title: "Backup & Disaster Recovery",
    desc: "Reliable backup solutions and business continuity planning.",
  },
  {
    title: "Cloud Support",
    desc: "Deployment, management, and optimization of cloud environments.",
  },
  {
    title: "24/7 System Monitoring",
    desc: "Proactive monitoring to detect and resolve issues before they impact operations.",
  },
];

const ITSupport = () => {
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
                <span className="text-white">IT </span>

                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Support
                </span>
              </motion.h1>
            </div>

            {/* ================= IMAGE + CONTENT ================= */}
            <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">

              {/* ================= LEFT IMAGE ================= */}
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

                {/* ================= VIDEO CONTAINER ================= */}
                <motion.div
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
                    w-full
                    max-w-[450px]
                    rounded-3xl
                    bg-white
                    p-5
                    shadow-[0_0_40px_rgba(37,99,235,0.25)]
                    sm:p-8
                  "
                >
                  <motion.video
                    src={itSupportWebm}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label="IT Support"
                    className="
                      relative
                      z-10
                      block
                      h-[300px]
                      w-full
                      max-w-full
                      rounded-3xl
                      object-contain
                      sm:h-[380px]
                      lg:h-[400px]
                    "
                  />
                </motion.div>
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
                {/* ================= TAGLINE ================= */}
                <motion.p
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
                    delay: 0.3,
                  }}
                  className="
                    text-base
                    font-medium
                    leading-8
                    text-cyan-200
                    sm:text-lg
                  "
                >
                  Reliable 24/7 Technical Support for Modern Businesses
                </motion.p>

                {/* ================= DESCRIPTION ================= */}
                <motion.p
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
                    duration: 0.7,
                    delay: 0.4,
                  }}
                  className="
                    mt-5
                    text-sm
                    leading-8
                    text-gray-300
                    sm:text-base
                    lg:text-lg
                  "
                >
                  Our IT Support services ensure your organization's technology
                  runs smoothly and securely. From troubleshooting and
                  monitoring to cloud management and cybersecurity, we provide
                  reliable IT solutions tailored to your business needs. Our
                  experienced team helps minimize downtime, improve
                  productivity, and keep your systems operating at peak
                  performance.
                </motion.p>

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
                    delay: 0.55,
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

        {/* ================= IT SUPPORT SERVICES ================= */}
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
              Our IT Support Services
            </motion.h2>

            {/* ================= FEATURE CARDS ================= */}
            <div className="grid w-full min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
              {features.map((item, index) => (
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
                    amount: 0.2,
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
                  {/* ================= ICON ================= */}
                  <FaCheckCircle
                    className="
                      mt-1
                      flex-shrink-0
                      text-lg
                      text-cyan-400
                    "
                  />

                  {/* ================= CARD CONTENT ================= */}
                  <div className="min-w-0">
                    <h3 className="break-words font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 break-words text-sm leading-7 text-gray-400 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA / OTHER SERVICES ================= */}
        <OtherServices currentSlug="it-support" />

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </main>
  );
};

export default ITSupport;




// import { FaCheckCircle } from "react-icons/fa";
// import itSupportGif from "../../assets/services/IT Support.gif";
// import Navbar from "../../components/Navbar/Navbar";
// import OtherServices from "../../components/Services/OtherServices";
// import ServiceCTA from "../../components/Services/ServiceCTA";
// import Footer from "../../components/Footer/Footer";
// import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

// const features = [
//   {
//     title: "Help Desk Support",
//     desc: "Fast resolution of user issues via phone, email, and remote support.",
//   },
//   {
//     title: "Remote & On-Site Support",
//     desc: "Technical assistance delivered remotely or at your business location.",
//   },
//   {
//     title: "Network & Infrastructure",
//     desc: "Network monitoring, setup, maintenance, and troubleshooting.",
//   },
//   {
//     title: "Hardware & Software Support",
//     desc: "Installation, upgrades, maintenance, and troubleshooting of IT assets.",
//   },
//   {
//     title: "Cybersecurity",
//     desc: "Protection against malware, ransomware, phishing, and cyber threats.",
//   },
//   {
//     title: "Backup & Disaster Recovery",
//     desc: "Reliable backup solutions and business continuity planning.",
//   },
//   {
//     title: "Cloud Support",
//     desc: "Deployment, management, and optimization of cloud environments.",
//   },
//   {
//     title: "24/7 System Monitoring",
//     desc: "Proactive monitoring to detect and resolve issues before they impact operations.",
//   },
// ];

// const ITSupport = () => {
//   return (
//     <main className="min-h-screen  text-white">
//          {/* Global Background */}
//       <GlobalBackground />

//       {/* Main Content */}
//       <div className="relative z-10">
//       <Navbar />

//       {/* ================= HERO SECTION ================= */}
//       <section className="overflow-hidden bg-[#072339] pt-32 pb-12 lg:pt-36 lg:pb-14">
//         <div className="mx-auto max-w-7xl px-6">

//           {/* Main Heading */}
//           <h1 className="mb-14 text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
//             IT{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Support
//             </span>
//           </h1>

//           {/* Image + Content */}
//           <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

//             {/* LEFT IMAGE */}
//             <div className="relative flex justify-center lg:justify-start">

//               <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[100px] sm:h-[420px] sm:w-[420px]" />

//               <div className="absolute left-10 top-10 h-[220px] w-[220px] rounded-full bg-purple-500/15 blur-[80px] sm:h-[280px] sm:w-[280px]" />

//               <div className="relative z-10 rounded-3xl bg-white p-6 shadow-[0_0_40px_rgba(37,99,235,0.25)] sm:p-8">
//                 <img
//                   src={itSupportGif}
//                   alt="IT Support"
                  
//           className="relative z-10 w-full max-w-[300px] h-[400px] sm:max-w-[420px] lg:max-w-[450px] rounded-3xl object-contain"
                  
//                 />
//               </div>
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="text-center lg:text-left">

//               <p className="text-base font-medium leading-8 text-cyan-200 sm:text-lg">
//                 Reliable 24/7 Technical Support for Modern Businesses
//               </p>

//               <p className="mt-5 text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
//                 Our IT Support services ensure your organization's technology
//                 runs smoothly and securely. From troubleshooting and monitoring
//                 to cloud management and cybersecurity, we provide reliable IT
//                 solutions tailored to your business needs. Our experienced team
//                 helps minimize downtime, improve productivity, and keep your
//                 systems operating at peak performance.
//               </p>

//               {/* CTA UNDER CONTENT */}
//               <div className="mt-8">
//                 <ServiceCTA />
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= IT SUPPORT SERVICES ================= */}
//       <section className="bg-[#112737] py-14 lg:py-16">
//         <div className="mx-auto max-w-7xl px-6">

//           <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
//             Our IT Support Services
//           </h2>

//           <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
//             {features.map((item, index) => (
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
//                 <FaCheckCircle className="mt-1 flex-shrink-0 text-lg text-cyan-400" />

//                 <div>
//                   <h3 className="font-semibold text-white">
//                     {item.title}
//                   </h3>

//                   <p className="mt-1 text-sm leading-7 text-gray-400 sm:text-base">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//        </section>

//       {/* ================= OTHER SERVICES ================= */}
//       <OtherServices currentSlug="it-support" />

//       {/* ================= FOOTER ================= */}
//       <Footer />
//    </div>
//     </main>
//   );
// };

// export default ITSupport;

