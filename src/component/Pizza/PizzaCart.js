import React from "react";

const PizzaCart = ({ img, name, cleinSz, cleinPrc, grobSz, grobPrc }) => {
  return (
    <article class="popular__card">
      <img src={img} alt="popular image" class="popular__img" />
      <h3 class="popular__name">{name}</h3>
      <table>
        <tr>
          <td>
            <span class="popular__description1">Klein-{cleinSz}cm</span>
            <span class="popular__price">€{cleinPrc}</span>
          </td>
          <td>
            <span class="popular__description">Groß-{grobSz}cm</span>
            <span class="popular__price">€{grobPrc}</span>
          </td>
        </tr>
      </table>
    </article>
  );
};

export default PizzaCart;
