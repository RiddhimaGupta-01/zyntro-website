
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/servicesData";
import {
  staggerContainer,
  cardVariant,
} from "../../utils/animations";

import typingSound from "../../assets/typing.mp3";

const Services = () => {
  const [typedText, setTypedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const sectionRef = useRef(null);
  const audioRef = useRef(null);

  const text =
    "Future-ready technology for modern businesses. Delivering innovation with confidence and reliability.";

  // ================= AUDIO UNLOCK =================
  useEffect(() => {
    const unlockAudio = () => {
      const audio = audioRef.current;

      if (!audio) return;

      audio.volume = 0.18;

      // Unlock audio after first user interaction
      audio
        .play()
        .then(() => {
          audio.pause();
          audio.currentTime = 0;
        })
        .catch(() => {});
    };

    window.addEventListener("click", unlockAudio, {
      once: true,
    });

    window.addEventListener("touchstart", unlockAudio, {
      once: true,
    });

    window.addEventListener("scroll", unlockAudio, {
      once: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
    };
  }, []);

  // ================= TYPEWRITER =================
  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    const audio = audioRef.current;

    const interval = setInterval(() => {
      setTypedText(text.slice(0, index + 1));

      // Play typing sound
      if (audio) {
        audio.currentTime = 0;
        audio.volume = 0.18;

        audio.play().catch(() => {});
      }

      index++;

      if (index >= text.length) {
        clearInterval(interval);

        // Stop sound after typing finishes
        setTimeout(() => {
          if (audio) {
            audio.pause();
            audio.currentTime = 0;
          }
        }, 100);
      }
    }, 38);

    return () => {
      clearInterval(interval);

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [hasStarted]);

  // ================= START ON VIEW =================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-20 pb-8 lg:pt-24 lg:pb-10"
    >
      {/* ================= TYPING AUDIO ================= */}
      <audio
        ref={audioRef}
        src={typingSound}
        preload="auto"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ================= SECTION HEADING ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
            }}
            className="text-center text-4xl font-bold text-white md:text-5xl"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Services
            </span>
          </motion.h2>

          {/* ================= SUB HEADING ================= */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
              delay: 0.1,
            }}
            className="mt-5 text-center text-lg font-bold text-white md:text-xl"
          >
            We Build Digital Solutions
          </motion.p>

          {/* ================= TYPEWRITER ================= */}
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="mx-auto mt-6 min-h-[56px] max-w-3xl text-center text-base leading-7 text-gray-400 md:text-lg"
          >
            {typedText}

            {hasStarted && typedText.length < text.length && (
              <span className="ml-1 animate-pulse text-cyan-400">
                |
              </span>
            )}
          </motion.p>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-14 grid grid-cols-2 items-stretch gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id ?? index}
              variants={cardVariant}
              whileHover={{
                y: -6,
              }}
              className="group relative h-full [perspective:1000px]"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;






// import { motion } from "framer-motion";
// import ServiceCard from "./ServiceCard";
// import { services } from "../../data/servicesData";
// import {
//   staggerContainer,
//   cardVariant,
// } from "../../utils/animations";


// const Services = () => {
//   return (
//     <section className="relative overflow-hidden pt-20 pb-8 lg:pt-24 lg:pb-10">
   

//       <div className="relative z-10 mx-auto max-w-7xl px-6">

//         {/* Section Heading */}
//         <div className="mx-auto max-w-3xl text-center">

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.45 }}
//             className="text-center text-4xl font-bold text-white md:text-5xl"
//           >
//             Our{" "}
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               Comprehensive Services
//             </span>
//           </motion.h2>
// <motion.p
//   initial={{ opacity: 0, y: 15 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true, amount: 0.2 }}
//   transition={{ duration: 0.45, delay: 0.1 }}
//   className="mt-5 text-center text-lg font-bold text-white md:text-xl"
// >
//   We Build Digital Solutions
// </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.5, delay: 0.15 }}
//             className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-gray-400 md:text-lg"
//           >
//             Future-ready technology for modern businesses.
//             Delivering innovation with confidence and reliability.
//           </motion.p>

//         </div>

//         {/* Service Cards */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.12,
//           }}
//           className="mt-14 grid grid-cols-2 items-stretch gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id ?? index}
//               variants={cardVariant}
//               whileHover={{
//                 y: -6,
//               }}
//               className="group relative h-full [perspective:1000px]"
//             >
//               <ServiceCard service={service} />
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Services;
