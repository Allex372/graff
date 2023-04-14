import * as React from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img from '../../images/models/girl.webp';
import * as styles from './InterierGarely.module.css';

const inlineStyles = {
    btnStyles: {
        color: '#FDB931',
    }
}

const InterierGalery = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Galery Block</p>
            <div className={styles.container}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView='auto'
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    // pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className={styles.swiperContainer}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={img} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={img} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={img} alt="slide_image" />
                    </SwiperSlide>

                    <div className={styles.sliderControler}>
                        <div className='swiper-button-prev' style={inlineStyles.btnStyles}>
                        </div>
                        <div className="swiper-button-next" style={inlineStyles.btnStyles}>
                        </div>
                        {/* <div className="swiper-pagination"></div> */}
                    </div>
                </Swiper>
            </div >
        </div >
    )
}

export default InterierGalery;