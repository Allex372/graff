import * as React from "react"

import ServicesCard from "./ServicesCard/ServicesCard";

import * as styles from './Services.module.css';

const Services = ({ services }) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Services</p>
            <div className={styles.flexWrapper}>
                {services.map((service) => {
                    const { category, title, url, image, text } = service.frontmatter;
                    return (
                        <ServicesCard key={service.id} text={text} category={category} title={title} url={url} image={image} />
                    )
                })}
            </div>
        </div>
    )
}

export default Services;