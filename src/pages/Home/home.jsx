/** @format */

import React from "react";
import Hero from "../../components/Hero/Hero";
import MainHome from "../../components/Main Home/mainHome";
import Testimonials  from "../../components/Testimonials/Testimonials";
import ButtomUp from "../../components/up";
import ProductLest from "../../components/productLest/productLest";
import PhotoInfo from "../../components/Main_Photo/PhotoInfo";
import SEO from "../../helpers/SEO";

const Home = () => {
  return (
    <>
  
      <SEO 
        title="Home" 
        description="Discover our curated collection of handcrafted apparel and timeless objects built for longevity."
      />
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
