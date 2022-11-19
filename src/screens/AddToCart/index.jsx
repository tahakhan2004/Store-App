import React from 'react'
import Navbarr from '../../components/Navbar'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Cardss from '../../components/cards/Cards';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const AddCart = () => {
  const { cartitem } = useSelector((state) => state.AddToCartReducer)  
  const [price , setPrice] = useState(0)
  
  const selector = useSelector((state)=> state.addCounterreducer)
  // console.log(selector);

  const handlePrice = () =>{
    let ans = 0;
    cartitem.map((item)=>{
      ans += selector.globalCounter * item.price  
    })
    setPrice(ans)
  }

  useEffect(()=>{
    handlePrice(); 
  })

  return (
    <>
    <Navbarr />
    <h1 className='text-center car'>CART</h1>

    <Row>
    {
      cartitem.map((product) =>{
        return(
          <Col lg="12" key={product.id}>
          <Cardss product={product} removeBtn = {true} cart={true} handlePrice = {handlePrice} setPrice= {setPrice}/>
          </Col>
        )
      })
    }  
</Row>
    
  
    <div className='align-items-center container mt-3 mb-5 d-flex gap-5 justify-content-end'>
      <h1>Total:</h1>
      <h1>${price}</h1>
    </div>
    </>
  )
}
export default AddCart
