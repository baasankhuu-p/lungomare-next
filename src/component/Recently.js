import React from "react";

const Recently = () => {
  return (
    <section class="recently section" id="recently">
      <div class="recently__container container grid">
        <div class="recently__data">
          <span class="section__subtitle">SPEZIALLE</span>
          <h2 class="section__title">
            Pizza LUNGOMARE <br /> von allem etwas
          </h2>
          <p class="recently__description">
            Schauen Sie sich an, was es Neues gibt, und versagen Sie sich nicht
            ein gutes Essen. Genießen Sie und seien Sie glücklich.
          </p>

          <a href="/assets/images/MENU.pdf" class="button" target="_blank">
            Neue Menü
            <i class="ri-arrow-right-line"></i>
          </a>

          <img
            src="./assets/images/spinach-leaf.png"
            alt="recently image"
            class="recently__data-img"
          />
        </div>
        <img
          src="./assets/images/Lungomare christmas.jpeg"
          alt="recently image"
          class="recently__img"
        />
      </div>
      <img
        src="./assets/images/leaf-branch-2.png"
        alt="recently image"
        class="recently__leaf-1"
      />
      <img
        src="./assets/images/leaf-branch-3.png"
        alt="recently image"
        class="recently__leaf-2"
      />
    </section>
  );
};

export default Recently;
