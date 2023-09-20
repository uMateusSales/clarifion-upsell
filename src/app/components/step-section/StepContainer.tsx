import React from "react";
import StepCard from "./StepCard";
import StepIcon from "./StepIcon";

const StepContainer = () => {
  return (
    <section className="flex justify-between items-center my-[24px] ">
      <StepCard stepIcon={<StepIcon />}  text="Cart Review"/>
      <StepCard stepIcon={<StepIcon />}  text="Checkout" />
      <StepCard stepIcon={<StepIcon />}  text="Special Offer" />
      <StepCard stepIcon={<StepIcon />}  text="Confirmation" />
    </section>
  );
};

export default StepContainer;
