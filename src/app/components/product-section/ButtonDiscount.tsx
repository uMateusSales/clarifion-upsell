import React from "react";
import ArrowButton from "../icons/ArrowButton";

const ButtonDiscount = () => {
  return (
    <div className="flex min-w-80 min-h-3 cursor-pointer  max-h-12 md:w-max px-16 py-4 items-center bg-lime-600 gap-4 rounded-3xl hover:bg-opacity-80">
      <button className="text-white text-sm font-bold font-['Manrope'] uppercase">
        Yes - Claim my discount
      </button>
      <div>
        <ArrowButton />
      </div>
    </div>
  );
};

export default ButtonDiscount;
