import * as React from "react"

import img from '../../images/models/girl.webp';
import * as styles from './ladies.module.css';

const Ladies = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Our Ladies</p>
            <div className={styles.flexWrapper}>
                <div className={styles.cardWrapper}>

                    <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.imgBx}>
                                <img src={img} />
                            </div>
                        </div>

                        <ul className={styles.sci}>
                            <li>
                                <p className={styles.ladyText}>Params</p>
                            </li>
                            <li>
                                <p className={styles.ladyText}>Params</p>
                            </li>
                            <li>
                                <p className={styles.ladyText}>Params</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.imgBx}>
                                <img src={img} />
                            </div>
                        </div>
                        <ul className={styles.sci}>
                            <li>
                                <p className={styles.ladyText}>Params</p>
                            </li>
                            <li>
                                <p className={styles.ladyText}>Params</p>
                            </li>
                            <li>
                                <p className={styles.ladyText}>Params</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.imgBx}>
                                <img src={img} />
                            </div>
                        </div>
                        <ul className={styles.sci}>
                            <li>
                                <p className={styles.ladyText}>Params</p>
                            </li>
                            <li>
                                <p className={styles.ladyText}>Params</p>
                            </li>
                            <li>
                                <p className={styles.ladyText}>Params</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ladies;