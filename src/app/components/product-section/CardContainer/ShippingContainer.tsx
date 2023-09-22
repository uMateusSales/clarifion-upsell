import React from "react";
import LockIcon from "../../icons/LockIcon";
import LineSeparator from "../../icons/LineSeparator";

const ShippingContainer = () => {
  return (
    <div className="flex gap-3">
      <p className="text-neutral-600 text-xs font-normal font-['Manrope'] capitalize leading-none">
        Free shipping
      </p>
      <LineSeparator />
      <div className="flex gap-2">
        <LockIcon />
        <p className="text-center text-neutral-600 text-xs font-normal font-['Manrope'] capitalize leading-none">
          Secure 256-bit SSL encryption
        </p>
      </div>
    </div>
  );
};

export default ShippingContainer;
