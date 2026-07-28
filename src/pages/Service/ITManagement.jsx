import itManagementGif from "../../assets/services/IT Management.gif";
import { FaCheckCircle } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";

const features = [
  "IT Strategy & Planning — Align IT initiatives with business goals and digital transformation.",
  "Infrastructure Management — Monitor and optimize servers, storage, networks, and enterprise systems.",
  "Cybersecurity Management — Protect business assets with firewalls, encryption, and compliance controls.",
  "Cloud Management — Manage public, private, hybrid, and multi-cloud environments efficiently.",
  "Data Management — Secure backup, disaster recovery, governance, and business continuity.",
  "IT Service Management (ITSM) — Streamline helpdesk, incident, change, and service request management.",
  "Governance & Compliance — Ensure regulatory compliance, IT audits, and risk management.",
];

const ITManagement = () => {
  return (
    <main className="bg-[#06232a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative flex justify-center lg:justify-center mb-8 lg:mb-0">
              {/* Blue Glow */}
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px] rounded-full bg-blue-500/20 blur-[80px] lg:blur-[100px]"></div>

              {/* Purple Glow */}
              <div className="absolute w-40 h-40 sm:w-52 sm:h-52 lg:w-[280px] lg:h-[280px] rounded-full bg-purple-500/15 blur-[60px] lg:blur-[80px] top-8 left-8"></div>

              <img
                src={itManagementGif}
                alt="IT Management"
                className="relative z-10 w-60 sm:w-72 md:w-80 lg:w-full object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left mt-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                IT <span className="text-blue-500">Management</span>
              </h1>

              <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                Our{" "}
                <span className="font-semibold text-white ">IT Management</span>{" "}
                services help organizations efficiently manage, monitor, and
                optimize their entire IT infrastructure. From strategic planning
                and infrastructure management to cloud services, cybersecurity,
                and compliance, we deliver comprehensive IT solutions that
                improve operational efficiency, strengthen security, and support
                long-term business growth.
              </p>

              {/* Key Features */}
              <div className="mt-8 lg:mt-0">
                <h2 className="text-2xl font-semibold text-blue-500 mt-1 mb-6">
                  Key Features
                </h2>

                <div className="space-y-1">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-center lg:justify-start gap-3 text-left"
                    >
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <ServiceCTA />
      </section>

      {/* Other Services */}
      <OtherServices currentSlug="it-management" />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ITManagement;
