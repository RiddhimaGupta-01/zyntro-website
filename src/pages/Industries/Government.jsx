import government from "../../assets/industries/government.webp";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Government = () => {
  return (
    <main className="min-h-screen text-white">
      {/* Global Background */}
  

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
                lg:text-5xl
              "
            >
              Government &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Public
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
                  src={government}
                  alt="Government and Public"
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
                  , we empower government and public sector organizations with
                  innovative digital solutions that improve efficiency,
                  transparency, and citizen services. Our expertise includes
                  e-Governance, workflow automation, cloud solutions, and
                  secure digital platforms.
                </p>

                <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-base lg:text-lg lg:leading-8">
                  By leveraging{" "}
                  <span className="font-medium text-white">
                    AI, cloud computing, data analytics, and secure digital
                    infrastructure
                  </span>
                  , we help government agencies streamline processes, improve
                  data management, strengthen cybersecurity, and enable faster
                  decision-making.
                </p>

                <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-base lg:text-lg lg:leading-8">
                  From government departments and municipalities to public
                  institutions, Zyntro delivers secure, scalable, and
                  future-ready solutions that enhance public services, citizen
                  engagement, and smarter communities.
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

export default Government;
