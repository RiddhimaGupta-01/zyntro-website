import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ServiceCTA = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-5">

        <a
          href="mailto:info@zyntro.in"
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-purple-400 px-8 py-4 text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
        >
          <FaEnvelope className="text-lg" />
          <span className="font-medium">Email Support</span>
        </a>

        <a
          href="tel:+919956353236"
          className="flex items-center gap-3 rounded-xl border border-blue-600 bg-blue-600 px-8 py-4 text-white transition-all duration-300 hover:bg-blue-700"
        >
          <FaPhoneAlt className="text-lg" />
          <span className="font-medium">Call +91-9956353236</span>
        </a>

      </div>
    </section>
  );
};

export default ServiceCTA;