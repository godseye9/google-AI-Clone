import { KeyRound, ExternalLink, Settings } from "lucide-react";
import hatAI from "../Assets/hatAI.jpg";
import MyCustomIcon from "../Assets/CustomIcon";

const DashboardNav = (props) => {
  return (
    <header className="flex justify-between items-center px-6 py-6 bg-gradient-to-r from-[#eaedf1] to-[#eaedf1] ">
      {props.expanded ? (
        <h1 className="text-2xl  text-[#0b1d33]">Google AI Studio</h1>
      ) : (
        <MyCustomIcon />
      )}

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#eef0ff] text-[#0b1d33] rounded-full text-sm font-medium hover:shadow">
          <KeyRound size={16} />
          Get API key
        </button>

        <nav className="flex items-center gap-4 text-sm text-[#0b1d33]">
          <span className="font-semibold">Studio</span>
          <span className="opacity-70">Dashboard</span>
          <a
            href="#"
            className="flex items-center gap-1 opacity-70 hover:opacity-100"
          >
            Documentation <ExternalLink size={14} />
          </a>
        </nav>

        <Settings className="text-[#0b1d33] cursor-pointer" size={18} />

        <img
          src={hatAI}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
};
export default DashboardNav;
