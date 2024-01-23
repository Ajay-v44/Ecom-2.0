import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <title>Document</title>
    <main className="main-section"></main>
    <footer className="footer-sec">
      <div className="main">
        <div className="logo row">
          <div className="footer-header">
            <img
              src="https://i.postimg.cc/tgk8X2w7/manik-low-resolution-logo-white-on-transparent-background.png"
              className="manik"
              alt=""
            />
          </div>
          <div className="logo-des">
            <p>
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
            <a href="#" className="btn-know">
              Know More
            </a>
          </div>
        </div>
        <div className="office row">
          <div className="footer-header">
            <h3>Office</h3>
          </div>
          <div className="office-des">
            <p>
              here are <br /> many variations of passages
              <br />
              of Lorem Ipsum
              <br />
              available
            </p>
            <a href="#">thakkaly@gmail.com</a>
            <p className="num">+91-9999999999</p>
          </div>
        </div>
        <div className="link row">
          <div className="footer-header">
            <h3>Links</h3>
          </div>
          <div className="link-des">
            <a href="#" className="footer-links">
              Home
            </a>
            <a href="#" className="footer-links">
              About
            </a>
            <a href="#" className="footer-links">
              Services
            </a>
            <a href="#" className="footer-links">
              Galary
            </a>
            <a href="#" className="footer-links">
              Contact
            </a>
          </div>
        </div>
        <div className="newsletter row">
          <div className="footer-header">
            <h3>Newsletter</h3>
          </div>
          <div className="newsletter-des">
            <div className="subcribe">
              <i className="sub-icon ri-mail-check-fill" />
              <input type="mail" placeholder="Enter Email ID" required="" />
              <i className="sub-icon ri-arrow-right-line" />
            </div>
            <div className="icons">
              <a href="#">
                <i className="social-icon ri-facebook-fill" />
              </a>
              <a href="#">
                <i className="social-icon ri-instagram-line" />
              </a>
              <a href="#">
                <i className="social-icon ri-linkedin-fill" />
              </a>
              <a href="#">
                <i className="social-icon ri-github-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>© Copyright 2024 Thakkaly Company.</p>
      </div>
    </footer>
  </>
  
  )
}

export default Footer