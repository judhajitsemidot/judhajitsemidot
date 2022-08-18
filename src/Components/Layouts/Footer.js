import React from 'react'
import { Logo } from '../CommonSections'
export const Footer = () => {
  return (
<>
<footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="media_div">
            <Logo src="images/logo.svg" alt="logo"/>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc a in morbi. Ac, aenean
            iaculis </p>
          <ul className="social">
            <li><a href="#"><i className="icon-google" /></a></li>
            <li><a href="#"><i className="icon-linkdin" /></a></li>
            <li><a href="#"><i className="icon-facebook" /></a></li>
          </ul>
          <ul className="links_list">
            <li><a href="#"><i className="icon-call" /> +91-7248-485764</a></li>
            <li><a href="#"><i className="icon-message" /> info@eatstreetindia.com</a></li>
            <li><a href="#"><i className="icon-location" /> Pantnagar, Uttarakhand</a></li>
          </ul>
        </div>
        <div className="col-lg-8">
          <div className="row mt-0 mt-md-5 mt-lg-0">
            <div className="col-lg-4 col-md-4">
              <h3>Category</h3>
              <ul className="links_list">
                <li><a href="#">IT</a></li>
                <li><a href="#">Wellbeing &amp; Lifestyle</a></li>
                <li><a href="#">Writing &amp; Translation</a></li>
                <li><a href="#">Marketing &amp; Sales</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">HR &amp; Training</a></li>
                <li><a href="#">Finance</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <h3>SUBCATEGORIES</h3>
              <ul className="links_list">
                <li><a href="#">Event Planners</a></li>
                <li><a href="#">Architecture</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <h3>USEful links</h3>
              <ul className="links_list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Support Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright text-center">
      <p>© Copyright 2020 wine&amp;food All Rights Reserved (Designhunterrbd) </p>
    </div>
  </footer>
</>
  )
}