import * as React from "react"

import Layout from "../components/layout"
import BaseLayout from "../components/Base_layout/BaseLayout"
import LogoScreen from '../components/logoScreen/LogoScreen.js';
import AboutUs from "../components/AboutUs/AboutUs";
import InterierGalery from "../components/InterierGalery/InterierGalery";
import Ladies from "../components/Ladies/Ladies";
import GradientLine from "../components/GradientLine/GradientLine";
import Rules from "../components/Rules/Rules";
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <div className={styles.mainWrapper}>

    <Layout>
      <LogoScreen />
    </Layout>

    <BaseLayout>
      <AboutUs />
      <div className={styles.lineWrapper}>
        <GradientLine />
      </div>
      <Ladies />
      <div className={styles.lineWrapper}>
        <GradientLine />
      </div>
      <InterierGalery />
      <div className={styles.lineWrapper}>
        <GradientLine />
      </div>
      <Rules />
    </BaseLayout>

  </div>
)

export const Head = () => <Seo title="Graff" />

export default IndexPage