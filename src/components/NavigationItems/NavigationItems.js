import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { useSideMenuOpen } from "../../context/sideMenuContext";


import * as styles from './header.module.css';

const NavigationItems = () => {
  const { setIsMenuClose } = useSideMenuOpen();

  const handleLinkClicked = () => {
    setIsMenuClose(true);
  }
  return (
    <header className={styles.wrapper}>
      <ul className={styles.listWrapper}>

        <div onClick={() => handleLinkClicked()}>
          <AnchorLink className={styles.links} to="#about">
            <li>About us</li>
          </AnchorLink>
        </div>

        <div onClick={() => handleLinkClicked()}>
          <AnchorLink className={styles.links} to="#ladies">
            <li>Our Ladies</li>
          </AnchorLink>
        </div>

        <div onClick={() => handleLinkClicked()}>
          <AnchorLink className={styles.links} to="#services">
            <li>Services</li>
          </AnchorLink>
        </div>

        <div onClick={() => handleLinkClicked()}>
          <AnchorLink className={styles.links} to="#galery">
            <li>Interier Galery</li>
          </AnchorLink>
        </div>

        <div onClick={() => handleLinkClicked()}>
          <AnchorLink className={styles.links} to="#rules">
            <li>Rules</li>
          </AnchorLink>
        </div>

      </ul>
    </header>
  )
}

export default NavigationItems
