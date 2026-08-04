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

  /* ================= SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================= CLOSE MOBILE MENU ON ROUTE CHANGE ================= */
  useEffect(() => {
    setIsOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  /* ================= MOBILE MENU ================= */
  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);

    if (isOpen) {
      setOpenMenu(null);
    }
  };

  /* ================= MOBILE SUBMENU ================= */
  const toggleSubmenu = (index) => {
    setOpenMenu((prev) => (prev === index ? null : index));
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="mr-0 flex-shrink-0 lg:mr-10"
        >
          <img
            src={logo}
            alt="Zyntro Logo"
            width={140}
            height={56}
            className="h-12 w-auto object-contain md:h-14"
          />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden flex-1 items-center justify-evenly lg:flex">
          {menuItems.map((item, index) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" &&
                location.pathname.startsWith(item.path));

            return (
              <li
                key={index}
                className="group relative"
              >
                {/* ================= BLOG ================= */}
                {item.title === "Blog" ? (
                  <a
                    href="https://zyntro.in/blog/"
                    className="relative block py-2"
                  >
                    <span className="font-medium text-white transition-colors duration-200 hover:text-blue-400">
                      Blog
                    </span>
                  </a>
                ) : ["Home", "Portfolio", "Contact Us"].includes(
                    item.title
                  ) ? (
                  /* ================= NORMAL LINK ================= */
                  <Link to={item.path}>
                    <div className="relative py-2">
                      <span
                        className={`font-medium transition-colors duration-200 ${
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
                          transition={{
                            duration: 0.2,
                            ease: "easeOut",
                          }}
                          className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-blue-500"
                        />
                      )}
                    </div>
                  </Link>
                ) : (
                  /* ================= DROPDOWN MENU ================= */
                  <div className="relative cursor-pointer py-2">
                    <span
                      className={`font-medium transition-colors duration-200 ${
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
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-blue-500"
                      />
                    )}
                  </div>
                )}

                {/* ================= DESKTOP DROPDOWN ================= */}
                {item.submenu && (
                  <Dropdown submenu={item.submenu} />
                )}
              </li>
            );
          })}
        </ul>

        {/* ================= FREE CONSULTATION ================= */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden rounded-full p-[2px]">

            {/* CSS Animated Border */}
            <div
              className="navbar-spin absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #2563eb, #8b5cf6, #ec4899, #f97316, #06b6d4, #2563eb)",
              }}
            />

            {/* Button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="relative rounded-full bg-[#0057B8] px-7 py-3 font-semibold text-white"
            >
              Free Consultation
            </motion.button>
          </div>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="text-3xl text-white lg:hidden"
          onClick={toggleMobileMenu}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-white/10 bg-[#050816] lg:hidden"
          >
            <ul className="max-h-[calc(100vh-80px)] overflow-y-auto p-5">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-white/5 last:border-b-0"
                >
                  {/* ================= MOBILE DROPDOWN ================= */}
                  {item.submenu ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={openMenu === index}
                        onClick={() => toggleSubmenu(index)}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                      >
                        <span className="font-medium">
                          {item.title}
                        </span>

                        <motion.span
                          animate={{
                            rotate: openMenu === index ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.2,
                            ease: "easeOut",
                          }}
                          className="text-xs text-blue-400"
                        >
                          ▼
                        </motion.span>
                      </button>

                      {/* ================= SUBMENU ================= */}
                      <AnimatePresence initial={false}>
                        {openMenu === index && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.25,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <motion.div
                              initial={{
                                y: -8,
                              }}
                              animate={{
                                y: 0,
                              }}
                              exit={{
                                y: -8,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                              className="ml-3 border-l border-blue-500/30 py-2 pl-3"
                            >
                              {item.submenu.map((sub, i) => (
                                <NavLink
                                  key={i}
                                  to={sub.path}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenMenu(null);
                                  }}
                                  className={({ isActive }) =>
                                    `mb-1 block rounded-lg px-4 py-2.5 text-sm transition-all duration-200 ${
                                      isActive
                                        ? "bg-blue-500/10 text-blue-400"
                                        : "text-gray-400 hover:translate-x-1 hover:bg-white/5 hover:text-blue-400"
                                    }`
                                  }
                                >
                                  {sub.title}
                                </NavLink>
                              ))}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.title === "Blog" ? (
                    /* ================= MOBILE BLOG ================= */
                    <a
                      href="https://zyntro.in/blog/"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-4 py-3 text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                    >
                      Blog
                    </a>
                  ) : (
                    /* ================= MOBILE NORMAL LINK ================= */
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-3 transition-colors duration-200 ${
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

              {/* ================= MOBILE CONSULTATION ================= */}
              <li className="pt-4">
                <button
                  type="button"
                  className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Free Consultation
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;



// import { Link, NavLink, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import { menuItems } from "../../data/menuData";
// import Dropdown from "./Dropdown";
// import logo from "../../assets/navbar/zyntro.logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null);

//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
//         scrolled
//           ? "bg-[#050816]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

//         {/* ================= LOGO ================= */}
//         <Link to="/" className="mr-0 lg:mr-10">
//           <motion.img
//             src={logo}
//             alt="Zyntro Logo"
//             className="h-12 w-auto object-contain md:h-14"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           />
//         </Link>


//         {/* ================= DESKTOP MENU ================= */}
//         <ul className="hidden flex-1 items-center justify-evenly lg:flex">

//           {menuItems.map((item, index) => {
//             const isActive =
//               location.pathname === item.path ||
//               (item.path !== "/" &&
//                 location.pathname.startsWith(item.path));

//             return (
//               <motion.li
//                 key={index}
//                 className="relative group"
//               >

//                 {/* ================= BLOG ================= */}
//                 {item.title === "Blog" ? (
//                   <a
//                     href="https://zyntro.in/blog/"
//                     className="relative block py-2"
//                   >
//                     <span className="font-medium text-white transition hover:text-blue-400">
//                       Blog
//                     </span>
//                   </a>

//                 ) : ["Home", "Portfolio", "Contact Us"].includes(
//                     item.title
//                   ) ? (

//                   /* ================= NORMAL LINK ================= */
//                   <Link to={item.path}>
//                     <div className="relative py-2">

//                       <span
//                         className={`font-medium transition ${
//                           isActive
//                             ? "text-blue-500"
//                             : "text-white hover:text-blue-400"
//                         }`}
//                       >
//                         {item.title}
//                       </span>

//                       {isActive && (
//                         <motion.div
//                           layoutId="active-navbar"
//                           className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-blue-500"
//                         />
//                       )}

//                     </div>
//                   </Link>

//                 ) : (

//                   /* ================= DROPDOWN MENU ================= */
//                   <div className="relative cursor-pointer py-2">

//                     <span
//                       className={`font-medium transition ${
//                         isActive
//                           ? "text-blue-500"
//                           : "text-white hover:text-blue-400"
//                       }`}
//                     >
//                       {item.title}
//                     </span>

//                     {isActive && (
//                       <motion.div
//                         layoutId="active-navbar"
//                         className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-blue-500"
//                       />
//                     )}

//                   </div>
//                 )}

//                 {/* Dropdown */}
//                 {item.submenu && (
//                   <Dropdown submenu={item.submenu} />
//                 )}

//               </motion.li>
//             );
//           })}

//         </ul>


//         {/* ================= FREE CONSULTATION ================= */}
//         <div className="hidden md:block">

//           <div className="relative overflow-hidden rounded-full p-[2px]">

//             {/* Animated Border */}
//             <motion.div
//               className="absolute inset-0 rounded-full"
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               style={{
//                 background:
//                   "conic-gradient(from 0deg, #2563eb, #8b5cf6, #ec4899, #f97316, #06b6d4, #2563eb)",
//               }}
//             />

//             {/* Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.96 }}
//               className="relative rounded-full bg-[#0057B8] px-7 py-3 font-semibold text-white"
//             >
//               Free Consultation
//             </motion.button>

//           </div>
//         </div>


//         {/* ================= MOBILE BUTTON ================= */}
//         <button
//           className="text-3xl text-white lg:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>

//       </div>


//       {/* ================= MOBILE MENU ================= */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.25 }}
//             className="border-t border-white/10 bg-[#050816] lg:hidden"
//           >

//             <ul className="flex flex-col gap-2 p-5">

//               {menuItems.map((item, index) => (

//                 <li key={index}>

//                   {/* ================= MOBILE DROPDOWN ================= */}
//                   {item.submenu ? (
//                     <>
//                       <button
//                         onClick={() =>
//                           setOpenMenu(
//                             openMenu === index ? null : index
//                           )
//                         }
//                         className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white"
//                       >

//                         <span>{item.title}</span>

//                         <motion.span
//                           animate={{
//                             rotate:
//                               openMenu === index ? 180 : 0,
//                           }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           ▼
//                         </motion.span>

//                       </button>


//                       <AnimatePresence>
//                         {openMenu === index && (
//                           <motion.div
//                             initial={{
//                               height: 0,
//                               opacity: 0,
//                             }}
//                             animate={{
//                               height: "auto",
//                               opacity: 1,
//                             }}
//                             exit={{
//                               height: 0,
//                               opacity: 0,
//                             }}
//                             transition={{
//                               duration: 0.25,
//                             }}
//                             className="ml-5 overflow-hidden"
//                           >

//                             {item.submenu.map((sub, i) => (
//                               <NavLink
//                                 key={i}
//                                 to={sub.path}
//                                 onClick={() => {
//                                   setIsOpen(false);
//                                   setOpenMenu(null);
//                                 }}
//                                 className="block py-2 text-gray-400 hover:text-blue-400"
//                               >
//                                 {sub.title}
//                               </NavLink>
//                             ))}

//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </>

//                   ) : item.title === "Blog" ? (

//                     /* ================= MOBILE BLOG ================= */
//                     <a
//                       href="https://zyntro.in/blog/"
//                       onClick={() => setIsOpen(false)}
//                       className="block rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
//                     >
//                       Blog
//                     </a>

//                   ) : (

//                     /* ================= MOBILE NORMAL LINK ================= */
//                     <NavLink
//                       to={item.path}
//                       onClick={() => setIsOpen(false)}
//                       className={({ isActive }) =>
//                         `block rounded-lg px-4 py-3 transition ${
//                           isActive
//                             ? "bg-blue-600 text-white"
//                             : "text-gray-300 hover:bg-white/10 hover:text-white"
//                         }`
//                       }
//                     >
//                       {item.title}
//                     </NavLink>

//                   )}

//                 </li>
//               ))}


//               {/* ================= MOBILE CONSULTATION ================= */}
//               <button
//                 className="mt-4 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
//               >
//                 Free Consultation
//               </button>

//             </ul>

//           </motion.div>
//         )}
//       </AnimatePresence>

//     </motion.nav>
//   );
// };

// export default Navbar;

