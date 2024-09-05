/** @format */

import React, { useState } from "react";
import Header from "../comp/header";

import Slidar from "../comp/Slidar";

import Footer from "../comp/Footer";
import Up from "../comp/up";
import Loding from "../comp/Loding";
import Slidarrr from "../comp/logoslidar/Slidarrr";
import Style from "../comp/Style";
// import Comphedar from "../comp/Comphedar";

const Home = () => {
  const [loging, setloging] = useState(false);

  setTimeout(() => {
    setloging(true);
  }, 1500);

  return (
    <>
      <Header />

      {loging ? (
        <div>
          <Slidar />
          <Style />

          <Up />
          <Slidarrr />

          <Footer />
          
        </div>
      ) : (
        <Loding />
      )}

    </>
  );
};

export default Home;
