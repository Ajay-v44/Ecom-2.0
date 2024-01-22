import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Products = ({product}) => {
  return (
    <>
      <Link to={`/product/${product._id}`}>
      <Card
        className="card  text-white bg-primary mb-3  rounded-4"
        style={{ width: "40rem" }}
      >
        <Col key={product._id} sm={12} lg={4} xl={3} md={6} className="m-3">
          <img
            src={product.image}
            className=" "
            style={{ width: "10rem", height: "300px", objectFit: "contain" }}
          />
          <h3>{product.productname}</h3>
          <p>{product.brand}</p>
          
          <p>{product.info}</p>
          <Rating value={product.rating}
          text={`${product.numReviews} reviews`}
          color={"#f8e825"}/>
        </Col>
      </Card>
      </Link>
    </>
  );
};

export default Products;
