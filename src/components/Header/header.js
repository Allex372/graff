import * as React from "react"

import * as styles from './header.module.css';

const Header = () => (
  <header className={styles.wrapper}>
    <ul className={styles.listWrapper}>
      <li>About us</li>
      <li>Our Ladies</li>
      <li>Rooms & Rates</li>
      <li>Booking</li>
      <li>Employment</li>
    </ul>
  </header>
)

export default Header
