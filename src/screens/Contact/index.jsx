import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import Footer from '../../components/Footer'
import Navbarr from '../../components/Navbar'
import { db } from '../../Firebase'

const Contact = () => {
  const [inpvalue, setinpvalue] = useState("")
  const [emailo, setemailo] = useState("")
  const [num, setnum] = useState("")
  const [msg, setmsg] = useState("")


  const dbCollection = collection(db, "ContactCollection");

  async function addContactData(e){
    e.preventDefault()
    const obj = {
      uaername : inpvalue,
      email: emailo,
      number : num,
      message : msg,
    }
    await addDoc(dbCollection, obj)
    setinpvalue("")
    setemailo("")
    setnum("")
    setmsg("")
  }

  return (
      <>
   <Navbarr />
    <div id="home" className="home py-5 home mt-5">
  <div className="container-lg">
    <div className="row  align-items-center">
      <div className="col-md-6 py-5 mt-md-0">
        <div className="home-img text-center">
          <img
            src="./backcon.png"
            className="rounded-circle mw-100"
            width="100%"
            alt=""
          />
        </div>
      </div>
      <div className="col-md-6  mt-md-0 order-md-first ">
        <div className="home-text">
          <h1 className="text-white text">
           Contact Us,
          </h1>
          <p className="text-white fs-4">
             to get in touch with us and feel free to ask any query
             <br/>
             We are always here to serve you
          </p>
           {/* <h2 class="text-white">Unonymous</h2> */}
          {/* <p class="text-white ">I'm fresh junior develper looking for internship having an skills of HTML CSS javaScript react.js</p> */}
         
          <a href="#frm-data" className="trans mt-5">
            Contact Now
          </a>
  
        </div>
      </div>
    </div>
  </div>
</div> 
  <section id="contact-det" className="section1">
    <div className="details">
      <span>GET IN TOUCH</span>
      <h2>Visit our branch or contact us Asap!</h2>
      <h3>Our Branch</h3>
      <div>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <p>Boltan Market near Achi qaber,Metha dar,Karachi</p>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="currentColor"
            className="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          <p>Monnday to Saturday | 10:00Am to 9:00Pm</p>
        </li>
      </div>
    </div>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3059277054253!2d66.99870261500267!3d24.853398884057313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1375a69aef357c3b!2zMjTCsDUxJzEyLjIiTiA2N8KwMDAnMDMuMiJF!5e0!3m2!1sen!2s!4v1654070038958!5m2!1sen!2s"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
  <section id="frm-data">

    <form action="" onSubmit={addContactData} className="contct" id="formdata">
      <h2>CONTACT ASAP!</h2>
      <input
        type="text"
        placeholder="Enter your name"
        id="naam"
        required="required"
        value={inpvalue}
        onChange={(e)=>{
          setinpvalue(e.target.value)
        }}
      />
      <input
        type="email"
        placeholder="Enter your Email"
        required="required"
        id="emils"
        onblur="validateEmail()"
        value={emailo}
        onChange={(e)=>{
          setemailo(e.target.value)
        }}
      />
      <input
        type="number"
        placeholder="Enter your number"
        id="mynum"
        required="required"
        onblur="num_restriction()"
        value={num}
        onChange={(e)=>{
          setnum(e.target.value)
        }}
      />
      <textarea
        name=""
        id="tex"
        cols={30}
        rows={10}
        placeholder="Your comments"
        defaultValue={""}
        value={msg}
        onChange={(e)=>{
         setmsg(e.target.value)
        }}
      />
      <button
        type="submit"
        className="btn btn-info fs-5  butn"
        onclick="return add()"
      >
        Submit
      </button>
    </form>
  </section>

  <Footer />
</>


  )
}

export default Contact
