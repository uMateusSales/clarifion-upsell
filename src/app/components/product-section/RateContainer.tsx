import React from "react";
import StarsContainer from "./StarsContainer";
import StockContainer from "./StockContainer";

const RateContainer = () => {
  return (
    <div className="grid-cols-2 gap-3 gap-y-3">
      <div className="flex flex-col gap-2.5">
        <div>
          <p className=" min-w-[120px] break-keep text-black text-sm font-normal font-['Manrope'] capitalize leading-tight">
            Clarifion Air Ionizer
          </p>
        </div>

        <div>
          <StarsContainer />
        </div>
        <StockContainer />
      </div>
    </div>
  );
};

export default RateContainer;
