import * as React from "react"
import { graphql, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { useLanguage } from "../context/languageContext";
import LanguageProvider from '../context/languageContext';
import arrowLeft from '../images/arrow-left.png';

import * as styles from './single-service.module.css';

const SingleService = ({ data }) => {
  const { t } = useLanguage();
  const { title, text, image } = data?.markdownRemark?.frontmatter;
  const img = getImage(image);

  return (
    <div className={styles.bg}>
      <div className={styles.menuIcon} onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="back" />
      </div>
      <div className={styles.infoWrapper}>
        <GatsbyImage
          image={img}
          alt={title}
          loading="lazy"
          className={styles.image}
        />
        <div className={styles.imageWrapper}>
          {/* <img
              src={img}
              alt={title}
              className={styles.image}
            /> */}
        </div>
        <p className={styles.title}>{t(title)}</p>
        <p className={styles.description}>{t(text)}</p>
      </div>
    </div>
  )
}

const SingleServiceWithContext = (props) => (
  <LanguageProvider>
    <SingleService {...props} />
  </LanguageProvider>
);

export default SingleServiceWithContext;

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
            gatsbyImageData(
              width: 350
            )
          }
        }
      }
    }
  }
`;


//placeholder: BLURRED
//formats: AUTO