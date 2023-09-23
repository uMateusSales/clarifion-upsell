import React from "react";

interface PromoCardProps {}

const PromoCard: React.FC<PromoCardProps> = () => {
  return (
    <>
      {" "}
      <article className="text-center box-content self-start w-80 sm:w-auto md:text-[32px] justify-start  md:max-w-[550px]">
        <span className="text-blue-500 text-2xl font-normal font-[Manrope] capitalize leading-[33.60px]">
          ONE TIME ONLY
        </span>
        <span className="text-black text-2xl font-normal font-[Manrope] capitalize leading-[33.60px]">
          {" "}
          special price for 6 extra Clarifion for only{" "}
        </span>
        <span className="text-blue-500 text-2xl font-normal font-[Manrope] capitalize leading-[33.60px]">
          $14 each
        </span>
        <span className="text-black text-2xl font-normal font-[Manrope] capitalize leading-[33.60px]">
          {" "}
          ($84.00 total!)
        </span>
      </article>
    </>
  );
};

export default PromoCard;
