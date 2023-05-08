import * as React from "react"
import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import { useLanguage } from '../../context/languageContext';
import ModelsDialog from "../ModelsDialog/ModelsDialog";
// import { AllModelsArray } from "../../consts/allModelsArray";
import * as styles from './ladies.module.css';

const Ladies = () => {
    const data = useStaticQuery(graphql`
        query LadiesQuery {
            allStrapiModel {
                edges {
                    node {
                        id
                        name
                        localizations {
                            data {
                                attributes {
                                    name
                                }
                            }
                        }
                        image {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        }
      `)

    const { t, language } = useLanguage();
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
                    {data.allStrapiModel.edges.map((node) => {
                        const { id, name, image, localizations } = node.node;
                        const img = getImage(image[0].localFile);
                        return (
                            <div className={styles.card} key={id}>
                                <div className={styles.content}>
                                    <div className={styles.imgBx} onClick={() => handleOpenDialog(image)}>
                                        <GatsbyImage
                                            image={img}
                                            alt='name'
                                            loading="lazy"
                                            className={styles.image}
                                        />
                                    </div>
                                </div>

                                <ul className={styles.sci}>
                                    <li>
                                        {localizations.data.map((loc, index) => {
                                            return (
                                                <p className={styles.ladyText} key={index}>
                                                    {language === 'en' ? loc.attributes.name : name}
                                                </p>
                                            )
                                        })}
                                    </li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.mobileSlides}>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {data.allStrapiModel.edges.map((node) => {
                        const { id, name, image, localizations } = node.node;
                        const img = getImage(image[0].localFile);
                        return (
                            <SwiperSlide key={id}>
                                <div className={styles.card}>
                                    <div className={styles.content}>
                                        <div className={styles.imgBx} onClick={() => handleOpenDialog(image)}>
                                            <GatsbyImage
                                                image={img}
                                                alt='name'
                                                loading="lazy"
                                                className={styles.image}
                                            />
                                        </div>
                                    </div>

                                    <ul className={styles.sci}>
                                        <li>
                                            {localizations.data.map((loc, index) => {
                                                return (
                                                    <p className={styles.ladyText} key={index}>
                                                        {language === 'en' ? loc.attributes.name : name}
                                                    </p>
                                                )
                                            })}
                                        </li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
            <ModelsDialog isModels={true} isOpenDialog={openDialog} handleClose={() => handleCloseDialog()} imagesArray={arr.length >= 1 && arr} />
        </div>
    )
}

export default Ladies;