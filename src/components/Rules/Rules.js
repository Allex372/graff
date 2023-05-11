import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";

import { useLanguage } from '../../context/languageContext';
import * as styles from './Rules.module.css';

const Rules = () => {
    const data = useStaticQuery(graphql`
        query RulesQuery {
            allStrapiRule {
                edges {
                    node {
                        description {
                            data {
                                description
                            }
                        }
                        rule1 {
                            data {
                                rule1
                            }
                        }
                        rule2 {
                            data {
                                rule2
                            }
                        }
                        rule3 {
                            data {
                                rule3
                            }
                        }
                        rule4 {
                            data {
                                rule4
                            }
                        }
                        rule5 {
                            data {
                                rule5
                            }
                        }
                        rule6 {
                            data {
                                rule6
                            }
                        }
                        rule7 {
                            data {
                                rule7
                            }
                        }
                        localizations {
                            data {
                                attributes {
                                    description
                                    rule1
                                    rule2
                                    rule3
                                    rule5
                                    rule4
                                    rule6
                                    rule7
                                }
                            }
                        }
                    }
                }
            }
        }
      `)
    const { description, localizations, rule1, rule2, rule3, rule4, rule5, rule6, rule7, } = data.allStrapiRule.edges[0].node;
    const { t, language } = useLanguage();
    return (
        <div className={styles.wrapper} id='rules'>
            <p className={styles.title}>{t('rules')}</p>

            <div className={styles.infoWrapper}>
                {

                    localizations.data.map((loc, index) => {
                        return (
                            <React.Fragment key={index}>
                                <p className={styles.text}>
                                    {language === 'en' ? loc.attributes.description : description.data.description}
                                </p>

                                <ul className={styles.rulesList}>
                                    <li className={styles.textPlayfair}>
                                        {language === 'en' ? loc.attributes.rule1 : rule1.data.rule1}
                                    </li>
                                    <li className={styles.textPlayfair}>{language === 'en' ? loc.attributes.rule2 : rule2.data.rule2}</li>
                                    <li className={styles.textPlayfair}>{language === 'en' ? loc.attributes.rule3 : rule3.data.rule3}</li>
                                    <li className={styles.textPlayfair}>{language === 'en' ? loc.attributes.rule4 : rule4.data.rule4}</li>
                                    <li className={styles.textPlayfair}>{language === 'en' ? loc.attributes.rule5 : rule5.data.rule5}</li>
                                    <li className={styles.textPlayfair}>{language === 'en' ? loc.attributes.rule6 : rule6.data.rule6}</li>
                                    <li className={styles.textPlayfair}>{language === 'en' ? loc.attributes.rule7 : rule7.data.rule7}</li>
                                </ul>
                            </React.Fragment>
                        )
                    })}
            </div>
        </div>
    )
}

export default Rules;