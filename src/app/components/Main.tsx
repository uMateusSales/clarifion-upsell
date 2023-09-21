import React, { ReactNode } from "react";
import OrderSection from "./OrderSection";
import StepContainer from "./step-section/StepContainer";
import ProductContainer from "./product-section/ProductContainer";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <main className="min-w-[360px] gap-6 px-2 sm:px-5 max-w-80 flex flex-col items-center sm:max-h-96">
      <OrderSection />
      <StepContainer />
      <ProductContainer />
    </main>
  );
};

export default Main;
