const WhyChooseCard = ({ icon, title, desc }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/50 hover:-translate-y-2 transition duration-300">

      <div className="text-3xl sm:text-4xl mb-3 sm:mb-5">
        {icon}
      </div>

      <h3 className= "text-base sm:text-xl font-bold mb-2 sm:mb-3">
        {title}
      </h3>

      <p className="text-gray-400 text:sm sm:text-base leading-6">
        {desc}
      </p>

    </div>
  );
};

export default WhyChooseCard;