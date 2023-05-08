import * as React from "react"
import { graphql, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { useLanguage } from "../context/languageContext";
import LanguageProvider from '../context/languageContext';
import arrowLeft from '../images/arrow-left.png';

import * as styles from './single-service.module.css';

const SingleService = ({ data }) => {
  const { language } = useLanguage();
  const { title, text, image, localizations } = data?.strapiService;
  const img = getImage(image.localFile);

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
        </div>
        {localizations.data.map((loc, index) => {
          return (
            <React.Fragment key={index}>
              <p className={styles.title}>
                {language === 'en' ? loc.attributes.title : title}
              </p>
              <p className={styles.description}>{language === 'en' ? loc.attributes.text : text.data.text}</p>
            </React.Fragment>
          )
        })}
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
    strapiService(url: { eq: $url }) {
      id
      title
      url
      category
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 350)
          }
        }
      }
      localizations {
                data {
                  attributes {
                    title
                    text
                  }
                }
              }
      text {
        data {
          text
        }
      }
    }
  }
`;