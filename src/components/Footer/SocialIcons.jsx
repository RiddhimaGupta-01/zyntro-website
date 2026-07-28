import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/",
  },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com/",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4 mt-8">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.12,
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              w-11
              h-11
              rounded-full

              flex
              items-center
              justify-center

              bg-white/5
              border
              border-white/10

              text-gray-300

              hover:bg-gradient-to-r
              hover:from-blue-500
              hover:to-purple-500
              hover:text-white

              transition-all
              duration-300
            "
          >
            <Icon size={18} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialIcons;