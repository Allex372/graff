import React, { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import SwiperCarousel from "../Swiper/Swiper";
import { useLanguage } from "../../context/languageContext";
import PricingTable from "./PriceTable/PrisingTable";
import * as styles from './Services.module.css';

const Services = () => {
    const { t } = useLanguage();

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
  `);

    const cachedData = useMemo(() => data, [data]);

    return (
        <div className={styles.wrapper} id="services">
            <p className={styles.title}>{t('services')}</p>

            <div className={styles.container}>
                <SwiperCarousel array={cachedData?.allStrapiService} isService={true} />
                <div className={styles.tableWrapper}>
                    <PricingTable />
                </div>
            </div>
        </div>
    );
}

export default Services;