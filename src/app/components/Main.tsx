"use client";
import React, { ReactNode } from "react";
import OrderSection from "./OrderSection";
import StepContainer from "./step-section/StepContainer";
import ProductContainer from "./product-section/ProductContainer";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <main className=" max-w-full gap-6 px-2 sm:px-5 max-w-80 flex flex-col items-center max-h-[1800px] py-8">
      <OrderSection />
      <StepContainer />
      <ProductContainer />
    </main>
  );
};

export default Main;
