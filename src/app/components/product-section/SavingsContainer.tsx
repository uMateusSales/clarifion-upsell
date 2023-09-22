import React from "react";
import PercentageIcon from "../icons/PercentageIcon";

const SavingsContainer = () => {
  return (
    <div className="flex items-center sm:self-start md:self-center bg-indigo-50 rounded-xl px-4 py-3 gap-4 ">
      <div className="w-6 h-6 bg-blue-500 rounded-full">
        <PercentageIcon />
      </div>
      <div>
        <span className="text-black text-sm font-normal font-['Manrope'] leading-tight">
          Save{" "}
        </span>
        <span className="text-blue-500 text-sm font-normal font-['Manrope'] leading-tight">
          53%
        </span>
        <span className="text-black text-sm font-normal font-['Manrope'] leading-tight">
          {" "}
          and get{" "}
        </span>
        <span className="text-blue-500 text-sm font-normal font-['Manrope'] leading-tight">
          6 extra Clarifision
        </span>
        <span className="text-black text-sm font-normal font-['Manrope'] leading-tight">
          {" "}
          for only{" "}
        </span>
        <span className="text-blue-500 text-sm font-normal font-['Manrope'] leading-tight">
          $14 Each
        </span>
        <span className="text-black text-sm font-normal font-['Manrope'] leading-tight">
          .
        </span>
      </div>
    </div>
  );
};

export default SavingsContainer;
