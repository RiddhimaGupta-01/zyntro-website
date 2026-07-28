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
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="w-full h-[60vh] md:h-[75vh]"
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-screen">

            {/* Background Image */}
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.08] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            {/* <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            /> */}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-60 to-black/40"></div>

            {/* Content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="text-center text-white px-4">

                {/* <h1 className="text-5xl md:text-7xl font-bold">
                  {slide.title}
                </h1> */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold leading-tight"
                >
                  {slide.title}
                </motion.h1>
             
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
                >
                  {slide.description}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 rounded-full bg-blue-600 px-8 py-4 font-semibold shadow-lg transition hover:bg-blue-700"
                >
                  Learn More
                </motion.button>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
                  ↓
                </div>

              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;