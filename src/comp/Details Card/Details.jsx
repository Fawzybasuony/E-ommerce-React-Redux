import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  "./Detailse.css";
import data from "../../data.json";


export default function Details() {
  const { ID } = useParams();  
  const [product, setProduct] = useState(null);  

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(ID));
    if (foundProduct) {
      setProduct(foundProduct);  
    }
  }, [ID]);   

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <>
 {product && (
  <main>
    <img src={product.image} alt="Product" />
    <div className="product-details">
      <h2>{product.title}</h2>
      <p className="description">{product.description}</p>
      <p className="price">Price: ${product.price}</p>
    </div>
  </main>
)}

  </>
  
  
  );
}
// Swal.fire({
//   title: "are you sure ?",
//   showCancelButton: true,
