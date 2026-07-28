import iosManagementGif from "../../assets/services/IOS Management.gif";
import { FaCheckCircle } from "react-icons/fa";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const features = [
  "Device Enrollment & Provisioning — Zero-touch setup with Apple Business Manager (ABM).",
  "Security & Compliance — Enforce passcodes, encryption, remote lock, and remote wipe.",
  "Application Management — Securely deploy, update, and configure enterprise applications.",
  "Remote Device Management — Configure, monitor, and troubleshoot devices remotely.",
  "User & Identity Management — Role-based access control with AD/LDAP integration.",
  "Content Management — Secure document distribution and sharing restrictions.",
  "Analytics & Reporting — Monitor compliance, device inventory, and application performance.",
];

const IOSManagement = () => {
  return (
    <>
      {/* Hero Section */}
      <Navbar />
      <section className="bg-[#072339] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 Lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl md:text-5xl font-bold text-white leading-tight">
                iOS <span className="text-blue-500">Management</span>
              </h1>

              <p className="mt-5 text-sm sm:text-sm lg:text-lg text-gray-300 leading-7">
                Our{" "}
                <span className="font-semibold text-white">iOS Management</span>{" "}
                services empower organizations to securely deploy, manage, and
                protect Apple devices at scale. From automated enrollment to
                application deployment and compliance enforcement, we provide
                complete enterprise solutions that simplify device management,
                strengthen security, and improve productivity.
              </p>

              {/* Key Features */}
              <div className="mt-5">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Key Features
                </h2>

                <div className="space-y-1">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start justify-center lg:justify-start gap-3 text-left">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                      <p className=" text-sm sm:text-base text-gray-300 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end lg:-mt-50">
              {/* Blue Glow */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[100px]"></div>

              {/* Purple Glow */}
              <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 right-10"></div>

              {/* Image */}
              <img
                src={iosManagementGif}
                alt="iOS Management"
                className="relative z-10 w-full max-w-xl mt-30 object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
        {/* CTA */}
        <ServiceCTA />
      </section>

      {/* Other Services */}
      <OtherServices currentSlug="iso-management" />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default IOSManagement;
