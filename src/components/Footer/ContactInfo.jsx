import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const contactItems = [
  {
    icon: FaLocationDot,
    title: "Address",
    content: (
      <>
        Bhadohi,
        <br />
        Uttar Pradesh, India
      </>
    ),
  },
  {
    icon: FaPhone,
    title: "Phone",
    content: (
      <a
        href="tel:+918787044997"
        className="hover:text-blue-400 transition-colors"
      >
        +91 87870 44997
      </a>
    ),
  },
  {
    icon: FaEnvelope,
    title: "Email",
    content: (
      <>
        <a
          href="mailto:info@zyntro.in"
          className="block hover:text-blue-400 transition-colors"
        >
          info@zyntro.in
        </a>

        <a
          href="mailto:support@zyntro.in"
          className="block mt-1 hover:text-blue-400 transition-colors"
        >
          support@zyntro.in
        </a>
      </>
    ),
  },
];

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-white text-xl font-semibold mb-8 relative inline-block">
        Contact Info
        <span className="absolute left-0 -bottom-2 w-10 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </h3>

      <div className="space-y-6">
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 group"
            >
              <div
                className="
                  w-11 h-11
                  rounded-full
                  flex items-center justify-center
                  bg-blue-500/10
                  border border-blue-500/20
                  text-blue-400
                  transition-all duration-300
                  group-hover:bg-blue-500
                  group-hover:text-white
                  group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]
                "
              >
                <Icon />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {item.title}
                </p>

                <div className="text-gray-400 leading-7">
                  {item.content}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;