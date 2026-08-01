
import iosManagementGif from "../../assets/services/IOS Management.gif";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

const features = [
  "Device Enrollment & Provisioning — Zero-touch setup with Apple Business Manager (ABM).",
  "Security & Compliance — Enforce passcodes, encryption, remote lock, and remote wipe.",
  "Application Management — Securely deploy, update, and configure enterprise applications.",
  "Remote Device Management — Configure, monitor, and troubleshoot devices remotely.",
  "User & Identity Management — Role-based access control with AD/LDAP integration.",
  "Content Management — Secure document distribution and sharing restrictions.",
  "Analytics & Reporting — Monitor compliance, device inventory, and application performance.",
];

const IOSManagement = () => {
  return (
    <main className="min-h-screen text-white">
      {/* Global Background */}
      <GlobalBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        {/* ================= HERO SECTION ================= */}
        <section className="overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
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
                <span className="text-white">iOS </span>

                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Management
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
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-blue-500/20
                    blur-[100px]
                    sm:h-[420px]
                    sm:w-[420px]
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
                  src={iosManagementGif}
                  alt="iOS Management"
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
                    max-w-[380px]
                    rounded-3xl
                    object-contain
                    sm:max-w-[420px]
                    lg:max-w-[450px]
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
                    iOS Management
                  </span>{" "}
                  services empower organizations to securely deploy, manage,
                  and protect Apple devices at scale. From automated enrollment
                  to application deployment and compliance enforcement, we
                  provide complete enterprise solutions that simplify device
                  management, strengthen security, and improve productivity.
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
          </div>
        </section>

        {/* ================= KEY FEATURES ================= */}
        <section className="pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl px-6">

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
          </div>
        </section>

        {/* ================= OTHER SERVICES ================= */}
        <OtherServices currentSlug="ios-management" />

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </main>
  );
};

export default IOSManagement;


// import iosManagementGif from "../../assets/services/IOS Management.gif";
// import { FaCheckCircle } from "react-icons/fa";

// import OtherServices from "../../components/Services/OtherServices";
// import ServiceCTA from "../../components/Services/ServiceCTA";
// import Footer from "../../components/Footer/Footer";
// import Navbar from "../../components/Navbar/Navbar";
// import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

// const features = [
//   "Device Enrollment & Provisioning — Zero-touch setup with Apple Business Manager (ABM).",
//   "Security & Compliance — Enforce passcodes, encryption, remote lock, and remote wipe.",
//   "Application Management — Securely deploy, update, and configure enterprise applications.",
//   "Remote Device Management — Configure, monitor, and troubleshoot devices remotely.",
//   "User & Identity Management — Role-based access control with AD/LDAP integration.",
//   "Content Management — Secure document distribution and sharing restrictions.",
//   "Analytics & Reporting — Monitor compliance, device inventory, and application performance.",
// ];

// const IOSManagement = () => {
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
//             iOS{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Management
//             </span>
//           </h1>

//           {/* Hero Content */}
//           <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

//             {/* LEFT IMAGE */}
//             <div className="relative flex justify-center lg:justify-start">

//               {/* Blue Glow */}
//               <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[100px] sm:h-[420px] sm:w-[420px]" />

//               {/* Purple Glow */}
//               <div className="absolute left-10 top-10 h-[220px] w-[220px] rounded-full bg-purple-500/15 blur-[80px] sm:h-[280px] sm:w-[280px]" />

//               <img
//                 src={iosManagementGif}
//                 alt="iOS Management"
//               className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px] rounded-3xl object-contain"
            
//               />
//             </div>

//             {/* RIGHT CONTENT + CTA */}
//             <div className="text-center lg:text-left">

//               <p className="text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
//                 Our{" "}
//                 <span className="font-semibold text-white">
//                   iOS Management
//                 </span>{" "}
//                 services empower organizations to securely deploy, manage, and
//                 protect Apple devices at scale. From automated enrollment to
//                 application deployment and compliance enforcement, we provide
//                 complete enterprise solutions that simplify device management,
//                 strengthen security, and improve productivity.
//               </p>

//               {/* CTA ONLY UNDER CONTENT */}
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
//       <OtherServices currentSlug="iso-management" />

//       {/* ================= FOOTER ================= */}
//       <Footer />
//    </div>
//     </main>
//   );
// };

// export default IOSManagement;
