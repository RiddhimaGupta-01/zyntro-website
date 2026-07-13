
import { menuItems } from "../../data/menuData";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 w-full h-20 bg-blue-300 shadow-sm">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-[#0057B8]">
            ZYNTRO
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              {item.title}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="hidden lg:block bg-[#0057B8] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Free Consultation
        </button>

      </div>
    </nav>
  );
};

export default Navbar;