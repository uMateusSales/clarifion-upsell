import React from "react";
import GuaranteeBadge from "../../icons/GuaranteeBadge";

const GuaranteeContainer = () => {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12">
        <GuaranteeBadge />
      </div>
      <div className="">
        <div>
          <span className="text-neutral-600 text-xs font-normal font-['Manrope'] leading-none">
            If you are not completely thrilled with your Clarifion - We have a{" "}
          </span>
          <span className="text-neutral-600 text-xs font-bold font-['Manrope'] leading-none">
            30 day satisfaction guarantee
          </span>
          <span className="text-neutral-600 text-xs font-normal font-['Manrope'] leading-none">
            . Please refer to our return policy at the bottom of the page for
            more details. Happy Shopping!
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeContainer;
