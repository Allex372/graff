import * as React from "react"

import img from '../../images/night.jpg'

import * as styles from './About_us.module.css';

const About_us = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>About us Block</p>
            <div className={styles.infoWrapper}>
                <div className={styles.infoImgWrapper}>
                    <img src={img} alt="night" />
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.descriptionTitle}>Welcome to Graff</p>
                    <p className={styles.description}>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
        </div>
    )
}

export default About_us;