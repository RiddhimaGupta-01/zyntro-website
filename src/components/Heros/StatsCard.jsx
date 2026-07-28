import { motion } from "framer-motion";

const StatsCard = ({ number, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:border-blue-400/40"
    >
      <h3 className="text-2xl font-bold text-white md:text-3xl">
        {number}
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        {title}
      </p>
    </motion.div>
  );
};

export default StatsCard;