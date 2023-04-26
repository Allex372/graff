import * as React from "react"

import SwiperCarousel from "../Swiper/Swiper";
import { useLanguage } from "../../context/languageContext";

import * as styles from './Services.module.css';

const Services = ({ services }) => {
    const { t } = useLanguage();
    return (
        <div className={styles.wrapper} id="services">
            <p className={styles.title}>{t('services')}</p>

            <div className={styles.container}>
                <SwiperCarousel array={services} isService={true} />
            </div>
        </div>
    )
}

export default Services;