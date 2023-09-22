import React from "react";
import CustomerCard from "./CustomerCard";

const FeedBackCard = () => {
  return (
    <div className="self-baseline flex flex-col gap-4">
      <CustomerCard />
      <p className="text-neutral-600 text-base font-normal font-['Manrope'] leading-normal">
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </p>
    </div>
  );
};

export default FeedBackCard;
