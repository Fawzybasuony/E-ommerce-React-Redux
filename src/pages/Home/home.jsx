/** @format */

import React from "react";
import Hero from "../../components/Hero/Hero";
import MainHome from "../../components/Main Home/mainHome";
import Testimonials  from "../../components/Testimonials/Testimonials";
import ButtomUp from "../../components/up";
import ProductLest from "../../components/productLest/productLest";
import PhotoInfo from "../../components/Main_Photo/PhotoInfo";

const Home = () => {
  return (
    <>
      <Hero />
      <MainHome />
      <ProductLest />
      <PhotoInfo />
      <Testimonials  />
      <ButtomUp />
    </>
  );
};

export default Home;
