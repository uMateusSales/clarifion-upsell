import React from "react";

interface PromoCardProps {
 
}

const PromoCard: React.FC<PromoCardProps> = () => {
  return (
    <div className="self-stretch text-center">
      <span className="text-blue-500 text-2xl font-normal font-['Manrope'] capitalize leading-[33.60px]">
        ONE TIME ONLY
      </span>
      <span className="text-black text-2xl font-normal font-['Manrope'] capitalize leading-[33.60px]">
        {" "}
        special price for 6 extra Clarifion for only{" "}
      </span>
      <span className="text-blue-500 text-2xl font-normal font-['Manrope'] capitalize leading-[33.60px]">
        $14 each
      </span>
      <span className="text-black text-2xl font-normal font-['Manrope'] capitalize leading-[33.60px]">
        {" "}
        ($84.00 total!)
      </span>
    </div>
  );
};

export default PromoCard;
