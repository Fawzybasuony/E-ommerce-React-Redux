import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/header';

export default function Root() {
  return (
    < >
            <Header />
      
              <Outlet />
              <Footer />

    </>
  )
}
