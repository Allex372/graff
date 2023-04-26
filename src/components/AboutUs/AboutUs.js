import * as React from "react"

import { useLanguage } from '../../context/languageContext';
import img from '../../images/night.jpg'

import * as styles from './About_us.module.css';

const AboutUs = () => {
    const { t } = useLanguage();

    return (
        <div id="about" className={styles.wrapper}>
            <p className={styles.title}>{t('aboutUs')}</p>
            <div className={styles.infoWrapper}>
                <div className={styles.infoImgWrapper}>
                    <img src={img} alt="night" />
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.descriptionTitle}>«Graff»</p>
                    <p className={styles.description}>{t('welcomeText')}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;