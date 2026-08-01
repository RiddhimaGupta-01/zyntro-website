import { motion } from "framer-motion";

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
     className="
 group
  relative
  flex
  h-full
  min-h-[260px]
  flex-col
  overflow-hidden
  rounded-3xl
  border border-white/10
  bg-[#0B1220]/90
  p-3 sm:p-8
  backdrop-blur-xl
  transition-all
  duration-500
  hover:-translate-y-3
  hover:border-blue-500/40
  hover:shadow-[0_0_45px_rgba(37,99,235,0.25)]
  "
    >

      <div
        className="
        mb-3 sm:mb-6
        flex 
        h-10 w-10 sm:h-16 sm:w-16
        items-center 
        justify-center 
        rounded-xl sm:rounded-2xl
        bg-blue-500/10 
        text-blue-500 
        transition 
        group-hover:scale-110
        "
      >
        {/* Hover Glow */}
<div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
  <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
</div>
        <Icon className="text-xl sm:text-3xl" />
      </div>


      <h3
        className="
        text-sm sm:text-2xl
        font-semibold 
        text-white
        "
      >
        {feature.title}
      </h3>


      <p
        className="
        mt-2 sm:mt-4
        text-xs sm:text-base
        leading-5 sm:leading-8
        text-gray-400
        "
      >
        {feature.description}
      </p>

    </motion.div>
  );
};

export default FeatureCard;