import React from "react";
import style from "./Section-2.module.scss";
import blockHuman from "../../images/Section2/Daniil.png";

const Section2 = () => {
  return (
    <section className={style.section}>
      <h2>Даниил Андреев</h2>

      <div className={style.section__left}>
        <form>
          <input type="text" />
          <input type="password" />
          <button type="submit">Отправить</button>
        </form>

        <div className={style.section__about}>
          <p>
            Я работаю сразу на 3-х направлениях. Являюсь как Вэб дизайнером, так
            и Frontend и backend (fullstack) разработчиков. Без вэб дизайна
            сайты были бы как википедии, без фронтенда небыло сайтов вовсе, а
            без бэкэнда небыло бы возможности Писать сообщения на почту через
            форму на сайте, небыло бы регистрации, видео на ютубе и т.д
          </p>
        </div>
      </div>

      <div className={style.section__right}>
        <img src={blockHuman} alt="" />
      </div>
    </section>
  );
};

export default Section2;
