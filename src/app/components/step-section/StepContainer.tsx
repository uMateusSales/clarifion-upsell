import React from "react";
import StepCard from "./StepCard";
import StepIcon from "./StepIcon";

const StepContainer = () => {
  return (
    <section className="flex h-[37px] justify-between items-center gap-2 my-[24px] ">
      <StepCard stepIcon={<StepIcon />} text="Cart Review" />
      <StepCard stepIcon={<StepIcon />} text="Checkout" />
      <StepCard stepIcon={<StepIcon />} text="Special Offer" />
      <StepCard stepIcon={<StepIcon />} text="Confirmation" />
    </section>
  );
};

export default StepContainer;
