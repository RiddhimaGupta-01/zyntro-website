import energyGif from "../../assets/industries/energy.gif";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Energy = () => {
  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-br from-[#1c072f] via-[#0B2340] to-[#0e4585] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
                   <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Energy & <span className="text-blue-500">Utilities</span>
              </h1>

            </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center -mt-8">
            {/* Left Image */}
            <div className="relative flex justify-center lg:justify-start">
              {/* Blue Glow */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[100px]"></div>

              {/* Purple Glow */}
              <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 right-10"></div>

              {/* Image */}
              <img
                src={energyGif}
                alt="Energy & Utilities"
                className="relative z-10 w-full max-w-xl object-contain rounded-3xl"
              />
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
         
              <p className="mt-6 text-sm md:text-base  text-gray-300 leading-7">
                At{" "}
                <span className="font-semibold text-white">
                  Zyntro Software Solutions Pvt. Ltd.
                </span>
                , we empower the energy and utilities sector with innovative
                technology solutions that optimize operations, improve
                efficiency, and accelerate digital transformation. Our expertise
                includes energy management systems, real-time monitoring,
                cloud-based platforms, predictive analytics, and intelligent
                automation designed to modernize energy infrastructure.
              </p>

              <p className="mt-6 text-sm md:text-base  text-gray-300 leading-7">
                By integrating advanced technologies such as Artificial
                Intelligence (AI), Internet of Things (IoT), cloud computing,
                and data analytics, we help organizations streamline energy
                generation, distribution, and consumption. Our solutions improve
                operational reliability, reduce costs, enable smarter
                decision-making, and ensure compliance with evolving industry
                standards while supporting long-term sustainability.
              </p>

              <p className="mt-6 text-sm md:text-base  text-gray-300 leading-7">
                Whether you're a power generation company, utility provider,
                renewable energy organization, or infrastructure enterprise,
                Zyntro delivers secure, scalable, and future-ready digital
                solutions that enhance customer experiences, strengthen
                operational performance, and accelerate the transition toward a
                smarter, greener, and more sustainable energy ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Energy;