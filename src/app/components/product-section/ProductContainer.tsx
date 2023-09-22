"use client";
import React, { useEffect, useState } from "react";
import PromoCard from "./PromoCard";
import Image from "next/image";
import ProductInfoContainer from "./ProductInfo";
import ProductCheckList from "./ProductCheckList";
import SavingsContainer from "./SavingsContainer";
import ButtonDiscount from "./ButtonDiscount";
import CardContainer from "./CardContainer/CardContainer";
import GuaranteeContainer from "./guarantee-container/GuaranteeContainer";
import useWindowSize from "@/app/hooks/useWindowSize";
import StepContainer from "../step-section/StepContainer";
import OrderSection from "../OrderSection";
import FeedBackCard from "./feedbak-container/FeedBackCard";

const ProductContainer: React.FC = () => {
  const { width, height } = useWindowSize();

  const [altura, setAltura] = useState<number>();
  const [largura, setLargura] = useState<number>();
  useEffect(() => {
    setAltura(height);
    setLargura(width);
  }, [width, height]);

  return (
    <>
      <StepContainer />
      <section className="flex min-w-[320px]  flex-col items-center gap-6 md:gap-3 md:px-5 md:grid-cols-2 md:grid">
        <div className="flex flex-col gap-6 md:self-start">
          <div className="flex max-w-[575px] max-h-[591px] rounded relative md:self-start ">
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
          {width > 768 && <FeedBackCard />}
        </div>
        <div className="flex min-w-[320px] md:h-full  flex-col items-center gap-6">
          {width > 768 && <PromoCard />}
          <ProductInfoContainer />
          <ProductCheckList />
          <SavingsContainer />
          <ButtonDiscount />
          <CardContainer />
          <GuaranteeContainer />
        </div>
      </section>
    </>
  );
};

export default ProductContainer;
