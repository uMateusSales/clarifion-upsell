import React from "react";
import StockIcon from "./StockIcon";

const StockContainer = () => {
  return (
    <div className="flex gap-4">
      <StockIcon />
      <p className=" text-slate-700 text-xs font-light font-['Manrope']">
        12 left in Stock
      </p>
    </div>
  );
};

export default StockContainer;
