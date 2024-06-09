import React from "react";
import PizzaCart from "./PizzaCart";
import { PIZZA } from "@/common";

const Pizza = () => {
  return (
    <section class="popular section" id="popular">
      <span class="section__subtitle">Das beste Essen</span>
      <h2 class="section__title">PIZZERIA</h2>
      <div class="popular__container container grid">
        {PIZZA.map((item, idx) => (
          <PizzaCart {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Pizza;
