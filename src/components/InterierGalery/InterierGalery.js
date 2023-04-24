import * as React from "react"

import SwiperCarousel from "../Swiper/Swiper";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import * as styles from './InterierGarely.module.css';


const InterierGalery = () => {
    return (
        <div className={styles.wrapper} id="galery">
            <p className={styles.title}>Galery Block</p>
            <div className={styles.container}>
                <SwiperCarousel />
            </div >
        </div >
    )
}

export default InterierGalery;