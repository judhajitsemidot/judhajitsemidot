import React from 'react'
import { GlobalOwlCarousel  as OwlCarousel } from '../GlobalComponents'

export const Testimonial = () => {

  const courierCompanies = [
    { src: "images/client.png", alt: "DPD", title: "DPD" ,designation:"CEO Scilab",description:"This software is user-friendly. One can use this for both job posting and job hunting purposes. It not only covers technology but also a vast variety of areas, where one can easily apply and bid for freelancing." },
    { src: "images/client-1.png", alt: "USPS", title: "USPS",designation:"CEO Scilab" ,description:"This software is user-friendly. One can use this for both job posting and job hunting purposes. It not only covers technology but also a vast variety of areas, where one can easily apply and bid for freelancing."  },
    { src: "images/client-1.png", alt: "TNT", title: "TNT" ,designation:"CEO Scilab",description:"This software is user-friendly. One can use this for both job posting and job hunting purposes. It not only covers technology but also a vast variety of areas, where one can easily apply and bid for freelancing." },
    { src: "images/client-1.png", alt: "Collect", title: "Collect" ,designation:"CEO Scilab" ,description:"This software is user-friendly. One can use this for both job posting and job hunting purposes. It not only covers technology but also a vast variety of areas, where one can easily apply and bid for freelancing." },
    {
      src: "images/client-1.png",
      alt: "Parcel Force",
      title: "Parcel Force",
      designation:"CEO Scilab",
      description:"This software is user-friendly. One can use this for both job posting and job hunting purposes. It not only covers technology but also a vast variety of areas, where one can easily apply and bid for freelancing." 
    },
    { src: "images/get-started.svg", alt: "DHL", title: "DHL" ,designation:"CEO Scilab",description:"This software is user-friendly. One can use this for both job posting and job hunting purposes. It not only covers technology but also a vast variety of areas, where one can easily apply and bid for freelancing." },
   ];

  return (
  <section className="testimonial">
    <div className="container">
      <div className="heading_block text-center">
        <h2>What Our Client Says</h2>
      </div>
      <OwlCarousel
        carouselClassName={"owl-carousel"}
        itemsPerSlide={2}
        isAutoPlay={false}
        isDotsShown={true}
        testimonialCards={courierCompanies}
        isNavigation={true}
      />
    </div>
  </section>  
  )
}
