import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const HomeContact = () => {
  return (
    <section
      className="
relative
py-20
bg-[#050816]
overflow-hidden
"
    >
      <div
        className="
absolute
top-0
left-1/4
w-72
h-72
bg-blue-500/20
blur-[120px]
rounded-full
"
      ></div>
        <div
          className="
absolute
bottom-0
right-1/4
w-72
h-72
bg-purple-500/20
blur-[120px]
rounded-full
"
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">

  <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-400 uppercase tracking-widest text-lg">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Let's Build Your Next
              <span className="block text-blue-400">Digital Experience</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Have a project idea or need help with your digital solution?
              Connect with our team and let's turn your vision into reality.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-4 text-gray-300">
                <FaPhoneAlt className="text-blue-400" />
                <span>+91 8787044997</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-purple-400" />
                <span>info@zyntro.in</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div
                className="
      bg-white/5
      border border-white/10
      rounded-xl
      p-4
    "
              >
                <h4 className="text-white font-bold text-xl">500+</h4>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>

              <div
                className="
      bg-white/5
      border border-white/10
      rounded-xl
      p-4
    "
              >
                <h4 className="text-white font-bold text-xl">24/7</h4>
                <p className="text-gray-400 text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br 
from-white/10 
to-white/5
backdrop-blur-xl
border border-white/10
shadow-2xl
shadow-blue-500/10
          
            rounded-2xl
            p-8
            "
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Us
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full mb-4
              bg-white/10
              border border-white/10
              rounded-lg
              px-4 py-3
              text-white
              outline-none
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
              w-full mb-4
              bg-white/10
              border border-white/10
              rounded-lg
              px-4 py-3
              text-white
              outline-none
              "
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="
              w-full mb-4
              bg-white/10
              border border-white/10
              rounded-lg
              px-4 py-3
              text-white
              outline-none
              "
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="
              w-full
              bg-white/10
              border border-white/10
              rounded-lg
              px-4 py-3
              text-white
              outline-none
              "
            />

            <button
              className="
              mt-5
              w-full
              py-3
              rounded-lg
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              text-white
              font-semibold
              "
            >
              Send Message
            </button>
          </motion.form>
          </div>
          </div>
    
    </section>
  );
};

export default HomeContact;
