import React from "react";

const SalatCart = ({ img, name, kleinPrc, grobPrc }) => {
  return (
    <article class="popular__card">
      <img src={img} alt="popular image" class="popular__img" />
      <br />
      <br />
      <br />
      <br />
      <h3 class="popular__name">{name}</h3>
      <table>
        <tr>
          <td>
            <span class="popular__description1">Klein</span>
            <span class="popular__price">
              <br />€{kleinPrc}
            </span>
          </td>
          <td>
            <span class="popular__description">Groß</span>
            <span class="popular__price">€{grobPrc}</span>
          </td>
        </tr>
      </table>
    </article>
  );
};

export default SalatCart;
