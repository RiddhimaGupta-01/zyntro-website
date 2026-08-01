
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
export const serviceCardHover = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
  },

  hover: {
    rotateX: 8,
    rotateY: -8,
    scale: 1.05,

    boxShadow:
      "0 30px 70px rgba(0, 170, 255, 0.35)",

    transition: {
      type: "spring",
      stiffness: 180,
      damping: 15,
    },
  },
};


export const icon3D = {
  rest: {
    y: 0,
    z: 0,
    scale: 1,
  },

  hover: {
    y: -25,
    z: 80,
    scale: 1.25,

    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
    },
  },
};


export const heading3D = {
  rest: {
    y: 0,
    z: 0,
  },

  hover: {
    y: -15,
    z: 50,

    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
    },
  },
};


export const descriptionDepth = {
  rest: {
    z: 0,
    opacity: 0.8,
  },

  hover: {
    z: 20,
    opacity: 1,

    transition: {
      duration: 0.3,
    },
  },
};






// export const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// export const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// export const cardVariant = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };