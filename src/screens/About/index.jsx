import React from 'react'
import Navbarr from '../../components/Navbar'
const About = () => {
  return (
    <>
      <Navbarr/>

  <div id="home" className="home about py-5 home mt-5">
  <div className="container-lg">
    <div className="row  align-items-center">
      <div className="col-md-6 py-5 mt-md-0 ">
        <div className="home-img text-center ">
          <video autoPlay loop muted style={{
            width: "70%",
            // border: "1px solid #06beb6",
            borderRadius: "5px"
          }}>
            <source src='./about.mp4' type="video/mp4"/>
          </video>
          {/* <img
            src="./home.png"
            className="rounded-circle mw-100"
            width="100%"
            alt=""
          /> */}
        </div>
      </div>
      <div className="col-md-6  mt-md-0 order-first text-center text-md-start">
        <div className="home-text">
          <h1 className="text-black text naam text-center">
           Who <span className='naam'>We</span><span className='namee ms-3'>Are</span><span className="text gld" />
          </h1>
          <p className="pcolo fs-4 text-center ">
          Our story began in 1955. My father opened a kiryana store which was tucked away in an obscure lane in Bahadurabad. In 1978, I made a trip to Singapore and I came across the Al-Mustafa Store, which was one of the largest retail chains there; I was so impressed with their business model that I decided to replicate it for Imtiaz. On my return, we began adding more product categories to our existing assortment and thanks to the favourable customer response, after a few years, we bought the adjoining shops to expand the set-up.
"When Imtiaz first started, shopping for groceries was about buying maheenay ka rashan – rice, flour, sugar, salt, cooking oil and spices. Today, this kind of shopping is not considered a chore anymore; rather, it is seen as a fun, family outing."

          </p>
           {/* <h2 class="text-white">Unonymous</h2> */}
          {/* <p class="text-white ">I'm fresh junior develper looking for internship having an skills of HTML CSS javaScript react.js</p> */}
         
          {/* <a href="#card" className="trans mt-5">
            Shop Now
          </a> */}
  
        </div>

 



      </div>


    </div>

          {/* 2nd Section  */}
          
      <div className="row  align-items-center">
      <div className="col-md-6 py-5 mt-md-0 ">
        <div className="home-img text-center order-first">
          <video autoPlay loop muted style={{
            width: "100%",
            // border: "1px solid #06beb6",
            borderRadius: "5px"
          }}>
            <source src='./about2.mp4' type="video/mp4"/>
          </video>
          {/* <img
            src="./home.png"
            className="rounded-circle mw-100"
            width="100%"
            alt=""
          /> */}
        </div>
      </div>
      <div className="col-md-6  mt-md-0  text-center text-md-start">
        <div className="home-text">
          <h1 className="text-black text naam">
           See Our <span className='naam'>Fabric</span><span className='namee ms-3'>in acton</span><span className="text gld" />
          </h1>
          <p className="text-black fs-4">
              To Understand the care we put into each piece, you <br/> have to see it in action. 
          </p>

          <p className=" fs-5 pcolo">
              We have a painstaking attention in detail, quantity and construction becuase we see our pieces as a
              testament to the significance of the time. It's our belief that Otium is the most important time of the day 
          </p>
           {/* <h2 class="text-white">Unonymous</h2> */}
          {/* <p class="text-white ">I'm fresh junior develper looking for internship having an skills of HTML CSS javaScript react.js</p> */}
         
          {/* <a href="#card" className="trans mt-5">
            Shop Now
          </a> */}
  
        </div>

 



      </div>


    </div>




  </div>
</div>  
    </>
  )
}

export default About
