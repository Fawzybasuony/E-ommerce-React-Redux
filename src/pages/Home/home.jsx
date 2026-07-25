/** @format */

import React from "react";
import Slidar from "../../components/Slider/Slidar";
import MainHome from "../../components/Main Home/mainHome";
import Testimonials  from "../../components/Testimonials/Testimonials";
import ButtomUp from "../../components/up";
import ProductLest from "../../components/productLest/productLest";
import PhotoInfo from "../../components/Main_Photo/PhotoInfo";

const Home = () => {
  return (
    <>
      <Slidar />
      <MainHome />
      <ProductLest />
      <PhotoInfo />
      <Testimonials  />
      <ButtomUp />
    </>
  );
};

export default Home;
