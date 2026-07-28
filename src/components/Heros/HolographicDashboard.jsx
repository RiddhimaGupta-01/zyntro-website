import { motion } from "framer-motion";

const HolographicDashboard = () => {
  const bars = [40, 65, 50, 85, 70, 95];

  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative w-full max-w-lg scale-80 sm:scale-100"
    >

      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />


      {/* Dashboard */}
      <div className="relative rounded-3xl border border-white/20 bg-white/10 p-4 sm:p-6 backdrop-blur-xl shadow-2xl hover:translate-y-2 transition">


        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">
              Zyntro Analytics
            </p>

            <h2 className="text-xl sm:text-2xl font-bold">
              Business Growth
            </h2>
          </div>


          <div className="rounded-full bg-green-400/20 px-3 py-1 text-sm text-green-400">
            ● Live
          </div>

        </div>



        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4">


          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-gray-400">
              Customers
            </p>

            <h3 className="mt-2 text-2xl sm:text-3xl font-bold">
              1.5L+
            </h3>
          </div>



          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-gray-400">
              Retailers
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              3K+
            </h3>
          </div>


        </div>




        {/* Graph */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">

          <p className="mb-4 text-sm text-gray-400">
            Growth Overview
          </p>


          <div className="flex h-32 items-end gap-3">

            {bars.map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-cyan-300"
              />
            ))}

          </div>

        </div>



        {/* Bottom Status */}
        <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">

          <span className="text-sm text-gray-400">
            System Status
          </span>

          <span className="text-green-400">
            Operational
          </span>

        </div>


      </div>


    </motion.div>
  );
};


export default HolographicDashboard;


// import { motion } from "framer-motion";

// const HolographicDashboard = () => {
//   return (
//     <motion.div
//       animate={{ y: [0, -15, 0] }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className="relative w-full max-w-md"
//     >
//       <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">

//         <div className="mb-6 flex justify-between">
//           <h3 className="text-lg font-semibold">
//             Zyntro Dashboard
//           </h3>

//           <span className="text-sm text-green-400">
//             ● Live
//           </span>
//         </div>


//         <div className="grid grid-cols-2 gap-4">

//           <div className="rounded-xl bg-white/10 p-4">
//             <p className="text-sm text-gray-400">
//               Users
//             </p>
//             <h4 className="mt-2 text-2xl font-bold">
//               1.5L+
//             </h4>
//           </div>


//           <div className="rounded-xl bg-white/10 p-4">
//             <p className="text-sm text-gray-400">
//               Retailers
//             </p>
//             <h4 className="mt-2 text-2xl font-bold">
//               3K+
//             </h4>
//           </div>

//         </div>


//         <div className="mt-6 h-32 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4">
//           <div className="flex h-full items-end gap-2">
//             {[40, 70, 50, 90, 60].map((height, index) => (
//               <div
//                 key={index}
//                 style={{ height: `${height}%` }}
//                 className="w-full rounded-t-lg bg-blue-400/60"
//               />
//             ))}
//           </div>
//         </div>


//       </div>
//     </motion.div>
//   );
// };


// export default HolographicDashboard;