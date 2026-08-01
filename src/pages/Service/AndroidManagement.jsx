
import androidManagement from "../../assets/services/Android Management.gif";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import ServiceCTA from "../../components/Services/ServiceCTA";
import OtherServices from "../../components/Services/OtherServices";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

const features = [
  "Comprehensive Device Management",
  "Security & Compliance",
  "App Deployment & Management",
  "Remote Device Management",
  "User & Access Control",
  "Real-Time Analytics & Reporting",
  "Ongoing Support & Consultation",
];

const AndroidManagement = () => {
  return (
    <main className="min-h-screen text-white">
      {/* Global Background */}
      <GlobalBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        {/* ================= SERVICE SECTION ================= */}
        <section className="overflow-hidden pb-16 pt-28 lg:pb-20 lg:pt-36">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* ================= TYPEWRITER HEADING ================= */}
            <div className="mb-12 flex justify-center lg:mb-16">
                 <motion.h1
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 1.8,
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
                <span className="text-white"> Android </span>
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
                    opacity: [0.35, 0.5, 0.35],
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
                    right-10
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
                  src={androidManagement}
                  alt="Android Management"
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
                    w-80
                    object-contain
                    sm:w-96
                    lg:w-full
                    lg:max-w-lg
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
                {/* Description */}
                <p className="text-sm leading-8 text-gray-400 sm:text-base lg:text-lg">
                  Welcome to Zyntro, your trusted partner in Android device
                  management. We provide advanced solutions to optimize, secure,
                  and streamline device management for businesses of all sizes.
                </p>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35,
                  }}
                  className="mt-10 mb-6 text-2xl font-semibold"
                >
                  Our Android Management Services
                </motion.h2>

                {/* Features */}
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
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
                        lg:justify-start
                      "
                    >
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-blue-500" />

                      <p className="text-sm leading-7 text-gray-300 sm:text-base">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA */}
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
              delay: 0.2,
            }}
          >
            <ServiceCTA />
          </motion.div>
        </section>

        {/* ================= OTHER SERVICES ================= */}
        <OtherServices currentSlug="android-management-service" />

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </main>
  );
};

export default AndroidManagement;



// import androidManagement from "../../assets/services/Android Management.gif";
// import { FaCheckCircle, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import ServiceCTA from "../../components/Services/ServiceCTA";

// import OtherServices from "../../components/Services/OtherServices";
// import ContactInfo from "../../components/Services/ContactInfo";
// import Footer from "../../components/Footer/Footer";
// import Navbar from "../../components/Navbar/Navbar";
// import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

// const features = [
//   "Comprehensive Device Management",
//   "Security & Compliance",
//   "App Deployment & Management",
//   "Remote Device Management",
//   "User & Access Control",
//   "Real-Time Analytics & Reporting",
//   "Ongoing Support & Consultation",
// ];

// const AndroidManagement = () => {
//   return (
//     <main className=" text-white">
//          {/* Global Background */}
//             <GlobalBackground />
      
//             {/* Main Content */}
//             <div className="relative z-10">
//           <Navbar />
//       {/* Service Section */}
//     <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">

//   <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//     {/* Main Heading */}
//     <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500 mb-12 lg:mb-16">
//       Android Management
//     </h1>

//     {/* Image + Content */}
//     <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

//       {/* Image */}
//       <div className="relative flex justify-center">
//         <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[100px]"></div>

//         <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 right-10"></div>

//         <img
//           src={androidManagement}
//           alt="Android Management"
//           className="relative z-10 w-80 sm:w-96 lg:w-full lg:max-w-lg rounded-2xl object-contain"
//         />
//       </div>

//       {/* Content */}
//       <div className="text-center lg:text-left">

//         <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-8">
//           Welcome to Zyntro, your trusted partner in Android device
//           management. We provide advanced solutions to optimize, secure, and
//           streamline device management for businesses of all sizes.
//         </p>

//         <h2 className="text-2xl font-semibold mt-10 mb-6">
//           Our Android Management Services
//         </h2>

//         <div className="space-y-3">
//           {features.map((feature) => (
//             <div
//               key={feature}
//               className="flex items-start justify-center lg:justify-start gap-3 text-left"
//             >
//               <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />

//               <p className="text-sm sm:text-base text-gray-300 leading-7">
//                 {feature}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>

//   </div>

//   <ServiceCTA />
// </section>

//       {/* Other Services */}
//       <OtherServices currentSlug="android-management-service" />

//       <Footer />
//    </div>
//     </main>
//   );
// };

// export default AndroidManagement;
