import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Products from "../Products";
import { listProducts } from "../../actions/productActions";
import { useDispatch,useSelector } from "react-redux";
const Homescreen = () => {
  const dispatch=useDispatch()
  const productsList=useSelector((state)=>state.productsList);
  const {error,loading,products}=productsList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <Container>
      <h1>Products</h1>
{
  loading ?
 ( <h2>Loading ...</h2>):error?(
  <h3>{error}</h3>
 ):(

  <Row className="d-flex justify-content-center">
  {products.map((product) => (
    <Products key={product.id} product={product} />
  ))}
</Row>



 )
}

    </Container>
  );
};

export default Homescreen;
