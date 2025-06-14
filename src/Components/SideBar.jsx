import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { navItems } from "../Data/dummyData";

const Sidebar = (props) => {
  const { expanded, setExpanded } = props;
  return (
    <div
      className={`h-screen ${
        expanded ? "m-width-[180px]" : "m-widith-[60px]"
      } bg-[#eaedf1] text-[#111827] flex flex-col justify-between pr-4 pl-6 mt-6 ${
        expanded ? "w-60 p-4" : "w-16 items-center"
      } transition-all duration-300`}
    >
      <div className="space-y-4">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-sm font-medium cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-3xl"
          >
            {expanded ? (
              <span>{item.icon}</span>
            ) : (
              item.label !== "Enable saving" && <span>{item.icon}</span>
            )}
            {expanded && <span>{item.label}</span>}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {expanded && (
          <p className="text-xs text-gray-500 leading-5">
            This model is not stable and may not be suitable for production use.{" "}
            <span className="underline">Learn more.</span>
          </p>
        )}
        <div className="flex items-center justify-end">
          <button
            className="p-2 rounded-full hover:bg-gray-200 bg-white -mr-8"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
