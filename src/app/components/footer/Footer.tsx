"use client";

import React from "react";
import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <footer className="min-w-[360px] min-h-[102px] bg-slate-800 flex flex-col md:flex-row md:justify-around p-5 ">
      <div className="flex items-center justify-center py-2 gap-2">
        <p className="text-white text-xs font-normal font-[Manrope] capitalize leading-none">
          Copyright(C) 2023
        </p>
        <div className="w-3.5 h-[0px]  rotate-90 border border-white"></div>
        <p className="text-white text-xs font-normal font-[Manrope] lowercase leading-none">
          clarifionsupport@clarifion.com
        </p>{" "}
      </div>
      <div className="flex items-center justify-center gap-4">
        <FooterIcon />
        <p className="text-center text-white text-xs font-normal font-[Manrope] capitalize leading-[18px]">
          Secure 256-bit SSL encryption.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
