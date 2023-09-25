import React, { useEffect, useState } from "react";
import style from "./Section-3.module.scss";
import blockImage from "../../images/Section3/Zarina.png";
import googleLogo from "../../images/Section3/google.svg";
import { motion } from "framer-motion";

const Section3 = ({ elementInView, userRef }) => {
  const [inputValue, setInputValue] = useState("");

  const letters = [
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "e",
    "v",
    "e",
    "r",
    "y",
    "o",
    "n",
    "e",
    "!",
    " ",
    "M",
    "y",
    " ",
    "n",
    "a",
    "m",
    "e",
    " ",
    "i",
    "s",
    " ",
    "Z",
    "a",
    "r",
    "i",
    "n",
    "a",
    "!",
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
      }, 1000);

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
                    Я работаю сразу на 3-х направлениях. Являюсь как Вэб
                    дизайнером, так и Frontend и backend (fullstack)
                    разработчиков. Без вэб дизайна сайты были бы как википедии,
                    без фронтенда небыло сайтов вовсе, а без бэкэнда небыло бы
                    возможности Писать сообщения на почту через форму на сайте,
                    небыло бы регистрации, видео на ютубе и т.д
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
