import { motion } from "framer-motion";

const FeatureCard = ({ feature }) => {
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
      rounded-2xl 
      border border-white/10 
      bg-[#0B1220] 
      p-3 sm:p-8
      transition-all duration-300 
      hover:border-blue-500
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