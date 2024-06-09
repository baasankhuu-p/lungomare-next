import React from "react";

const NewsLetter = () => {
  return (
    <section class="newsletter section">
      <div class="newsletter__container container">
        <div class="newsletter__content grid">
          <img src="./assets/images/4d(1).png" alt="" class="newsletter__img" />
          <div class="newsletter__data">
            <span class="section__subtitle">Telephone</span>
            <h1 class="section__title1">49 0203 860 9765</h1>

            <span class="section__subtitle">Addresse</span>
            <h1 class="section__title1">
              Kaiser-Friedrich Straße 144-47169, Duisburg
            </h1>
          </div>
        </div>
        <img
          src="./assets/images/spinach-leaf.png"
          alt="newsletter image"
          class="newsletter__spinach"
        />
      </div>
    </section>
  );
};

export default NewsLetter;
