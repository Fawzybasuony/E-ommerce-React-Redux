/** @format */

import "./index.css";
import Home from "./pages/home";
import Detlse from "./pages/Detlse";
import Cart from "./pages/cart/Cart";
import Contact from "./comp/contact/Contact";
import Abute from "./comp/Abute";
import Shop from "./comp/shop/Shop";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFuond from "./pages/Not_fuond/NotFuond";
 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Abute" element={<Abute />} />
      <Route path="/Shop" element={<Shop />} />

      <Route path="/Detlse/:ID" element={<Detlse />} />

      <Route path="*" element={<NotFuond/>} />
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
