import { motion } from "framer-motion";
import {
  HiOutlineBuildingStorefront,
  HiOutlineTruck,
  HiOutlineUsers,
  HiOutlineGlobeAsiaAustralia,
} from "react-icons/hi2";

const stats = [
  {
    icon: HiOutlineBuildingStorefront,
    number: "3K+",
    title: "Retailers",
    description: "Growing retail network",
  },
  {
    icon: HiOutlineTruck,
    number: "400+",
    title: "Distributors",
    description: "Strong distribution partners",
  },
  {
    icon: HiOutlineUsers,
    number: "1.5L+",
    title: "Customers",
    description: "Trusted across India",
  },
  {
    icon: HiOutlineGlobeAsiaAustralia,
    number: "Pan India",
    title: "Presence",
    description: "Serving nationwide",
  },
];

const CompanyStats = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1c072f] via-[#0B2340] to-[#0e4585] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Company at a Glance
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Empowering Businesses with
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}Digital Excellence
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            A quick overview of our expanding network, trusted partnerships,
            and growing digital presence across India.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
             className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
  <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
</div>
  <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-400 transition duration-300 group-hover:bg-blue-500/20 group-hover:text-cyan-300">
                  <Icon />
                </div>

          <h3 className="mt-6 text-2xl sm:text-4xl font-bold text-white">
  {item.number}
</h3>

<h4 className="mt-2 text-base sm:text-xl font-semibold text-white">
  {item.title}
</h4>

<p className="mt-2 text-xs sm:text-sm leading-5 text-slate-300">
  {item.description}
</p>
</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;