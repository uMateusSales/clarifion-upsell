import React from "react";

interface StepCardProps {
  stepIcon: React.ReactNode;
  text: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepIcon, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="relative">{stepIcon}</div>
      <p>{text}</p>
    </div>
  );
};

export default StepCard;
