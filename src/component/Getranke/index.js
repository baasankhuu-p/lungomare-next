import { GETRANKE } from "@/common";
import React from "react";
import GetrankeCart from "./GetrankeCart";
import PopularSection from "@/PopularSection";

const Getranke = () => {
  return (
    <PopularSection subTitle={"GETRÄNKE"}>
      <div class="popular__container container grid">
        {GETRANKE.map((item, idx) => (
          <GetrankeCart {...item} key={idx} />
        ))}
      </div>
    </PopularSection>
  );
};

export default Getranke;
