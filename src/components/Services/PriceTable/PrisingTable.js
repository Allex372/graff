import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import { useLanguage } from "../../../context/languageContext";

import * as styles from './PriceTable.module.css';


const PricingTable = () => {
    const price = useStaticQuery(graphql`
        query ServicePriceQuery {
            allStrapiPrice {
                edges {
                node {
                    title
                    time1
                    time2
                    time3
                    girl1time1price
                    girl1time2price
                    girl1time3price
                    girl2time1price
                    girl2time2price
                    girl3time3price
                    localizations {
                    data {
                        attributes {
                        title
                        }
                    }
                    }
                }
                }
            }
        }
      `);

    const { language, t } = useLanguage();

    return (
        <>
            <p className={styles.title}>{t('price')}</p>
            <div className={styles.tableWrapper}>
                <div className={styles.tblHeader}>
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr>
                                <th aria-hidden="true"></th>
                                <th>Час</th>
                                <th>1 дівчина</th>
                                <th>2 дівчини</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles.tblContent}>
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            {price.allStrapiPrice.edges.map((el) => {
                                const {
                                    girl1time1price,
                                    girl1time2price,
                                    girl1time3price,
                                    girl2time1price,
                                    girl2time2price,
                                    girl3time3price,
                                    localizations,
                                    time1,
                                    time2,
                                    time3,
                                    title: titleUa
                                } = el.node;

                                return (
                                    <tr key={price.allStrapiPrice.edges.indexOf(el)}>
                                        {localizations.data.map((loc, index) => {
                                            return (
                                                <td className={styles.imperial} key={index}>
                                                    {language === 'en' ? loc.attributes.title : titleUa}
                                                </td>
                                            )
                                        })}
                                        <td>
                                            <p>{time1}</p>
                                            <p>{time2}</p>
                                            <p>{time3}</p>
                                        </td>
                                        <td>
                                            <p>{girl1time1price}</p>
                                            <p>{girl1time2price}</p>
                                            <p>{girl1time3price}</p>
                                        </td>
                                        <td>
                                            <p>{girl2time1price}</p>
                                            <p>{girl2time2price}</p>
                                            <p>{girl3time3price}</p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PricingTable;