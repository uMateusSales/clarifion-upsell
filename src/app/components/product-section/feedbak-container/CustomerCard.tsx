import React from "react";
import Avatar from "./Avatar";
import StarIcon from "../StarIcon";
import StarsContainer from "../StarsContainer";
import CustomerName from "./CustomerName";

const CustomerCard = () => {
  return (
    <div className="flex gap-3 items-center">
      <Avatar />
      <div className="flex flex-col  gap-2 justify-center">
        <StarsContainer />
        <CustomerName />
      </div>
    </div>
  );
};

export default CustomerCard;
