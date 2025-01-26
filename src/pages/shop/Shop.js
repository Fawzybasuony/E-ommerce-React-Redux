import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../../Radox/mydataSlice";
import Aos from "aos";
import "./shoop.css";
import Info_product from "../../helpers/Info_product";
import Infoproduct from "../../helpers/Info_product";

export default function Shop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setproduct] = useState([]);
  const [hart, sethart] = useState([]);

  const { selectedProductsID } = useSelector((state) => state.counter);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
      });
  }, []);
  // Alert
  const changevalue = (eo) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const Error = () => {
    Swal.fire({
      title: "!تمت الاضافه مسيقا ",
      // text: "That thing is still around?",
      icon: "question",
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
  
      {/*  */}
  <Infoproduct title={" Product  "}/>


      <div className="container">
        <div className="row mx-0 justify-content-center">
          {product.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-5 col-md-4 col-lg-3 p-0 my-3 mx-2"
            >
              <div className="card" data-aos="zoom-in-up">
                <div className="containerr text-center">
                  <img
                      onClick={() => navigate(`/Details/${item.id}`)}
                    src={item.image}
                    className="card-img-top"
                    alt="Product"
                  />
                  {/* <div
                    className="overlay"
                  >
                    <div className="text fw-bold">
                      <i className="fs-3 text-primary fa-regular fa-eye"></i>
                      <br />
                     
                    </div>
                  </div> */}
                </div>

                <div className="card-body">
                  <h5 className="  desc">
                    {item.title.slice(0, 15)}...
                  </h5>
                  <p className="card-text  fs-6 pb-2 ">
                    {item.description.slice(0, 20)}...
                  </p>


                  <div className=" ">
                    <div className="star-group">
                      <input
                        type="radio"
                        className="star"
                        id="one"
                        name="star_rating"
                      />
                      <input
                        type="radio"
                        className="star"
                        id="two"
                        name="star_rating"
                      />
                      <input
                        type="radio"
                        className="star"
                        id="three"
                        name="star_rating"
                      />
                      <input
                        type="radio"
                        className="star"
                        id="four"
                        name="star_rating"
                      />
                      <input
                        type="radio"
                        className="star"
                        id="five"
                        name="star_rating"
                        defaultChecked
                      />
                    </div>
                  </div>

                  {selectedProductsID.includes(item.id) ? (
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-danger fw-bold">
                        ${item.price}
                        <i
                          style={{
                            color: hart[item.id] ? "red" : "blue",
                          }}
                          onClick={() => {
                            sethart((ID) => ({
                              ...ID,
                              [item.id]: !ID[item.id],
                            }));
                          }}
                          className="ms-3 fa-solid fa-heart"
                        ></i>
                      </div>
                      <button
                        onClick={Error}
                        className="btn btn-danger fw-bold"
                      >
                        Done
                        <i className="ms-2 text-light fa-solid fa-check"></i>
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-between align-items-center pt-2">
                      <div className="text-danger fw-bold">
                        ${item.price}
                        <i
                          style={{
                            color: hart[item.id] ? "red" : "blue",
                          }}
                          onClick={() => {
                            sethart((ID) => ({
                              ...ID,
                              [item.id]: !ID[item.id],
                            }));
                          }}
                          className="ms-2  fa-solid fa-heart"
                        ></i>
                      </div>

                      <button
                        onClick={() => {
                          dispatch(Add(item));
                          changevalue();
                        }}
                        className="btn btn-primary fw-bold"
                      >
                        <i className="fa-solid fa-cart-plus text-light"></i>
                        Add Cart
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
