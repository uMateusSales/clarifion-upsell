import React from "react";

const StepEmpty = () => {
  return (
    <div className="hover:opacity-60 cursor-pointer">
      <div className=" w-5 h-5 left-0 top-0  rounded-full border-2 border-blue-500 relative" />
      <div className="w-2 h-2 left-[3.5px] top-[6px] absolute">
        <svg
          width="13"
          height="9"
          viewBox="0 0 10 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.74 15V12.21H1.49012e-08V10.81L4.82 0.600041H6.47L1.65 10.81H6.74V6.61004H8.22V10.81H9.79V12.21H8.22V15H6.74Z"
            fill="#2C7EF8"
          />
        </svg>
      </div>
    </div>
  );
};

export default StepEmpty;
