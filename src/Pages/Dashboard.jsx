import DashboardNav from "../Components/DashboardNav";
import SettingsPanel from "../Components/SettigsPanel";
import Sidebar from "../Components/SideBar";
import { features } from "../Data/dummyData";
import {
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  ShareIcon,
  DocumentIcon,
  ArrowPathIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import settings from "../Assets/download.svg";

const Dashboard = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex flex-col bg-[#eaedf1] ">
      <DashboardNav expanded={expanded} setExpanded={setExpanded} />
      <div className="flex flex-row gap-2">
        <Sidebar expanded={expanded} setExpanded={setExpanded} />

        <div
          className={`bg-white ${
            !expanded ? "max-w-[1026px]" : "max-w-[886px] "
          } w-full flex flex-col items-center px-4 py-6 font-sans rounded-2xl`}
        >
          <div className="w-full flex flex-row justify-between border-b pb-4 border-gray-500]">
            <h1 className="text-gray-800 text-lg font-medium self-start">
              Chat Prompt
            </h1>
            <div className="flex items-center justify-center gap-6 ">
              <ClipboardDocumentListIcon className="h-4  w-4 text-gray-800" />
              <CodeBracketIcon className="h-4 w-4 text-gray-400" />
              <ShareIcon className="h-4 w-4 text-gray-400" />
              <DocumentIcon className="h-4 w-4 text-gray-400" />
              <ArrowsRightLeftIcon className="h-4 w-4 text-gray-800" />
              <ArrowPathIcon className="h-4 w-4 text-gray-400" />
              <EllipsisVerticalIcon className="h-4 w-4 text-gray-800" />
            </div>
            {/* <hr className="border-t border-gray-500]" /> */}
          </div>

          <h2 className="text-3xl md:text-4xl text-center text-[#1a73e8] my-6 pt-20">
            Welcome to AI Studio
          </h2>

          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Generate a high school revision guide on quantum computing →"
              className="w-full px-5 py-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1a73e8] text-gray-700"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-sm px-4 py-2 rounded-full hover:bg-gray-200">
              Run ⌘↵
            </button>
          </div>

          <div>
            <h3 className="text-[#74777F] font-small mt-10 mb-4 self-start text-base">
              What's new
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl ">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#EDF2FA] p-4 rounded-xl shadow-sm flex items-start space-x-4"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-sm">{feature.title}</h4>
                      {feature.badge && (
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SettingsPanel />
        <div className="flex flex-col items-center space-y-1 pl-2 pr-2">
          <img
            src={settings}
            style={{ width: "32px", paddingBottom: "16px" }}
          />
          <Squares2X2Icon className="h-5 w-5 text-gray-700 " />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
