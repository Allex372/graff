import * as React from "react"
import { useState, useEffect } from 'react';

import arrow from '../../images/arrow-left.png';

import * as styles from './ScrollToTop.module.css';

const Scroll = ({ showBelow }) => {

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <div className={styles.menuIcon} onClick={handleClick}>
                    <img src={arrow} alt="back" />
                </div>
            }
        </div>
    )
}
export default Scroll