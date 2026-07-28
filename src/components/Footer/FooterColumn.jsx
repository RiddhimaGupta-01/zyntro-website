import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      {/* Heading */}
      <h3 className="text-white text-xl font-semibold mb-6 relative inline-block">
        {title}

        <span
          className="
          absolute
          -bottom-2
          left-0
          w-12
          h-[2px]
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          "
        />
      </h3>

      {/* Links */}
      <ul className="space-y-4 mt-8">
        {links.map((item) => (
          <motion.li
            key={item.title}
            whileHover={{ x: 6 }}
          >
            <NavLink
              to={item.link}
              className="
              text-blue-400
              hover:text-blue-400
              transition-all
              duration-300
              flex
              items-center
              gap-2
              group
              "
            >
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>

              {item.title}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;