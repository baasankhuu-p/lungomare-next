import React from "react";

const GetrankeCart = ({ img, title, sz, price }) => {
  return (
    <article class="popular__card">
      <img src={img} alt="popular image" class="popular__img" />
      <h3 class="popular__name">
        <br />
        {title}
      </h3>
      <span class="popular__description">{sz}</span>
      <span class="popular__price">€{price}</span>
    </article>
  );
};

export default GetrankeCart;
