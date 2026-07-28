import { FaCheckCircle } from "react-icons/fa";
import itSupportGif from "../../assets/services/IT Support.gif";
import Navbar from "../../components/Navbar/Navbar";
import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";

const features = [
  {
    title: "Help Desk Support",
    desc: "Fast resolution of user issues via phone, email, and remote support.",
  },
  {
    title: "Remote & On-Site Support",
    desc: "Technical assistance delivered remotely or at your business location.",
  },
  {
    title: "Network & Infrastructure",
    desc: "Network monitoring, setup, maintenance, and troubleshooting.",
  },
  {
    title: "Hardware & Software Support",
    desc: "Installation, upgrades, maintenance, and troubleshooting of IT assets.",
  },
  {
    title: "Cybersecurity",
    desc: "Protection against malware, ransomware, phishing, and cyber threats.",
  },
  {
    title: "Backup & Disaster Recovery",
    desc: "Reliable backup solutions and business continuity planning.",
  },
  {
    title: "Cloud Support",
    desc: "Deployment, management, and optimization of cloud environments.",
  },
  {
    title: "24/7 System Monitoring",
    desc: "Proactive monitoring to detect and resolve issues before they impact operations.",
  },
];

const ITSupport = () => {
  return (
    <main className="bg-[#112737] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#072339] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Image */}
            
            <div
              className="
                bg-white
                rounded-3xl
                p-8 mb-8 lg:mb-0
                shadow-[0_0_40px_rgba(37,99,235,0.25)]
              "
            >
              <img
                src={itSupportGif}
                alt="IT Support"
                className="
                  w-64
                  sm:w-80
                  md:w-96
                  lg:w-[420px]
                  mx-auto
                  rounded-2xl
                "
              /> 
              
              
              </div>
                 
              {/* Right Content */}
            <div className="text-center lg:text-left mt-4">

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400 mb-5">
                IT Support
              </h1>

              <p className="text-cyan-200 text-lg mb-6">
                Reliable 24/7 Technical Support for Modern Businesses
              </p>

              <p className="text-gray-300 text-base lg:text-lg leading-8 mb-5">
                Our IT Support services ensure your organization's technology
                runs smoothly and securely. From troubleshooting and monitoring
                to cloud management and cybersecurity, we provide reliable IT
                solutions tailored to your business needs. Our experienced team
                helps minimize downtime, improve productivity, and keep your
                systems operating at peak performance.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
                Our IT Support Services
              </h2>

              <ul className="space-y-1">
                {features.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-200"
                  >
                    <FaCheckCircle className="text-cyan-400 mt-1 shrink-0" />

                    <span>
                      <strong>{item.title}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

             


            </div>

          </div>
        </div>
        <ServiceCTA/>
      </section>

      <OtherServices currentSlug="it-support" />

      <Footer />
    </main>
  );
};

export default ITSupport;