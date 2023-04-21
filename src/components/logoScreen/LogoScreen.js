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

    const body = document.getElementsByTagName('body');

    useEffect(() => {
        isOpen ? body[0].style.overflow = 'hidden' : body[0].style.overflow = 'auto';
    }, [isOpen]);

    const handleOpenMobileMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.iconContentWrapper}>
                <div className={styles.imageWrapper}>
                    <div className={styles.logoWrapper} style={{ zIndex: isOpen && '2' }}>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className={styles.menuIcon} style={{ zIndex: isOpen && '2' }} onClick={() => handleOpenMobileMenu()}>
                        {isOpen ? <img src={closeIcon} alt="close" /> : <img src={menuIcon} alt='open' />}
                    </div>
                </div>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactsInfo}>
                        <a href="tel:+1234567890">
                            <i class="fas fa-phone fa-lg"></i>
                            +1 (234) 567-890
                        </a>

                        <a href="tg://resolve?domain=telegram_username">
                            <i class="fab fa-telegram fa-lg"></i>
                            Telegram
                        </a>

                        <a href="https://wa.me/1234567890">
                            <i class="fab fa-whatsapp fa-lg"></i>
                            WhatsApp
                        </a>

                        <a href="viber://pa?chatURI=viber_username">
                            <i class="fab fa-viber fa-lg"></i>
                            Viber
                        </a>
                    </div>
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
                        <div className={styles.contactsMobileWrapper}>
                            <div className={styles.contactsInfo}>
                                <a href="tel:+1234567890">
                                    <i class="fas fa-phone"></i>
                                    +1 (234) 567-890
                                </a>

                                <a href="tg://resolve?domain=telegram_username">
                                    <i class="fab fa-telegram"></i>
                                    Telegram
                                </a>

                                <a href="https://wa.me/1234567890">
                                    <i class="fab fa-whatsapp"></i>
                                    WhatsApp
                                </a>

                                <a href="viber://pa?chatURI=viber_username">
                                    <i class="fab fa-viber"></i>
                                    Viber
                                </a>
                            </div>
                        </div>
                        <div className={styles.languages}>EN/UA</div>
                    </div>
                </div>
            }
        </div>
    )

}

export default LogoScreen;