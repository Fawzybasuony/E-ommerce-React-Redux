import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  "./Detailse.css";

export default function Details() {
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
 {products && (
  <main>
    <img src={products.image} alt="Product" />
    <div className="product-details">
      <h2>{products.title}</h2>
      <p className="description">{products.description}</p>
      <p className="price">Price: ${products.price}</p>
    </div>
  </main>
)}

  </>
  
  
  );
}
// Swal.fire({
//   title: "are you sure ?",
//   showCancelButton: true,
