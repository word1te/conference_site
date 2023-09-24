import React from "react";
import style from "./FirstScreen.module.scss";
import arrow from "../../images/arrow.png";
import desktop from "../../images/desktop.png";

const FirstScreen = () => {
  return (
    <section className={style.section}>
      <div>
        <div className={style.title}>Frontend Backend</div>

        <div className={style.keywords}>
          <div className={style.arrow}>
            <img src={arrow} alt="arrow" />
          </div>
          <div className={style.keyword}>ECMAScript 6</div>
          <div className={style.keyword}>Веб специальности</div>
          <div className={style.keyword}>Самый дорогой сайт</div>
          <div className={style.keyword}>Команда</div>
        </div>

        <p className={style.tagline}>
          C чего начинается эра JavaScript, 3 направления в Web разработке,
          самый дорогой сайт в мире и почему хорошие сайты создаются в команде
        </p>

        <div className={style.nav_arrow}>
          <div className={style.nav_arrow_bg}>
            <img src={arrow} alt="arrow" />
          </div>
          <p className={style.nav_arrow_text}>
            ECMAScript <span className={style.nav_arrow_yellow}>6</span>
          </p>
        </div>

        <div className={style.desktop}>
          <img src={desktop} alt="desktop" />
        </div>
      </div>
    </section>
  );
};

export default FirstScreen;
