import React, { useEffect, useState } from "react";
import style from "./Section-3.module.scss";
import blockImage from "../../images/Section3/Zarina.png";
import googleLogo from "../../images/Section3/google.svg";
import { motion } from "framer-motion";

const Section3 = ({ elementInView, userRef }) => {
  const [inputValue, setInputValue] = useState("");

  // const letters = [
  //   "🧒🏿",
  //   "H",
  //   "e",
  //   "l",
  //   "l",
  //   "o",
  //   " ",
  //   "e",
  //   "v",
  //   "e",
  //   "r",
  //   "y",
  //   "o",
  //   "n",
  //   "e",
  //   "🤪",
  //   "!",
  //   " ",
  //   "M",
  //   "y",
  //   " ",
  //   "n",
  //   "a",
  //   "m",
  //   "e",
  //   " ",
  //   "i",
  //   "s",
  //   " ",
  //   "Z",
  //   "a",
  //   "r",
  //   "i",
  //   "n",
  //   "a",
  //   "!",
  //   "😛"
  // ];

  const letters = [
    "С",
    "к",
    "а",
    "ч",
    "а",
    "т",
    "ь",
    " ",
    "м",
    "а",
    "и",
    "н",
    "к",
    "р",
    "а",
    "ф",
    "т",
    " ",
    "в",
    "з",
    "л",
    "о",
    "м",
    "к",
    "а",
    "🤪",
    " ",
    "Т",
    "о",
    "р",
    "е",
    "н",
    "т",
    "и",
    "г",
    "р",
    "у",
    "х",
    "а",
  ];

  useEffect(() => {
    let increase = 0;
    let currentString = "";

    elementInView &&
      setInterval(() => {
        if (currentString.length >= letters.length) {
          currentString.slice(0, -1);
        } else {
          currentString += inputValue + letters[increase];
        }

        setInputValue(currentString);
        increase += 1;
      }, 500);

    // return () => clearInterval();
  }, [elementInView]);

  return (
    <section className={style.section} ref={userRef}>
      <h2 className={style.section__title}>Зарина Таку</h2>
      <div className={style.section__wrapper}>
        {/* LEFT SECTION */}
        <div>
          {elementInView && (
            <div className={style.section__left}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className={style.section__human}>
                  <img src={blockImage} alt="human" />
                </div>
              </motion.div>
            </div>
          )}
        </div>
        {/* RIGHT SECTION */}
        <div className={style.section__right}>
          <div className={style.section__google}>
            <img src={googleLogo} alt="google logo" />

            {elementInView && (
              <motion.input
                animate={{ rotate: 360 }}
                transition={{ type: "spring" }}
                type="text"
                value={inputValue}
              />
            )}
          </div>

          <div style={{ height: "380px" }}>
            {elementInView && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <div className={style.section__about}>
                  <p>
                    Кто-то еще помнит мир до прихода Всемирной паутины. Ради
                    новостей или любимых передач люди собирались у телевизоров и
                    радио по расписанию. Репортажи и фильмы производили крупные
                    компании или государственные предприятия, а обратной связи с
                    авторами не было. Возникли технологии DHTML и
                    AJAX, на которых основаны современные веб-приложения.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
