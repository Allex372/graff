import * as React from "react"
import logo from '../../images/logo.jpg';


import * as styles from './BaseLayout.module.css';

const BaseLayout = ({ children }) => {
    return (<>
        {/* <div className={styles.logoWrapper}>
            <img src={logo} alt='logo' />
        </div> */}
        <div className={styles.wrapper}>{children}</div>
    </>
    )
}

export default BaseLayout;