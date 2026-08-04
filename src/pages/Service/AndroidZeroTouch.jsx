
import zeroTouchWebm from "../../assets/services/Android Zero Touch Enrollment.webm";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const features = [
  "Zero-Touch Device Enrollment — Automatically provision Android devices without manual setup.",
  "Automated Configuration — Apply apps, Wi-Fi, security, and device policies during enrollment.",
  "Enterprise Security — Enforce security policies and protect corporate data.",
  "Application Management — Install and manage business applications remotely.",
  "Remote Device Management — Monitor and control enrolled devices from a centralized platform.",
  "Policy Enforcement — Apply organizational policies consistently across all devices.",
  "Device Monitoring — Track device status, compliance, and security information.",
];

const AndroidZeroTouch = () => {
  return (
    <main className="min-h-screen overflow-x-hidden text-white">
      <div className="relative z-10 overflow-x-hidden">
        <Navbar />

        {/* ================= HERO SECTION ================= */}
        <section className="overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
          <div className="mx-auto w-full max-w-7xl overflow-hidden px-6">

            {/* ================= HEADING ================= */}
            <div className="mb-12 flex justify-center sm:mb-14 lg:mb-16">
              <motion.h1
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
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  max-w-full
                  text-center
                  text-3xl
                  font-bold
                  leading-tight
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                <span className="block sm:inline">
                  Android Zero Touch
                </span>{" "}
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent sm:inline">
                  Enrollment
                </span>
              </motion.h1>
            </div>

            {/* ================= IMAGE + CONTENT ================= */}
            <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">

              {/* ================= LEFT IMAGE ================= */}
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
                {/* Blue Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.25, 0.4, 0.25],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[240px]
                    w-[240px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/20
                    blur-[90px]
                    sm:h-[350px]
                    sm:w-[350px]
                    lg:h-[420px]
                    lg:w-[420px]
                  "
                />

                {/* Purple Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-5
                    top-5
                    h-[180px]
                    w-[180px]
                    rounded-full
                    bg-purple-500/15
                    blur-[70px]
                    sm:h-[240px]
                    sm:w-[240px]
                  "
                />

                {/* Video */}
                <motion.video
                  src={zeroTouchWebm}
                  autoPlay
                  loop
                  muted
                  playsInline
                  initial={{
                    scale: 0.9,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
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
                    relative
                    z-10
                    h-auto
                    w-[260px]
                    max-w-full
                    object-contain
                    sm:w-[350px]
                    md:w-[390px]
                    lg:w-[420px]
                  "
                />
              </motion.div>

              {/* ================= RIGHT CONTENT ================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
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
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  min-w-0
                  text-center
                  lg:text-left
                "
              >
                <p className="text-sm leading-7 text-gray-300 sm:text-base lg:text-lg lg:leading-8">
                  Android Zero Touch Enrollment enables organizations to
                  automatically configure and provision Android devices without
                  requiring manual setup. At Zyntro, we provide secure and
                  scalable zero-touch enrollment solutions that simplify device
                  deployment and improve enterprise mobility management.
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
                  viewport={{
                    once: true,
                  }}
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
        <section className="overflow-hidden pb-16 lg:pb-20">
          <div className="mx-auto w-full max-w-7xl overflow-hidden px-6">

            {/* Heading */}
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
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mb-8
                text-center
                text-3xl
                font-bold
                text-white
                sm:text-left
                sm:text-4xl
              "
            >
              Key Features
            </motion.h2>

            {/* Feature Cards */}
            <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
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

                  <span className="min-w-0 text-sm leading-7 text-gray-300 sm:text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OTHER SERVICES ================= */}
        <div className="overflow-hidden">
          <OtherServices currentSlug="android-zero-touch-enrollment" />
        </div>

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </main>
  );
};

export default AndroidZeroTouch;



// import zeroTouchGif from "../../assets/services/Android Zero Touch Enrollment.gif";
// import { FaCheckCircle } from "react-icons/fa";

// import OtherServices from "../../components/Services/OtherServices";
// import ServiceCTA from "../../components/Services/ServiceCTA";
// import Footer from "../../components/Footer/Footer";
// import Navbar from "../../components/Navbar/Navbar";
// import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

// const features = [
//   "Automated Device Enrollment",
//   "Bulk Provisioning",
//   "Security & Compliance",
//   "Seamless MDM Integration",
//   "Pre-configured Wi-Fi",
//   "Scalability & Flexibility",
//   "Cost Efficiency",
//   "User-friendly Setup",
// ];

// const AndroidZeroTouch = () => {
//   return (
//     <main className=" text-white">
//          {/* Global Background */}
//             <GlobalBackground />
      
//             {/* Main Content */}
//             <div className="relative z-10">
//       <Navbar />
// <section className="pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-5 sm:px-6">

//     {/* Main Heading */}
//     <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-14">
//   <span className="text-white">Android Zero  </span>
//   <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//    Touch Enrollment
//   </span>
// </h1>

//     {/* Image + Content */}
//     <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//       {/* Left Image */}
//       <div className="relative flex justify-center">

//         <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-[90px]" />

//         <div className="absolute w-[250px] h-[250px] rounded-full bg-purple-500/15 blur-[80px] top-0 right-10" />

//         <img
//           src={zeroTouchGif}
//           alt="Android Zero Touch Enrollment"
//           className="
//             relative z-10
//             w-[260px]
//             sm:w-[350px]
//             lg:w-[420px]
//             h-auto
//             rounded-2xl
//             object-contain
//           "
//         />
//       </div>

//       {/* Right Content */}
//       <div className="text-center lg:text-left">
//          <div className="text-center lg:text-left">

//   <p className="text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base">
//     Welcome to Zyntro, your trusted partner for Android Zero Touch
//     Enrollment. We simplify enterprise device deployment through
//     secure, automated provisioning that saves time, reduces manual
//     effort, and ensures every device is business-ready from the
//     moment it is powered on.
//   </p>

//   {/* Highlights */}
//   <div className="mt-6 grid sm:grid-cols-2 gap-3">
//     {[
//       "Automated Device Enrollment",
//       "Secure Device Provisioning",
//       "Seamless MDM Integration",
//       "Scalable Enterprise Deployment",
//     ].map((item) => (
//       <div
//         key={item}
//         className="flex items-center gap-2 text-sm text-gray-300"
//       >
//         <FaCheckCircle className="text-blue-500 flex-shrink-0" />
//         <span>{item}</span>
//       </div>
//     ))}
//   </div>

//   {/* Buttons */}
//   <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
//     ...
//   </div>

// </div>
     

//         <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">

//           <a
//             href="mailto:info@zyntro.in"
//             className="
//               rounded-xl
//               border border-blue-500
//               px-6 py-3
//               text-center
//               hover:bg-blue-600
//               transition
//             "
//           >
//             Contact Support
//           </a>

//           <a
//             href="tel:+919956353236"
//             className="
//               rounded-xl
//               bg-blue-600
//               px-6 py-3
//               text-center
//               hover:bg-blue-700
//               transition
//             "
//           >
//             Call +91-9956353236
//           </a>

//         </div>

//       </div>

//     </div>
//   </div>
// </section>



//       {/* Quick Overview */}
//       <section className="pb-12">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-8">
//             <h2 className="text-2xl font-bold mb-5">Quick Overview</h2>

//             <p className="text-gray-400 leading-8">
//               Android Zero Touch Enrollment is a deployment solution provided by
//               Google that allows businesses to automatically configure Android
//               devices when they are first powered on. Devices arrive
//               enterprise-ready with pre-configured apps, policies, Wi-Fi
//               settings, and security configurations.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* What Is */}
//       <section className="py-6">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-6">
//             What is Android Zero Touch Enrollment?
//           </h2>

//           <p className="text-gray-400 leading-8">
//             Android Zero Touch Enrollment is Google's enterprise deployment
//             solution that enables organizations to automatically enroll Android
//             devices into their Mobile Device Management (MDM) platform during
//             first boot. Instead of configuring every device manually, IT teams
//             can deploy hundreds of devices with consistent settings,
//             applications, and security policies in just a few minutes.
//           </p>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-6">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-6">How Does It Work?</h2>

//           <p className="text-gray-400 leading-8">
//             Devices are registered by an authorized reseller in the Zero Touch
//             Enrollment Portal and linked to your MDM platform. Once a user
//             powers on the device and connects to the internet, it automatically
//             downloads enterprise applications, Wi-Fi settings, security
//             policies, and business configurations without any manual setup.
//           </p>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-6">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-10">Key Features</h2>

//           <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
//             {features.map((feature) => (
//               <div
//                 key={feature}
//                 className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0B1220] p-5"
//               >
//                 <FaCheckCircle className="text-blue-500 text-lg" />

//                 <span className="text-gray-300">{feature}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <ServiceCTA />

//       <OtherServices currentSlug="android-zero-touch-enrollment" />

//       <Footer />
//    </div>
//     </main>
//   );
// };

// export default AndroidZeroTouch;
