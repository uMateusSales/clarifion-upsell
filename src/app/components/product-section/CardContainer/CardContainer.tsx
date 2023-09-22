import React from "react";
import CreditCards from "./CreditCards";
import ShippingContainer from "./ShippingContainer";
import LineHorizontal from "../../icons/LineHorizontal";

const CardContainer = () => {
  return (
    <>
      <div className="flex flex-col px-4 py-2 gap-3 items-center rounded border border-stone-300">
        <ShippingContainer />
        <LineHorizontal />
        <CreditCards />
      </div>
      <a
        href="/"
        className="text-red-600 text-xs font-medium font-['Manrope'] underline uppercase"
      >
        NO THANKS, I DON’T WANT THIS.
      </a>
    </>
  );
};

export default CardContainer;
