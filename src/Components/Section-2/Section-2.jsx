import React, { useState } from "react";
import style from "./Section-2.module.scss";
import blockHuman from "../../images/Section2/Daniil.png";
import { motion } from "framer-motion";

const Section2 = ({ userRef, elementInView }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <section className={style.section} ref={userRef}>
      <h2>Даниил Андреев</h2>

      <div className={style.section__wrapper}>
        <div className={style.section__left}>
          <form>
            <input
              type="text"
              onChange={(event) => setLogin(event.target.value)}
              placeholder="Логин"
            />
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Пароль"
            />

            <motion.button
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              onClick={(event) => {
                event.preventDefault();
                setTimeout(() => {
                  setIsSubmit(true);
                }, 1000);
              }}
            >
              Отправить
            </motion.button>
          </form>

          {isSubmit && (
            <div className={style.section__form__data}>
              <p>Логин: {login}</p>
              <p>Пароль: {password}</p>
            </div>
          )}

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
                  Я работаю сразу на 3-х направлениях💪. Являюсь как Web
                  дизайнером, так и Frontend и Backend (fullstack)
                  разработчиком👩🏼‍💻. Без вэб дизайна сайты были бы как википедии🤟,
                  без фронтенда небыло сайтов вовсе🚀, а без бэкэнда небыло бы
                  возможности Писать сообщения на почту через форму на сайте,
                  небыло бы регистрации, видео на ютубе и т.д👩‍🎓
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {elementInView && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div className={style.section__right}>
              <img src={blockHuman} alt="Daniil" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Section2;
