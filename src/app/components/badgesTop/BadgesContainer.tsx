import Image from "next/image";
import React from "react";

const BadgesContainer = () => {
  return (
    <div className="flex flex-row p-5 justify-between lg:px-[127px] lg:py-[30px]">
      <div className="relative">
        <Image
          width={106}
          height={36}
          quality={100}
          alt="clarifion logo"
          src="/clarifion-logo.png"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="flex flex-row gap-4">
        <Image
          width={80}
          height={16}
          quality={100}
          alt="mcafee"
          src="/mcafee.png"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <Image
          width={80}
          height={16}
          quality={100}
          alt="norton"
          src="/norton.png"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default BadgesContainer;
