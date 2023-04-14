import * as React from "react"
import { useState } from 'react';

import ModelsDialog from "../ModelsDialog/ModelsDialog";
import { AllModelsArray } from "../../consts/allModelsArray";
import * as styles from './ladies.module.css';

const Ladies = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [arr, setArr] = useState([]);

    const handleOpenDialog = (imagesArray) => {
        setArr([]);
        if (imagesArray) {
            setArr(imagesArray);
        }
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Our Ladies</p>
            <div className={styles.flexWrapper}>
                <div className={styles.cardWrapper}>
                    {AllModelsArray.map((el) => (
                        <div className={styles.card} key={el.id}>
                            <div className={styles.content}>
                                <div className={styles.imgBx}>
                                    <img src={el.image} alt='girl' onClick={() => handleOpenDialog(el.allImages)} />
                                </div>
                            </div>

                            <ul className={styles.sci}>
                                <li>
                                    <p className={styles.ladyText}>Params</p>
                                </li>
                                <li>
                                    <p className={styles.ladyText}>Params</p>
                                </li>
                                <li>
                                    <p className={styles.ladyText}>Params</p>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <ModelsDialog isOpenDialog={openDialog} handleClose={() => handleCloseDialog()} imagesArray={arr.length >= 1 && arr} />
        </div>
    )
}

export default Ladies;