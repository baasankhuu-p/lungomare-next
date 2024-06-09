import React from "react";

const Angebot = () => {
  return (
    <section class="about section" id="about">
      <div class="about__container container grid">
        <div class="about__data">
          <span class="section__subtitle">Angebot-23.00 euro</span>
          <h2 class="section__title about__title">Angebot</h2>
          <p class="about__description">
            2 größe Pizzen (ausser 26, 31, 32) oder 2 Nudelgerichte, 1 größer
            gemischter Salat, 1 Flasche Wein 0.7l
          </p>
        </div>
        <img
          src="./assets/images/Special Offer.jpeg"
          alt="about image"
          class="about__img"
        />
      </div>
      <img
        src="./assets/images/leaf-branch-1.png"
        alt="about image"
        class="about__leaf"
      />
    </section>
  );
};

export default Angebot;
