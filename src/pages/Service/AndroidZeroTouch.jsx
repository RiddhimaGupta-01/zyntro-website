
import zeroTouchGif from "../../assets/services/Android Zero Touch Enrollment.gif";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

const features = [
  "Automated Device Enrollment",
  "Bulk Provisioning",
  "Security & Compliance",
  "Seamless MDM Integration",
  "Pre-configured Wi-Fi",
  "Scalability & Flexibility",
  "Cost Efficiency",
  "User-friendly Setup",
];

const AndroidZeroTouch = () => {
  return (
    <main className="min-h-screen text-white">
      {/* Global Background */}
      <GlobalBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        {/* ================= HERO SECTION ================= */}
        <section className="overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">

            {/* ================= TYPEWRITER HEADING ================= */}
            <div className="mb-14 flex justify-center lg:mb-16">
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
                <span className="text-white">Android Zero  </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                 Touch Enrollment
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
                    blur-[90px]
                    sm:h-[380px]
                    sm:w-[380px]
                  "
                />

                {/* Purple Glow */}
                <div
                  className="
                    absolute
                    right-10
                    top-0
                    h-[250px]
                    w-[250px]
                    rounded-full
                    bg-purple-500/15
                    blur-[80px]
                  "
                />

                <motion.img
                  src={zeroTouchGif}
                  alt="Android Zero Touch Enrollment"
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
                    rounded-2xl
                    object-contain
                    sm:w-[350px]
                    lg:w-[420px]
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
                <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                  Welcome to Zyntro, your trusted partner for Android Zero
                  Touch Enrollment. We simplify enterprise device deployment
                  through secure, automated provisioning that saves time,
                  reduces manual effort, and ensures every device is
                  business-ready from the moment it is powered on.
                </p>

                {/* Highlights */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Automated Device Enrollment",
                    "Secure Device Provisioning",
                    "Seamless MDM Integration",
                    "Scalable Enterprise Deployment",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: 25,
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
                        delay: 0.35 + index * 0.1,
                      }}
                      className="flex items-center gap-2 text-left text-sm text-gray-300"
                    >
                      <FaCheckCircle className="flex-shrink-0 text-blue-500" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Buttons */}
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
                    delay: 0.8,
                  }}
                  className="
                    mt-8
                    flex
                    flex-col
                    justify-center
                    gap-4
                    sm:flex-row
                    lg:justify-start
                  "
                >
                  <a
                    href="mailto:info@zyntro.in"
                    className="
                      rounded-xl
                      border
                      border-blue-500
                      px-6
                      py-3
                      text-center
                      transition
                      duration-300
                      hover:bg-blue-600
                    "
                  >
                    Contact Support
                  </a>

                  <a
                    href="tel:+919956353236"
                    className="
                      rounded-xl
                      bg-blue-600
                      px-6
                      py-3
                      text-center
                      transition
                      duration-300
                      hover:bg-blue-700
                    "
                  >
                    Call +91-9956353236
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= QUICK OVERVIEW ================= */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="pb-12"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#0B1220]
                p-6
                transition
                duration-300
                hover:border-blue-500/30
                sm:p-8
              "
            >
              <h2 className="mb-5 text-2xl font-bold">
                Quick Overview
              </h2>

              <p className="leading-8 text-gray-400">
                Android Zero Touch Enrollment is a deployment solution
                provided by Google that allows businesses to automatically
                configure Android devices when they are first powered on.
                Devices arrive enterprise-ready with pre-configured apps,
                policies, Wi-Fi settings, and security configurations.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ================= WHAT IS ================= */}
        <motion.section
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-6"
        >
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-6 text-3xl font-bold">
              What is Android Zero Touch Enrollment?
            </h2>

            <p className="leading-8 text-gray-400">
              Android Zero Touch Enrollment is Google's enterprise
              deployment solution that enables organizations to automatically
              enroll Android devices into their Mobile Device Management
              (MDM) platform during first boot. Instead of configuring every
              device manually, IT teams can deploy hundreds of devices with
              consistent settings, applications, and security policies in
              just a few minutes.
            </p>
          </div>
        </motion.section>

        {/* ================= HOW IT WORKS ================= */}
        <motion.section
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-6"
        >
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-6 text-3xl font-bold">
              How Does It Work?
            </h2>

            <p className="leading-8 text-gray-400">
              Devices are registered by an authorized reseller in the Zero
              Touch Enrollment Portal and linked to your MDM platform. Once a
              user powers on the device and connects to the internet, it
              automatically downloads enterprise applications, Wi-Fi
              settings, security policies, and business configurations
              without any manual setup.
            </p>
          </div>
        </motion.section>

        {/* ================= FEATURES ================= */}
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-6">

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-10 text-3xl font-bold"
            >
              Key Features
            </motion.h2>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
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
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    border
                    border-white/10
                    bg-[#0B1220]
                    p-5
                    transition-colors
                    duration-300
                    hover:border-blue-500/40
                  "
                >
                  <FaCheckCircle className="flex-shrink-0 text-lg text-blue-500" />

                  <span className="text-gray-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <ServiceCTA />
        </motion.div>

        {/* ================= OTHER SERVICES ================= */}
        <OtherServices currentSlug="android-zero-touch-enrollment" />

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
