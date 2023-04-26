import * as React from "react"
import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import { useLanguage } from '../../context/languageContext';
import ModelsDialog from "../ModelsDialog/ModelsDialog";
import { AllModelsArray } from "../../consts/allModelsArray";
import * as styles from './ladies.module.css';

const Ladies = () => {
    const { t } = useLanguage();
    const [openDialog, setOpenDialog] = useState(false);
    const [arr, setArr] = useState([]);

    const handleOpenDialog = (imagesArray) => {
        setArr([]);
        if (imagesArray) {
            setArr(imagesArray);
        }
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    return (
        <div className={styles.wrapper} id="ladies">
            <p className={styles.title}>{t('ladies')}</p>
            <div className={styles.flexWrapper}>
                <div className={styles.cardWrapper}>
                    {AllModelsArray.map((el) => (
                        <div className={styles.card} key={el.id}>
                            <div className={styles.content}>
                                <div className={styles.imgBx}>
                                    <img src={el.image} alt='girl' onClick={() => handleOpenDialog(el.allImages)} />
                                </div>
                            </div>

                            <ul className={styles.sci}>
                                <li>
                                    <p className={styles.ladyText}>{t(el.name)}</p>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.mobileSlides}>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {AllModelsArray.map((el) => (
                        <SwiperSlide key={el.id}>
                            <div className={styles.card}>
                                <div className={styles.content}>
                                    <div className={styles.imgBx}>
                                        <img src={el.image} alt='girl' onClick={() => handleOpenDialog(el.allImages)} />
                                    </div>
                                </div>

                                <ul className={styles.sci}>
                                    <li>
                                        <p className={styles.ladyText}>{el.name}</p>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <ModelsDialog isOpenDialog={openDialog} handleClose={() => handleCloseDialog()} imagesArray={arr.length >= 1 && arr} />
        </div>
    )
}

export default Ladies;