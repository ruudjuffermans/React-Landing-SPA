import Container from "../../../../components/Container"
import PageTitle from "../../../../components/PageTitle"
import Section from "../../../../components/Section"
import styles from "./style.module.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import ReviewCard from "./ReviewCard";

const Reviews = () => {
    return (
        <Section>
            <Container>
                <PageTitle>Dit is wat klanten over mij zeggen</PageTitle>
            </Container>
            <div style={{position: "relative"}}>

            <Container>
            <div style={{ marginLeft:"-20px", marginRight:"-20px"}}>
            <Swiper
                grabCursor={true}
                
                slidesPerView={3}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className={styles.swiper}
                >
                <SwiperSlide className={styles.swiper__slide}><ReviewCard /></SwiperSlide>
                <SwiperSlide className={styles.swiper__slide} ><ReviewCard /></SwiperSlide>
                <SwiperSlide className={styles.swiper__slide} ><ReviewCard /></SwiperSlide>
                <SwiperSlide className={styles.swiper__slide} ><ReviewCard /></SwiperSlide>
                <SwiperSlide className={styles.swiper__slide} ><ReviewCard /></SwiperSlide>
                <SwiperSlide className={styles.swiper__slide} ><ReviewCard /></SwiperSlide>
                <SwiperSlide className={styles.swiper__slide} ><ReviewCard /></SwiperSlide>
                <SwiperSlide className={styles.swiper__slide} ><ReviewCard /></SwiperSlide>
                <SwiperSlide className={styles.swiper__slide} ><ReviewCard /></SwiperSlide>
                <SwiperSlide className={styles.swiper__slide} ><ReviewCard /></SwiperSlide>
                <SwiperSlide className={styles.swiper__slide} ><ReviewCard /></SwiperSlide>
            </Swiper>
                    </div>
                </Container>
        <div className={styles.overlay}></div>
                    </div>
        </Section>
    )
}

export default Reviews