import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="flex relative w-12 h-12">
      <Image
        height={48}
        width={48}
        sizes="100vw"
        style={{
          borderRadius: "100px",
          width: "100%",
          height: "auto",
        }}
        quality={100}
        src="/avatar.png"
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
