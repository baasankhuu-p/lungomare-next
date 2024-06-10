import React from "react";

const PopularSection = ({ title = "Das beste Essen", subTitle, children }) => {
  return (
    <section class="popular section" id="popular">
      <span class="section__subtitle">{title}</span>
      <h2 class="section__title">{subTitle}</h2>
      {children}
    </section>
  );
};

export default PopularSection;
