import government from "../../assets/industries/government.png";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Government = () => {
  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-br from-[#1c072f] via-[#0B2340] to-[#0e4585] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
       {/* Background Effects */}

{/* Blue Glow Left */}
<div className="absolute -left-32 top-40 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

{/* Blue Glow Right */}
<div className="absolute -right-20 top-20 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[120px]" />

{/* Bottom Glow */}
<div className="absolute bottom-0 left-1/2 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

{/* Grid Pattern */}
<div
  className="absolute inset-0 opacity-[0.04]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>

{/* Radial Highlight */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
    Government <span className="text-blue-500">& Public</span>
  </h1>
</div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center -mt-8">
             

            {/* Left Image */}
       <div className="relative flex justify-center items-center h-[220px] sm:h-[280px] lg:h-[380px]">
  {/* Glow */}
  <div className="absolute h-52 w-52 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full bg-blue-500/20 blur-[100px]" />
           

              {/* Image */}
              <img
                src={government}
                alt="Government & Public"
              className="relative z-10 max-h-full w-auto max-w-full object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
        
              <p className="mt-5 text-sm md:text-base text-gray-300 leading-7">
                At{" "}
                <span className="font-semibold text-white">
                  Zyntro Software Solutions Pvt. Ltd.
                </span>
                , we empower government and public sector organizations with
                innovative digital solutions that enhance operational
                efficiency, transparency, and citizen-centric service delivery.
                Our expertise includes e-Governance platforms, digital
                transformation, workflow automation, cloud solutions, and secure
                public service applications designed to modernize government
                operations.
              </p>

              <p className="mt-5 text-sm md:text-base  text-gray-300 leading-7">
                By leveraging advanced technologies such as Artificial
                Intelligence (AI), cloud computing, data analytics, and secure
                digital infrastructure, we help government agencies streamline
                administrative processes, improve data management, strengthen
                cybersecurity, and enable faster, more informed decision-making.
                Our solutions support transparency, regulatory compliance, and
                efficient public administration.
              </p>

              <p className="mt-6 text-sm md:text-base  text-gray-300 leading-8">
                Whether you're a government department, municipality, public
                institution, or civic organization, Zyntro delivers reliable,
                scalable, and future-ready technology solutions that improve
                public services, enhance citizen engagement, and support the
                development of smarter, more connected communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Government;