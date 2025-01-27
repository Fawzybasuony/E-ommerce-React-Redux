import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Slider.css";

export default function Slidar() {
  const slides = [
    {
      image: "/Slider/img (1).jpg",
      title: "Discover the latest trends in fashion",
     
    },
    {
      image: "/Slider/img (2).jpg",
      title: "Quality you can trust",
    },
    {
      image: "/Slider/img (3).jpg",
      title: "Style that suits your personality",
    },

  ];

  return (
 
       <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img
                src={slide.image}
                alt={`Fashion ${index + 1}`}
                className=" "
              />
             <div className="position-absolute bottom-50 end-50 text-center "> 
            <p className="text-white  font-bold fs-3">{slide.title}</p>  


<button class="btn custom-btn" data-text="Awesome">
  <span class="actual-text">&nbsp;Go now&nbsp;</span>
  <span aria-hidden="true" class="hover-text flex">&nbsp;Shopping&nbsp;</span>
</button>


          </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  
  );
}