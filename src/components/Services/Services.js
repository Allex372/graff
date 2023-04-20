import * as React from "react"

import SwiperCarousel from "../Swiper/Swiper";

import * as styles from './Services.module.css';

const Services = ({ services }) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Services</p>

            <div className={styles.container}>
                <SwiperCarousel array={services} isService={true} />
            </div>
        </div>
    )
}

export default Services;