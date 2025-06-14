import { NavList, menus } from "../Data/dummyData";
import googleAI from "../Assets/googleAI.svg";
import RotatingChevron from "../Assets/filledChevron";
import { FaGlobe } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import SearchInput from "./SeachInput";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRedirection = () => {
    navigate("/dashboard");
  };

  const renderDropdown = (section) => {
    const hasTitles = menus[section].some((item) => item.title);

    return (
      <div className="absolute left-0 w-full mt-2 top-10 bg-white shadow-lg border-t border-gray-200 z-50 hidden group-hover:block animate-dropdown-in">
        <div
          className={`max-w-6xl mx-auto px-6 py-6 ${
            hasTitles ? "grid grid-cols-4 gap-8" : ""
          }`}
        >
          {menus[section].map((col, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-gray-800 mb-2">{col.title}</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {col.links.map((link, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <header className="flex items-center justify-between px-6 py-4 pt-2 pb-2 bg-white text-sm text-grayCustom">
        <div className="flex items-center">
          <img alt="icon" src={googleAI} className="w-48" />
          <nav className="hidden md:flex ">
            {NavList.map((item) => (
              <div className="pl-4 md:flex items-center space-x-0.5 group">
                <span className="cursor-pointer ">{item}</span>
                <div className="group inline-flex items-center space-x-1 cursor-pointer font-bold">
                  <RotatingChevron />
                </div>
                {renderDropdown(item)}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4 ">
          <SearchInput />
          <FiSun className="flex w-8 h-5 text-[#5f6368] cursor-pointer " />
          <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1.5 cursor-pointer">
            <FaGlobe className="text-[#5f6368] w-4 h-4" />
            <span className="text-[#5f6368] text-sm">English</span>
            <HiChevronDown className="text-[#5f6368] w-4 h-4" />
          </div>
          <button
            className="text-blue-600  text-sm"
            onClick={handleRedirection}
          >
            Sign in
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
