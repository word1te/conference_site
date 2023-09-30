import React from "react";
import style from "./Footer.module.scss";
import penis from "images/Footer/penis.jpg";
import devs from 'images/Footer/devs.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__left}>
        <div className={style.footer__left__text}>
          <h1>wordite</h1>
          <h1>;)</h1>
        </div>

        <img src={penis} alt="devs" />

        <div className={style.footer__left__bottom}>
          Мы все станем
          <br />
          веб-разработчиками
        </div>
      </div>
      <div className={style.footer__right}>
        <h1>ItsZeroFour</h1>
        <img src={devs} alt="devs" />
        <h1>zaraza</h1>
      </div>
    </footer>
  );
};

export default Footer;
