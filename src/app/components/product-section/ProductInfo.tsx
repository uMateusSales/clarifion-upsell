"use client";

import React from "react";
import RateContainer from "./RateContainer";
import PromoPrice from "./PromoPrice";
import ProductImageWithBack from "./ProductImageWithBack";

const ProductInfoContainer = () => {
  return (
    <section className="flex flex-col  min-w-[320px] gap-4">
      <div className="flex justify-between  gap-4">
        <div className="flex justify-start gap-4">
          <ProductImageWithBack />
          <RateContainer />
        </div>
        <PromoPrice />
      </div>
      <p className="text-center text-neutral-600 text-xs font-normal font-['Manrope'] leading-none">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple
      </p>
    </section>
  );
};

export default ProductInfoContainer;
