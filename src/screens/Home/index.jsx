import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cardss from '../../components/cards/Cards';
import Footer from '../../components/Footer';
import Navbarr from '../../components/Navbar';
import { ProductAction } from '../../Store/Action/product';

const StoreApp = () => {
  // const [data, setdata] = useState([])
  const { data , loadingData } = useSelector((state) => state.ProductReducer)  
  // console.log(selector);
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(ProductAction())
  }, [])



  return (
    // const dispatch = useDispatchch();
  
    // function addcounter(){
    //   dispatch(Addcounteraction())
    // }
  
    // function minuscounter(){
    //   dispatch(Minuscounteraction())
    // }
  
   
    <>
   
    <Navbarr />
    { loadingData ? (
    <div className="spinner-border loader" role="status">
      <span className="sr-only"></span>
    </div>
    
  ) : (
   <div>   
    <div id="home" className="home py-5 home mt-5">
  <div className="container-lg">
    <div className="row  align-items-center">
      <div className="col-md-6 py-5 mt-md-0 ">
        <div className="home-img text-center ">
          <img
            src="./home.png"
            className="rounded-circle mw-100"
            width="100%"
            alt=""
          />
        </div>
      </div>
      <div className="col-md-6  mt-md-0 order-first text-center text-md-start">
        <div className="home-text">
          <h1 className="text-white text">
           Welcome to <span className='naam'>Best</span><span className='namee'>Buy</span><span className="text gld" />
          </h1>
          <p className="text-white fs-4">
              the quality you need is only avalailble at our store so stay home and shop online.
          </p>
           {/* <h2 class="text-white">Unonymous</h2> */}
          {/* <p class="text-white ">I'm fresh junior develper looking for internship having an skills of HTML CSS javaScript react.js</p> */}
         
          <a href="#card" className="trans mt-5">
            Shop Now
          </a>
  
        </div>
      </div>
    </div>
  </div>
</div> 

  <div>
    <h1 className='title mt-md-4 '> Featured </h1>
    <Container className='mt-4'>
   <Row className=''>
    {
      data.map((product) =>{
        return(
          <Col lg="6" md="6" xl="4" xxl="4" key={product.id}>
          <Cardss product={product}/>
          </Col>  
        )
      })
    }  
    </Row> 
    </Container>
  </div>
<Footer />
  </div>
  )}
   

    {/* <button className='btn btn-primary' onClick={addcounter}>+</button>
    <button className='btn btn-danger' onClick={minuscounter}>-</button> */}
    </>
    
  )
}

export default StoreApp
