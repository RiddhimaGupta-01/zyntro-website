
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { heroSlides } from "./HeroData";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="w-full h-[60vh] md:h-[75vh]"
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          {({ isActive }) => (
            <div className="relative w-full h-screen overflow-hidden">

              {/* Background Image */}
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{
                  scale: 1.12,
                }}
                animate={{
                  scale: isActive ? 1 : 1.12,
                }}
                transition={{
                  duration: 5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"
              />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="max-w-4xl px-5 text-center text-white">

                  {/* Small line */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scaleX: 0,
                    }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15,
                    }}
                    className="mx-auto mb-5 h-[2px] w-16 origin-center bg-blue-500"
                  />

                  {/* Heading */}
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 60,
                    }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 60,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl"
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 35,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl"
                  >
                    {slide.description}
                  </motion.p>

                  {/* Button */}
                  <motion.button
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 30,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="mt-8 rounded-full bg-blue-600 px-8 py-4 font-semibold shadow-[0_10px_40px_rgba(37,99,235,0.35)] transition-colors duration-300 hover:bg-blue-500"
                  >
                    Learn More
                  </motion.button>

                </div>
              </div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                }}
                className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
              >
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center gap-2 text-white/80"
                >
                  <span className="text-xs uppercase tracking-[0.3em]">
                    Scroll
                  </span>

                  <span className="text-xl">
                    ↓
                  </span>
                </motion.div>
              </motion.div>

            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;



// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import { motion } from "framer-motion";

// import { heroSlides } from "./HeroData";

// const HeroSlider = () => {
//   return (
//     <Swiper
//       modules={[Autoplay, EffectFade, Pagination]}
//       effect="fade"
//       loop={true}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       pagination={{ clickable: true }}
//       className="w-full h-[60vh] md:h-[75vh]"
//     >
//       {heroSlides.map((slide) => (
//         <SwiperSlide key={slide.id}>
//           <div className="relative w-full h-screen">

//             {/* Background Image */}
//             <motion.img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//               animate={{ scale: [1, 1.08] }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               }}
//             />
//             {/* <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             /> */}

//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-60 to-black/40"></div>

//             {/* Content */}
//             <div className="absolute inset-0 z-10 flex items-center justify-center">
//               <div className="text-center text-white px-4">

//                 {/* <h1 className="text-5xl md:text-7xl font-bold">
//                   {slide.title}
//                 </h1> */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                   className="text-5xl md:text-7xl font-bold leading-tight"
//                 >
//                   {slide.title}
//                 </motion.h1>
             
//                 <motion.p
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3, duration: 0.8 }}
//                   className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
//                 >
//                   {slide.description}
//                 </motion.p>

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="mt-8 rounded-full bg-blue-600 px-8 py-4 font-semibold shadow-lg transition hover:bg-blue-700"
//                 >
//                   Learn More
//                 </motion.button>
//                 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
//                   ↓
//                 </div>

//               </div>
//             </div>

//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default HeroSlider;