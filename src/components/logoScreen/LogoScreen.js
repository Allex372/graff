import * as React from "react";
import { useState, useEffect } from "react";

import Header from "../Header/header";
import GradientLine from "../GradientLine/GradientLine";
import logo from '../../images/logo.png';
import menuIcon from '../../images/menu-icon.png';
import closeIcon from '../../images/close-icon.png';

import * as styles from './logo.module.css';

const LogoScreen = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [zIndex, setZindex] = useState(false);

    const handleOpenMobileMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <div className={styles.logoWrapper} style={{ zIndex: isOpen && '2' }}>
                    <img src={logo} alt='logo' />
                </div>
                <div className={styles.menuIcon} style={{ zIndex: isOpen && '2' }} onClick={() => handleOpenMobileMenu()}>
                    {isOpen ? <img src={closeIcon} alt="close" /> : <img src={menuIcon} alt='open' />}
                </div>
            </div>

            <GradientLine />
            <div className={styles.headerWrapper}>
                <Header />
            </div>

            {isOpen &&
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileHeaderWrapper}>
                        <Header />
                        <div className={styles.languages}>EN/UA</div>
                    </div>
                </div>
            }
        </div>
    )

}

export default LogoScreen;