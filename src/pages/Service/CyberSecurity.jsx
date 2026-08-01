
import cyberSecurityGif from "../../assets/services/Cyber Security.gif";
import { motion } from "framer-motion";

import Navbar from "../../components/Navbar/Navbar";
import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

const features = [
  "Network Security — firewalls, IDS/IPS, and secure network design.",
  "Application Security — secure coding, vulnerability testing.",
  "Endpoint Protection — antivirus, encryption, mobile security.",
  "Cloud Security — securing cloud environments and access.",
  "Identity & Access Management — MFA, RBAC, SSO integration.",
  "Incident Response — proactive monitoring, detection, and recovery.",
  "Disaster Recovery — backup solutions and business continuity.",
  "Security Awareness Training — educating staff to reduce risks.",
];

const CyberSecurity = () => {
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
                <span className="text-white">Cyber </span>

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Security
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
                className="flex justify-center lg:justify-start"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    rounded-3xl
                    bg-white
                    p-6
                    shadow-[0_0_40px_rgba(37,99,235,0.25)]
                    sm:p-8
                  "
                >
                  <img
                    src={cyberSecurityGif}
                    alt="Cyber Security"
                    className="
                      relative
                      z-10
                      h-[350px]
                      w-full
                      max-w-[280px]
                      rounded-3xl
                      object-contain
                      sm:h-[400px]
                      sm:max-w-[420px]
                      lg:max-w-[450px]
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
                className="text-center lg:text-left"
              >
                <p className="text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
                  Cybersecurity is the practice of protecting systems,
                  networks, and programs from digital attacks. At Zyntro, we
                  offer comprehensive cybersecurity services to safeguard your
                  organization against evolving threats and ensure compliance
                  with global standards.
                </p>

                {/* Services Heading */}
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35,
                  }}
                  className="
                    mb-5
                    mt-8
                    text-2xl
                    font-semibold
                    text-cyan-400
                  "
                >
                  Our Cybersecurity Services
                </motion.h2>

                {/* Services List */}
                <ul className="space-y-3">
                  {features.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.45 + index * 0.08,
                        ease: "easeOut",
                      }}
                      className="
                        flex
                        items-start
                        justify-center
                        gap-3
                        text-left
                        text-gray-200
                        lg:justify-start
                      "
                    >
                      <span className="mt-1 text-cyan-400">
                        •
                      </span>

                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <ServiceCTA />
        </motion.div>

        {/* ================= OTHER SERVICES ================= */}
        <OtherServices currentSlug="cyber-security" />

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </main>
  );
};

export default CyberSecurity;


// import cyberSecurityGif from "../../assets/services/Cyber Security.gif";
// import Navbar from "../../components/Navbar/Navbar";
// import OtherServices from "../../components/Services/OtherServices";
// import ServiceCTA from "../../components/Services/ServiceCTA";
// import Footer from "../../components/Footer/Footer";
// import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

// const features = [
//   "Network Security — firewalls, IDS/IPS, and secure network design.",
//   "Application Security — secure coding, vulnerability testing.",
//   "Endpoint Protection — antivirus, encryption, mobile security.",
//   "Cloud Security — securing cloud environments and access.",
//   "Identity & Access Management — MFA, RBAC, SSO integration.",
//   "Incident Response — proactive monitoring, detection, and recovery.",
//   "Disaster Recovery — backup solutions and business continuity.",
//   "Security Awareness Training — educating staff to reduce risks.",
// ];

// const CyberSecurity = () => {
//   return (
//     <main className=" text-white ">
//          {/* Global Background */}
//       <GlobalBackground />

//       {/* Main Content */}
//       <div className="relative z-10">
//       <Navbar />

//       {/* Cyber Security Hero */}

//      <section className="bg-[#072339] pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-6">

//     {/* Main Heading */}
//     <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14">
//       <span className="text-white">Cyber </span>
//       <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//         Security
//       </span>
//     </h1>

//     {/* Image + Content */}
//     <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//       {/* LEFT IMAGE */}
//       <div className="flex justify-center">
//         <div
//           className="
//             bg-white
//             rounded-3xl
//             p-6 sm:p-8
//             shadow-[0_0_40px_rgba(37,99,235,0.25)]
//           "
//         >
//           <img
//             src={cyberSecurityGif}
//             alt="Cyber Security"
//           className="relative z-10 w-full max-w-[300px] h-[400px] sm:max-w-[420px] lg:max-w-[450px] rounded-3xl object-contain"
//           />
//         </div>
//       </div>

//       {/* RIGHT CONTENT */}
//       <div className="text-center lg:text-left">

//         <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-8">
//           Cybersecurity is the practice of protecting systems, networks,
//           and programs from digital attacks. At Zyntro, we offer
//           comprehensive cybersecurity services to safeguard your
//           organization against evolving threats and ensure compliance
//           with global standards.
//         </p>

//         <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-5">
//           Our Cybersecurity Services
//         </h2>

//         <ul className="space-y-3">
//           {features.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-start justify-center lg:justify-start gap-3 text-gray-200 text-left"
//             >
//               <span className="text-cyan-400 mt-1">•</span>
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>

//       </div>

//     </div>
//   </div>
// </section>
// <ServiceCTA />
//       <OtherServices currentSlug="cyber-security" />

//       <Footer />
//    </div>
//     </main>
//   );
// };

// export default CyberSecurity;
