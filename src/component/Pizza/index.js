import React from "react";
import PizzaCart from "./PizzaCart";
import { PIZZA } from "@/common";
import PopularSection from "@/PopularSection";

const Pizza = () => {
  return (
    <PopularSection subTitle={"PIZZERIA"}>
      <div class="popular__container container grid">
        {PIZZA.map((item, idx) => (
          <PizzaCart {...item} key={idx} />
        ))}
      </div>
    </PopularSection>
  );
};

export default Pizza;
