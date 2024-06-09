import React from "react";
import SalatCart from "./SalatCart";
import { SALAT } from "@/common";

const Salat = () => {
  return (
    <section class="popular section" id="popular">
      <span class="section__subtitle">Das beste Essen</span>
      <h2 class="section__title">SALAT</h2>
      <div class="popular__container container grid">
        {SALAT.map((item, idx) => (
          <SalatCart {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Salat;
