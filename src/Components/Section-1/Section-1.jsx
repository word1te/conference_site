import React, {useEffect} from 'react'
import style from './Section-1.module.scss'
import wordite from '../../images/wordite.png'
import typescript from '../../images/tyescript.png'
import javascript from '../../images/javascript.png'
import gradient from '../../images/gradient_yellow.png'


// const getElementYByClass = (cls) => {
//     const el = document.body.querySelector(cls)
//     const coords = el.getBoundingClientRect()
//
//     return coords.y
// }


const Section1 = () => {
    return (
        <section className={style.section}>
            <div className={style.gradient}>
                <img src={gradient} alt=""/>
            </div>

            <div className={style.name}>Данила Власенко</div>

            <div className={style.profile}>
                <img src={wordite} alt="Данила Власенко"/>
            </div>

            <div className={style.information}>
                <div className="illustration">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <p className={style.information_text}>Эра JavaScript'а начинается в 2015 году вместе с выходом ECMAScript 6, после которого он стал
                    полноценным, более не костыльным языком. После релиза ECMAScript 6 frontend стал активно
                    развиваться, появилось много новых и удобных инструментов для разработки, финансируемых крупными
                    компаниями вроде Google и Facebook...</p>

            </div>

            <p className={style.specialization}>FRONTEND</p>

            <div className={style.typescript}>
                <img src={typescript} alt="typescript"/>
            </div>

            <div className={style.javascript}>
                <img src={javascript} alt="javascript"/>
            </div>


        </section>
    )
}

export default Section1