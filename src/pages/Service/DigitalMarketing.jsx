import digitalMarketingGif from "../../assets/services/Digital Marketing.gif";
import { FaCheckCircle } from "react-icons/fa";

import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const features = [
  "Search Engine Optimization (SEO) — Improve rankings through keyword research, on-page optimization, technical SEO, and quality link building.",
  "Pay-Per-Click (PPC) Advertising — Targeted ad campaigns with audience segmentation, budget management, and performance optimization.",
  "Social Media Marketing — Build brand awareness through engaging content, community management, and paid social campaigns.",
  "Content Marketing — Create high-quality blogs, videos, infographics, and content strategies that drive engagement.",
  "Email Marketing — Personalized email campaigns with automation, audience segmentation, and performance tracking.",
  "Affiliate & Influencer Marketing — Expand brand reach through trusted partnerships and influencer collaborations.",
  "Online Reputation Management & CRO — Enhance brand credibility while optimizing websites for higher conversions.",
  "Mobile & Video Marketing — Reach customers with mobile-first campaigns and engaging video marketing strategies.",
];

const DigitalMarketing = () => {
  return (
    <>
      {/* Hero Section */}
      <Navbar />

      <section className="bg-[#072339] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl md:text-5xl font-bold text-white leading-tight">
                Digital <span className="text-blue-500">Marketing</span>
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-300 leading-7">
                Our{" "}
                <span className="font-semibold text-white">
                  Digital Marketing
                </span>{" "}
                services help businesses establish a strong online presence,
                attract the right audience, and generate measurable growth.
                From SEO and paid advertising to social media, content
                marketing, and email campaigns, we create data-driven strategies
                that maximize visibility, engagement, and conversions.
              </p>

              {/* Key Features */}
              <div className="mt-5">
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

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end lg:-mt-40">
              {/* Blue Glow */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[100px]"></div>

              {/* Purple Glow */}
              <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/15 blur-[80px] top-10 right-10"></div>

              {/* Image */}
              <img
                src={digitalMarketingGif}
                alt="Digital Marketing"
                className="relative z-10 w-full max-w-xl mt-20 object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <ServiceCTA />
      </section>

      {/* Other Services */}
      <OtherServices currentSlug="digital-marketing" />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DigitalMarketing;