import cloudComputingGif from "../../assets/services/Cloud Computing.gif";
import { FaCheckCircle } from "react-icons/fa";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const features = [
  "Infrastructure as a Service (IaaS) — Scalable virtual servers, storage, and networking to support your business operations.",
  "Platform as a Service (PaaS) — Accelerate application development, testing, and deployment with cloud-based development platforms.",
  "Software as a Service (SaaS) — Access cloud-hosted business applications such as Microsoft 365, Google Workspace, and enterprise solutions.",
  "Cloud Security — Protect cloud environments with encryption, identity management, continuous monitoring, and compliance controls.",
  "Disaster Recovery & Backup — Ensure business continuity through automated backups, rapid disaster recovery, and data protection.",
  "Cloud Migration — Seamlessly migrate applications, databases, and workloads with minimal downtime and maximum reliability.",
  "24/7 Monitoring & Support — Continuous cloud monitoring, performance optimization, and expert technical assistance around the clock.",
  "Hybrid & Multi-Cloud Solutions — Integrate public, private, and hybrid cloud environments for greater flexibility and scalability.",
];

const CloudComputing = () => {
  return (
    <>
      {/* Hero Section */}
      <Navbar />

      <section className="bg-[#071a3f] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl md:text-5xl font-bold text-white leading-tight">
                Cloud <span className="text-blue-500">Computing</span>
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-300 leading-7">
                Our{" "}
                <span className="font-semibold text-white">
                  Cloud Computing
                </span>{" "}
                services empower businesses to modernize their IT
                infrastructure with secure, scalable, and cost-effective cloud
                solutions. We help organizations migrate, manage, and optimize
                cloud environments while ensuring high availability, enhanced
                security, and improved operational efficiency.
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
                src={cloudComputingGif}
                alt="Cloud Computing"
                className="relative z-10 w-full max-w-xl mt-20 object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <ServiceCTA />
      </section>

      {/* Other Services */}
      <OtherServices currentSlug="cloud-computing" />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CloudComputing;