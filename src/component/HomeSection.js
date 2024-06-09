import React from "react";

const HomeSection = () => {
  return (
    <section class="home section" id="home">
      <div class="home__container container grid">
        <img
          src="./assets/images/Lungomare DREAM.jpeg"
          alt="home image"
          class="home__img"
        />
        <div class="home__data">
          <h3 class="home__title">
            <br />
            Pizzeria & Döner
          </h3>
          <br />
          <h3>QUALITÄT & SEIT 2007</h3>
          <div>
            <br />
            <p class="home__description">
              Genießen Sie ein gutes Abendessen mit den besten Gerichten im
              Restaurant und verschönern Sie Ihren Tag.
            </p>

            <a
              href="/assets/images/Lungomare Christmas 3.jpeg"
              class="button"
              target="_blank">
              Mehr Menü
              <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
        <img
          src="./assets/images/leaf-branch-2.png"
          alt="home image"
          class="home__leaf-1"
        />
        <img
          src="./assets/images/leaf-branch-4.png"
          alt="home image"
          class="home__leaf-2"
        />
      </div>
    </section>
  );
};

export default HomeSection;
