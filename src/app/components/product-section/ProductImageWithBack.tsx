import Image from "next/image";
import React from "react";

const ProductImageWithBack = () => {
  return (
    <div className="flex w-20 h-20 bg-blue-500 rounded-lg">
      <Image
        alt="product with blue bg"
        width={80}
        height={80}
        src="/product-with-bg.png"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default ProductImageWithBack;
