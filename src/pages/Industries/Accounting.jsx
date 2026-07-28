
import accountingGif from "../../assets/industries/accounting.gif";
import { FaCheckCircle } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const features = [
  "Financial Management Systems",
  "Bookkeeping & Accounting Automation",
  "Tax & Compliance Solutions",
  "Business Intelligence & Analytics",
  "Cloud-Based Financial Solutions",
  "Data Security & Cyber Protection",
  "Custom Financial Software Development",
  "IT Support & Digital Transformation",
];

const Accounting = () => {
  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-br from-[#441a68] via-[#143156] to-[#0e1885] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Accounting & <span className="text-blue-500">Finance</span>
              </h1>

            </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center -mt-8">

            {/* Left Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[100px]"></div>

              <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 right-10"></div>

              <img
                src={accountingGif}
                alt="Accounting & Finance"
                className="relative z-10 w-full max-w-lg object-contain rounded-3xl"
              />
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
           
              <p className="mt-5 text-sm md:text-base text-gray-300 leading-7">
                At <span className="font-semibold text-white">Zyntro Software Solutions Pvt. Ltd.</span>,
                we provide innovative technology solutions for the accounting
                and finance industry, helping businesses improve efficiency,
                accuracy, and security.
              </p>

              <div className="mt-8">
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

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Accounting;