import { Link } from "react-router-dom";

const Dropdown = ({ submenu }) => {
  return (
    <div
      className="      absolute top-full left-0 mt-3 w-72
      bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950
      border border-blue-500/20
      rounded-2xl
      shadow-[0_15px_40px_rgba(37,99,235,0.25)]
      backdrop-blur-xl
      py-3
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300 
      z-[9999]"
    >
      {submenu.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="block px-5 py-3 text-white  hover:bg-blue-500 transition"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
