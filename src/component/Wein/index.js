import { WEIN } from "@/common";
import React from "react";
import WeinCart from "./WeinCart";

const Wein = () => {
  return (
    <section class="popular section" id="popular">
      <span class="section__subtitle">Das beste GETRÄNKE</span>
      <h2 class="section__title">WEIN</h2>
      <div class="popular__container container grid">
        {WEIN.map((item, idx) => (
          <WeinCart {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Wein;
