import React, { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { useLanguage } from '../../context/languageContext';

import * as styles from './About_us.module.css';

const AboutUs = () => {
    const data = useStaticQuery(graphql`
        query AboutQuery {
            allStrapiAbout {
                edges {
                    node {
                        title
                        text {
                            data {
                                text
                            }
                        }
                        localizations {
                            data {
                                attributes {
                                    text
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

    const cahcedData = useMemo(() => data, [data]);

    const { text, localizations, image } = cahcedData?.allStrapiAbout?.edges[0]?.node;

    const { language } = useLanguage();

    const img = getImage(image[0]?.localFile);

    return (
        <div id="about" className={styles.wrapper}>
            <div className={styles.infoWrapper}>
                <div className={styles.infoImgWrapper}>
                    <GatsbyImage
                        image={img}
                        alt='img'
                        loading="lazy"
                        className={styles.image}
                    />
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.descriptionTitle}>«Graff»</p>
                    {localizations?.data?.map((loc, index) => (
                        <p key={index} className={styles.description}>{language === 'en' ? loc.attributes.text : text?.data?.text}</p>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default AboutUs;