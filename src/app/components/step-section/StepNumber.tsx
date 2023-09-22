import React from "react";
import StepCheck from "./StepCheck";
import StepThree from "./StepThree";

const StepNumber = () => {
  return (
    <div className="hover:opacity-60 cursor-pointer">
      <div className=" w-5 h-5 left-0 top-0  bg-blue-500 rounded-full border-2 border-blue-500 relative" />
      <StepThree />
    </div>
  );
};

export default StepNumber;
