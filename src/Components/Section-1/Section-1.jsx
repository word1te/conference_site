import React, {useEffect, useRef} from 'react'
import style from './Section-1.module.scss'
import wordite from '../../images/wordite.png'
import typescript from '../../images/tyescript.png'
import javascript from '../../images/javascript.png'
import gradient from '../../images/gradient_yellow.png'
import { motion } from "framer-motion";


// const getElementYByClass = (cls) => {
//     const el = document.body.querySelector(cls)
//     const coords = el.getBoundingClientRect()
//
//     return coords.y
// }

const Section1 = ({ userRef, elementInView }) => {
    let isStarted = false
    const block_1 = useRef()
    const block_2 = useRef()
    const block_3 = useRef()


    useEffect(() => {
        if (isStarted) return
        isStarted = true
        const blocks = [block_1.current, block_2.current, block_3.current]
        let currentBlock = 0

        setInterval(() => {
            if (currentBlock > blocks.length - 1) currentBlock = 0
            if (!blocks[currentBlock]) currentBlock = 0

            blocks[currentBlock].classList.add(style.block_big)

            setTimeout(() => {
                blocks[currentBlock].classList.remove(style.block_big)
                currentBlock++
            }, 1500)
        }, 2000)
    }, []);

    return (
        <section className={style.section} ref={userRef}>
            <div className={style.gradient}>
                <img src={gradient} alt=""/>
            </div>

      <div className={style.name}>Данила Власенко</div>

            <div className={style.content}>


                {elementInView && (
                    <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    className={style.profile}>
                    <img src={wordite} alt="Данила Власенко"/>
                </motion.div>
                )}


                <div className={style.info}>
                <div className={style.information}>
                    <div className={style.illustration}>
                        <div className={`${style.block}`} ref={block_1}>
                            <div className={`${style.line_1} ${style.line}`}></div>
                            <div className={style.circle}></div>
                            <div className={`${style.line_2} ${style.line}`}></div>
                            <div className={`${style.line_3} ${style.line}`}></div>
                            <div className={`${style.line_4} ${style.line}`}></div>
                            <div className={`${style.line_5} ${style.line}`}></div>
                        </div>
                        <div className={`${style.block}`} ref={block_2}>
                            <div className={`${style.line_1} ${style.line}`}></div>
                            <div className={style.circle}></div>
                            <div className={`${style.line_2} ${style.line}`}></div>
                            <div className={`${style.line_3} ${style.line}`}></div>
                            <div className={`${style.line_4} ${style.line}`}></div>
                            <div className={`${style.line_5} ${style.line}`}></div>
                        </div>
                        <div className={`${style.block}`} ref={block_3}>
                            <div className={`${style.line_1} ${style.line}`}></div>
                            <div className={style.circle}></div>
                            <div className={`${style.line_2} ${style.line}`}></div>
                            <div className={`${style.line_3} ${style.line}`}></div>
                            <div className={`${style.line_4} ${style.line}`}></div>
                            <div className={`${style.line_5} ${style.line}`}></div>
                        </div>
                    </div>
                </div>


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
                            className={style.information_text}
                        >
                    Эра JavaScript'а начинается в 2015 году вместе с выходом ECMAScript 6, после которого он стал
                    полноценным, более не костыльным языком. После релиза ECMAScript 6 frontend стал активно
                    развиваться, появилось много новых и удобных инструментов для разработки, финансируемых крупными
                    компаниями вроде Google и Facebook...
                        </motion.div>
                    )}





                </div>

            </div>

      <p className={style.specialization}>FRONTEND</p>

      <div className={style.typescript}>
        <img src={typescript} alt="typescript" />
      </div>

      <div className={style.javascript}>
        <img src={javascript} alt="javascript" />
      </div>
    </section>
  );
};

export default Section1;
