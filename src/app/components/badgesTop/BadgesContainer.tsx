import Image from "next/image";
import React from "react";

const BadgesContainer = () => {
  return (
    <div className="flex flex-row p-5 justify-between lg:px-[127px] lg:py-[30px]">
      <div className="relative">
        <Image width={106} height={5} alt="clarifion logo" src="/clarifion-logo.png" />
      </div>
      <div className=" flex flex-row gap-4 relative">
        <Image width={44} height={16} alt="mcafee" src="/mcafee.png" />
        <Image width={41} height={16} alt="norton" src='/norton.png' />
      </div>
    </div>
  );
};

export default BadgesContainer;
