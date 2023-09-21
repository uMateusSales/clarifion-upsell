import React from "react";

import CheckBlue from "../icons/CheckBlue";

const ProductCheckList = () => {
  return (
    <div className="flex flex-col gap-4 self-start sm:self-auto  min-w-[320px]">
      <div className="flex gap-3">
        <CheckBlue />
        <span className="text-neutral-600 text-xs font-normal font-['Manrope'] leading-tight">
          Negative Ion Technology may
        </span>
        <span className="text-neutral-600 text-xs font-bold font-['Manrope'] leading-tight">
          {" "}
          help with allergens
        </span>
      </div>

      <div className="flex gap-3">
        <CheckBlue />
        <span className="text-neutral-600 text-xs font-normal font-['Manrope'] leading-tight">
          Designed for
        </span>
        <span className="text-neutral-600 text-xs font-bold font-['Manrope'] leading-tight">
          {" "}
          air rejuvenation
        </span>
      </div>

      <div className="flex gap-3">
        <CheckBlue />
        <span className="text-neutral-600 text-xs font-bold font-['Manrope'] leading-tight">
          Perfect for every room
        </span>
        <span className="text-neutral-600 text-xs font-normal font-['Manrope'] leading-tight">
          {" "}
          in all types of places.
        </span>
      </div>
    </div>
  );
};

export default ProductCheckList;
