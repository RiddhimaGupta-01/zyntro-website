
import legalGif from "../../assets/industries/legal.gif";
import { motion } from "framer-motion";

import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Legal = () => {
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

            {/* ================= HEADING ================= */}
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
              }}
              className="
                mb-12
                text-center
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
                lg:mb-16
                lg:text-[42px]
              "
            >
              Legal &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Law Firm
              </span>
            </motion.h1>

            {/* ================= IMAGE + CONTENT ================= */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

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
                  min-h-[260px]
                  items-center
                  justify-center
                  sm:min-h-[320px]
                  lg:min-h-[420px]
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
                    absolute
                    h-[240px]
                    w-[240px]
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
                    lg:right-10
                  "
                />

                {/* Image */}
                <motion.img
                  src={legalGif}
                  alt="Legal and Law Firm"
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
                    duration: 1,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    z-10
                    h-auto
                    max-h-[280px]
                    w-auto
                    max-w-[90%]
                    object-contain
                    sm:max-h-[340px]
                    lg:max-h-[420px]
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
                className="text-center lg:text-left"
              >
                <p className="text-sm leading-7 text-gray-300 sm:text-base lg:text-lg lg:leading-8">
                  At{" "}
                  <span className="font-semibold text-white">
                    Zyntro Software Solutions Pvt. Ltd.
                  </span>
                  , we provide innovative technology solutions that help legal
                  organizations modernize their operations while maintaining
                  high standards of security, compliance, and confidentiality.
                  Our solutions include case management, secure document
                  management, workflow automation, and digital platforms for
                  law firms and legal departments.
                </p>

                <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-base lg:text-lg lg:leading-8">
                  By leveraging{" "}
                  <span className="font-medium text-white">
                    cloud computing, AI, automation, and advanced data
                    management
                  </span>
                  , we help legal professionals streamline case handling,
                  simplify document collaboration, improve legal research, and
                  strengthen client communication while protecting sensitive
                  information.
                </p>

                <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-base lg:text-lg lg:leading-8">
                  Whether you're an independent practitioner, corporate legal
                  department, or law firm, Zyntro delivers secure, scalable,
                  and future-ready solutions that improve productivity, enhance
                  client experiences, and support efficient legal services.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </main>
  );
};

export default Legal;

