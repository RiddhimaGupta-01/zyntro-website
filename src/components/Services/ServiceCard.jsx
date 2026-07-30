const ServiceCard = ({ service, compact = false }) => {
  const Icon = service.icon;

  // Compact Card (Service Pages)
  if (compact) {
    return (
      <div className="block h-full">
        <div className="group h-[170px] cursor-default rounded-2xl border border-white/10 bg-[#121c30] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] flex flex-col items-center justify-center text-center">
          <div className="h-12 flex items-center justify-center">
          <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          </div>

      <h3 className="mt-3 sm:mt-5 text-sm sm:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
  {service.title}
</h3>
        </div>
      </div>
    );
  }

  // Home Page Ca
return (
  <div className="group relative flex h-full min-h-[180px] flex-col rounded-2xl border border-white/10 bg-[#081632] p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]">

    <Icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-blue-500 transition-transform duration-300 group-hover:scale-110" />

    <h3 className="mt-3 min-h-[52px] text-base sm:text-lg lg:text-xl font-semibold leading-tight text-white group-hover:text-blue-400">
      {service.title}
    </h3>

    <p className="mt-2 flex-1 text-xs sm:text-sm lg:text-base leading-6 text-gray-400">
      {service.description}
    </p>

  </div>
);
};

export default ServiceCard;


// import { Link } from "react-router-dom";

// const ServiceCard = ({ service, compact = false }) => {
//   const Icon = service.icon;

//   // Compact Card (Service Pages)

// if (compact) {
//   return (
//     <Link to={`/services/${service.slug}`} className="block h-full">
//       <div className="group h-[170px] cursor-pointer rounded-2xl border border-white/10 bg-[#121c30] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] flex flex-col items-center justify-center text-center">

//         <div className="h-12 flex items-center justify-center">
//           <Icon className="h-10 w-10 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
//         </div>

//         <h3 className="mt-5 h-14 flex items-center justify-center text-lg font-semibold leading-snug text-white group-hover:text-blue-400">
//           {service.title}
//         </h3>

//       </div>
//     </Link>
//   );
// }

//   // Home Page Card
//   return (
//     <div className="group relative h-full w-full rounded-2xl border border-white/10 bg-[#081632] p-3 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]">
//       <Icon className="h-7 w-7 sm:h-10 sm:w-10 text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />

//       <h3 className="mt-3 sm:mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
//         {service.title}
//       </h3>

//       <p className="mt-2 sm:mt-3 text-xs sm:text-base leading-relaxed text-gray-400">
//         {service.description}
//       </p>
//     </div>
//   );
// };

// export default ServiceCard;


