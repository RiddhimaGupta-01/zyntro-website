
import cloudComputingGif from "../../assets/services/Cloud Computing.gif";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

const features = [
  "Infrastructure as a Service (IaaS) — Scalable virtual servers, storage, and networking to support your business operations.",
  "Platform as a Service (PaaS) — Accelerate application development, testing, and deployment with cloud-based development platforms.",
  "Software as a Service (SaaS) — Access cloud-hosted business applications such as Microsoft 365, Google Workspace, and enterprise solutions.",
  "Cloud Security — Protect cloud environments with encryption, identity management, continuous monitoring, and compliance controls.",
  "Disaster Recovery & Backup — Ensure business continuity through automated backups, rapid disaster recovery, and data protection.",
  "Cloud Migration — Seamlessly migrate applications, databases, and workloads with minimal downtime and maximum reliability.",
  "24/7 Monitoring & Support — Continuous cloud monitoring, performance optimization, and expert technical assistance around the clock.",
  "Hybrid & Multi-Cloud Solutions — Integrate public, private, and hybrid cloud environments for greater flexibility and scalability.",
];

const CloudComputing = () => {
  return (
    <main className="min-h-screen text-white">
      {/* Global Background */}
      <GlobalBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        {/* ================= HERO SECTION ================= */}
        <section className="overflow-hidden pb-16 pt-28 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-7xl px-6">

            {/* ================= TYPEWRITER HEADING ================= */}
            <div className="mb-14 flex justify-center lg:mb-16">
              <motion.h1
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="
                  overflow-hidden
                  whitespace-nowrap
                  text-center
                  text-4xl
                  font-bold
                  leading-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                <span className="text-white">Cloud </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Computing
                </span>
              </motion.h1>
            </div>

            {/* ================= IMAGE + CONTENT ================= */}
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

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
                className="relative flex justify-center lg:justify-start"
              >
                {/* Blue Glow */}
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
                    absolute
                    h-[280px]
                    w-[280px]
                    rounded-full
                    bg-blue-500/20
                    blur-[100px]
                    sm:h-[380px]
                    sm:w-[380px]
                  "
                />

                {/* Purple Glow */}
                <div
                  className="
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

                <motion.img
                  src={cloudComputingGif}
                  alt="Cloud Computing"
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
                    w-full
                    max-w-md
                    rounded-3xl
                    object-contain
                    sm:max-w-lg
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
                className="text-center lg:text-left"
              >
                <p className="text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
                  Our{" "}
                  <span className="font-semibold text-white">
                    Cloud Computing
                  </span>{" "}
                  services empower businesses to modernize their IT
                  infrastructure with secure, scalable, and cost-effective
                  cloud solutions. We help organizations migrate, manage, and
                  optimize cloud environments while ensuring high availability,
                  enhanced security, and improved operational efficiency.
                </p>

                {/* CTA */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5,
                  }}
                  className="mt-8 flex justify-center lg:justify-start"
                >
                  <ServiceCTA />
                </motion.div>
              </motion.div>
            </div>

            {/* ================= KEY FEATURES ================= */}
            <section className="mt-20 pb-4 lg:mt-24">

              {/* Section Heading */}
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
                className="mb-8 text-3xl font-bold text-white sm:text-4xl"
              >
                Key Features
              </motion.h2>

              {/* Feature Cards */}
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
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
                      items-start
                      gap-4
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
                    <FaCheckCircle className="mt-1 flex-shrink-0 text-lg text-blue-500" />

                    <span className="text-sm leading-7 text-gray-300 sm:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* ================= OTHER SERVICES ================= */}
        <OtherServices currentSlug="cloud-computing" />

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </main>
  );
};

export default CloudComputing;



// import cloudComputingGif from "../../assets/services/Cloud Computing.gif";
// import { FaCheckCircle } from "react-icons/fa";

// import OtherServices from "../../components/Services/OtherServices";
// import ServiceCTA from "../../components/Services/ServiceCTA";
// import Footer from "../../components/Footer/Footer";
// import Navbar from "../../components/Navbar/Navbar";
// import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

// const features = [
//   "Infrastructure as a Service (IaaS) — Scalable virtual servers, storage, and networking to support your business operations.",
//   "Platform as a Service (PaaS) — Accelerate application development, testing, and deployment with cloud-based development platforms.",
//   "Software as a Service (SaaS) — Access cloud-hosted business applications such as Microsoft 365, Google Workspace, and enterprise solutions.",
//   "Cloud Security — Protect cloud environments with encryption, identity management, continuous monitoring, and compliance controls.",
//   "Disaster Recovery & Backup — Ensure business continuity through automated backups, rapid disaster recovery, and data protection.",
//   "Cloud Migration — Seamlessly migrate applications, databases, and workloads with minimal downtime and maximum reliability.",
//   "24/7 Monitoring & Support — Continuous cloud monitoring, performance optimization, and expert technical assistance around the clock.",
//   "Hybrid & Multi-Cloud Solutions — Integrate public, private, and hybrid cloud environments for greater flexibility and scalability.",
// ];

// const CloudComputing = () => {
//   return (
//     <main className="min-h-screen  text-white">
//          {/* Global Background */}
//       <GlobalBackground />

//       {/* Main Content */}
//       <div className="relative z-10">
//       <Navbar />

//       {/* ================= HERO SECTION ================= */}
//       <section className="pt-32 lg:pt-36 pb-16 lg:pb-20 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">

//           {/* Main Heading */}
//           <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14">
//             Cloud{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Computing
//             </span>
//           </h1>

//           {/* ================= IMAGE + CONTENT ================= */}
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//             {/* LEFT IMAGE */}
//             <div className="relative flex justify-center lg:justify-start">
              
//               {/* Blue Glow */}
//               <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-blue-500/20 blur-[100px]" />

//               {/* Purple Glow */}
//               <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 left-10" />

//               <img
//                 src={cloudComputingGif}
//                 alt="Cloud Computing"
//                 className="relative z-10 w-full max-w-md sm:max-w-lg object-contain rounded-3xl"
//               />
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="text-center lg:text-left">

//               <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-8">
//                 Our{" "}
//                 <span className="font-semibold text-white">
//                   Cloud Computing
//                 </span>{" "}
//                 services empower businesses to modernize their IT
//                 infrastructure with secure, scalable, and cost-effective cloud
//                 solutions. We help organizations migrate, manage, and optimize
//                 cloud environments while ensuring high availability, enhanced
//                 security, and improved operational efficiency.
//               </p>

//               {/* CTA UNDER CONTENT */}
//               <div className="mt-8 flex justify-center lg:justify-start">
//                 <ServiceCTA />
//               </div>

//             </div>
//           </div>

//           {/* ================= KEY FEATURES ================= */}
//           <section className="mt-20 lg:mt-24 pb-4">

//             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
//               Key Features
//             </h2>

//             <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="
//                     flex
//                     items-start
//                     gap-4
//                     rounded-xl
//                     border
//                     border-white/10
//                     bg-[#0B1220]
//                     p-5
//                     transition-all
//                     duration-300
//                     hover:border-blue-500/40
//                     hover:-translate-y-1
//                     hover:shadow-lg
//                     hover:shadow-blue-500/10
//                   "
//                 >
//                   <FaCheckCircle className="text-blue-500 text-lg mt-1 flex-shrink-0" />

//                   <span className="text-gray-300 text-sm sm:text-base leading-7">
//                     {feature}
//                   </span>
//                 </div>
//               ))}
//             </div>

//           </section>

//         </div>
//       </section>

//       {/* ================= OTHER SERVICES ================= */}
//       <OtherServices currentSlug="cloud-computing" />

//       {/* ================= FOOTER ================= */}
//       <Footer />
//    </div>
//     </main>
//   );
// };

// export default CloudComputing;




