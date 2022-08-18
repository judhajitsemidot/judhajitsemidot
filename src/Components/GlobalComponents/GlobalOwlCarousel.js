import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import { GlobalImage as Image } from "../GlobalComponents";
import { getRating, ratingSplitter } from "../../common";

export const GlobalOwlCarousel = React.forwardRef(
  (
    {
      testimonialCards,
      carouselClassName,
      isDotsShown,
      itemsPerSlide,
      isAutoPlay,
      isNavigation,
      isLoop,
      margin,
      responsive,
      ...rest
    },
    ref
  ) => {
    return (
      <OwlCarousel
        className={"owl-theme " + carouselClassName}
        autoplay={isAutoPlay || false}
        dots={isDotsShown || false}
        items={itemsPerSlide || "2"}
        nav={isNavigation || false}
        loop={isLoop || false}
        margin={margin}
        navText={["<i class='icon-arrow-cricle'></i>", "<i class='icon-arrow-cricle'></i>"]}
        responsive={responsive}
      >
        {testimonialCards?.map((testimonial, index) => (
          <div className="item" key={index}>
					<div className="feature_box">
						<div className="media_div">
							<Image src={testimonial.src}  alt={testimonial.alt}/>
						</div>
						<div className="feature_content">
							<div className="media_div">
                <Image src="images/quotes.svg"  alt={testimonial.title} /></div>
							<p><i>{testimonial.description}</i></p>
							<h3>{testimonial.title}</h3>
							<span>{testimonial?.designation}</span>
						</div>
					</div>
				</div>
        ))}
      </OwlCarousel>
    );
  }
);
GlobalOwlCarousel.displayName = "GlobalOwlCarousel";
