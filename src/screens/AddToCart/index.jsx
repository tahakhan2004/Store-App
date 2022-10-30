import React from 'react'
import Navbarr from '../../components/Navbar'
import { Card, Col, Row } from 'react-bootstrap';
import Cardss from '../../components/cards/Cards';
import { useSelector } from 'react-redux';
const AddCart = () => {
  const { cartitem } = useSelector((state) => state.AddToCartReducer)  

  return (
    <>
    <Navbarr />
      <h1>Cart PAge</h1>
      <Row className=''>
    {
      cartitem.map((product) =>{
        return(
          <Col lg="3" key={product.id}>
          <Cardss product={product} removeBtn = {true}/>
           </Col>  
        )
      })
    }  
    </Row> 
    </>
  )
}
export default AddCart
