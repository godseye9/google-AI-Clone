import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-[200px]">
      {!isFocused && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center space-x-2 text-[#5f6368]">
          <FaSearch className="w-4 h-4" />
          <span className="text-sm">Search</span>
        </div>
      )}
      {!isFocused && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-white rounded text-[#5f6368] text-xs font-medium">
          /
        </div>
      )}
      <input
        type="text"
        className="w-full pl-10 pr-6 py-1.5 bg-gray-100 rounded-md text-[#5f6368] focus:outline-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
