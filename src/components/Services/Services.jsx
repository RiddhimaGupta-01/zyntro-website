import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/servicesData";
import {
  fadeUp,
  staggerContainer,
  cardVariant,
} from "../../utils/animations";
import BackgroundEffects from "../common/BackgroundEffects.jsx";

const Services = () => {
  return (
    <section className="relative bg-[#121732] py-24 overflow-hidden">
      <BackgroundEffects />
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-blue-500 font-semibold text-xl tracking-wider"
        >
          OUR SERVICES
        </motion.h1> */}<motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
       <h2 className="text-center text-5xl font-bold text-white">
  Our <span className="text-blue-500">Comprehensive </span> Services
</h2>
        </motion.div>

        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-center text-4xl font-medium text-white"
        >
          We Build Digital Solutions
        </motion.h4>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-10 max-w-6xl text-xl text-center text-gray-400"
        >
      Future-ready technology for modern businesses.
      Delivering innovation with confidence and reliability
        </motion.p>
        
   <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
>
  {services.map((service, index) => (
    <motion.div
      key={index}
      variants={cardVariant}
      className="h-full"
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

// const Services = () => {
//   return (
//     <section className="bg-[#050816] py-24">
//       <div className="mx-auto max-w-7xl px-6">

//         <motion.h4
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center text-sm uppercase tracking-[4px] text-[#00C2FF]"
//         >
//           Our Comprehensive Services
//         </motion.h4>

//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="mx-auto mt-4 max-w-3xl text-center text-5xl font-bold text-white"
//         >
//           Transforming Ideas Into Digital Success
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mx-auto mt-6 max-w-3xl text-center text-gray-400"
//         >
//           We provide innovative IT solutions including web development,
//           mobile applications, cloud computing, cybersecurity,
//           enterprise management, and digital transformation services.
//         </motion.p>
//         {/*
//         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"> */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//           {services.map((service) => (
//             <ServiceCard
//               key={service.id}
//               service={service}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;