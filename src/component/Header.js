import React from "react";

const Header = () => {
  return (
    <header class="header" id="header">
      <nav class="nav container">
        <a href="#" class="nav__logo">
          <img src="./assets/images/logo.svg" alt="" class="nav__logo" />
          LUNGOMARE PIZZERIA
        </a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">
                Über Uns
              </a>
            </li>
            <li class="nav__item">
              <a href="#popular" class="nav__link">
                Menü
              </a>
            </li>
            <li class="nav__item">
              <a href="#recently" class="nav__link">
                Recently
              </a>
            </li>
          </ul>
          <div class="nav__close" id="nav-close">
            <i class="ri-close-line"></i>
          </div>
          <img
            src="./assets/images/leaf-branch-4.png"
            alt="nav image 1"
            class="nav__img-1"
          />
          <img
            src="./assets/images/leaf-branch-3.png"
            alt="nav image 2"
            class="nav__img-2"
          />
        </div>
        <div class="nav__buttons">
          <i class="ri-moon-line chagne-theme" id="theme-button"></i>
          <div class="nav__toggle" id="nav-toggle">
            <i class="ri-apps-2-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
