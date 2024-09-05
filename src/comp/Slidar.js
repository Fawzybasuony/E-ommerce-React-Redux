import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Slidar() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="slide-content">
            <img src="/logos/pro_3.jpg " alt="Fashion 1" />

            <div className="caption">
              Discover the latest trends in fashion &#8459; &#9752;
              <p className="fs-6 text-start ms-4">
                Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                velit. Vestibulum malesuada aliquet libero viverra cursus.
                Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem.
                In at nisi nec arcu porttitor aliquet vitae at dui. Sed
                sollicitudin nulla
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://res.cloudinary.com/drlhjaofi/image/upload/v1713130063/2/1658329192737168ff6ad063452563108e1de4d132_thumbnail_900x_q7q07n.webp"
              alt="Fashion 2"
            />
            <div className="caption">
              Style that suits your personality &#167;
              <p className="fs-6 text-start ms-4">
                Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                velit. Vestibulum malesuada aliquet libero viverra cursus.
                Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem.
                In at nisi nec arcu porttitor aliquet vitae at dui. Sed
                sollicitudin nulla
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src="/logos/pro_2.jpg" alt="Fashion 4" />
            <div className="caption">
              Quality you can trust &#8241;
              <p className="fs-6 text-start ms-4">
                Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                velit. Vestibulum malesuada aliquet libero viverra cursus.
                Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem.
                In at nisi nec arcu porttitor aliquet vitae at dui. Sed
                sollicitudin nulla
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://res.cloudinary.com/drlhjaofi/image/upload/v1713130054/3/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_White___XL_rozf6m.png"
              alt="Fashion 6"
            />
            <div className="caption">
              Comfort and style combined &#8251;
              <p className="fs-6 text-start ms-4">
                Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                velit. Vestibulum malesuada aliquet libero viverra cursus.
                Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem.
                In at nisi nec arcu porttitor aliquet vitae at dui. Sed
                sollicitudin nulla
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="/logos/pro_4.jpg" alt="Fashion 7" />
            <div className="caption">
              Innovative and trendy &#8258;
              <p className="fs-6 text-start ms-4">
                Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                velit. Vestibulum malesuada aliquet libero viverra cursus.
                Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem.
                In at nisi nec arcu porttitor aliquet vitae at dui. Sed
                sollicitudin nulla
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://res.cloudinary.com/drlhjaofi/image/upload/v1713130056/4/163826656927114e9da27ea115f55404141ba11264_thumbnail_900x_bwlxif.webp"
              alt="Fashion 8"
            />
            <div className="caption">
              Sophistication in every thread &#8279; &#9752;
              <p className="fs-6 text-start ms-4">
                Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                velit. Vestibulum malesuada aliquet libero viverra cursus.
                Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem.
                In at nisi nec arcu porttitor aliquet vitae at dui. Sed
                sollicitudin nulla
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://res.cloudinary.com/drlhjaofi/image/upload/v1713130057/3/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_Khaki___XL_hn4vhm.png"
              alt="Fashion 9"
            />
            <div className="caption">
              Timeless classics reimagined &#8279;
              <p className="fs-6 text-start ms-4">
                Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                velit. Vestibulum malesuada aliquet libero viverra cursus.
                Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem.
                In at nisi nec arcu porttitor aliquet vitae at dui. Sed
                sollicitudin nulla
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
