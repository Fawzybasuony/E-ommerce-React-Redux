import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../comp/Footer/Footer';
import Header from '../comp/Header/header';

export default function Root() {
  return (
    < >
            <Header />
      
              <Outlet />
              <Footer />

    </>
  )
}
