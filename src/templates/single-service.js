import * as React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from './single-service.module.css';

const SingleService = ({ data }) => {
  // const { html } = data.markdownRemark;
  const { title, image, text } = data?.markdownRemark?.frontmatter;
  const img = getImage(image);

  return (
    <div className={styles.bg}>
      <Layout>
        <Seo title={title} />
        <div className={styles.infoWrapper}>
          <GatsbyImage image={img} alt={title} className={styles.image} />
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{text}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
        </div>
      </Layout>
    </div>
  )
}

export default SingleService;

export const query = graphql`
  query ServiceQuery($url: String) {
    markdownRemark(frontmatter: {url: {eq: $url}}) {
      html
      frontmatter {
        title
        url
        text
        image {
          childImageSharp {
            gatsbyImageData(width: 350)
          }
        }
      }
    }
  }
`;