import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { RxReset } from "react-icons/rx";
import { Check, Minus } from "lucide-react";

const ToggleSwitch = ({ isOn, onToggle }) => (
  <div
    onClick={onToggle}
    className={`w-10 h-4 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
      isOn ? "bg-blue-400" : "bg-gray-400"
    }`}
  >
    <div
      className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 ${
        isOn
          ? "translate-x-4 bg-[#001B4E]" // ON - Dark navy blue
          : "translate-x-0 bg-[#2E2E2E]" // OFF - Dark grey
      }`}
    >
      {isOn ? (
        <Check className="text-white w-4 h-4" strokeWidth={3} />
      ) : (
        <Minus className="text-white w-4 h-4" strokeWidth={3} />
      )}
    </div>
  </div>
);

const SectionToggle = ({ label, value, onToggle, editable }) => (
  <div className="flex justify-between items-center my-2">
    <div className="text-gray-800">
      {label} {editable && <span className="text-gray-400 text-sm">Edit</span>}
    </div>
    <ToggleSwitch isOn={value} onToggle={onToggle} />
  </div>
);

const SettingsPanel = () => {
  const [thinkingMode, setThinkingMode] = useState(false);
  const [thinkingBudget, setThinkingBudget] = useState(false);
  const [structuredOutput, setStructuredOutput] = useState(false);
  const [codeExecution, setCodeExecution] = useState(false);
  const [functionCalling, setFunctionCalling] = useState(false);
  const [grounding, setGrounding] = useState(false);
  const [urlContext, setUrlContext] = useState(false);
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const [advancedExpanded, setAdvancedExpanded] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [topP, setTopP] = useState(0);

  return (
    <div className=" p-4 rounded-2xl overflow-y-auto bg-white m-width-[300px]">
      <div className="flex flex-row w-full justify-between mb-4 pb-2">
        <div className="text-gray-800 text-sm ">Run settings</div>

        <div className="flex items-center gap-4">
          <RxReset className="h-4 w-6 text-gray-700 " />
          <XMarkIcon className="h-4 w-6 text-gray-700 mr-2" />
        </div>
      </div>

      <select className="w-full p-2 border rounded-md mb-4 text-gray-800 ">
        <option className="text-gray-800 text-sm">
          Gemini 2.5 Pro Preview
        </option>
      </select>

      <div className="flex flex-row pt-6 justify-between pb-2">
        <div className="text-sm text-gray-600 mb-2">Token count</div>
        <div className="text-gray-800 mb-4 text-sm">0 / 1,048,576</div>
      </div>

      <div className="text-sm text-gray-600 mb-1">Temperature</div>
      <div className="flex flex-row justify-between gap-8">
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={temperature}
          className="w-full text-center flex items-center justify-center font-medium"
          onChange={(e) => setTemperature(e.target.value)}
        />
        <input
          className="w-10 h-10 rounded-md border border-gray-300 flex text-center"
          min={0}
          max={2}
          value={temperature}
        ></input>
      </div>

      <div className="border-t my-4"></div>

      <div className="text-md mb-2 text-[#1A1C1E] font-medium pb-4">
        Thinking
      </div>
      <div className="flex flex-col gap-1">
        <SectionToggle
          label="Thinking mode"
          value={thinkingMode}
          onToggle={() => setThinkingMode(!thinkingMode)}
        />
        <SectionToggle
          label="Set thinking budget"
          value={thinkingBudget}
          onToggle={() => setThinkingBudget(!thinkingBudget)}
        />
      </div>

      <div className="border-t my-4"></div>

      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setToolsExpanded(!toolsExpanded)}
      >
        <div className="text-md font-semibold">Tools</div>
        {toolsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {toolsExpanded && (
        <div className="mt-2 gap-1 flex flex-col">
          <SectionToggle
            label="Structured output"
            value={structuredOutput}
            onToggle={() => setStructuredOutput(!structuredOutput)}
            editable
          />
          <SectionToggle
            label="Code execution"
            value={codeExecution}
            onToggle={() => setCodeExecution(!codeExecution)}
          />
          <SectionToggle
            label="Function calling"
            value={functionCalling}
            onToggle={() => setFunctionCalling(!functionCalling)}
            editable
          />
          <SectionToggle
            label="Grounding with Google Search"
            value={grounding}
            onToggle={() => setGrounding(!grounding)}
          />
          <SectionToggle
            label="URL context"
            value={urlContext}
            onToggle={() => setUrlContext(!urlContext)}
          />
        </div>
      )}

      <div className="border-t my-4"></div>

      <div
        className="flex justify-between items-center cursor-pointer w-full"
        onClick={() => setAdvancedExpanded(!advancedExpanded)}
      >
        <div className="text-md font-semibold ">Advanced settings</div>
        {advancedExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {advancedExpanded && (
        <div className="pt-6 pb-4 space-y-4 text-sm text-gray-900 flex flex-col gap-1 ">
          <div className="flex items-center justify-between">
            <span className="font-medium">Safety settings</span>
            <button className="text-blue-600 font-medium">Edit</button>
          </div>

          <div>
            <label className="block mb-1">Add stop sequence</label>
            <input
              type="text"
              placeholder="Add stop..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block mb-1">Output length</label>
            <input
              type="number"
              value="65536"
              readOnly
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-2">Top P</label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={topP}
                onChange={(e) => setTopP(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="w-12 text-center border border-gray-300 rounded-lg py-1 text-sm">
                {topP.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPanel;
