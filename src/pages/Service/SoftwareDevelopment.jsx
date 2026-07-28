import softwareDevelopmentGif from "../../assets/services/Software Development.gif";
import { FaCheckCircle } from "react-icons/fa";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const features = [
  "Custom Software Development — Tailor-made software solutions designed to meet your unique business requirements.",
  "Web Application Development — Build responsive, secure, and high-performance web applications.",
  "Mobile Application Development — Native and cross-platform Android & iOS applications.",
  "Cloud-Based Solutions — Scalable cloud applications, migration, and cloud integration services.",
  "API Development & Integration — Secure REST APIs and seamless third-party integrations.",
  "Enterprise Software Solutions — CRM, ERP, HRMS, and business automation systems.",
  "Maintenance & Support — Continuous monitoring, updates, bug fixes, and performance optimization.",
];

const SoftwareDevelopment = () => {
  return (
    <>
      {/* Hero Section */}
      <Navbar />

      <section className="bg-[#260732] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl md:text-5xl font-bold text-white leading-tight">
                Software <span className="text-blue-500">Development</span>
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-300 leading-7">
                Our{" "}
                <span className="font-semibold text-white">
                  Software Development
                </span>{" "}
                services help businesses transform ideas into innovative,
                scalable, and secure digital solutions. From custom software and
                web applications to mobile apps, cloud solutions, and enterprise
                systems, we deliver technology that improves efficiency,
                enhances user experiences, and accelerates business growth.
              </p>

              {/* Key Features */}
              <div className="mt-5">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Key Features
                </h2>

                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-center lg:justify-start gap-3 text-left"
                    >
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />

                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end lg:-mt-40">
              {/* Blue Glow */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[100px]"></div>

              {/* Purple Glow */}
              <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 right-10"></div>

              {/* Image */}
              <img
                src={softwareDevelopmentGif}
                alt="Software Development"
                className="relative z-10 w-full max-w-xl mt-20 object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <ServiceCTA />
      </section>

      {/* Other Services */}
      <OtherServices currentSlug="software-development" />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;