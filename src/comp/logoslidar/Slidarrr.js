 

import "./Slidar_2.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Lest from "../Lest_product/Lest";
 

export default function Slidarrr() {
  return (
    <>


<Lest/>

      <section className="lookbok-section">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-5 offset-lg-1">
              <div className="lookbok-pic">
                <img src="/logos/about-2.jpg" alt="" />
                <div className="pic-text">fashion</div>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-1">
              <div className="lookbok-left">
                <div className="section-title">
                  <h2>
                    2024
                    <br />  
                  
                    Personal 
                    <br /> 
                    Style <span className="text-warning">&#10022; </span> 
                  </h2>
                  <hr/>
                </div>
                <p>
                  Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                  velit. Vestibulum malesuada aliquet libero viverra cursus.
                  Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem.
                  In at nisi nec arcu porttitor aliquet vitae at dui. Sed
                  sollicitudin nulla non leo viverra scelerisque. Phasellus
                  facilisis lobortis metus, sit amet viverra lectus finibus ac.
                  Aenean non felis dapibus, placerat libero auctor, ornare ante.
                  Morbi quis ex eleifend, sodales nulla vitae, scelerisque ante.
                  Nunc id vulputate dui. Suspendisse consectetur rutrum metus
                  nec scelerisque. s
                </p>
                <Link href="#" className="primary-btn look-btn">
                  See More
                </Link>
              </div>
            </div>

            


          </div>
        </div>
      </section>

      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="xxx"
      >
        <SwiperSlide>
          {" "}
          <img src="/logos/logo-1.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/logos/logo-2.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/logos/logo-3.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/logos/logo-4.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/logos/logo-5.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos/marka.png" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/logos/marka_2.jpeg" alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="/logos/mrka_3.jpeg" alt="" />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
