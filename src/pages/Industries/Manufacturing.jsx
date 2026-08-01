
import manufacturingGif from "../../assets/industries/manufacturer.gif";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Manufacturing = () => {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        <GlobalBackground />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Manufacturing
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base lg:text-lg">
              Smart Technology Solutions for Modern Manufacturing
            </p>
          </div>

          {/* Image + Content */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">

            {/* LEFT IMAGE */}
            <div className="relative flex h-[280px] items-center justify-center sm:h-[340px] lg:h-[420px]">

              {/* Blue Glow */}
              <div className="absolute h-56 w-56 rounded-full bg-blue-500/20 blur-[100px] sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

              {/* Purple Glow */}
              <div className="absolute right-5 top-5 h-40 w-40 rounded-full bg-purple-500/15 blur-[80px] sm:h-56 sm:w-56" />

              <img
                src={manufacturingGif}
                alt="Manufacturing"
                className="
                  relative
                  z-10
                  h-auto
                  w-[260px]
                  object-contain
                  sm:w-[340px]
                  md:w-[400px]
                  lg:w-[450px]
                "
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-center lg:text-left">

              <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
                About Manufacturing
              </h2>

              <p className="text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
                At{" "}
                <span className="font-semibold text-white">
                  Zyntro Software Solutions Pvt. Ltd.
                </span>
                , we help manufacturing businesses embrace digital
                transformation through smart automation, cloud technologies,
                IoT, and AI-powered solutions that improve efficiency and
                productivity.
              </p>

              <p className="mt-6 text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
                From production optimization and predictive maintenance to
                supply chain management and industrial analytics, our secure
                and scalable solutions help manufacturers reduce costs,
                streamline workflows, and achieve sustainable growth.
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



