import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FinanceDeviceAnimation from "../../components/upcoming/FinanceDeviceAnimation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FaCheckCircle,
  FaCreditCard,
  FaShieldAlt,
  FaBuilding,
} from "react-icons/fa";
const FinanceApproved = () => {
  const [displayText, setDisplayText] = useState("");

  const headingText = "Finance Approved";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(headingText.slice(0, index + 1));
      index++;

      if (index === headingText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
     
      <section className="relative overflow-hidden  pt-36 pb-20">
         
        
              {/* Main Content */}
              <div className="relative z-10"></div>
 <Navbar />
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-32 pb-20"> */}

        {/* Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glow */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur sm:px-6 sm:text-sm">
Upcoming Project
</div>

<div className="mt-8 grid min-h-auto items-center gap-10 lg:min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left */}
         <div className="text-center lg:-mt-20 lg:text-left">

     <motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
  className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl"
>
  {displayText}

  <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 bg-cyan-400 animate-pulse" />

  <motion.span
    initial={{
      opacity: 0,
      y: 15,
    }}
    animate={{
      opacity: displayText === headingText ? 1 : 0,
      y: displayText === headingText ? 0 : 15,
    }}
    transition={{
      duration: 0.6,
    }}
    className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
  >
    Tablet & Laptop
  </motion.span>
</motion.h1>

           <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
                Zyntro Software Solutions introduces Finance Approved Tablet & Laptop, a smart financing platform that makes premium computing devices more accessible. With instant approval, secure digital processing, transparent payment plans, and flexible repayment options, we provide a fast and hassle-free financing experience for students, professionals, businesses, and educational institutions. Our platform empowers customers to own the latest tablets and laptops with confidence, convenience, and affordability.

        </p>
            </div>

            {/* Right */}
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
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="mx-auto h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px] lg:h-[620px] lg:w-[620px]"
>
  <FinanceDeviceAnimation />
</motion.div>
          </div>
          
{/* Features */}
<motion.div
  className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
  {/* Instant Approval */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        scale: 0.78,
        y: 35,
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }}
    whileHover={{
      y: -10,
      scale: 1.025,
      rotateX: 4,
      rotateY: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#081632]/70 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_15px_45px_rgba(6,182,212,0.15)] sm:p-6"
    style={{
      transformStyle: "preserve-3d",
      perspective: "1000px",
    }}
  >
    {/* Glow */}
    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

    {/* Icon */}
    <motion.div
      whileHover={{
        scale: 1.15,
        rotate: 5,
        y: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className="relative z-10 w-fit"
    >
      <FaCheckCircle className="text-3xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]" />
    </motion.div>

    <h3 className="relative z-10 mt-5 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
      Instant Approval
    </h3>

    <p className="relative z-10 mt-3 text-sm leading-6 text-gray-400 sm:leading-7">
      Receive financing decisions within minutes through our
      intelligent approval system.
    </p>

    {/* Bottom Light */}
    <div className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:w-3/4" />
  </motion.div>

  {/* Flexible EMI */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        scale: 0.78,
        y: 35,
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }}
    whileHover={{
      y: -10,
      scale: 1.025,
      rotateX: 4,
      rotateY: 4,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#081632]/70 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_15px_45px_rgba(6,182,212,0.15)] sm:p-6"
    style={{
      transformStyle: "preserve-3d",
      perspective: "1000px",
    }}
  >
    {/* Glow */}
    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

    {/* Icon */}
    <motion.div
      whileHover={{
        scale: 1.15,
        rotate: -5,
        y: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className="relative z-10 w-fit"
    >
      <FaCreditCard className="text-3xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]" />
    </motion.div>

    <h3 className="relative z-10 mt-5 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
      Flexible EMI
    </h3>

    <p className="relative z-10 mt-3 text-sm leading-6 text-gray-400 sm:leading-7">
      Affordable monthly payment plans designed for different
      financial needs.
    </p>

    {/* Bottom Light */}
    <div className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:w-3/4" />
  </motion.div>

  {/* Secure Payments */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        scale: 0.78,
        y: 35,
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }}
    whileHover={{
      y: -10,
      scale: 1.025,
      rotateX: -4,
      rotateY: 4,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#081632]/70 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_15px_45px_rgba(6,182,212,0.15)] sm:p-6"
    style={{
      transformStyle: "preserve-3d",
      perspective: "1000px",
    }}
  >
    {/* Glow */}
    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

    {/* Icon */}
    <motion.div
      whileHover={{
        scale: 1.15,
        rotate: 5,
        y: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className="relative z-10 w-fit"
    >
      <FaShieldAlt className="text-3xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]" />
    </motion.div>

    <h3 className="relative z-10 mt-5 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
      Secure Payments
    </h3>

    <p className="relative z-10 mt-3 text-sm leading-6 text-gray-400 sm:leading-7">
      Bank-grade encryption ensures every transaction remains
      protected.
    </p>

    {/* Bottom Light */}
    <div className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:w-3/4" />
  </motion.div>

  {/* Enterprise Ready */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        scale: 0.78,
        y: 35,
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }}
    whileHover={{
      y: -10,
      scale: 1.025,
      rotateX: -4,
      rotateY: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#081632]/70 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_15px_45px_rgba(6,182,212,0.15)] sm:p-6"
    style={{
      transformStyle: "preserve-3d",
      perspective: "1000px",
    }}
  >
    {/* Glow */}
    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

    {/* Icon */}
    <motion.div
      whileHover={{
        scale: 1.15,
        rotate: -5,
        y: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className="relative z-10 w-fit"
    >
      <FaBuilding className="text-3xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]" />
    </motion.div>

    <h3 className="relative z-10 mt-5 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
      Enterprise Ready
    </h3>

    <p className="relative z-10 mt-3 text-sm leading-6 text-gray-400 sm:leading-7">
      Bulk device financing and centralized management for
      organizations.
    </p>

    {/* Bottom Light */}
    <div className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:w-3/4" />
  </motion.div>
</motion.div>


{/* About */}

<motion.div
  className="mt-28 grid gap-8 lg:grid-cols-2"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  {/* Flexible Financing Card */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -120,
        scale: 0.88,
      },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }}
    whileHover={{
      y: -8,
      scale: 1.015,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    }}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#081632]/70 p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_20px_50px_rgba(34,211,238,0.12)] sm:p-8"
  >
    {/* Glow */}
    <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/15" />

    <h2 className="relative z-10 text-3xl font-bold text-white sm:text-4xl">
      Flexible{" "}
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Financing
      </span>
    </h2>

    <p className="relative z-10 mt-6 text-sm leading-7 text-gray-300 sm:text-base">
      Our platform streamlines the financing process with quick online
      applications, instant eligibility checks, and flexible payment
      options tailored to every customer. By combining intelligent
      financial assessment with secure digital verification, we provide
      a fast, transparent, and hassle-free experience.
    </p>

    <p className="relative z-10 mt-5 text-sm leading-7 text-gray-300 sm:text-base">
      Customers can choose repayment plans that suit their budget while
      enjoying affordable monthly installments and simple device upgrade
      options.
    </p>

    {/* Bottom Line */}
    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:w-full" />
  </motion.div>


  {/* Enterprise Solutions Card */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: 120,
        scale: 0.88,
      },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }}
    whileHover={{
      y: -8,
      scale: 1.015,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    }}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#081632]/70 p-7 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:shadow-[0_20px_50px_rgba(168,85,247,0.12)] sm:p-8"
  >
    {/* Glow */}
    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-purple-400/15" />

    <h2 className="relative z-10 text-3xl font-bold text-white sm:text-4xl">
      Enterprise{" "}
      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Solutions
      </span>
    </h2>

    <p className="relative z-10 mt-6 text-sm leading-7 text-gray-300 sm:text-base">
      Businesses can equip employees with modern devices through scalable
      financing programs, centralized billing, and dedicated account
      management. Our enterprise platform integrates with existing
      workflows, making device deployment and lifecycle management simple.
    </p>

    <p className="relative z-10 mt-5 text-sm leading-7 text-gray-300 sm:text-base">
      Every financed device is backed by secure payment processing,
      optional protection plans, and dedicated customer support, ensuring
      a trusted financing experience from application to ownership.
    </p>

    {/* Bottom Line */}
    <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-500 group-hover:w-full" />
  </motion.div>
</motion.div>

{/* CTA */}

<motion.div
  className="mt-28 rounded-3xl border border-cyan-500/20 bg-[#081632]/70 p-8 text-center backdrop-blur sm:p-12"
  initial={{
    opacity: 0,
    scale: 0.82,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1],
  }}
>
  <h2 className="text-3xl font-bold text-white sm:text-4xl">
    Ready to Make Premium Devices More Accessible?
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
    Discover how Zyntro's Finance Approved Phone, Tablet & Laptop platform
    simplifies device financing with secure payments, flexible plans,
    and enterprise-grade management.
  </p>

  <button className="mt-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105">
    Request a Consultation
  </button>
</motion.div>
```


         

      

        </div>
      </section>

      <Footer />
    </>
  );
};

export default FinanceApproved;