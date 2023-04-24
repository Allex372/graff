import * as React from "react"

import img from '../../images/night.jpg'

import * as styles from './About_us.module.css';

const AboutUs = () => {
    return (
        <div id="about" className={styles.wrapper}>
            <p className={styles.title}>About us Block</p>
            <div className={styles.infoWrapper}>
                <div className={styles.infoImgWrapper}>
                    <img src={img} alt="night" />
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.descriptionTitle}>«Graff»</p>
                    <p className={styles.description}>Ласкаво просимо у новий, найвеличніший салон еротичного масажу у місті Львів «Graff»!
                        Відвідавши нас ви відчуєте себе королем нашого графства та поринете в епоху середньовіччя. А з нашими майстринями ви проведете незабутній час та отримаєте лише позитивні емоції та найкращий відпочинок.
                        Спеціально для вас ми розробили найкращі програми, та незалежно від того,яку ви оберете, будете задоволені на всі 100%. У нашому салоні ви себе відчуєте бажаним гостем та запам‘ятаєте цей відпочинок назавжди.
                        Здійсніть свої мрії та завітайте до нас!  На ваш вибір найгарніші масажистки, які вас чекають 24/7.
                        Ми знаходимося за зручною локацією у центрі міста, тому раді вас бачити та чекаємо у гості!
                        Гарантуємо гарний настрій та незабутні відчуття ейфорії!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;