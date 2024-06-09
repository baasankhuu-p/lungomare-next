import React from "react";

const AboutSection = () => {
  return (
    <section class="about section" id="about">
      <div class="about__container container grid">
        <div class="about__data">
          <span class="section__subtitle">Über uns.</span>
          <h2 class="section__title about__title">
            <div>Wir bieten Gesunde Lebensmittel.</div>
          </h2>
          <p class="about__description">
            Nahrung kommt zu uns von unseren Verwandten, egal ob sie Flügel oder
            Wurzeln haben. So betrachten wir auch Essen, es hat eine Kultur. Es
            hat eine Geschichte, die von Generation zu Generation weitergegeben
            wird.
          </p>
        </div>
        <img src="./assets/images/9.png" alt="about image" class="about__img" />
      </div>
      <img
        src="./assets/images/leaf-branch-1.png"
        alt="about image"
        class="about__leaf"
      />
    </section>
  );
};

export default AboutSection;
