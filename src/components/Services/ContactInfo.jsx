import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="bg-[#050816] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-8">

          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Phone */}
            <a
              href="tel:+918787044997"
              className="group flex items-center gap-5 rounded-xl border border-white/10 bg-[#111827] p-6 transition-all duration-300 hover:border-blue-500"
            >
              <FaPhoneAlt className="text-3xl text-blue-500" />

              <div>
                <p className="text-gray-400 text-sm">Call Us</p>
                <h3 className="text-white text-lg font-semibold group-hover:text-blue-400">
                  +91 87870 44997
                </h3>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@zyntro.in"
              className="group flex items-center gap-5 rounded-xl border border-white/10 bg-[#111827] p-6 transition-all duration-300 hover:border-blue-500"
            >
              <FaEnvelope className="text-3xl text-blue-500" />

              <div>
                <p className="text-gray-400 text-sm">Email Us</p>
                <h3 className="text-white text-lg font-semibold group-hover:text-blue-400">
                  info@zyntro.in
                </h3>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;