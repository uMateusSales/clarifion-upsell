import React from "react";

interface StepCardProps {
  stepIcon: React.ReactNode;
  text: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepIcon, text }) => {
  return (
    <div className="flex flex-col md:flex-row md:h-auto  max-h-[37px] justify-center items-center gap-2">
      <div className="relative">{stepIcon}</div>
      <p className="text-black text-xs font-bold font-['Manrope'] capitalize leading-[13.20px]">
        {text}
      </p>
    </div>
  );
};

export default StepCard;
