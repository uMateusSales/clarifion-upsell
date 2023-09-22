import React from "react";
import CreditCards from "./CreditCards";
import ShippingContainer from "./ShippingContainer";
import LineHorizontal from "../../icons/LineHorizontal";
import useWindowSize from "@/app/hooks/useWindowSize";
import LineSeparator from "../../icons/LineSeparator";

const CardContainer = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-1 md:px-2 px-4 py-2 gap-3 items-center rounded border border-stone-300">
        <ShippingContainer />
        {width < 768 && <LineHorizontal />}
        {width > 768 && <LineSeparator />}
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
