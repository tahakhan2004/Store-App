import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShopping, AiOutlineLogout } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import Image from 'react-bootstrap/Image'
// import Card from 'react-bootstrap/Card';
const Navbarr = () => {
  // const [counter, setcounter] = useState(0)
  const navigate = useNavigate()
  // const selector = useSelector((state)=> state.addCounterreducer)
  // console.log(selector);

  const {cartitem} = useSelector((state) => state.AddToCartReducer)
  // console.log(cartitem);

  function logoutHandler(){
    localStorage.removeItem("uid")
    navigate("/")
  }


  return (
 <>
  {[ "sm" ].map((expand= false) => (
    <Navbar key={expand} bg="" expand={expand} className="navo">
      
      <Container fluid>  
      <div className='d-flex justify-content-between align-items-center w-100'>
       <div className=' first'> 
      <img
      src='./logo.png'
      className='img'
      alt='...' width={60}
    />
    <h3 className='ms-md-1'><span className='naam'>Best</span><span className='namee'>Buy<sup>&#8482;</sup></span></h3>
    </div>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle className=' ms-auto' aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <h3 className=''><span className='naam'>Best</span>Buy</h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <div className=''>
          <Offcanvas.Body>
            
            <Nav className="justify-content-center  flex-grow-1 d-flex navs">
              <NavLink to="/storeapp" className='pe-lg-5 me-lg-5 pe-md-3 me-md-3 fs-4 navs'>Home</NavLink>
              <NavLink to="/about" className='pe-lg-5 me-lg-5 pe-md-3 me-md-3 fs-4 navs'>About</NavLink>
              <NavLink to="" className='pe-lg-5 me-lg-5 pe-md-3 me-md-3 fs-4 navs'>Contact Us</NavLink>
              <NavLink to=""  className='pe-lg-5 me-lg-5 pe-md-3 me-md-3 fs-4 navs'>Services</NavLink>
              </Nav>
              
              {/* <NavLink to="/cart" className='pe-md-5 me-md-5 fs-4 navs'>Services</NavLink> */}
            
         
        
            
            
             {/* <i className="bi bi-bag-plus"></i> */}
          </Offcanvas.Body>
          </div>
          </Navbar.Offcanvas>

          <div className=''>
            <span data-hover = "logout" className='hovertext'>
            <AiOutlineLogout
            className='me-2 icon ' 
            size={45}
            onClick={logoutHandler} />
            </span>
            {/* <h1 className='me-4'>Counter: {selector.globalCounter}</h1> */}

            <NavLink to="/cart" >
            <span className="cartooo"><AiOutlineShopping 
            className='' 
            size={45}
             /><sup className='fs-4 super text-black'>{cartitem.length}</sup></span></NavLink>
             </div>
        

        </div>  
      </Container>

    </Navbar>
  ))}
  </>
  )
}

export default Navbarr



