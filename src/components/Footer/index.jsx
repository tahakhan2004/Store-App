import React from 'react'

const Footer = () => {
  
  return (
 <>
  <footer className=" text-center text-white whole mt-5">
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* <h3 class="mb-4 foot-head">ANONYMOUS</h3>  */}
    <h1 className="ms-md-1">
      <span className="naam">Best</span>
      <span className="namee">Buy</span>
    </h1>
    <p className="blacko">
      Success is not final; Failure is not fatal; It is the courage to continue
      that counts
      <br /> The name of trust
    </p>
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a
        className="btn btn-outline-dark btn-floating m-1 icons"
        href="#!"
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </a>
      {/* Twitter */}
      <a
        className="btn btn-outline-dark btn-floating m-1 icons"
        href="#!"
        role="button"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
      {/* Google */}
      {/* <a class="btn btn-outline-light btn-floating m-1 icons" href="#!" role="button"
        ></a> */}
      {/* Instagram */}
      <a
        className="btn btn-outline-dark btn-floating m-1 icons"
        href="#!"
        role="button"
      >
        <i className="fa-brands fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        className="btn btn-outline-dark btn-floating m-1 icons"
        href="#!"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      {/* Github */}
      <a
        className="btn btn-outline-dark btn-floating m-1 icons"
        href="#"
        role="button"
      >
        <i className="fab fa-github" />
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    <span className="Copy"> © 2022 Copyright: Designed by </span>
    <span className="footer-end">BestBuy</span>
    <a className="text-white" />
  </div>


  {/* Copyright */}
</footer>

</>
  )
}

export default Footer
