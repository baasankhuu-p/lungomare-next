import React from "react";
import Script from "./Scripts";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer__container container grid">
          <div>
            <a href="#" class="footer__logo">
              <img src="./assets/images/logo.png" alt="logo image" />
              LUNGOMARE PIZZERIA <span> & DÖNER</span>
            </a>
            <p class="footer__description">
              Food for the body is not <br /> enough. There must be food <br />{" "}
              for the soul.
            </p>
          </div>
          <div class="footer__content">
            <div>
              <h3 class="footer__title">Hauptmenü.</h3>
              <ul class="footer__links">
                <li>
                  <a href="#" class="footer__links">
                    Über
                  </a>
                </li>
                <li>
                  <a href="#" class="footer__links">
                    Menü
                  </a>
                </li>
                <li>
                  <a href="#" class="footer__links">
                    Angebot.
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="footer__title">Information</h3>
              <ul class="footer__links">
                <li>
                  <a href="#" class="footer__links">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="footer__title">Addresse & Telephone</h3>
              <ul class="footer__links">
                <li class="footer__information">
                  Kaiser-Friedrich Straße 144-47169, Duisburg
                </li>
                <li class="footer__information">
                  DI-FRI -11:30-22:00
                  <br />
                  <br />
                  SONN--Feiertag <br />
                  <p> 17:00 bis 22:00 uhr</p>
                  <br />
                  Montag Ruhetag!
                </li>

                <li class="footer__information"></li>
              </ul>
            </div>
            <div>
              <h3 class="footer__title">Social Media</h3>
              <ul class="footer__social">
                <a
                  href="https://www.facebook.com/pages/Pizzeria-Lungomare/163459740337926/"
                  target="_blank"
                  class="footer__social-link">
                  <i class="ri-facebook-circle-fill"></i>
                </a>
                <a
                  href="https://www.facebook.com/pages/Pizzeria-Lungomare/163459740337926/"
                  target="_blank"
                  class="footer__social-link">
                  <i class="ri-instagram-fill"></i>
                </a>
                <a
                  href="https://www.facebook.com/pages/Pizzeria-Lungomare/163459740337926/"
                  target="_blank"
                  class="footer__social-link">
                  <i class="ri-twitter-fill"></i>
                </a>
              </ul>
            </div>
          </div>
          <img
            src="./assets/images/spring-onion.png"
            alt="footer image"
            class="footer__onion"
          />
          <img
            src="./assets/images/spinach-leaf.png"
            alt="footer image"
            class="footer__spinach"
          />
          <img
            src="./assets/images/leaf-branch-4.png"
            alt="footer image"
            class="footer__leaf"
          />
        </div>
        <div class="footer__info container">
          <div class="footer__card">
            <img src="./assets/images/footer-card-1.png" alt="footer image" />
            <img src="./assets/images/footer-card-2.png" alt="footer image" />
            <img src="./assets/images/footer-card-3.png" alt="footer image" />
            <img src="./assets/images/footer-card-4.png" alt="footer image" />
          </div>
          <span class="footer__copy">
            &#169; Copyright. All Rights Reserved!
          </span>
        </div>
      </footer>
      <a href="#" class="scrollup" id="scroll-up">
        <i class="ri-arrow-up-line"></i>
      </a>
      <Script />
    </>
  );
};

export default Footer;
