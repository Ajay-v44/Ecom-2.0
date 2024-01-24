import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Products = ({product}) => {
  return (
    <>
      <Link to={`/product/${product._id}`}>
      <div
        className="card   bg-primary m-3 p-2 rounded-4"
        style={{ width: "20rem" }}
      >
       
          <img
            src={product.image}
            className="card-img-top "
            alt="none"
            style={{ width: "10rem", height: "300px", objectFit: "contain" }}
          />
          <div className="card-body">
          <Card.Title>{product.productname}</Card.Title>
          <p>{product.brand}</p>
          
          <Card.Text className="overflow-hidden text-justify">{product.info}</Card.Text>
          <Rating value={product.rating}
          text={`${product.numReviews} reviews`}
          color={"#f8e825"}/>
          </div>
      
      </div>
      </Link>
    </>
  );
};

export default Products;
