import { useEffect, useRef, useState } from "react";
import hero1 from "../../../../assets/images/hero1.jpeg"
import hero2 from "../../../../assets/images/hero2.jpeg"
import hero3 from "../../../../assets/images/hero3.jpeg"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/parallax';

import { Autoplay, EffectFade, Pagination, Parallax } from 'swiper/modules';

// import './styles.css';
import styles from "./style.module.css"
import Container from "../../../../components/Container";

const Hero = () => {


  return (

    <Swiper
      effect={'parallax'}
      parallax={true}
      speed={600}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Parallax]}
      className={styles.swiper}
    >        <div
      slot="container-start"
      className={styles.parallax__bg}
      style={{
        'background-image':
          `url(${hero1})`,
      }}
      data-swiper-parallax="-5%"
    ></div>
      <div className={styles.overlay__base1}></div>
      <div className={styles.overlay__base2}></div>
      <div data-swiper-parallax="-8%" className={styles.overlay1}></div>
      <div data-swiper-parallax="4%" className={styles.overlay2}></div>
      <div data-swiper-parallax="-4%" className={styles.overlay3}></div>
      <SwiperSlide className={styles.swiper__slide}>
        <Container>
          <div className={styles.slide__content}>
            <div className={styles.slide__title} >
              Loodgietersbedrijf <span className={styles.slide__skew}>Juffermans</span><br />
              waterdicht de beste
            </div>
          </div>
        </Container>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper__slide}>
        <Container>
          <div className={styles.slide__content}>
            <div className={styles.slide__title} >
              Loodgietersbedrijf <span className={styles.slide__skew}>Juffermans</span><br />
              waterdicht de beste
            </div>
          </div>
        </Container>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper__slide}>
        <Container>
          <div className={styles.slide__content}>
            <div className={styles.slide__title} >
              Loodgietersbedrijf <span className={styles.slide__skew}>Juffermans</span><br />
              waterdicht de beste
            </div>
          </div>
        </Container>
      </SwiperSlide>
    </Swiper>
  );

};

export default Hero;
