import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SmartWatchAnimation from "../../components/upcoming/SmartWatchAnimation";


const SmartWatch = () => {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden  pt-24 pb-16 lg:pt-36 lg:pb-20">

     

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Upcoming Project */}
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
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md"
          >
            Upcoming Project
          </motion.div>

          {/* ================= HERO ================= */}
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left Content */}
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
                ease: [0.16, 1, 0.3, 1],
              }}
              className="order-1 text-center lg:text-left"
            >
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
                Enterprise

                <span className="block">
                  <span className="relative inline-block align-bottom">

                    {/* Typewriter Text */}
                    <motion.span
                      className="inline-block overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: "100%",
                      }}
                      transition={{
                        duration: 1.35,
                        ease: "linear",
                      }}
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      Smart Watch MDM
                    </motion.span>

                  

                  </span>
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
                <strong>Zyntro Software Solutions</strong> is proud to introduce{" "}
                <strong>Smart Watch MDM (Mobile Device Management)</strong>—an
                innovative solution that combines wearable technology with
                enterprise-grade device management. It enables businesses to
                deploy, manage, monitor, and secure smart watches with ease,
                ensuring complete control and visibility across their device
                ecosystem.

                <br />
                <br />

                Built for scalability, security, and reliability, our platform
                helps organizations improve productivity, streamline
                operations, and safeguard business data. Ideal for industries
                such as healthcare, logistics, retail, and education.
              </p>
            </motion.div>

            {/* Right Animation */}
            <div className="order-2 flex justify-center lg:justify-end">
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
                className="h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px] lg:h-[620px] lg:w-[620px]"
              >
                <SmartWatchAnimation />
              </motion.div>
            </div>
          </div>

          {/* ================= CARD 1 ================= */}
         <motion.div
  initial={{
    opacity: 0,
    scale: 0.78,
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
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1],
  }}
  whileHover={{
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  }}
  className="group relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)] sm:p-8 lg:p-10"
>
            {/* Hover Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

            <h2 className="relative z-10 text-2xl font-bold text-white sm:text-3xl">
              Comprehensive{" "}
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Device Management
              </span>
            </h2>

            <p className="relative z-10 mt-5 text-sm leading-7 text-gray-300 sm:text-base">
              At the core of our Smart Watch MDM solution lies a sophisticated
              management platform that provides organizations with complete
              control over their smart watch infrastructure. Our system enables
              IT administrators to remotely configure device settings, deploy
              applications, enforce security policies, and monitor device
              health in real-time.
            </p>

            <p className="relative z-10 mt-4 text-sm leading-7 text-gray-300 sm:text-base">
              The intuitive dashboard provides a centralized view of managed
              devices, allowing efficient oversight of hundreds or even
              thousands of smart watches. Automated enrollment, role-based
              access controls, and detailed reporting make device management
              simple, secure, and scalable.
            </p>

            {/* Bottom Light */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:w-3/4" />
          </motion.div>

          {/* ================= CARD 2 ================= */}
        <motion.div
  initial={{
    opacity: 0,
    scale: 0.78,
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
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1],
  }}
  whileHover={{
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  }}
  className="group relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)] sm:p-8 lg:p-10"
>
            {/* Hover Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/20" />

            <h2 className="relative z-10 text-2xl font-bold text-white sm:text-3xl">
              Enterprise-Grade{" "}
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Security & Scalability
              </span>
            </h2>

            <p className="relative z-10 mt-5 text-sm leading-7 text-gray-300 sm:text-base">
              Security is paramount in today's digital landscape, and our Smart
              Watch MDM solution has been built with enterprise-grade security
              measures. The platform implements multi-layered encryption for
              data transmission between devices and the management server,
              ensuring sensitive information remains protected. In case of a
              lost or stolen device, administrators can remotely lock or wipe
              the device to prevent unauthorized access to corporate data and
              applications.
            </p>

            <p className="relative z-10 mt-5 text-sm leading-7 text-gray-300 sm:text-base">
              Our solution integrates with enterprise security infrastructure,
              including single sign-on (SSO), multi-factor authentication
              (MFA), and identity management platforms. Advanced threat
              detection monitors suspicious activities and potential security
              breaches, providing immediate alerts to administrators when
              anomalies are detected.
            </p>

            <p className="relative z-10 mt-5 text-sm leading-7 text-gray-300 sm:text-base">
              Designed for scalability, our Smart Watch MDM platform supports
              organizations of all sizes, from small businesses to large
              enterprises with global deployments. Its cloud-based architecture
              provides high availability, reliability, and automatic scaling as
              demand increases. Whether you're starting with a pilot program or
              deploying thousands of devices, the solution grows with your
              needs.
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

export default SmartWatch;