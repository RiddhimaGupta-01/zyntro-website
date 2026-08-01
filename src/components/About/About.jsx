import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import FAQ from "./FAQ";
import { motion } from "framer-motion";
import { whyChooseData } from "../../data/WhyChooseData";
import WhyChooseCard from "./WhyChooseCard";
import GlobalBackground from "../GlobalBackground/GlobalBackground";

const About = () => {
  return (
    <div className="relative min-h-screen  text-white">
      {/* Global Background */}
      <GlobalBackground />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero / About Intro */}
        <section className="px-6 pt-28 pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">

              {/* Section Label */}
              <div className="mb-2 flex items-center justify-center gap-4 py-10">
                <span className="inline-block h-[2px] w-16 bg-gradient-to-r from-transparent to-blue-400" />

                <span
                  className="
                    text-2xl font-bold uppercase tracking-[0.2em]
                    text-transparent bg-gradient-to-r
                    from-blue-400 to-purple-500 bg-clip-text
                    md:text-3xl
                  "
                >
                  About Zyntro
                </span>

                <span className="inline-block h-[2px] w-16 bg-gradient-to-r from-purple-500 to-transparent" />
              </div>

              {/* Main Heading */}
              
{/* Typewriter Heading */}
<h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">

  {/* First Line */}
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{
      duration: 0.9,
      ease: "easeInOut",
    }}
    className="
      block
      overflow-hidden
      whitespace-nowrap
    "
  >
    Transforming
  </motion.span>

  {/* Second Line */}
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{
      duration: 2,
      delay: 0.8,
      ease: "easeInOut",
    }}
    className="
      block
      overflow-hidden
      whitespace-nowrap
      bg-gradient-to-r
      from-blue-400
      to-purple-500
      bg-clip-text
      text-transparent
    "
  >
    Businesses Through Technology
  </motion.span>

</h1>



              {/* Description */}
              <p className="mt-6 py-2 text-base leading-8 text-gray-400 md:text-lg">
                Zyntro Software Solutions empowers organizations with innovative
                digital solutions, cybersecurity, cloud services, enterprise
                mobility, and software development to accelerate business growth
                and digital transformation.
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-wrap justify-center gap-5">
                <Link
                  to="/contact"
                  className="
                    rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
                    px-7 py-4 font-semibold text-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg hover:shadow-blue-500/30
                  "
                >
                  Let's Work Together →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">

  {/* First Line */}
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{
      duration: 0.9,
      ease: "easeInOut",
    }}
    className="
      block
      overflow-hidden
      whitespace-nowrap
    "
  >Building Digital Solutions
  </motion.span>

  {/* Second Line */}
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{
      duration: 2,
      delay: 0.8,
      ease: "easeInOut",
    }}
    className="
      block
      overflow-hidden
      whitespace-nowrap
      bg-gradient-to-r
      from-blue-400
      to-purple-500
      bg-clip-text
      text-transparent
    "
  >That Drive Success
  </motion.span>

</h2>
              {/* <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Building Digital Solutions
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  That Drive Success
                </span>
              </h2> */}

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Zyntro Software Solutions is a technology company focused on
                delivering innovative software solutions, cloud services,
                cybersecurity, enterprise mobility and digital transformation
                services.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-400">
                We combine creativity, technology and expertise to help
                businesses achieve their goals and grow in the digital era.
              </p>
            </div>

            {/* Right Stats */}
<div className="grid grid-cols-2 gap-4 sm:gap-6">

  {/* Projects */}
  <motion.div
    whileHover={{
      y: -8,
      rotateX: 3,
      rotateY: -3,
      scale: 1.02,
    }}
    transition={{ duration: 0.35 }}
    style={{
      transformStyle: "preserve-3d",
      perspective: 1000,
    }}
    className="
      group relative overflow-hidden
      rounded-2xl
      border border-white/10
      bg-white/[0.05]
      p-5 sm:p-7
      backdrop-blur-md
      transition-all duration-300
      hover:border-blue-500/50
      hover:bg-white/[0.08]
      hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
    "
  >
    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

    <h3
      style={{ transform: "translateZ(30px)" }}
      className="relative z-10 text-3xl font-bold text-blue-400 sm:text-4xl"
    >
      500+
    </h3>

    <p
      style={{ transform: "translateZ(20px)" }}
      className="relative z-10 mt-2 text-sm text-gray-400 sm:text-base"
    >
      Projects Completed
    </p>
  </motion.div>


  {/* Satisfaction */}
  <motion.div
    whileHover={{
      y: -8,
      rotateX: 3,
      rotateY: 3,
      scale: 1.02,
    }}
    transition={{ duration: 0.35 }}
    style={{
      transformStyle: "preserve-3d",
      perspective: 1000,
    }}
    className="
      group relative overflow-hidden
      rounded-2xl
      border border-white/10
      bg-white/[0.05]
      p-5 sm:p-7
      backdrop-blur-md
      transition-all duration-300
      hover:border-purple-500/50
      hover:bg-white/[0.08]
      hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]
    "
  >
    <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

    <h3
      style={{ transform: "translateZ(30px)" }}
      className="relative z-10 text-3xl font-bold text-purple-400 sm:text-4xl"
    >
      98%
    </h3>

    <p
      style={{ transform: "translateZ(20px)" }}
      className="relative z-10 mt-2 text-sm text-gray-400 sm:text-base"
    >
      Client Satisfaction
    </p>
  </motion.div>


  {/* Experience */}
  <motion.div
    whileHover={{
      y: -8,
      rotateX: 3,
      rotateY: -3,
      scale: 1.02,
    }}
    transition={{ duration: 0.35 }}
    style={{
      transformStyle: "preserve-3d",
      perspective: 1000,
    }}
    className="
      group relative overflow-hidden
      rounded-2xl
      border border-white/10
      bg-white/[0.05]
      p-5 sm:p-7
      backdrop-blur-md
      transition-all duration-300
      hover:border-blue-500/50
      hover:bg-white/[0.08]
      hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
    "
  >
    <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

    <h3
      style={{ transform: "translateZ(30px)" }}
      className="relative z-10 text-3xl font-bold text-blue-400 sm:text-4xl"
    >
      10+
    </h3>

    <p
      style={{ transform: "translateZ(20px)" }}
      className="relative z-10 mt-2 text-sm text-gray-400 sm:text-base"
    >
      Years Experience
    </p>
  </motion.div>


  {/* Support */}
  <motion.div
    whileHover={{
      y: -8,
      rotateX: 3,
      rotateY: 3,
      scale: 1.02,
    }}
    transition={{ duration: 0.35 }}
    style={{
      transformStyle: "preserve-3d",
      perspective: 1000,
    }}
    className="
      group relative overflow-hidden
      rounded-2xl
      border border-white/10
      bg-white/[0.05]
      p-5 sm:p-7
      backdrop-blur-md
      transition-all duration-300
      hover:border-purple-500/50
      hover:bg-white/[0.08]
      hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]
    "
  >
    <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

    <h3
      style={{ transform: "translateZ(30px)" }}
      className="relative z-10 text-3xl font-bold text-purple-400 sm:text-4xl"
    >
      24/7
    </h3>

    <p
      style={{ transform: "translateZ(20px)" }}
      className="relative z-10 mt-2 text-sm text-gray-400 sm:text-base"
    >
      Support Available
    </p>
  </motion.div>

</div>
</div>

        </section>

        {/* Why Choose Zyntro */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">

            {/* Heading */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold leading-[1.2] text-white md:text-5xl">
                Why{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Choose Zyntro
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                We deliver innovative, secure and scalable solutions that help
                businesses grow.
              </p>
            </div>

            {/* Cards */}

<div className="space-y-6">
  {/* First Row - Left to Right */}
  <motion.div
    initial={{ opacity: 0, x: -140 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 1.5,
      ease: [0.16, 1, 0.36, 1],
    }}
    className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6"
  >
    {whyChooseData.slice(0, 4).map((item, index) => (
      <WhyChooseCard
        key={item.id || index}
        icon={item.icon}
        title={item.title}
        desc={item.desc}
      />
    ))}
  </motion.div>

  {/* Second Row - Right to Left */}
  {whyChooseData.length > 4 && (
    <motion.div
      initial={{ opacity: 0, x: 140 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.5,
        ease: [0.16, 1, 0.36, 1],
      }}
      className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6"
    >
      {whyChooseData.slice(4, 8).map((item, index) => (
        <WhyChooseCard
          key={item.id || index + 4}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </motion.div>
  )}
</div>



            {/* <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
  {whyChooseData.map((item, index) => (
    <WhyChooseCard
      key={item.id || index}
      icon={item.icon}
      title={item.title}
      desc={item.desc}
    />
  ))}
</div>

          */} </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default About;
