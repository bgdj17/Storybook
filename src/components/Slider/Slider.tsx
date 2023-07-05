import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import images from '../../assets/images/images';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'

function App() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
         
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={images[0]} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[1]} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[2]} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[3]} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[4]} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[5]} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[6]} alt="slide_image" />
        </SwiperSlide>

        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;