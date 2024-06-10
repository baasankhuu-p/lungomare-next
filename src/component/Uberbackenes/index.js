import { UBERBACKENES } from "@/common";
import React from "react";
import UberCart from "./UberCart";
import PopularSection from "@/PopularSection";

const Uberbackenes = () => {
  return (
    <PopularSection subTitle={"ÜBERBACKENES"}>
      <div class="popular__container container grid">
        {UBERBACKENES.map((item, idx) => (
          <UberCart {...item} key={idx} />
        ))}
      </div>
    </PopularSection>
  );
};

export default Uberbackenes;
