import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import hero from "../../assets/portfolio/img.png";

const PortfolioHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b1230] pt-28 sm:pt-32 lg:min-h-screen lg:flex lg:items-center">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:55px_55px]" />

        {/* Glows */}
        <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-blue-300 backdrop-blur-xl"
            >
              <HiSparkles />
              Our Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Building{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <br />
              That Drive Growth
              <br />
              Across India
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0"
            >
              Explore how Zyntro Software Solutions empowers businesses
              through innovative technology, scalable digital platforms,
              and enterprise-grade solutions built for long-term success.
            </motion.p>

          </div>

          {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative mt-20 flex justify-center lg:mt-0"
>
  {/* Blue Glow */}
  <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/30 blur-[140px]" />

<div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
  {/* Hero Illustration */}
  <motion.img
    src={hero}
    alt="Portfolio Illustration"
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-10 w-full max-w-md object-contain drop-shadow-[0_25px_60px_rgba(59,130,246,0.35)] sm:max-w-lg lg:max-w-2xl xl:max-w-3xl"
  />
</motion.div>
         
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;