import React from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Products from "../Products";
import { listProducts } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";

const Homescreen = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { error, loading, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Products</h1>
      {loading ? (
        <h2>
          <Loader />
        </h2>
      ) : error ? (
        <>
          <Message message="error"></Message>
        </>
      ) : (
        <Row className="d-flex justify-content-center">
          {products?.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Homescreen;
