"use client";
import React, { ReactNode, useEffect, useState } from "react";
import OrderSection from "./OrderSection";

import ProductContainer from "./product-section/ProductContainer";
import PromoCard from "./product-section/PromoCard";
import useWindowSize from "../hooks/useWindowSize";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const { width, height } = useWindowSize();

  return (
    <main className=" max-w-full gap-6 px-2 sm:px-5 max-w-80 flex flex-col items-center max-h-[1800px] py-8 bg-neutral-50">
      <OrderSection />
      {width < 768 && <PromoCard />}

      <ProductContainer />
    </main>
  );
};

export default Main;
