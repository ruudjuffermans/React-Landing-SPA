import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import star from "../../../assets/svg/star.svg"

import styles from "./styles.module.css"
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import {  Navigation, Autoplay } from 'swiper/modules';
import Container from '../../Container';

const SLIDES_PER_VIEW = 2


export default function Slider() {
  const sliderRef = useRef(null)
  const [slides, setSlides] = useState([])
  const handleInitSlider = (swiper) => {
    setSlides(sliderRef.current.getElementsByClassName('swiper-slide'))
    // sliderRef.current.getElementsByClassName('swiper-slide')[3].style.transform = "translateX(100px)"
    // slides[3].style.transform = "translateX(100px)"
  }
  useEffect(() => {
    if(slides.length) {
      for (let index = SLIDES_PER_VIEW; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(150px)" 
        element.style.opacity = 0 
      }
    }
  }, [slides])
  const handleSliderChangeStart = (swiper) => {
    const direction = swiper.previousIndex <= swiper.activeIndex || swiper.previousIndex === undefined ? 'forward' : 'backward';
    if (direction === 'forward') {
          swiper.slides[swiper.activeIndex == 0 ? swiper.slides.length-1 : swiper.activeIndex-1].style.transform = "translateX(-150px)"
          swiper.slides[swiper.activeIndex == 0 ? swiper.slides.length-1 : swiper.activeIndex-1].style.opacity = 0
            swiper.slides[swiper.activeIndex+SLIDES_PER_VIEW -1].style.transform = "translateX(0px)"
            swiper.slides[swiper.activeIndex+SLIDES_PER_VIEW -1].style.opacity = 1


          console.log("forward start")
        } 
    else {
          console.log("backward start")
          swiper.slides[swiper.activeIndex].style.transform = "translateX(0px)"
          swiper.slides[swiper.activeIndex].style.opacity = 1
          swiper.slides[swiper.activeIndex+SLIDES_PER_VIEW].style.transform = "translateX(150px)"
          swiper.slides[swiper.activeIndex+SLIDES_PER_VIEW].style.opacity = 0
        }
  };

  return (
    <div style={{backgroundColor:'white'}}>
    <div className={styles.container}>
      <Swiper
      ref={sliderRef}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        onSlideChange={(slider) => handleSliderChangeStart(slider)}
        onInit={(slider) => handleInitSlider(slider)}
        speed={900}
        slidesPerView={SLIDES_PER_VIEW}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
<SwiperSlide>   
<div className={styles.review__card}>
              <div className={styles.review__name}>
                Natalie Sweden
              </div>
              <div className={styles.review__rating}>
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
              </div>
              <div className={styles.review__text}>
                Snel gedaan, alleen achteraf was een witte pijp mooier geweest.
              </div>
            </div>
      </SwiperSlide>
        <SwiperSlide>
        <div className={styles.review__card}>
              <div className={styles.review__name}>
                Natalie Sweden
              </div>
              <div className={styles.review__rating}>
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
              </div>
              <div className={styles.review__text}>
                Snel gedaan, alleen achteraf was een witte pijp mooier geweest.
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.review__card}>
              <div className={styles.review__name}>
                Natalie Sweden
              </div>
              <div className={styles.review__rating}>
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
              </div>
              <div className={styles.review__text}>
                Snel gedaan, alleen achteraf was een witte pijp mooier geweest.
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.review__card}>
              <div className={styles.review__name}>
                Natalie Sweden
              </div>
              <div className={styles.review__rating}>
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
              </div>
              <div className={styles.review__text}>
                Snel gedaan, alleen achteraf was een witte pijp mooier geweest.
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.review__card}>
              <div className={styles.review__name}>
                Natalie Sweden
              </div>
              <div className={styles.review__rating}>
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
              </div>
              <div className={styles.review__text}>
                Snel gedaan, alleen achteraf was een witte pijp mooier geweest.
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.review__card}>
              <div className={styles.review__name}>
                Natalie Sweden
              </div>
              <div className={styles.review__rating}>
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
                <img className={styles.review__star} src={star} alt="" />
              </div>
              <div className={styles.review__text}>
                Snel gedaan, alleen achteraf was een witte pijp mooier geweest.
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
</div>
    </div>
  );
}
