import React from "react";
import style from "./FirstScreen.module.scss";
import arrow from "../../images/arrow.png";
import desktop from "../../images/desktop.png";
import { motion } from "framer-motion";

const FirstScreen = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className={style.section}>
      <div>
        <div className={style.title}>Frontend Backend</div>

        <div className={style.keywords}>
          <motion.ul variants={container} initial="hidden" animate="visible">
            <div className={style.arrow}>
              <img src={arrow} alt="arrow" />
            </div>
            {[
              "ECMAScript 6",
              "Веб специальности",
              "Самый дорогой сайт",
              "Команда",
            ].map((itemName, index) => (
              <li key={index} className={style.keyword} variants={item}>
                {itemName}
              </li>
            ))}
          </motion.ul>
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
