import * as React from "react";
import Dialog from '@mui/material/Dialog';

import SwiperCarousel from "../Swiper/Swiper";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import * as styles from './ModelsDialog.module.css'

const ModelsDialog = ({ isOpenDialog, handleClose, imagesArray }) => {
    return (
        <Dialog onClose={handleClose} open={isOpenDialog}
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            }}>
            <div className={styles.container}>
                <SwiperCarousel imagesArray={imagesArray} />
            </div>
        </Dialog>
    )
}

export default ModelsDialog;