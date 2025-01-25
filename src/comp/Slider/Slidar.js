import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Slider.css";

export default function Slidar() {
  const slides = [
    {
      image: "/logos/pro_3.jpg",
      title: "Discover the latest trends in fashion",
     
    },
    {
      image: "/logos/pro_2.jpg",
      title: "Quality you can trust",
    },
    {
      image:
        "https://res.cloudinary.com/drlhjaofi/image/upload/v1713130063/2/1658329192737168ff6ad063452563108e1de4d132_thumbnail_900x_q7q07n.webp",
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
             {/* <div className="position-absolute top-50 start-50 translate-middle text-center bg-white bg-opacity-75 p-3 rounded"> 
            <p className="text-black mb-0">{slide.title}</p>  
          </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  
  );
}