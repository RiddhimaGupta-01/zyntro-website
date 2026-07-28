import androidManagement from "../../assets/services/Android Management.gif";
import { FaCheckCircle, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ServiceCTA from "../../components/Services/ServiceCTA";

import OtherServices from "../../components/Services/OtherServices";
import ContactInfo from "../../components/Services/ContactInfo";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const features = [
  "Comprehensive Device Management",
  "Security & Compliance",
  "App Deployment & Management",
  "Remote Device Management",
  "User & Access Control",
  "Real-Time Analytics & Reporting",
  "Ongoing Support & Consultation",
];

const AndroidManagement = () => {
  return (
    <main className="bg-[#171e3d] text-white">
          <Navbar />
      {/* Service Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-x-hidden">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid  lg:grid-cols-2 gap-8 lg:gap-16 items-center">
         

          {/* Left Image */}
          <div className="relative flex justify-center lg:justify-start order-1 ">
            {/* Blue Glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[100px]"></div>

            {/* Purple Glow */}
            <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 right-10"></div>
            <img
              src={androidManagement}
              alt="Android Management"
             className="relative z-10 w-80 rounded-2xl sm:w-72 md:w-96 lg:w-full lg:max-w-lg object-contain"
            />
          </div>

          {/* Right Content */}
        <div className="text-center lg:text-left order-2">
            <span className="text-blue-400 font-medium uppercase tracking-wider">
              Android Management
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold mt-3">
              Android Management
            </h1>

            <p className="text-gray-400 mt-5 text-sm sm:text-base lg:text-lg leading-8">
              Welcome to Zyntro, your trusted partner in Android device
              management. We provide advanced solutions to optimize, secure, and
              streamline device management for businesses of all sizes.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-6">
              Our Android Management Services
            </h2>
            <div className="space-y-3">
  {features.map((feature) => (
    <div
      key={feature}
      className="flex items-start justify-center lg:justify-start gap-3 text-left"
    >
      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
      <p className="text-sm sm:text-base text-gray-300 leading-7">
        {feature}
      </p>
    </div>
  ))}
</div>

       
            
          </div>
        </div>
        </div><ServiceCTA />
      </section>

      {/* Other Services */}
      <OtherServices currentSlug="android-management-service" />

      <Footer />
    </main>
  );
};

export default AndroidManagement;
