import { WEIN } from "@/common";
import React from "react";
import WeinCart from "./WeinCart";
import PopularSection from "@/PopularSection";

const Wein = () => {
  return (
    <PopularSection subTitle={"WEIN"}>
      <div class="popular__container container grid">
        {WEIN.map((item, idx) => (
          <WeinCart {...item} key={idx} />
        ))}
      </div>
    </PopularSection>
  );
};

export default Wein;
