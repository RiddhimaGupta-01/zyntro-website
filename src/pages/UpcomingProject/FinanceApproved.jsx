import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FinanceDeviceAnimation from "../../components/upcoming/FinanceDeviceAnimation";

const FinanceApproved = () => {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-36 pb-20">

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
<div className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur sm:px-6 sm:text-sm">
Upcoming Project
</div>

<div className="mt-8 grid min-h-auto items-center gap-10 lg:min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left */}
         <div className="text-center lg:-mt-20 lg:text-left">

             <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
                Finance Approved
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Tablet & Laptop
                </span>
              </h1>

           <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
                Zyntro Software Solutions introduces Finance Approved Tablet & Laptop, a smart financing platform that makes premium computing devices more accessible. With instant approval, secure digital processing, transparent payment plans, and flexible repayment options, we provide a fast and hassle-free financing experience for students, professionals, businesses, and educational institutions. Our platform empowers customers to own the latest tablets and laptops with confidence, convenience, and affordability.

        </p>
            </div>

            {/* Right */}
  <div className="mx-auto w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] lg:w-[620px] lg:h-[620px]">
  <FinanceDeviceAnimation />
</div>
          </div>

          {/* Features */}

          <div className="mt-12">

            <h2 className="text-center text-4xl font-bold text-white">
              Flexible Financing Solutions
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-center text-lg leading-8 text-gray-400">
              Our financing platform simplifies premium device ownership with
              fast approvals, transparent payment options, and secure digital
              processing.
            </p>

           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-[#081632]/70 p-6 backdrop-blur">
                <div className="text-4xl">⚡</div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Instant Approval
                </h3>
                <p className="mt-3 text-gray-400">
                  Receive financing decisions within minutes through our
                  intelligent approval system.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#081632]/70 p-6 backdrop-blur">
                <div className="text-4xl">💳</div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Flexible EMI
                </h3>
                <p className="mt-3 text-gray-400">
                  Affordable monthly payment plans designed for different
                  financial needs.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#081632]/70 p-6 backdrop-blur">
                <div className="text-4xl">🔒</div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Secure Payments
                </h3>
                <p className="mt-3 text-gray-400">
                  Bank-grade encryption ensures every transaction remains
                  protected.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#081632]/70 p-6 backdrop-blur">
                <div className="text-4xl">🏢</div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Enterprise Ready
                </h3>
                <p className="mt-3 text-gray-400">
                  Bulk device financing and centralized management for
                  organizations.
                </p>
              </div>

            </div>

          </div>

          {/* About */}

          <div className="mt-28 grid gap-16 lg:grid-cols-2">

            <div>
              <h2 className="text-4xl font-bold text-white">
                Flexible Financing
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                Our platform streamlines the financing process with quick online
                applications, instant eligibility checks, and flexible payment
                options tailored to every customer. By combining intelligent
                financial assessment with secure digital verification, we
                provide a fast, transparent, and hassle-free experience.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Customers can choose repayment plans that suit their budget
                while enjoying affordable monthly installments and simple device
                upgrade options.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                Enterprise Solutions
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                Businesses can equip employees with modern devices through
                scalable financing programs, centralized billing, and dedicated
                account management. Our enterprise platform integrates with
                existing workflows, making device deployment and lifecycle
                management simple.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Every financed device is backed by secure payment processing,
                optional protection plans, and dedicated customer support,
                ensuring a trusted financing experience from application to
                ownership.
              </p>
            </div>

          </div>

          {/* CTA */}

          <div className="mt-28 rounded-3xl border border-cyan-500/20 bg-[#081632]/70 p-12 text-center backdrop-blur">

            <h2 className="text-4xl font-bold text-white">
              Ready to Make Premium Devices More Accessible?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Discover how Zyntro's Finance Approved Phone, Tablet & Laptop platform
              simplifies device financing with secure payments, flexible plans,
              and enterprise-grade management.
            </p>

            <button className="mt-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
              Request a Consultation
            </button>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default FinanceApproved;