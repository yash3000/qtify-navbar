import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

import 'swiper/css';
import './Carousel.css';

const Controls = ({ data }) => {
    const swiper = useSwiper();
    console.log(swiper)

    useEffect(() => {
        swiper.slideTo(0, null)
    }, [data]);
}

const Carousel = ({data, component}) => {
    return (
        <div className='carousel-wrapper'>
            <Swiper
                style={{ padding: '0px 20px' }}
                initialSlide={0}
                modules={[ Navigation ]}
                slidesPerView={"auto"}
                spaceBetween={15}
                navigation
                allowTouchMove
            >
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((item)=>{
                    return(
                        <SwiperSlide>{component(item)}</SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Carousel;