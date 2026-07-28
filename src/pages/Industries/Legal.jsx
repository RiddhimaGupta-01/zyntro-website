import legalGif from "../../assets/industries/legal.gif";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Legal = () => {
  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-br from-[#1c072f] via-[#0B2340] to-[#0e4585] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight">
              Legal & <span className="text-blue-500">Law Firm</span>
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 gap- items-center -mt-8">
            {/* Left Image */}
            <div className="relative flex justify-center lg:justify-start">
              {/* Blue Glow */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[100px]"></div>

              {/* Purple Glow */}
              <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 right-10"></div>

              {/* Image */}
              <img
                src={legalGif}
                alt="Legal & Law Firm"
                className="relative z-10 w-[430px] lg:w-[430px] object-contain rounded-3xl"
              />
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              <p className="mt-5 text-xs md:text-base text-gray-300 leading-8">
                At{" "}
                <span className="font-semibold text-white">
                  Zyntro Software Solutions Pvt. Ltd.
                </span>
                , we provide innovative technology solutions that help legal
                organizations modernize their operations while maintaining the
                highest standards of security, compliance, and confidentiality.
                Our expertise includes legal case management systems, secure
                document management, workflow automation, and digital solutions
                designed to improve the efficiency of law firms and legal
                departments.
              </p>

              <p className="mt-6 text-sm md:text-base  text-gray-300 leading-8">
                By leveraging cloud computing, Artificial Intelligence (AI),
                automation, and advanced data management technologies, we enable
                legal professionals to streamline case handling, simplify
                document collaboration, improve legal research, and strengthen
                client communication. Our solutions ensure secure access to
                sensitive information while supporting regulatory compliance and
                operational excellence.
              </p>

              <p className="mt-5 text-sm md:text-base  text-gray-300 leading-8">
                Whether you're an independent legal practitioner, corporate
                legal department, or a large law firm, Zyntro delivers scalable,
                secure, and future-ready technology solutions that enhance
                productivity, improve client experiences, and empower legal
                professionals to focus on delivering exceptional legal services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Legal;
