import { FaGlobe } from "react-icons/fa";

import { HiChevronDown } from "react-icons/hi";

const Footer = () => (
  <footer class="flex items-center justify-between px-6 py-4 bg-white shadow-md rounded-b-lg">
    <div class="text-sm text-gray-700 space-x-2">
      <a href="#" class="hover:underline">
        Terms
      </a>
      <span>|</span>
      <a href="#" class="hover:underline">
        Privacy
      </a>
    </div>
    <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1.5 cursor-pointer">
      <FaGlobe className="text-[#5f6368] w-4 h-4" />
      <span className="text-[#5f6368] text-sm">English</span>
      <HiChevronDown className="text-[#5f6368] w-4 h-4" />
    </div>
  </footer>
);

export default Footer;
