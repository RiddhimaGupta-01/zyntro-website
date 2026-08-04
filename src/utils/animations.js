export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const cardVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};