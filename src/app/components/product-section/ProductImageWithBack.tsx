import Image from "next/image";
import React from "react";

const ProductImageWithBack = () => {
  return (
    <div className="flex w-20 h-20 bg-blue-500 rounded-lg">
      <Image
        alt="product with blue bg"
        width={80}
        height={80}
        layout="responsive"
        src="/product-with-bg.png"
      />
    </div>
  );
};

export default ProductImageWithBack;
