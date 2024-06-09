import { GETRANKE } from "@/common";
import React from "react";
import GetrankeCart from "./GetrankeCart";

const Getranke = () => {
  return (
    <section class="popular section" id="popular">
      <span class="section__subtitle">Das beste GETRÄNKE</span>
      <h2 class="section__title">GETRÄNKE</h2>
      <div class="popular__container container grid">
        {GETRANKE.map((item, idx) => (
          <GetrankeCart {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Getranke;
