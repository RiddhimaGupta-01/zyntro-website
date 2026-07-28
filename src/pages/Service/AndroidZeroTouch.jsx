import zeroTouchGif from "../../assets/services/Android Zero Touch Enrollment.gif";
import { FaCheckCircle } from "react-icons/fa";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const features = [
  "Automated Device Enrollment",
  "Bulk Provisioning",
  "Security & Compliance",
  "Seamless MDM Integration",
  "Pre-configured Wi-Fi",
  "Scalability & Flexibility",
  "Cost Efficiency",
  "User-friendly Setup",
];

const AndroidZeroTouch = () => {
  return (
    <main className="bg-[#1f0824] text-white">
      <Navbar />

      {/* Hero Section */}
{/* Hero Section */}
<section className="py-16 lg:py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-5 sm:px-6">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* Left Image */}
      <div className="relative flex justify-center lg:justify-start">

        {/* Blue Glow */}
        <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full bg-blue-500/20 blur-[90px]"></div>

        {/* Purple Glow */}
        <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-0 right-0"></div>

        <img
          src={zeroTouchGif}
          alt="Android Zero Touch Enrollment"
          className="
            relative
            w-[260px] 
            sm:w-[350px]
            lg:w-[420px]
            h-auto
            mt-20
            rounded-2xl
            object-contain
          "
        />

      </div>


      {/* Right Content */}
      <div className="text-center lg:text-left">

        <span className="uppercase tracking-[3px] text-blue-400 font-medium text-sm">
          Android Zero Touch
        </span>


        <h1 className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          mt-3
          leading-tight
        ">
          Android Zero Touch Enrollment
        </h1>


        <p className="
          mt-6
          text-gray-400
          leading-7
          sm:leading-8
          text-sm
          sm:text-base
        ">
          Welcome to Zyntro, your trusted partner for Android Zero Touch
          Enrollment. We simplify enterprise device deployment through
          secure, automated provisioning that saves time, reduces manual
          effort, and ensures every device is business-ready from the
          moment it is powered on.
        </p>


        <div className="
          flex 
          flex-col
          sm:flex-row
          justify-center
          lg:justify-start
          gap-4
          mt-8
        ">

          <a
            href="mailto:info@zyntro.in"
            className="
              rounded-xl 
              border 
              border-blue-500 
              px-6 
              py-3
              text-center
              hover:bg-blue-600 
              transition
            "
          >
            Contact Support
          </a>


          <a
            href="tel:+919956353236"
            className="
              rounded-xl 
              bg-blue-600 
              px-6 
              py-3
              text-center
              hover:bg-blue-700 
              transition
            "
          >
            Call +91-9956353236
          </a>

        </div>

      </div>

    </div>
  </div>
</section>

      {/* Quick Overview */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-8">
            <h2 className="text-2xl font-bold mb-5">Quick Overview</h2>

            <p className="text-gray-400 leading-8">
              Android Zero Touch Enrollment is a deployment solution provided by
              Google that allows businesses to automatically configure Android
              devices when they are first powered on. Devices arrive
              enterprise-ready with pre-configured apps, policies, Wi-Fi
              settings, and security configurations.
            </p>
          </div>
        </div>
      </section>

      {/* What Is */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            What is Android Zero Touch Enrollment?
          </h2>

          <p className="text-gray-400 leading-8">
            Android Zero Touch Enrollment is Google's enterprise deployment
            solution that enables organizations to automatically enroll Android
            devices into their Mobile Device Management (MDM) platform during
            first boot. Instead of configuring every device manually, IT teams
            can deploy hundreds of devices with consistent settings,
            applications, and security policies in just a few minutes.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">How Does It Work?</h2>

          <p className="text-gray-400 leading-8">
            Devices are registered by an authorized reseller in the Zero Touch
            Enrollment Portal and linked to your MDM platform. Once a user
            powers on the device and connects to the internet, it automatically
            downloads enterprise applications, Wi-Fi settings, security
            policies, and business configurations without any manual setup.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Key Features</h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0B1220] p-5"
              >
                <FaCheckCircle className="text-blue-500 text-lg" />

                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceCTA />

      <OtherServices currentSlug="android-zero-touch-enrollment" />

      <Footer />
    </main>
  );
};

export default AndroidZeroTouch;
