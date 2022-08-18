import React from 'react'
import { GlobalImage as Image} from '../GlobalComponents'
 
 
import { useEffect } from "react";

export const Banner = () => {
 
  return (
 <section className="banner pb-0">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="heading">Find the perfect <span>fluid talent</span> services for your business</h1>
   
          <div className="row">
            <div className="col-lg-12">
              <a className="links" href="#">IT</a>
              <a className="links" href="#">Wellbeing &amp; Lifestyle</a>
              <a className="links" href="#">Wellbeing &amp; Lifestyle</a>
              <a className="links" href="#">Marketing &amp; Sales</a>
            </div>
            <div className="col-lg-12">
              <a className="links" href="#">Legal</a>
              <a className="links" href="#">HR &amp; Training</a>
              <a className="links" href="#">Finance</a>
              <a className="links" href="#">Education</a>
            </div>
            <div className="col-lg-12">
              <a className="links" href="#">Architecture</a>
              <a className="links" href="#">Event Planners</a>
            </div>
          </div>
          <div className="arrow_div"><a href="#"><Image src="images/get-started.svg" /></a></div>
        </div>
        <div className="col-lg-5 d-none d-lg-block">
          <div className="media_div">
      
            <Image src="images/banner-image.png" alt="banner image" />
          </div>
        </div>
      </div>
    </div>
  </section> 
  )
}
