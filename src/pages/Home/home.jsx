/** @format */

import React from "react";
import Slidar from "../../components/Slider/Slidar";
import MainHome from "../../components/Main Home/mainHome";
import Slider from "../../components/Slidar Logo/Slider";
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
      <Slider />
      <ButtomUp />
    </>
  );
};

export default Home;
