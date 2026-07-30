import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SmartWatchAnimation from "../../components/upcoming/SmartWatchAnimation";

const SmartWatch = () => {
  return (
    <>
      <Navbar />
 <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-24 pb-16 lg:pt-36 lg:pb-20">
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-32 pb-20"> */}

        {/* Grid */}
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

        {/* Glow */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
Upcoming Project
</div>
<div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
                 <div className="order-1 text-center lg:text-left">

           <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
  Enterprise
  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
    Smart Watch MDM
  </span>
</h1>

        
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
  <strong>Zyntro Software Solutions</strong> is proud to introduce{" "}
  <strong>Smart Watch MDM (Mobile Device Management)</strong>—an innovative
  solution that combines wearable technology with enterprise-grade device
  management. It enables businesses to deploy, manage, monitor, and secure
  smart watches with ease, ensuring complete control and visibility across
  their device ecosystem.

  <br />
  <br />

  Built for scalability, security, and reliability, our platform helps
  organizations improve productivity, streamline operations, and safeguard
  business data. Ideal for industries such as healthcare, logistics, retail,
  and education.
</p>
            </div>

            {/* Right */}
  <div className="order-2 flex justify-center lg:justify-end">
  <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[620px] lg:h-[620px]">
    <SmartWatchAnimation />
  </div>
</div>
          </div>


          {/* About */}

        {/* <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"> */}

             <div className="group rounded-[32px] mt-20 border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">
                <h2 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 md:text-4xl">
                Comprehensive <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"> Device Management </span>

              </h2>

             <p className="mt-6 text-lg leading-8 text-gray-300">
              At the core of our Smart Watch MDM solution lies a sophisticated management platform that provides 
              organizations with complete control over their smart watch infrastructure. Our system enables IT 
              administrators to remotely configure device settings, deploy applications, enforce security policies,
              and monitor device health in real-time. The intuitive dashboard provides a centralized view of all
              managed devices allowing for efficient oversight of hundreds or even thousands of smart watches simultaneously.
              </p>
  
        <p className="mt-6 text-lg leading-8 text-gray-300">
             The platform supports automated enrollment processes, making it effortless to onboard new devices into
              your organization's ecosystem. With role-based access controls, you can define granular permissions for
               different user groups, ensuring that employees have access to the features and applications they need
                while maintaining strict security protocols. Our solution also includes comprehensive reporting and
                 analytics capabilities, providing valuable insights into device usage patterns, application performance,
                  and potential security threats.
              </p>
            </div>

   <div className="group rounded-[32px]  mt-20 border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">
              <h2 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 md:text-4xl">
              Enterprise-Grade<span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Security & Scalability</span> 
              </h2>
          <p className="mt-8 text-lg leading-8 text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
             Security is paramount in today's digital landscape, and our Smart Watch MDM solution has been built from 
             the ground up with enterprise-grade security measures. The platform implements multi-layered encryption for 
             all data transmission between devices and the management server, ensuring that sensitive information remains
            protected at all times. In the event of a device being lost or stolen, administrators can remotely lock or wipe 
             the device, preventing unauthorized access to corporate data and applications.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-300">
             Our solution integrates seamlessly with existing enterprise security infrastructure, including single sign-on
              (SSO) systems, multi-factor authentication (MFA), and identity management platforms. This ensures that your smart
               watch deployment aligns with your organization's broader security framework. The platform also includes advanced 
               threat detection capabilities, monitoring for suspicious activities and potential security
              breaches, and providing immediate alerts to administrators when anomalies are detected.
              </p>
              

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Designed with scalability in mind, our Smart Watch MDM platform can accommodate organizations of any size,
                 from small businesses managing a handful of devices to large enterprises with global deployments. The cloud-based
                  architecture ensures high availability and reliability, with automatic scaling to handle increased demand. Whether
                   you're starting with a pilot program or rolling out thousands of devices across multiple locations, our solution grows with
                    your needs. Backed by Zyntro's commitment to innovation and excellence,
                 Smart Watch MDM represents the future of wearable device management in the enterprise.
              </p>
            </div>

          </div>
          {/* </div> */}

          

       
      </section>

      <Footer />
    </>
  );
};

export default SmartWatch;