import * as React from "react"

import SwiperCarousel from "../Swiper/Swiper";
import { useLanguage } from "../../context/languageContext";

import * as styles from './Services.module.css';

const Services = ({ services }) => {
    const { t } = useLanguage();
    return (
        <div className={styles.wrapper} id="services">
            <p className={styles.title}>{t('services')}</p>

            <div className={styles.container}>
                <SwiperCarousel array={services} isService={true} />
                <div className={styles.tableWrapper}>
                    <div className={styles.tblHeader}>
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Час</th>
                                    <th>1 масажистка</th>
                                    <th>2 масажистки</th>
                                    {/* <th>Change %</th> */}
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className={styles.tblContent}>
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                <tr>
                                    <td>Імператорський</td>
                                    <td>
                                        <p>60min</p>
                                        <p>90min</p>
                                        <p>120min</p>
                                    </td>
                                    <td>
                                        <p>3500</p>
                                        <p>4500</p>
                                        <p>6000</p>
                                    </td>
                                    <td>
                                        <p>5500</p>
                                        <p>6500</p>
                                        <p>8000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Королівський</td>
                                    <td>
                                        <p>60min</p>
                                        <p>90min</p>
                                        <p>120min</p>
                                    </td>
                                    <td>
                                        <p>2800</p>
                                        <p>3600</p>
                                        <p>4400</p>
                                    </td>
                                    <td>
                                        <p>4800</p>
                                        <p>5600</p>
                                        <p>6400</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Спокуса</td>
                                    <td>
                                        <p>60min</p>
                                        <p>90min</p>
                                        <p>120min</p>
                                    </td>
                                    <td>
                                        <p>2000</p>
                                        <p>2800</p>
                                        <p>3500</p>
                                    </td>
                                    <td>
                                        <p>4000</p>
                                        <p>4800</p>
                                        <p>5500</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Фаберже</td>
                                    <td>
                                        <p>60min</p>
                                        <p>90min</p>
                                        <p>120min</p>
                                    </td>
                                    <td>
                                        <p>3000</p>
                                        <p>3800</p>
                                        <p>4600</p>
                                    </td>
                                    <td>
                                        <p>5000</p>
                                        <p>5800</p>
                                        <p>6600</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Таємне бажання</td>
                                    <td>
                                        <p>60min</p>
                                        <p>90min</p>
                                        <p>120min</p>
                                    </td>
                                    <td>
                                        <p>2500</p>
                                        <p>3300</p>
                                        <p>4100</p>
                                    </td>
                                    <td>
                                        <p>4500</p>
                                        <p>5300</p>
                                        <p>6100</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Аромамасаж</td>
                                    <td>
                                        <p>60min</p>
                                        <p>90min</p>
                                        <p>120min</p>
                                    </td>
                                    <td>
                                        <p>2200</p>
                                        <p>3000</p>
                                        <p>3800</p>
                                    </td>
                                    <td>
                                        <p>4200</p>
                                        <p>5000</p>
                                        <p>5800</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Класичний</td>
                                    <td>
                                        <p>60min</p>
                                        <p>90min</p>
                                        <p>120min</p>
                                    </td>
                                    <td>
                                        <p>1500</p>
                                        <p>2000</p>
                                        <p>3000</p>
                                    </td>
                                    <td>
                                        <p>3000</p>
                                        <p>4000</p>
                                        <p>5000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Масаж для пари</td>
                                    <td>
                                        <p>90min</p>
                                    </td>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p>4000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pink cream show</td>
                                    <td>
                                        <p>90min</p>
                                    </td>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p>4500</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Spa relax</td>
                                    <td>
                                        <p>120min</p>
                                        <p>240min</p>
                                    </td>
                                    <td>
                                        <p>7000</p>
                                        <p>14000</p>
                                    </td>
                                    <td>
                                        <p>10000</p>
                                        <p>17000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Вечеря з графинею</td>
                                    <td>
                                        <p>180min</p>
                                    </td>
                                    <td>
                                        <p>8000</p>
                                    </td>
                                    <td>
                                        <p>14000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Масаж з адміном</td>
                                    <td>
                                        <p>60min</p>
                                    </td>
                                    <td>
                                        <p>5000</p>
                                    </td>
                                    <td><p>-</p></td>
                                </tr>
                                <tr>
                                    <td>Ніч насолоди</td>
                                    <td>
                                        <p>10hours</p>
                                    </td>
                                    <td>
                                        <p>20000</p>
                                    </td>
                                    <td><p>-</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;