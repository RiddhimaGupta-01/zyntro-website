import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/servicesData";
import {
  staggerContainer,
  cardVariant,
} from "../../utils/animations";


const Services = () => {
  return (
    <section className="relative overflow-hidden py-24">
   

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="text-center text-4xl font-bold text-white md:text-5xl"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Services
            </span>
          </motion.h2>
<motion.p
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.45, delay: 0.1 }}
  className="mt-5 text-center text-lg font-bold text-white md:text-xl"
>
  We Build Digital Solutions
</motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-gray-400 md:text-lg"
          >
            Future-ready technology for modern businesses.
            Delivering innovation with confidence and reliability.
          </motion.p>

        </div>

        {/* Service Cards */}
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

// import { AnimatePresence, motion } from "framer-motion";
// import ServiceCard from "./ServiceCard";
// import { services } from "../../data/servicesData";
// import {
//   staggerContainer,
//   cardVariant,
// } from "../../utils/animations";
// import GlobalBackground from "../GlobalBackground/GlobalBackground";


// const Services = () => {




//   return (
//     <section className="relative overflow-hidden  py-24">
//       <GlobalBackground />

//       <div className="relative z-10 mx-auto max-w-7xl px-6">

//         {/* Section Heading */}
//         <div className="mx-auto max-w-3xl text-center">

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center text-4xl font-bold text-white md:text-5xl"
//           >
//             Our{" "}
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               Comprehensive Services
//             </span>
//           </motion.h2>

//           <motion.h4
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mt-5 text-center text-lg font-bold text-white md:text-xl"
//           >
//             We Build Digital Solutions
//           </motion.h4>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-gray-400 md:text-lg"
//           >
//             Future-ready technology for modern businesses.
//             Delivering innovation with confidence and reliability.
//           </motion.p>

//         </div>

// <motion.div
//   variants={staggerContainer}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{
//     once: true,
//     amount: 0.12,
//   }}
//   className="mt-14 grid grid-cols-2 items-stretch gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
// >
//   {services.map((service, index) => (
//     <motion.div
//       key={service.id ?? index}
//       variants={cardVariant}
//       // layoutId={`service-${service.id ?? index}`}
                
//       whileHover={{
//         y: -8,
//         scale: 1.03,
//       }}
//       whileTap={{
//         scale: 0.98,
//       }}
//       className="group relative h-full [perspective:1000px]"
//      >
//       <ServiceCard service={service} />
//     </motion.div>
//   ))}
//         </motion.div>

       
        

//       </div>
//     </section>
//   );
// };

// export default Services;

