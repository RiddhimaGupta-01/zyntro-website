import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import GlobalBackground from "../GlobalBackground/GlobalBackground";

const HomeContact = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <GlobalBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
              scale: 0.96,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Small Heading */}
            <p className="text-lg uppercase tracking-widest text-blue-400">
              Get In Touch
            </p>

            {/* Main Heading */}
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Let's Build Your Next
              <span className="mt-1 block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Experience
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl leading-relaxed text-gray-400">
              Have a project idea or need help with your digital solution?
              Connect with our team and let's turn your vision into reality.
            </p>

            {/* Contact Details */}
            <div className="mt-7 space-y-4">

              {/* Phone */}
              <motion.a
                href="tel:+918787044997"
                whileHover={{ x: 6 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  flex
                  w-fit
                  items-center
                  gap-4
                  text-gray-300
                  transition-colors
                  hover:text-blue-400
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-400/20
                    bg-blue-500/10
                  "
                >
                  <FaPhoneAlt className="text-sm text-blue-400" />
                </span>

                <span>+91 8787044997</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:info@zyntro.in"
                whileHover={{ x: 6 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  flex
                  w-fit
                  items-center
                  gap-4
                  text-gray-300
                  transition-colors
                  hover:text-purple-400
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-purple-400/20
                    bg-purple-500/10
                  "
                >
                  <FaEnvelope className="text-sm text-purple-400" />
                </span>

                <span>info@zyntro.in</span>
              </motion.a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid max-w-md grid-cols-2 gap-4">

              {/* Projects */}
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  backdrop-blur-sm
                  transition-colors
                  hover:border-blue-400/30
                "
              >
                <h4 className="text-xl font-bold text-white">
                  500+
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  Projects Completed
                </p>
              </motion.div>

              {/* Support */}
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  backdrop-blur-sm
                  transition-colors
                  hover:border-purple-400/30
                "
              >
                <h4 className="text-xl font-bold text-white">
                  24/7
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  Support
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= RIGHT CONTACT FORM ================= */}
        <motion.form
  initial={{
    opacity: 0,
    x: 60,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  className="
    group
    relative
    rounded-2xl
    border
    border-white/10
    bg-gradient-to-br
    from-white/10
    to-white/5
    p-8
    shadow-2xl
    shadow-blue-500/10
    backdrop-blur-xl
    transition-all
    duration-500
    hover:border-blue-400/30
    hover:shadow-[0_25px_80px_rgba(59,130,246,0.15)]
  "
>
            {/* Form Glow */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-2xl
                bg-gradient-to-br
                from-blue-500/10
                via-transparent
                to-purple-500/10
                opacity-0
                blur-xl
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10">

              {/* Form Heading */}
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Contact Us
              </h3>

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="
                  mb-4
                  w-full
                  rounded-lg
                  border
                  border-white/10
                  bg-white/10
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-gray-500
                  transition-all
                  duration-300
                  focus:border-blue-400/50
                  focus:bg-white/[0.12]
                  focus:ring-2
                  focus:ring-blue-500/10
                "
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="
                  mb-4
                  w-full
                  rounded-lg
                  border
                  border-white/10
                  bg-white/10
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-gray-500
                  transition-all
                  duration-300
                  focus:border-purple-400/50
                  focus:bg-white/[0.12]
                  focus:ring-2
                  focus:ring-purple-500/10
                "
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="
                  mb-4
                  w-full
                  rounded-lg
                  border
                  border-white/10
                  bg-white/10
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-gray-500
                  transition-all
                  duration-300
                  focus:border-blue-400/50
                  focus:bg-white/[0.12]
                  focus:ring-2
                  focus:ring-blue-500/10
                "
              />

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Your Message"
                className="
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-white/10
                  bg-white/10
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-gray-500
                  transition-all
                  duration-300
                  focus:border-purple-400/50
                  focus:bg-white/[0.12]
                  focus:ring-2
                  focus:ring-purple-500/10
                "
              />

              {/* Button */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="
                  mt-5
                  w-full
                  rounded-lg
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-600
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  duration-300
                  hover:shadow-blue-500/40
                "
              >
                Send Message
              </motion.button>

            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
