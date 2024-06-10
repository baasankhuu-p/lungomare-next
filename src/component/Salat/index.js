import React from "react";
import SalatCart from "./SalatCart";
import { SALAT } from "@/common";
import PopularSection from "@/PopularSection";

const Salat = () => {
  return (
    <PopularSection subTitle={"SALAT"}>
      <div class="popular__container container grid">
        {SALAT.map((item, idx) => (
          <SalatCart {...item} key={idx} />
        ))}
      </div>
    </PopularSection>
  );
};

export default Salat;
