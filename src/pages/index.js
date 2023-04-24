import * as React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import BaseLayout from "../components/Base_layout/BaseLayout"
import LogoScreen from '../components/logoScreen/LogoScreen.js';
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import InterierGalery from "../components/InterierGalery/InterierGalery";
import Ladies from "../components/Ladies/Ladies";
import GradientLine from "../components/GradientLine/GradientLine";
import Rules from "../components/Rules/Rules";
import Seo from "../components/seo";
import SliderContextProvide from "../context/sliderConext";
import SideMenuContextProvide from "../context/sideMenuContext";
import Scroll from "../components/ScrollToTop/ScrollToTop";

import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {
  const { nodes: servicesArray } = data?.allMarkdownRemark;
  return (
    <div className={styles.mainWrapper}>

      <Layout>
        <SideMenuContextProvide>
          <LogoScreen />
        </SideMenuContextProvide>

      </Layout>

      <SliderContextProvide>
        <BaseLayout>
          <AboutUs />
          <div className={styles.lineWrapper}>
            <GradientLine />
          </div>
          <Ladies />
          <div className={styles.lineWrapper}>
            <GradientLine />
          </div>
          <Services services={servicesArray.length && servicesArray} />
          <div className={styles.lineWrapper}>
            <GradientLine />
          </div>
          <InterierGalery />
          <div className={styles.lineWrapper}>
            <GradientLine />
          </div>
          <Rules />
        </BaseLayout>
      </SliderContextProvide>

      <Scroll showBelow={250} />
    </div>
  )
}

export const Head = () => <Seo title="Graff" />

export default IndexPage

export const query = graphql`
  query AllServices{
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`