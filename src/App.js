/** @format */

import "./index.css";

import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";

import Shop from "./pages/shop/Shop";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFuond from "./comp/Not_fuond/NotFuond";
import React, { Suspense } from "react";
import Loading from "./comp/Loading/Loading";
import Abute from "./pages/About/Abute";
import Details from "./comp/Details Card/Details";
const Home = React.lazy(() => import("./pages/Home/home"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Abute" element={<Abute />} />
      <Route path="/Shop" element={<Shop />} />

      <Route path="/Details/:ID" element={<Details />} />

      <Route path="*" element={<NotFuond />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <h1>SORRY.........</h1>,
//   },

//   {
//     path: "/Cart",
//     element: <Cart />,
//   },
//   {
//     path: "/Contact",
//     element: <Contact />,
//   },
//   {
//     path: "/Abute",
//     element: <Abute />,
//   },
//   {
//     path: "/Shop",
//     element: <Shop />,
//   },
//   {
//     path: "/Detlse/:ID",
//     element: <Detlse />,
//   },

// ]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
