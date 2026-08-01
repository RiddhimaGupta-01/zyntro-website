import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MLAnimation from "../../components/upcoming/MLAnimation";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";


const MLModules = () => {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden  pt-24 pb-16 lg:pt-36 lg:pb-20">

        {/* ================= GLOBAL BACKGROUND ================= */}
        <GlobalBackground />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* ================= UPCOMING PROJECT ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
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
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md"
          >
            Upcoming Project
          </motion.div>

          {/* ================= HERO ================= */}
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT CONTENT */}
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
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="order-1 text-center lg:text-left"
   >

    <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
  Enterprise

  <span className="block">
    <span
      className="relative inline-block"
      style={{
        verticalAlign: "bottom",
      }}
    >
      <motion.span
        className="inline-block overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 1.1,
          ease: "linear",
        }}
        style={{
          whiteSpace: "nowrap",
        }}
      >
        ML Module
      </motion.span>

     
    </span>
  </span>
</h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
                <strong>Zyntro Software Solutions</strong> proudly presents the{" "}
                <strong>ML Module,</strong> an advanced Machine Learning
                platform designed to empower businesses and developers with
                cutting-edge artificial intelligence capabilities. This
                comprehensive solution democratizes access to sophisticated
                machine learning algorithms, enabling organizations of all sizes
                to harness the power of AI for data analysis, predictive
                modeling, automation, and intelligent decision-making without
                requiring deep expertise in data science.
                <br />
                <br />
                Our ML Module provides a unified framework that seamlessly
                integrates with existing systems, offering pre-trained models,
                customizable algorithms, and intuitive tools for training,
                deploying, and managing machine learning workflows. From natural
                language processing and computer vision to predictive analytics
                and recommendation systems, our platform covers the full
                spectrum of modern AI applications, making it the ideal solution
                for businesses looking to gain competitive advantages through
                intelligent automation and data-driven insights.
              </p>
            </motion.div>

            {/* RIGHT - ML ANIMATION */}
            <div className="order-2 flex justify-center lg:justify-end">
             <motion.div
  initial={{
    opacity: 0,
    scale: 0.55,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px] lg:h-[620px] lg:w-[620px]"
>
  <MLAnimation />
</motion.div>
            </div>
          </div>

          {/* ================= CARD 1 ================= */}
<motion.div
  initial={{
    opacity: 0,
    scale: 0.65,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
  className="group relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)] sm:p-8 lg:p-10"
>
  {/* Hover Glow */}
  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

  <h2 className="relative z-10 text-3xl font-bold text-white md:text-4xl">
    Comprehensive{" "}
    <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
      ML Capabilities & Architecture
    </span>
  </h2>

  <p className="relative z-10 mt-6 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
    Our ML Module supports the complete machine learning lifecycle,
    from data preparation and feature engineering to model training,
    validation, and deployment. It supports supervised, unsupervised,
    reinforcement, and deep learning approaches, with pre-built models
    for tasks such as image classification, sentiment analysis, fraud
    detection, and forecasting.
  </p>

  <p className="relative z-10 mt-5 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
    An intelligent AutoML engine simplifies model selection,
    hyperparameter tuning, and feature optimization. This allows teams
    to build effective machine learning models without requiring
    extensive ML expertise.
  </p>

  <p className="relative z-10 mt-5 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
    The platform handles structured and unstructured data, including
    databases, text, images, audio, video, and real-time data streams.
    Advanced preprocessing, feature engineering, and integrations with
    SQL, NoSQL, cloud storage, and distributed data sources make it
    easy to connect with existing infrastructure.
  </p>

  {/* Bottom Light */}
  <div className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:w-3/4" />
</motion.div>

         {/* ================= CARD 2 ================= */}
<motion.div
  initial={{
    opacity: 0,
    scale: 0.65,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
  className="group relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)] sm:p-8 lg:p-10"
>
  {/* Hover Glow */}
  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

  <h2 className="relative z-10 text-3xl font-bold text-white md:text-4xl">
    Deployment,
    <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
      Monitoring & Enterprise Integration
    </span>
  </h2>

  <p className="relative z-10 mt-6 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
    Our ML Module simplifies production deployment through REST APIs,
    batch processing, and lightweight inference engines. Models can be
    deployed across cloud environments, on-premises infrastructure,
    edge devices, and mobile platforms with optimized performance.
  </p>

  <p className="relative z-10 mt-5 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
    Enterprise integrations include SDKs and APIs for Python, Java,
    JavaScript, and R, along with connectors for BI platforms, data
    warehouses, CRM, and ERP systems. Role-based access, encryption,
    and security controls help protect sensitive data and machine
    learning models.
  </p>

  <p className="relative z-10 mt-5 text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
    Real-time monitoring tracks model performance, data drift, and
    accuracy over time. Automated retraining, A/B testing, controlled
    rollouts, and rollback options help maintain reliable models while
    detailed logging provides transparency and supports compliance
    requirements.
  </p>

  {/* Bottom Light */}
  <div className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:w-3/4" />
</motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default MLModules;


// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import MLAnimation from "../../components/upcoming/MLAnimation";

// const MLModules = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-24 pb-16 lg:pt-36 lg:pb-20">
//         {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-32 pb-20"> */}

//         {/* Grid */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="h-full w-full"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//               `,
//               backgroundSize: "60px 60px",
//             }}
//           />
//         </div>

//         {/* Glow */}
//         <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6">
//           <div className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
//             Upcoming Project
//           </div>
//           <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
//             {/* Left */}
//             <div className="order-1 text-center lg:text-left">
//               <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
//                 Enterprise
//                 <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//                   ML Module
//                 </span>
//               </h1>

//               <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
//                 <strong>Zyntro Software Solutions</strong> proudly presents the{" "}
//                 <strong>ML Module,</strong>an advanced Machine Learning platform
//                 designed to empower businesses and developers with cutting-edge
//                 artificial intelligence capabilities. This comprehensive
//                 solution democratizes access to sophisticated machine learning
//                 algorithms, enabling organizations of all sizes to harness the
//                 power of AI for data analysis, predictive modeling, automation,
//                 and intelligent decision-making without requiring deep expertise
//                 in data science.
//                 <br />
//                 <br />
//                 Our ML Module provides a unified framework that seamlessly
//                 integrates with existing systems, offering pre-trained models,
//                 customizable algorithms, and intuitive tools for training,
//                 deploying, and managing machine learning workflows. From natural
//                 language processing and computer vision to predictive analytics
//                 and recommendation systems, our platform covers the full
//                 spectrum of modern AI applications, making it the ideal solution
//                 for businesses looking to gain competitive advantages through
//                 intelligent automation and data-driven insights.
//               </p>
//             </div>

//             {/* Right */}
//             <div className="order-2 flex justify-center lg:justify-end">
//               <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[620px] lg:h-[620px]">
//                 <MLAnimation />
//               </div>
//             </div>
//           </div>

//           {/* About */}

//           {/* <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"> */}

        
//           <div className="group rounded-[32px] mt-20 border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">

//   <h2 className="text-3xl font-bold text-white md:text-4xl">
//     Comprehensive{" "}
//     <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//       ML Capabilities & Architecture
//     </span>
//   </h2>

//   <p className="mt-6 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     Our ML Module supports the complete machine learning lifecycle, from
//     data preparation and feature engineering to model training, validation,
//     and deployment. It supports supervised, unsupervised, reinforcement,
//     and deep learning approaches, with pre-built models for tasks such as
//     image classification, sentiment analysis, fraud detection, and forecasting.
//   </p>

//   <p className="mt-5 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     An intelligent AutoML engine simplifies model selection, hyperparameter
//     tuning, and feature optimization. This allows teams to build effective
//     machine learning models without requiring extensive ML expertise.
//   </p>

//   <p className="mt-5 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     The platform handles structured and unstructured data, including databases,
//     text, images, audio, video, and real-time data streams. Advanced
//     preprocessing, feature engineering, and integrations with SQL, NoSQL,
//     cloud storage, and distributed data sources make it easy to connect with
//     existing infrastructure.
//   </p>

// </div>


// <div className="group rounded-[32px] mt-20 border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">

//   <h2 className="text-3xl font-bold text-white md:text-4xl">
//     Deployment,
//     <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//       Monitoring & Enterprise Integration
//     </span>
//   </h2>

//   <p className="mt-6 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     Our ML Module simplifies production deployment through REST APIs,
//     batch processing, and lightweight inference engines. Models can be
//     deployed across cloud environments, on-premises infrastructure, edge
//     devices, and mobile platforms with optimized performance.
//   </p>

//   <p className="mt-5 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     Enterprise integrations include SDKs and APIs for Python, Java,
//     JavaScript, and R, along with connectors for BI platforms, data warehouses,
//     CRM, and ERP systems. Role-based access, encryption, and security controls
//     help protect sensitive data and machine learning models.
//   </p>

//   <p className="mt-5 text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
//     Real-time monitoring tracks model performance, data drift, and accuracy
//     over time. Automated retraining, A/B testing, controlled rollouts, and
//     rollback options help maintain reliable models while detailed logging
//     provides transparency and supports compliance requirements.
//   </p>

// </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default MLModules;
