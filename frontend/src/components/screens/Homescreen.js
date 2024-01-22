import React from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {Row,Col,Card} from 'react-bootstrap';
const Homescreen = () => {
  const [products, setproducts] = useState([])
  useEffect(() => {
    async function fetchproducts(){
      const {data} =await axios.get('api/')
      setproducts(data)
    }
   fetchproducts()
  },[])
  
  return (
   <Container>
  <h1>Products</h1>
  {products.map((product)=>(
  <Row>
    <Card className='card'>
      <Col key={product._id} sm={12} lg={4} xl={3} md={6}>
        <h3>{product.productname}</h3>
        <p>{product.brand}</p>
       
        <img src={product.image} className='card rounded img-thumbnail'/>
        
      </Col>
      </Card>
  </Row>
   ))}
   </Container>
  )
}

export default Homescreen