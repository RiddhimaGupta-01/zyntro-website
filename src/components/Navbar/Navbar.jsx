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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* ================= LOGO ================= */}
        <Link to="/" className="mr-0 lg:mr-10">
          <motion.img
            src={logo}
            alt="Zyntro Logo"
            className="h-12 w-auto object-contain md:h-14"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
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
              <motion.li
                key={index}
                className="relative group"
              >

                {/* ================= BLOG ================= */}
                {item.title === "Blog" ? (
                  <a
                    href="https://zyntro.in/blog/"
                    className="relative block py-2"
                  >
                    <span className="font-medium text-white transition hover:text-blue-400">
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
                          className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-blue-500"
                        />
                      )}

                    </div>
                  </Link>

                ) : (

                  /* ================= DROPDOWN MENU ================= */
                  <div className="relative cursor-pointer py-2">

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
                        className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-blue-500"
                      />
                    )}

                  </div>
                )}

                {/* Dropdown */}
                {item.submenu && (
                  <Dropdown submenu={item.submenu} />
                )}

              </motion.li>
            );
          })}

        </ul>


        {/* ================= FREE CONSULTATION ================= */}
        <div className="hidden md:block">

          <div className="relative overflow-hidden rounded-full p-[2px]">

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
                  "conic-gradient(from 0deg, #2563eb, #8b5cf6, #ec4899, #f97316, #06b6d4, #2563eb)",
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


        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="text-3xl text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#050816] lg:hidden"
          >

            <ul className="flex flex-col gap-2 p-5">

              {menuItems.map((item, index) => (

                <li key={index}>

                  {/* ================= MOBILE DROPDOWN ================= */}
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenMenu(
                            openMenu === index ? null : index
                          )
                        }
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white"
                      >

                        <span>{item.title}</span>

                        <motion.span
                          animate={{
                            rotate:
                              openMenu === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          ▼
                        </motion.span>

                      </button>


                      <AnimatePresence>
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
                            }}
                            className="ml-5 overflow-hidden"
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

                  ) : item.title === "Blog" ? (

                    /* ================= MOBILE BLOG ================= */
                    <a
                      href="https://zyntro.in/blog/"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
                    >
                      Blog
                    </a>

                  ) : (

                    /* ================= MOBILE NORMAL LINK ================= */
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


              {/* ================= MOBILE CONSULTATION ================= */}
              <button
                className="mt-4 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
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

