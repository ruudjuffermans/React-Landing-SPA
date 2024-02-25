import React from 'react'
import Section from '../../../../components/Section'
import Container from '../../../../components/Container'
import styles from "./style.module.css"
import PageTitle from '../../../../components/PageTitle'

import zinkElement from "../../../../assets/svg/zink-element.svg"
import leadElement from "../../../../assets/svg/lead-element.svg"

import dienstImage1 from "../../../../assets/images/home1.jpeg"
import dienstImage2 from "../../../../assets/images/hero2.jpeg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-cube';

import { EffectCube, Autoplay, Navigation } from 'swiper/modules';
import Button from '../../../../components/Button'

const Projecten = () => {
    return (
        <Section>
            <Container>
                <div className={styles.page__divider}>
                    <div className={styles.divider__left}>

                    <div className={styles.page__subtitle}>loodgietersbedrijf juffermans</div>
                    <PageTitle>Bekijk hier mijn afgeronde projecten</PageTitle>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deserunt reprehenderit minus at veniam modi corrupti pariatur atque et quod libero velit dicta voluptatum tempora provident ab non mollitia harum.</p>
                    <Button>Ga naar projecten</Button>
                    
                    </div>
                    <div className={styles.divider__right}>
                    <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 50,
          shadowScale: 1.3,
        }}
        // pagination={true}
        modules={[Autoplay, EffectCube, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiper__slide}>
          <img src={dienstImage1} />
        </SwiperSlide >
        <SwiperSlide className={styles.swiper__slide}>
        <img src={dienstImage1} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
        <img src={dienstImage1} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
        <img src={dienstImage1} />
        </SwiperSlide>
      </Swiper>

                        </div>
                </div>
            </Container>

        </Section>
    )
}

export default Projecten