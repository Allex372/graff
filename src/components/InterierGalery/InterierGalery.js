import * as React from "react"

import SwiperCarousel from "../Swiper/Swiper";
import { useLanguage } from "../../context/languageContext";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import * as styles from './InterierGarely.module.css';


const InterierGalery = () => {
    const { t } = useLanguage();
    return (
        <div className={styles.wrapper} id="galery">
            <p className={styles.title}>{t('interior')}</p>
            <div className={styles.container}>
                <SwiperCarousel />
            </div >
        </div >
    )
}

export default InterierGalery;