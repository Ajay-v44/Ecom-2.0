import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Products from "../Products";
const Homescreen = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    async function fetchproducts() {
      try {
        const { data } = await axios.get("api/");
        setproducts(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchproducts();
  }, []);

  return (
    <Container>
      <h1>Products</h1>
      {products.map((product) => (
        <Row className="d-flex  justify-content-center">
          <Products product={product} />
        </Row>
      ))}
    </Container>
  );
};

export default Homescreen;
