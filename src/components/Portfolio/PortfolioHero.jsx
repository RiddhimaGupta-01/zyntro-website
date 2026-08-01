
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import hero from "../../assets/portfolio/img.png";

const PortfolioHero = () => {
  const fullText = "Building Digital Solutions";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typing);
      }
    }, 65);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:min-h-screen lg:flex lg:items-center">

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* ================= LEFT ================= */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-blue-300 backdrop-blur-xl sm:text-sm"
            >
              <HiSparkles className="text-blue-400" />
              Our Portfolio
            </motion.div>

            {/* Heading */}
          
<h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">

  Building{" "}

  <span className="block">
    <span className="relative inline-block">
      <motion.span
        className="inline-block overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 1.1,
          ease: "linear",
        }}
        style={{
          whiteSpace: "nowrap",
        }}
      >
        Digital Solutions
      </motion.span>
    </span>
  </span>

  <span className="block">
    <span className="relative inline-block">
      <motion.span
        className="inline-block overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 1.1,
          delay: 1.1,
          ease: "linear",
        }}
        style={{
          whiteSpace: "nowrap",
        }}
      >
        That Drive Growth
      </motion.span>
    </span>
  </span>

  <span className="block">
    Across India
  </span>

</h1>



            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0"
            >
              Explore how Zyntro Software Solutions empowers businesses
              through innovative technology, scalable digital platforms,
              and enterprise-grade solutions built for long-term success.
            </motion.p>

          </div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative mt-12 flex min-h-[420px] items-center justify-center sm:min-h-[500px] lg:mt-0"
          >

            {/* Blue Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[120px] sm:h-[400px] sm:w-[400px]"
            />

            {/* Cyan Glow */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[90px] sm:h-[300px] sm:w-[300px]"
            />

            {/* Hero Image */}
            <motion.img
              src={hero}
              alt="Portfolio Illustration"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[340px] object-contain drop-shadow-[0_25px_60px_rgba(59,130,246,0.35)] sm:max-w-[450px] lg:max-w-[520px] xl:max-w-[600px]"
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;


// import { motion } from "framer-motion";
// import { HiSparkles } from "react-icons/hi2";
// import hero from "../../assets/portfolio/img.png";

// const PortfolioHero = () => {
//   return (
//     <section className="relative overflow-hidden  pt-28 sm:pt-32 lg:min-h-screen lg:flex lg:items-center">
    
   

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         <div className="grid items-center gap-14 lg:grid-cols-2">

//           {/* LEFT */}
//           <div className="text-center lg:text-left">

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-blue-300 backdrop-blur-xl"
//             >
//               <HiSparkles />
//               Our Portfolio
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.15 }}
//               viewport={{ once: true }}
//               className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
//             >
//               Building{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
//                 Digital Solutions
//               </span>
//               <br />
//               That Drive Growth
//               <br />
//               Across India
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               viewport={{ once: true }}
//               className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0"
//             >
//               Explore how Zyntro Software Solutions empowers businesses
//               through innovative technology, scalable digital platforms,
//               and enterprise-grade solutions built for long-term success.
//             </motion.p>

//           </div>

//           {/* RIGHT */}
// <motion.div
//   initial={{ opacity: 0, x: 60 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
//   className="relative mt-20 flex justify-center lg:mt-0"
// >
//   {/* Blue Glow */}
//   <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/30 blur-[140px]" />

// <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
//   {/* Hero Illustration */}
//   <motion.img
//     src={hero}
//     alt="Portfolio Illustration"
//     animate={{ y: [0, -10, 0] }}
//     transition={{
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//     className="relative z-10 w-full max-w-md object-contain drop-shadow-[0_25px_60px_rgba(59,130,246,0.35)] sm:max-w-lg lg:max-w-2xl xl:max-w-3xl"
//   />
// </motion.div>
         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioHero;