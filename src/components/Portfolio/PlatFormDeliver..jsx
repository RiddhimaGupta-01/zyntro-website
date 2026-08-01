import { motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineChartBar,
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineLifebuoy,
} from "react-icons/hi2";

const features = [
  {
    icon: HiOutlineShieldCheck,
    title: "Secure Digital Platform",
    description:
      "Enterprise-grade security designed to protect business data and ensure reliable operations.",
  },
  {
    icon: HiOutlineBolt,
    title: "Fast Performance",
    description:
      "Optimized architecture delivering speed, stability, and a seamless user experience.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Real-Time Analytics",
    description:
      "Gain valuable insights with real-time reports and performance monitoring.",
  },
  {
    icon: HiOutlineCloud,
    title: "Scalable Infrastructure",
    description:
      "Flexible solutions built to grow alongside your business requirements.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "Intelligent Automation",
    description:
      "Automate repetitive workflows to improve productivity and operational efficiency.",
  },
  {
    icon: HiOutlineLifebuoy,
    title: "24×7 Technical Support",
    description:
      "Dedicated support to keep your digital platforms running smoothly at all times.",
  },
];

const PlatformDeliver = () => {
  return (
    <section className="relative overflow-hidden  py-20 lg:py-24">
      

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Platform Capabilities
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What Our Platforms
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Deliver
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Our platforms are designed to simplify operations, improve
            efficiency, and deliver secure digital experiences through modern
            technology.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10" />
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl sm:text-3xl text-blue-400 transition duration-300 group-hover:bg-blue-500/20 group-hover:text-cyan-300">
                  <Icon />
                </div>

                <h3 className="mt-5 text-base sm:text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformDeliver;
