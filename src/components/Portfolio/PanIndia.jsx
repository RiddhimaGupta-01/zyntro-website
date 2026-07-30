import { motion } from "framer-motion";
import indiaMap from "../../assets/portfolio/india.png";

const PanIndia = () => {
  return (
    <section className="relative overflow-hidden bg-[#06183a] py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Pan-India Digital Reach
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Connecting Businesses
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                Across India
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              <span className="font-semibold text-white">
                Zyntro Software Solutions Pvt. Ltd.
              </span>{" "}
              has established a strong presence across India, delivering secure
              and scalable digital solutions that help businesses operate more
              efficiently.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              Backed by{" "}
              <span className="font-semibold text-white">
                3,000+ retailers
              </span>
              ,{" "}
              <span className="font-semibold text-white">
                400+ distributors
              </span>{" "}
              and{" "}
              <span className="font-semibold text-white">
                1.5 lakh+ customers
              </span>
              , our technology-driven platforms enable seamless operations,
              real-time insights, and reliable digital experiences for
              businesses across the country.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />

            {/* Map Card */}
            <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <img
                src={indiaMap}
                alt="Pan India Reach"
                className="mx-auto w-full max-w-md object-contain"
              />

              {/* Example Glowing Pins */}

              <span className="absolute left-[48%] top-[20%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-pulse" />

              <span className="absolute left-[38%] top-[40%] h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6] animate-pulse" />

              <span className="absolute left-[56%] top-[48%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-pulse" />

              <span className="absolute left-[52%] top-[70%] h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6] animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PanIndia;