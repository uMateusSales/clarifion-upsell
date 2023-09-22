import React, { useEffect, useState } from "react";
import StarsContainer from "./StarsContainer";
import StockContainer from "./StockContainer";
import useWindowSize from "@/app/hooks/useWindowSize";

const RateContainer = () => {
  const { width, height } = useWindowSize();

  const [altura, setAltura] = useState<number>();
  const [largura, setLargura] = useState<number>();
  useEffect(() => {
    setAltura(height);
    setLargura(width);
  }, [width, height]);

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
