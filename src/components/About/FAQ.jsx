
import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "../../data/FaqData";

const faqContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

const faqItem = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            FAQ
          </p>

          <h2 className="mt-2 text-center text-4xl font-bold leading-[1.2] text-white md:text-5xl">
            Frequently{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Find answers to the most common questions about our services,
            process, and support.
          </p>
        </div>

        {/* FAQ List */}
        <motion.div
          variants={faqContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="space-y-5"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={faqItem}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/[0.05]
                backdrop-blur-md
                transition-all duration-300
                hover:border-blue-500/40
                hover:bg-white/[0.07]
                hover:shadow-[0_15px_45px_rgba(59,130,246,0.12)]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-28
                  w-28
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                  opacity-0
                  transition-all duration-500
                  group-hover:scale-125
                  group-hover:opacity-100
                "
              />

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  relative z-10
                  flex w-full
                  items-center justify-between
                  gap-5
                  px-6 py-5
                  text-left
                "
              >
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {faq.question}
                </h3>

                <motion.span
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    flex h-8 w-8
                    shrink-0
                    items-center justify-center
                    rounded-full
                    border border-blue-400/20
                    bg-blue-500/10
                    text-2xl
                    leading-none
                    text-blue-400
                  "
                >
                  {activeIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              {/* Answer */}
              <div
                className={`
                  overflow-hidden
                  transition-all duration-500 ease-in-out
                  ${
                    activeIndex === index
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <p className="px-6 pb-6 leading-7 text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;



// import { useState } from "react";
// import { faqs } from "../../data/FaqData";

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
//             FAQ
//           </p>
//           <h2 className="text-center text-4xl font-bold leading-[1.2] text-white md:text-5xl">
//             Frequently{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Asked Questions
//             </span>
//           </h2>

//           <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
//             Find answers to the most common questions about our services,
//             process, and support.
//           </p>
//         </div>

//         {/* FAQ List */}
//         <div className="space-y-5">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex justify-between items-center px-6 py-5 text-left"
//               >
//                 <h3 className="text-lg md:text-xl font-semibold">
//                   {faq.question}
//                 </h3>

//                 <span className="text-3xl text-blue-400">
//                   {activeIndex === index ? "−" : "+"}
//                 </span>
//               </button>

//               <div
//                 className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                   activeIndex === index
//                     ? "max-h-40 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <p className="px-6 pb-6 text-gray-400 leading-7">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;
