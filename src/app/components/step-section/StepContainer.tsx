import React from "react";
import StepCard from "./StepCard";
import StepIcon from "./StepIcon";
import StepNumber from "./StepNumber";
import StepEmpty from "./StepEmpty";

const StepContainer = () => {
  return (
    <section className="flex h-[37px] max-w-3xl justify-between min-w-[320px] gap-2 sm:gap-3 md:justify-around my-[24px] w-full ">
      <StepCard stepIcon={<StepIcon />} text="Cart Review" />
      <StepCard stepIcon={<StepIcon />} text="Checkout" />
      <StepCard stepIcon={<StepNumber />} text="Special Offer" />
      <StepCard stepIcon={<StepEmpty />} text="Confirmation" />
    </section>
  );
};

export default StepContainer;
