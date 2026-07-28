import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { menuItems } from "../../data/menuData";
import Dropdown from "./Dropdown";
import logo from "../../assets/navbar/zyntro.logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link to="/" className="mr-0 lg:mr-10">
          <motion.img
            src={logo}
            alt="Zyntro Logo"
            className="h-12 md:h-14 w-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        <ul className="hidden lg:flex flex-1 justify-evenly items-center ">
          {menuItems.map((item, index) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <motion.li key={index} className="relative group">
                {["Home", "Portfolio", "Blog", "Contact Us"].includes(
                  item.title,
                ) ? (
                  <Link to={item.path}>
                    <div className="relative py-2">
                      <span
                        className={`font-medium transition ${
                          isActive
                            ? "text-blue-500"
                            : "text-white hover:text-blue-400"
                        }`}
                      >
                        {item.title}
                      </span>

                      {isActive && (
                        <motion.div
                          layoutId="active-navbar"
                          className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 rounded-full"
                        />
                      )}
                    </div>
                  </Link>
                ) : (
                  <div className="relative py-2 cursor-pointer">
                    <span
                      className={`font-medium transition ${
                        isActive
                          ? "text-blue-500"
                          : "text-white hover:text-blue-400"
                      }`}
                    >
                      {item.title}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="active-navbar"
                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 rounded-full"
                      />
                    )}
                  </div>
                )}

                {item.submenu && <Dropdown submenu={item.submenu} />}
              </motion.li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <div className="relative p-[2px] rounded-full overflow-hidden">
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background:
                  "conic-gradient(from  0deg, #2563eb, #8b5cf6, #ec4899, #f97316, #06b6d4, #2563eb)",
              }}
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative rounded-full bg-[#0057B8] px-7 py-3 font-semibold text-white"
            >
              Free Consultation
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#050816] border-t border-white/10"
          >
            <ul className="flex flex-col p-5 gap-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenMenu(openMenu === index ? null : index)
                        }
                        className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white"
                      >
                        <span>{item.title}</span>

                        <motion.span
                          animate={{ rotate: openMenu === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ▼
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {openMenu === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden ml-5"
                          >
                            {item.submenu.map((sub, i) => (
                              <NavLink
                                key={i}
                                to={sub.path}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenMenu(null);
                                }}
                                className="block py-2 text-gray-400 hover:text-blue-400"
                              >
                                {sub.title}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-3 transition ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:bg-white/10 hover:text-white"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </li>
              ))}

              <button className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700">
                Free Consultation
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

// import { Link, NavLink } from "react-router-dom";
// import { menuItems } from "../../data/menuData";
// import Dropdown from "./Dropdown";
// import { useState, useEffect } from "react";
// import logo from "../../assets/navbar/zyntro.logo.png";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [])
//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       className={`fixed top-0 left-0 z-50 w-full h-20 md:h-24 transition-all duration-300 ${scrolled
//         ? "bg-[#050816]/95 shadow-xl backdrop-blur-xl border-b border-white/10"
//         : "bg-transparent"
//         }`} >
//       <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           <Link to="/" className="h-10 md:h-12 w-auto object-contain">
//             <motion.img
//               src={logo}
//               alt="Zyntro Logo"
//               className="h-12 md:h-14 w-auto"
//               whileHover={{
//                 scale: 1.08,
//                 rotate: 2,
//               }}
//               transition={{ duration: 0.3 }}
//             />
//           </Link>
//         </motion.div>

//         {/* Navigation */}
//         <ul className="hidden md:flex items-center gap-8 lg:gap-12">
//           {menuItems.map((item, index) => (

//             <motion.li
//               key={index}
//               className="relative group"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}>

//               <NavLink to={item.path}>
//                 {({ isActive }) => (
//                   <div className="relative py-2">
//                     <span
//                       className={`font-medium transition-all duration-300 ${isActive
//                         ? "text-blue-500"
//                         : "text-white hover:text-blue-400"
//                         }`}
//                     >
//                       {item.title}
//                     </span>

//                     <motion.div
//                       layoutId="navbar-indicator"
//                       className={`absolute left-0 right-0 -bottom-2 mx-auto h-0.5 rounded-full bg-blue-500 ${isActive ? "w-full" : "w-0"
//                         }`}
//                     />
//                   </div>
//                 )}
//               </NavLink>

//               {item.submenu && <Dropdown submenu={item.submenu} />}
//             </motion.li>
//           ))}
//         </ul>

//       </div>
//       <button
//         className="md:hidden text-white text-3xl"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? "✕" : "☰"}
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.25 }}
//             className="absolute top-16 left-0 w-full bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-xl"
//           >
//             ...

//             <ul className="flex flex-col">
//               {menuItems.map((item, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `relative py-2 text-[16px] font-medium transition-colors duration-300 ${isActive
//                         ? "text-white border-b-2 border-blue-500"
//                         : "text-gray-200 hover:text-white"
//                       }`
//                     }
//                   >
//                     {item.title}
//                   </NavLink>
//                 </li>
//               ))}

//               <div className="p-4">
//                 <button className="w-full bg-[#0057B8] text-white py-3 rounded-lg">
//                   Free Consultation
//                 </button>
//               </div>
//             </ul>

//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//     </motion.nav >

//   );
// };
// export default Navbar;
