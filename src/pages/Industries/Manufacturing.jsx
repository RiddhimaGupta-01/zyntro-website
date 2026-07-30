import manufacturingGif from "../../assets/industries/manufacturer.gif";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Manufacturing = () => {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-28 pb-20">
        {/* Background Effects */}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Blue Glow */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

        {/* Purple Glow */}
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/15 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
              Manufacturing
            </h1>

            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Smart Technology Solutions for Modern Manufacturing
            </p>
          </div>
{/* Content */}
<div className="grid lg:grid-cols-2 gap-14 items-center">

  {/* Left - Image */}
<div className="relative flex justify-center items-center h-[220px] sm:h-[280px] lg:h-[380px]">
  {/* Glow */}
  <div className="absolute h-52 w-52 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full bg-blue-500/20 blur-[100px]" />

    <img
      src={manufacturingGif}
      alt="Manufacturing"
      className="relative z-10 max-h-full w-auto max-w-full object-contain"
    />
  </div>

  {/* Right - Content */}
  <div>
    <h2 className="mb-6 text-3xl font-semibold text-white">
      About Manufacturing
    </h2>

    <p className="leading-8 text-gray-300">
      At{" "}
      <span className="font-semibold text-white">
        Zyntro Software Solutions Pvt. Ltd.
      </span>
      , we help manufacturing businesses embrace digital transformation
      through smart automation, cloud technologies, IoT integration, and
      AI-powered solutions that improve operational efficiency and productivity.
    </p>

    <p className="mt-6 leading-8 text-gray-300">
      From production optimization and predictive maintenance to supply chain
      management and industrial analytics, our secure and scalable solutions
      enable manufacturers to reduce costs, streamline workflows, and achieve
      sustainable growth.
    </p>
  </div>
</div>
</div>
      </section>

      <Footer />
    </>
  );
};

export default Manufacturing;
