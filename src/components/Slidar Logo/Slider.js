import "./Slidar_2.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

 
export default function Slider() {
  const sliderImages = [
    "/logos/logo-1.png",
    "/logos/logo-2.png",
    "/logos/logo-3.png",
    "/logos/logo-4.png",
    "/logos/logo-5.png",
    "/logos/marka.png",
    "/logos/marka_2.jpeg",
    "/logos/mrka_3.jpeg",
  ];

  return (
    <>


<Swiper
        modules={[Autoplay]}  
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false,  
        }}
        pagination={{
          clickable: true,
        }}
        className="xxx"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
