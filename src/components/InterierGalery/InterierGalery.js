import * as React from "react"

import SwiperCarousel from "../Swiper/Swiper";
import { useStaticQuery, graphql } from "gatsby";
import { useLanguage } from "../../context/languageContext";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import * as styles from './InterierGarely.module.css';


const InterierGalery = () => {
    const data = useStaticQuery(graphql`
        query InterierQuery {
            strapiInterier {
                image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
      `)


    const { image } = data.strapiInterier;

    const { t } = useLanguage();
    return (
        <div className={styles.wrapper} id="galery">
            <p className={styles.title}>{t('interior')}</p>
            <div className={styles.container}>
                <SwiperCarousel array={image} isInterier={true} />
            </div >
        </div >
    )
}

export default InterierGalery;