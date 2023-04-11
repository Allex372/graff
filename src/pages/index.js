import * as React from "react"

import Layout from "../components/layout"
import BaseLayout from "../components/Base_layout/BaseLayout"
import LogoScreen from '../components/logoScreen/LogoScreen.js';
import About_us from "../components/About_us/About_us";
import GradientLine from "../components/GradientLine/GradientLine";
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <div className={styles.mainWrapper}>

    <Layout>
      <LogoScreen />
    </Layout>

    <BaseLayout>
      <About_us />
      <div className={styles.lineWrapper}>
        <GradientLine />
      </div>
    </BaseLayout>

  </div>
)

export const Head = () => <Seo title="Graff" />

export default IndexPage