import * as React from "react"

import SwiperCarousel from "../Swiper/Swiper";
import { useStaticQuery, graphql } from "gatsby";

import { useLanguage } from "../../context/languageContext";
import PricingTable from "./PriceTable/PrisingTable";

import * as styles from './Services.module.css';

const Services = () => {
    const data = useStaticQuery(graphql`
        query ServicesQuery {
            allStrapiService {
                nodes {
                    url
                    title
                    category
                    text {
                        data {
                            text
                        }
                    }
                    localizations {
                        data {
                            attributes {
                                text
                                title
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
      `)

    const { t } = useLanguage();
    return (
        <div className={styles.wrapper} id="services">
            <p className={styles.title}>{t('services')}</p>

            <div className={styles.container}>
                <SwiperCarousel array={data.allStrapiService} isService={true} />
                <div className={styles.tableWrapper}>
                    <PricingTable />
                </div>
            </div>
        </div>
    )
}

export default Services;