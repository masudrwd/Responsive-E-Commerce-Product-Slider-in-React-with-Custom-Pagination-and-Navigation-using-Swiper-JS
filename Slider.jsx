import React, { useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

import './SliderStyle.css';
import { SliderContent } from './SliderContent';

import img1 from './Photos/headphone.jpg';
import img2 from './Photos/drone.webp';
import img3 from './Photos/earpod.jpeg';
import img4 from './Photos/macbook.webp';
import img5 from './Photos/smobile.webp';
import img6 from './Photos/bluepen.webp';
import img7 from './Photos/phone.jpeg';
import img8 from './Photos/watch.webp';

const Products = [
   {
      id: 1,
      name: 'True Wireless In-Ear Black headphone',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img1,
   },
   {
      id: 2,
      name: 'Flying White Quadcopter Drone in the Sky',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img2,
   },
   {
      id: 3,
      name: 'Iphone 6, Earpods and Macbook In One Photos',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img3,
   },
   {
      id: 4,
      name: 'Silver Macbook Surro unding Black',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img4,
   },
   {
      id: 5,
      name: 'Close-up of Human Hand With Text',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img5,
   },
   {
      id: 6,
      name: 'Close-Up Photo Of Blue Container I Guess',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img6,
   },
   {
      id: 7,
      name: 'A Classic Black Blackbery Qwerty Phone',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img7,
   },
   {
      id: 8,
      name: 'Person in Blue Sleeve Shirt Using Smart Watch',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: img8,
   },
];

export const Slider = () => {
   const [slideBegOrNot, handleSlideByState] = useState({
      isFirst: true,
      isLast: false,
   });
   const SlideRef = useRef();

   const handleNext = () => {
      SlideRef.current.swiper.slideNext();
   };

   const handlePrev = () => {
      SlideRef.current.swiper.slidePrev();
   };

   const onSlideChange = (swiper) => {
      handleSlideByState({
         isFirst: swiper.isBeginning,
         isLast: swiper.isEnd,
      });
   };

   const { isLast, isFirst } = slideBegOrNot;

   return (
      <div className="container">
         <h1 className="heading">Post Carousel Using React Swiper Js</h1>

         <div className="post-box">
            <div className="bg-left"></div>
            <div className="bg-right"></div>

            <div className="post-heading">
               <div className="heading-box">
                  <h2 className="second-heading">Just For You</h2>
                  <div className="pagination-slide">
                     <p className="swiper-paginations"></p>
                     <div className="bs-icons">
                        <BsArrowLeft
                           className={`Arrow ${isFirst ? 'disabled' : ''}`}
                           onClick={handlePrev}
                        />
                        <BsArrowRight
                           className={`Arrow ${isLast ? 'disabled' : ''}`}
                           onClick={handleNext}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="post-conatin">
               <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  className={'mySwiper'}
                  ref={SlideRef}
                  onSlideChange={onSlideChange}
                  pagination={{
                     el: '.swiper-paginations',
                     type: 'fraction',
                  }}
                  navigation={false}
                  modules={[Pagination, Navigation]}
                  breakpoints={{
                     0: {
                        slidesPerView: 1,
                     },
                     390: {
                        slidesPerView: 1.5,
                     },
                     502: {
                        slidesPerView: 2,
                     },
                     802: {
                        slidesPerView: 2.5,
                     },
                     992: {
                        slidesPerView: 3,
                     },
                     1200: {
                        slidesPerView: 4,
                     },
                  }}
               >
                  {Products.map((item) => {
                     return (
                        <SwiperSlide key={item.id}>
                           <SliderContent
                              key={item.id}
                              image={item.img}
                              title={item.name}
                              description={item.description}
                              alt={item.name}
                           />
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            </div>
         </div>
      </div>
   );
};
