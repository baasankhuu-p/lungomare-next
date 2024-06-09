import { UBERBACKENES } from "@/common";
import React from "react";
import UberCart from "./UberCart";

const Uberbackenes = () => {
  return (
    <section class="popular section" id="popular">
      <span class="section__subtitle">Das beste Essen</span>
      <h2 class="section__title">ÜBERBACKENES</h2>
      <div class="popular__container container grid">
        {UBERBACKENES.map((item, idx) => (
          <UberCart {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Uberbackenes;
