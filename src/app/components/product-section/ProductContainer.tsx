"use client";
import React from "react";
import PromoCard from "./PromoCard";
import Image from "next/image";
import ProductInfoContainer from "./ProductInfo";
import ProductCheckList from "./ProductCheckList";
import SavingsContainer from "./SavingsContainer";
import ButtonDiscount from "./ButtonDiscount";
import CardContainer from "./CardContainer/CardContainer";
import GuaranteeContainer from "./guarantee-container/GuaranteeContainer";

const ProductContainer: React.FC = () => {
  return (
    <section className="flex min-w-[320px]  flex-col items-center gap-6">
      <div>
        <PromoCard />
      </div>
      <div className="flex max-w-[575px] max-h-[591px] rounded relative">
        <Image
          width={320}
          height={320}
          quality={100}
          alt="product banner"
          src="/product-banner.png"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <ProductInfoContainer />
      <ProductCheckList />
      <SavingsContainer />
      <ButtonDiscount />
      <CardContainer />
      <GuaranteeContainer />
    </section>
  );
};

export default ProductContainer;
