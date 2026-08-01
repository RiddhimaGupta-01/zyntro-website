
import { motion } from "framer-motion";
import { services } from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

const OtherServices = ({ currentSlug }) => {
  const otherServices = services.filter(
    (service) => service.slug !== currentSlug,
  );

  return (
    <section
      className="
        h-full
        border border-blue-500/20
        bg-gradient-to-br
        from-[#0F172A]
        to-[#16213E]
        p-6
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-12
            text-center
            text-3xl
            font-bold
            text-white
            sm:text-4xl
          "
        >
          Our Services
        </motion.h2>

        {/* Services */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: (index % 5) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <ServiceCard
                service={service}
                compact
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OtherServices;








// import { services } from "../../data/servicesData";
// import ServiceCard from "./ServiceCard";

// const OtherServices = ({ currentSlug }) => {
//   const otherServices = services.filter(
//     (service) => service.slug !== currentSlug,
//   );

//   return (
//     <section className="
// group
// h-full 
// border border-blue-500/20
// bg-gradient-to-br
// from-[#0F172A]
// to-[#16213E]
// p-6

// ">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-white text-center mb-12">
//           Our Services
//         </h2>
//     <div className="flex flex-wrap justify-center gap-5">
//           {otherServices.map((service) => (
//             <div
//               key={service.id}
//               className="w-full sm:w-[48%] md:w-[31%] lg:w-[18%]"
//             >
//               <ServiceCard service={service} compact />
//             </div>
//           ))}
//         </div>
        
      
//       </div>
//     </section>
//   );
// };

// export default OtherServices;
