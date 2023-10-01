import React from "react";
import style from "./Footer.module.scss";
import penis from "images/Footer/penis.jpg";
import devs from 'images/Footer/devs.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__left}>
        <div className={style.footer__left__text}>
          <p>wordite</p>
          <p>;)</p>
        </div>

        <img className={style.all} src={penis} alt="devs" />

        <div className={style.footer__left__bottom}>
          Мы все станем
          <br />
          веб-разработчиками
        </div>
      </div>
      <div className={style.footer__right}>
        <p>ItsZeroFour</p>
        <img className={style.devs} src={devs} alt="devs" />
        <p>zaraza</p>
      </div>
    </footer>
  );
};

export default Footer;
