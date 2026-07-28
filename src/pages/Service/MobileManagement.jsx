import mobileManagementGif from "../../assets/services/Mobile Management.gif"
import { FaCheckCircle } from "react-icons/fa";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const features = [
  "Device Configuration — Configure devices with apps, Wi-Fi, email, and security policies automatically.",
  "Security & Compliance — Enforce encryption, passcodes, remote lock, and remote wipe.",
  "Application Management — Install, update, and manage enterprise applications remotely.",
  "Device Monitoring — Monitor device health, usage, compliance, and security threats.",
  "Network Management — Secure access to enterprise Wi-Fi, VPN, and corporate resources.",
  "Remote Management — Troubleshoot devices and push updates from a centralized dashboard.",
  "Inventory & Reporting — Track devices and generate detailed reports.",
];
const MobileManagement = () => {
  return (
     <main>
    <Navbar/>
    
    <section className="bg-[#1f0634] pt-32 pb-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div>

      {/* Left Image */}
      <div className="relative flex justify-center lg:justify-start mb-8 lg:mb-50">
        {/* Blue Glow */}
        <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[100px]"></div>

        {/* Purple Glow */}
        <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 left-10"></div>

        <img
          src={mobileManagementGif}
          alt="Mobile Management"
          className="relative z-10 w-64 sm:w-80 md:w-96 lg:w-full max-w-xl  object-contain"
        />
        </div>
       
      </div>
      

   
     <div className="text-center lg:text-left ">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl md:text-5xl font-bold text-white leading-tight">
          Mobile <span className="text-blue-500">Management</span>
        </h1>

        <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-300 leading-7">
          Mobile Management enables organizations to securely manage, monitor,
          and protect smartphones, tablets, and other mobile devices from a
          centralized platform. At Zyntro, we provide enterprise-grade Mobile
          Device Management (MDM) solutions that simplify administration,
          strengthen security, and improve productivity.
        </p>

        <div className="mt-1">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Key Features
          </h2>

          <div className="space-y-1">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base leading-7">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
   <ServiceCTA/>

</section>

     <OtherServices currentSlug="mobile-management" />

      <Footer />
</main>
  )
}

export default MobileManagement