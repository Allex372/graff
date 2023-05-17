import React from "react";
import { Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { useSliderIndex } from "../../context/sliderConext";
import { useLanguage } from "../../context/languageContext";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as styles from './Swiper.module.css';

const SwiperCarousel = ({ array, isService, isInterier, isModels }) => {
    const { t, language } = useLanguage();

    const inlineStyles = {
        btnStyles: {
            color: '#FDB931',
        }
    }

    const ServiceSwiperComponent = () => {
        const { changeSlide } = useSliderIndex();
        if (typeof window === "undefined") return null;
        const currentSlide = localStorage.getItem('currentSlide');

        return (
            <Swiper
                onSlideChange={(e) => changeSlide(e.activeIndex)}
                initialSlide={currentSlide}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
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
                {array.nodes.map((el) => {
                    const { category, title, url, image, localizations } = el;
                    const img = getImage(image.localFile);

                    return (
                        <SwiperSlide className={styles.swiperSlide} key={el.id}>
                            <div className={styles.cardWrapper}>
                                <div className={styles.imageWrapper}>
                                    <GatsbyImage
                                        image={img}
                                        alt={title}
                                        loading="lazy"
                                        className={styles.image}
                                    />
                                </div>
                                {localizations.data.map((loc, index) => (
                                    <p className={styles.title} key={index}>
                                        {language === 'en' ? loc.attributes.title : title}
                                    </p>
                                ))}
                                <Link to={`/${category}/${url}`} className={styles.link}>{t('readMore')} -&gt;</Link>
                            </div>
                        </SwiperSlide>
                    );
                })}

                <div className={styles.sliderControler}>
                    <div className="swiper-button-prev" style={inlineStyles.btnStyles}></div>
                    <div className="swiper-button-next" style={inlineStyles.btnStyles}></div>
                </div>
            </Swiper>
        );
    };

    const LadiesSwiperComponent = () => (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
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
            {array.map((image, index) => {
                const img = getImage(image.localFile);
                return (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <GatsbyImage
                            image={img}
                            alt="slide_image"
                            loading="lazy"
                            className={styles.image}
                        />
                    </SwiperSlide>
                );
            })}
            <div className={styles.sliderControler}>
                <div className="swiper-button-prev" style={inlineStyles.btnStyles}></div>
                <div className="swiper-button-next" style={inlineStyles.btnStyles}></div>
            </div>
        </Swiper>
    );

    const InterierSwiperComponent = () => (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
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
            {array.map((image, index) => {
                const img = getImage(image.localFile);
                return (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <GatsbyImage
                            image={img}
                            alt="galery"
                            loading="lazy"
                            className={styles.image}
                        />
                    </SwiperSlide>
                );
            })}
            <div className={styles.sliderControler}>
                <div className="swiper-button-prev" style={inlineStyles.btnStyles}></div>
                <div className="swiper-button-next" style={inlineStyles.btnStyles}></div>
            </div>
        </Swiper>
    );

    return (
        <>
            {isModels && array && <LadiesSwiperComponent />}
            {isInterier && array && <InterierSwiperComponent />}
            {isService && array && <ServiceSwiperComponent />}
        </>
    );
}

export default SwiperCarousel;
