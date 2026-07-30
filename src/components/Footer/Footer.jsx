import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../assets/navbar/zyntro.logo.png";
import FooterColumn from "./FooterColumn";
import SocialIcons from "./SocialIcons";
import ContactInfo from "./ContactInfo";

import { services, company } from "../../data/footerData";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}
      className="relative overflow-hidden bg-gradient-to-br
from-[#050816]
via-[#0e0d29]
to-[#1A1035] border-t border-white/10 "
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-20 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}

          <div>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={logo}
              alt="Zyntro Logo"
              className="h-14 mb-6"
            />

            <p className="text-gray-400 text-sm leading-7 max-w-sm">
              Zyntro Software Solutions Pvt. Ltd. delivers secure, scalable and
              intelligent IT solutions across India. We specialize in Mobile
              Device Management (MDM), Cloud Infrastructure, Cyber Security and
              Enterprise Software Development.
            </p>

            <SocialIcons />
          </div>

          <FooterColumn title="Services" links={services} />
          <FooterColumn title="Company" links={company} />

          {/* Contact */}

          <ContactInfo />
        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Zyntro Software Solutions Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <NavLink
              to="/privacy-policy"
              className="text-sm text-gray-500 hover:text-blue-400 transition"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms"
              className="text-sm text-gray-500 hover:text-blue-400 transition"
            >
              Terms & Conditions
            </NavLink>

            <NavLink
              to="/sitemap"
              className="text-sm text-gray-500 hover:text-blue-400 transition"
            >
              Sitemap
            </NavLink>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
