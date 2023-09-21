import React from "react";
import PromoCard from "./PromoCard";
import Image from "next/image";
import ProductInfo from "./ProductInfo";
import ProductInfoContainer from "./ProductInfo";

const ProductContainer: React.FC = () => {
  return (
    <section className="flex min-w-[320px] h-[1062px] flex-col items-center gap-6">
      <div>
        <PromoCard />
      </div>
      <div className="flex max-w-[575px] max-h-[591px] rounded relative">
        <Image
          width={320}
          height={320}
          quality={100}
          layout="responsive"
          alt="product banner"
          src="/product-banner.png"
        />
      </div>
      <ProductInfoContainer />
    </section>
  );
};

export default ProductContainer;
