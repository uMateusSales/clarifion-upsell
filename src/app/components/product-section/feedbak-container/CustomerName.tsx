import React from "react";
import CheckGreen from "../../icons/CheckGreen";

const CustomerName = () => {
  return (
    <div className="flex gap-2.5 items-center justify-center">
      <p className=" text-zinc-800 text-sm font-bold font-['Manrope'] leading-[14px]">
        Ken T.
      </p>
      <CheckGreen />
      <p className="text-emerald-400 text-xs font-normal font-['Manrope'] leading-[14.40px]">
        Verified customer
      </p>
    </div>
  );
};

export default CustomerName;
