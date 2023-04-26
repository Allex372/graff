import * as React from "react"

import { useLanguage } from '../../context/languageContext';
import * as styles from './Rules.module.css';

const Rules = () => {
    const { t } = useLanguage();
    return (
        <div className={styles.wrapper} id='rules'>
            <p className={styles.title}>{t('rules')}</p>

            <div className={styles.infoWrapper}>
                <p className={styles.text}>Наша студія дорожить своїм статусом і поважає репутацію кожного відвідувача, тому наполегливо просимо вас дотримуватися правил відвідування, встановлені нашим закладом, і враховувати деякі нюанси.</p>
                <ul className={styles.rulesList}>
                    <li className={styles.textPlayfair}>
                        Наші відвідувачі - виключно люди, які досягли 18 років.
                    </li>
                    <li className={styles.textPlayfair}>Наші відвідувачі - виключно люди, які досягли 18 років.</li>
                    <li className={styles.textPlayfair}>Наші відвідувачі - виключно люди, які досягли 18 років.</li>
                    <li className={styles.textPlayfair}>Наші відвідувачі - виключно люди, які досягли 18 років.</li>
                    <li className={styles.textPlayfair}>Наші відвідувачі - виключно люди, які досягли 18 років.</li>
                    <li className={styles.textPlayfair}>Наші відвідувачі - виключно люди, які досягли 18 років.</li>
                </ul>
            </div>
        </div>
    )
}

export default Rules;