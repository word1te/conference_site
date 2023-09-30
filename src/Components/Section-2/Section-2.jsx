import React, { useState } from "react";
import style from "./Section-2.module.scss";
import blockHuman from "../../images/Section2/Daniil.png";
import { AnimatePresence, motion } from "framer-motion";
import codeImg1 from "images/Section2/code.png";
import codeImg2 from "images/Section2/code2.png";
import codeImg3 from "images/Section2/code3.png";

const Section2 = ({ userRef, elementInView }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const tabs = [
    { img: codeImg1, title: "Code 1" },
    { img: codeImg2, title: "Code 2" },
    { img: codeImg3, title: "Code 3" },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section className={style.section} ref={userRef}>
      <h2>Даниил Андреев</h2>

      <div className={style.section__wrapper}>
        <div className={style.section__left}>
          <form>
            <div className={style.section__form__inputs}>
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
            </div>

            <div className={style.section__form__button}>
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
                disabled={isSubmit}
              >
                Отправить
              </motion.button>
            </div>
          </form>

          {isSubmit && (
            <>
              <div className={style.section__form__data}>
                <p>Логин: {login}</p>
                <p>Пароль: {password}</p>
              </div>

              <nav className={style.section__tabs}>
                <ul>
                  {tabs.map((item) => (
                    <li
                      key={item.label}
                      className={
                        item.title === selectedTab.title ? "section__tabs__selected" : ""
                      }
                      onClick={() => setSelectedTab(item)}
                    >
                      {`${item.title}`}
                      {item.title === selectedTab.title ? (
                        <motion.div
                          className="section__tabs__underline"
                          layoutId="underline"
                        />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>

              <main className={style.section__tabs__content}>
                <AnimatePresence>
                  <motion.div
                    key={selectedTab ? selectedTab.title : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src={selectedTab.img} alt={selectedTab.title} />
                  </motion.div>
                </AnimatePresence>
              </main>
            </>
          )}
        </div>

        {elementInView && (
          <div className={style.section__right__wrapper}>
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
                  разработчиком👩🏼‍💻. Без вэб дизайна сайты были бы как
                  википедии🤟, без фронтенда небыло сайтов вовсе, а без бэкэнда
                  небыло бы возможности Писать сообщения на почту через форму на
                  сайте, небыло бы регистрации, видео на ютубе и т.д👩‍🎓
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section2;
