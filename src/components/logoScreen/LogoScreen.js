import * as React from "react";
import { useState, useEffect } from "react";

import { useSideMenuOpen } from "../../context/sideMenuContext";
import { useLanguage } from '../../context/languageContext';
import NavigationItems from "../NavigationItems/NavigationItems";
import GradientLine from "../GradientLine/GradientLine";
import logo from '../../images/logo.png';
import menuIcon from '../../images/menu-icon.png';
import closeIcon from '../../images/close-icon.png';
// 0986374614
import * as styles from './logo.module.css';

const LogoScreen = () => {
    const { language, setEN, setUA } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);
    const { isMenuClose, setIsMenuClose } = useSideMenuOpen();

    useEffect(() => {
        setIsOpen(false);
    }, [isMenuClose]);

    useEffect(() => {
        const body = window.document.getElementsByTagName('body');

        (isOpen && body) ? body[0].style.overflow = 'hidden' : body[0].style.overflow = 'auto';
    }, [isOpen]);

    const handleOpenMobileMenu = () => {
        setIsMenuClose(false);
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.languages}>
                <span
                    className={language === 'ua' && `${styles.active}`}
                    onClick={() => setEN('ua')}
                >
                    UA
                </span>
                <span>/</span>
                <span
                    className={language === 'en' && `${styles.active}`}
                    onClick={() => setEN('en')}
                >
                    EN
                </span>
            </div>
            <div className={styles.iconContentWrapper}>
                <div className={styles.imageWrapper}>
                    {
                        !isOpen &&
                        <div className={styles.logoWrapper} style={{ zIndex: isOpen && '2' }}>
                            <img src={logo} alt='logo' />
                        </div>
                    }
                    <div className={styles.menuIcon} style={{ zIndex: isOpen && '2' }} onClick={() => handleOpenMobileMenu()}>
                        {isOpen ? <img src={closeIcon} alt="close" /> : <img src={menuIcon} alt='open' />}
                    </div>
                </div>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactsInfo}>
                        <a href="tel:+380986374614" target='_blank' rel="noreferrer">
                            <i class="fas fa-phone fa-lg"></i>
                            +380986374614
                        </a>

                        <a href="tg://resolve?domain=telegram_username" target='_blank' rel="noreferrer">
                            <i class="fab fa-telegram fa-lg"></i>
                            Telegram
                        </a>

                        <a href="https://wa.me/1234567890" target='_blank' rel="noreferrer">
                            <i class="fab fa-whatsapp fa-lg"></i>
                            WhatsApp
                        </a>

                        <a href="viber://pa?chatURI=viber_username" target='_blank' rel="noreferrer">
                            <i class="fab fa-viber fa-lg"></i>
                            Viber
                        </a>
                    </div>
                </div>
            </div>


            <GradientLine />
            <div className={styles.headerWrapper}>
                <NavigationItems />
            </div>

            {
                (isOpen && !isMenuClose) &&
                <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
                    <div className={styles.mobileHeaderWrapper}>
                        <NavigationItems />
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
                        <div className={styles.mobilelanguages}>
                            <span
                                className={language === 'ua' && `${styles.active}`}
                                onClick={() => setEN('ua')}
                            >
                                UA
                            </span>
                            <span>/</span>
                            <span
                                className={language === 'en' && `${styles.active}`}
                                onClick={() => setEN('en')}
                            >
                                EN
                            </span>
                        </div>
                    </div>
                </div>
            }
        </div >
    )

}

export default LogoScreen;