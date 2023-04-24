import * as React from "react";
import { Link } from 'gatsby';

import { Swiper, SwiperSlide } from 'swiper/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { useSliderIndex } from "../../context/sliderConext";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img from '../../images/models/girl.webp';
import * as styles from './Swiper.module.css';

const inlineStyles = {
    btnStyles: {
        color: '#FDB931',
    }
}

const SwiperCarousel = ({ array, isService }) => {
    const ServiceSwiperComponent = () => {
        const { changeSlide } = useSliderIndex();
        if (typeof window === "undefined") return null;
        const currentSlide = localStorage.getItem('currentSlide');
        return (
            <Swiper
                onSlideChange={(e) => changeSlide(e.activeIndex)}
                initialSlide={currentSlide}
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
                {
                    (isService && array && array[0].frontmatter) && array.map(el => {
                        const { category, title, url, image } = el?.frontmatter;
                        const img = getImage(image);
                        return (
                            <SwiperSlide className={styles.swiperSlide} key={el.id}>
                                <div className={styles.cardWrapper}>
                                    <div className={styles.imageWrapper}>
                                        {/* <img
                                            src={img}
                                            alt={title}
                                            className={styles.image}
                                        /> */}
                                        <GatsbyImage
                                            image={img}
                                            alt={title}
                                            loading="lazy"
                                            className={styles.image}
                                        />
                                    </div>
                                    <p className={styles.title}>{title}</p>
                                    <Link to={`/${category}/${url}`} className={styles.link}>Читати більше -&gt;</Link>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <div className={styles.sliderControler}>
                    <div className='swiper-button-prev' style={inlineStyles.btnStyles}>
                    </div>
                    <div className="swiper-button-next" style={inlineStyles.btnStyles}>
                    </div>
                    {/* <div className="swiper-pagination"></div> */}
                </div>

            </Swiper>
        )
    }

    const LadiesSwiperComponent = () => {
        return (
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
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={styles.swiperContainer}
            >
                {(!isService && array) &&
                    array.map((image) => (
                        <SwiperSlide key={array.indexOf(image)} className={styles.swiperSlide}>
                            <img src={image} alt="slide_image" />
                        </SwiperSlide>
                    ))

                }

                <div className={styles.sliderControler}>
                    <div className='swiper-button-prev' style={inlineStyles.btnStyles}>
                    </div>
                    <div className="swiper-button-next" style={inlineStyles.btnStyles}>
                    </div>
                </div>
            </Swiper >
        )
    }

    const InterierSwiperComponent = () => {
        return (
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
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={styles.swiperContainer}
            >
                {/* {(!isService && !array) && (
                    <> */}
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={img} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={img} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={img} alt="slide_image" />
                </SwiperSlide>
                {/* </>
                )} */}

                <div className={styles.sliderControler}>
                    <div className='swiper-button-prev' style={inlineStyles.btnStyles}>
                    </div>
                    <div className="swiper-button-next" style={inlineStyles.btnStyles}>
                    </div>
                </div>
            </Swiper >
        )
    }

    return (
        <>
            {(!isService && array) && <LadiesSwiperComponent array={array} />}
            {(!isService && !array) && <InterierSwiperComponent />}
            {(isService && array && array[0].frontmatter) && <ServiceSwiperComponent />}


        </>
    )
}

export default SwiperCarousel;