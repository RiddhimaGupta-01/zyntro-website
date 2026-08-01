import { FaUserTie } from "react-icons/fa";

const DirectorCard = ({
  name,
  designation,
  message,
  reverse = false,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div
        className={`group flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-8 rounded-3xl border border-blue-500/20 bg-[#0f172a] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_20px_60px_rgba(99,102,241,0.35)] sm:p-8 lg:gap-12 lg:p-10`}
      >
        {/* Director Icon */}
        <div className="flex w-full justify-center lg:w-1/3">
          <div className="flex h-56 w-56 items-center justify-center rounded-2xl border-2 border-purple-500 bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] sm:h-72 sm:w-72">
            <FaUserTie className="h-24 w-24 text-blue-400 transition-all duration-500 group-hover:text-purple-400 sm:h-32 sm:w-32" />
          </div>
        </div>

        {/* Content */}
        <div className="w-full text-center lg:w-2/3 lg:text-left">
          <h2 className="mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
            A Message from Our Director
          </h2>

          <h3 className="mt-5 text-xl font-semibold text-blue-400 transition duration-300 group-hover:text-purple-400 sm:text-2xl">
            {name}
          </h3>

          <p className="mb-5 text-sm text-purple-400 sm:text-base">
            {designation}
          </p>

          <p className="whitespace-pre-line text-sm leading-8 text-gray-300 sm:text-base">
            {message}
          </p>

          <div className="mt-8">
            <p className="text-xl italic text-white sm:text-2xl">{name}</p>

            <p className="mt-2 text-sm text-gray-400 sm:text-base">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorCard;


// const DirectorCard = ({
//   image,
//   name,
//   designation,
//   message,
//   reverse = false,
// }) => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       <div
//         className={`group flex flex-col ${
//           reverse ? "lg:flex-row-reverse" : "lg:flex-row"
//         } items-center gap-8 lg:gap-12 rounded-3xl border border-blue-500/20 bg-[#0f172a] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_20px_60px_rgba(99,102,241,0.35)]`}
//       >
//         {/* Image */}
//         <div className="w-full lg:w-1/3 flex justify-center">
//           <img
//             src={image}
//             alt={name}
//             className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-2xl border-2 border-purple-500 shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
//           />
//         </div>

//         {/* Content */}
//         <div className="w-full lg:w-2/3 text-center lg:text-left">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             A Message from Our Director
//           </h2>

//           <h3 className="text-xl sm:text-2xl text-blue-400 font-semibold mt-5 transition duration-300 group-hover:text-purple-400">
//             {name}
//           </h3>

//           <p className="text-purple-400 mb-5 text-sm sm:text-base">
//             {designation}
//           </p>

//           <p className="text-gray-300 leading-8 text-sm sm:text-base whitespace-pre-line">
//             {message}
//           </p>

//           <div className="mt-8">
//             <p className="text-xl sm:text-2xl italic text-white">{name}</p>

//             <p className="text-gray-400 mt-2 text-sm sm:text-base">
//               {designation}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DirectorCard;


// const DirectorCard = ({
//   image,
//   name,
//   designation,
//   message,
//   reverse = false,
// }) => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-10">
// <div
//   className={`group flex flex-col ${
//     reverse ? "lg:flex-row-reverse" : "lg:flex-row"
//   } items-center gap-10 bg-[#0f172a] border border-blue-500/20 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_20px_60px_rgba(99,102,241,0.35)]`}
// >
//         {/* Image */}
//         <div className="lg:w-1/3 flex justify-center">
//           <img
//             src={image}
//             alt={name}
//             className="w-72 h-72 object-cover rounded-2xl border-2 border-purple-500 shadow-lg"
//           />
//         </div>

//         {/* Content */}
//         <div className="lg:w-2/3 text-white">
//           <h2 className="text-3xl font-bold mb-2">
//             A Message from Our Director
//           </h2>

//           <h3 className="text-2xl text-blue-400 font-semibold mt-6">
//             {name}
//           </h3>

//           <p className="text-purple-400 mb-5">{designation}</p>

//           <p className="text-gray-300 leading-8 whitespace-pre-line">
//             {message}
//           </p>

//           <div className="mt-8">
//             <p className="text-2xl font-signature italic text-white">
//               {name}
//             </p>

//             <p className="text-gray-400 mt-2">{designation}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DirectorCard;