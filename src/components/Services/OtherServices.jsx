import { services } from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

const OtherServices = ({ currentSlug }) => {
  const otherServices = services.filter(
    (service) => service.slug !== currentSlug,
  );

  return (
    <section className="
group
h-full 
border border-blue-500/20
bg-gradient-to-br
from-[#0F172A]
to-[#16213E]
p-6

">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-5 transition-all
duration-300
hover:border-blue-500
hover:from-[#13203A]
hover:to-[#1B2B4A]
hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]">
          {otherServices.map((service) => (
            <div
              key={service.id}
              className="w-full sm:w-[48%] md:w-[31%] lg:w-[18%]"
            >
              <ServiceCard service={service} compact />
            </div>
          ))}
        </div>
        {/* 
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {otherServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              compact
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default OtherServices;
