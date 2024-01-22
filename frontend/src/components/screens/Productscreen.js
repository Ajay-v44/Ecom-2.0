import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Rating from "../Rating";
import axios from "axios";
import { useParams } from "react-router";

const Productscreen = ({params}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`product/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <h1>Product Details</h1>
      <Row className="d-flex justify-content-center">
        <Card
          className="card text-white bg-primary mb-3 rounded-4"
          style={{ width: "40rem" }}
        >
          <Col sm={12} lg={4} xl={3} md={6} className="m-3">
            <img
              src={product.image}
              alt={product.productname}
              style={{
                width: "10rem",
                height: "300px",
                objectFit: "contain",
              }}
            />
            <h3>{product.productname}</h3>
            <p>{product.brand}</p>
            <p>{product.info}</p>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
            <button type="button" className="btn btn-outline-secondary">Add To Cart</button>
          </Col>
        </Card>
      </Row>
    </>
  );
};

export default Productscreen;
