import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../comp/header";

export default function Detlse() {
  const { ID } = useParams();
  const [products, setproducts] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ID}`)
      .then((res) => res.json())
      .then((products) => {
        setproducts(products);
      });
  }, [ID]);

  return (
    <>
      <Header />
      {products && (
        <div className="Detl w-75 me-auto ms-auto" style={{ margin: "100px" }}>
          <div className="text-center">
            <img
              src={products.image}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body m-2">
            <h5 className="card-title fs-4">{products.title}</h5>
            <p className="card-text text-secondary">{products.description}</p>
            <h1 className="text-danger">Details {products.price}</h1>
          </div>
        </div>
      )}
    </>
  );
}
// Swal.fire({
//   title: "are you sure ?",
//   showCancelButton: true,
