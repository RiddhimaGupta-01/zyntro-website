import educationgif from "../../assets/industries/Education.gif";
import { FaCheckCircle } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Education = () => {
  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-br from-[#572666] via-[#1c295c] to-[#17085a] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              <span className="text-blue-500">Education</span>
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Image */}
        <div className="relative flex justify-center items-center h-[220px] sm:h-[280px] lg:h-[380px]">
              {/* Blue Glow */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[100px]"></div>

              {/* Purple Glow */}
              <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 right-10"></div>

              {/* Image */}
              <img
                src={educationgif}
                alt="Education"
                className="relative z-10 max-h-full w-auto max-w-full object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              <p className="mt-5 text-sm md:text-base  text-gray-300 leading-7">
                At{" "}
                <span className="font-semibold text-white">
                  Zyntro Software Solutions Pvt. Ltd.
                </span>
                , we empower educational institutions with innovative technology
                solutions that enhance learning, improve administration, and
                accelerate digital transformation. Our expertise includes
                digital learning platforms, cloud-based education systems,
                student management solutions, and custom educational software
                designed to create engaging, secure, and accessible learning
                experiences.
              </p>

              <p className="mt-6 text-sm md:text-base text-gray-300 leading-7">
                Whether you're a school, college, university, training
                institute, or EdTech organization, we provide scalable and
                secure solutions tailored to your educational objectives. By
                combining modern technologies with industry expertise, we help
                institutions streamline operations, improve collaboration, and
                deliver high-quality education in both traditional and online
                environments.
              </p>

              <p className="mt-6 text-sm md:text-base text-gray-300 leading-7">
                With Zyntro Software Solutions Pvt. Ltd., educational
                organizations can embrace digital innovation, improve student
                engagement, simplify administrative processes, and create
                future-ready learning environments that support academic
                excellence and long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Education;
