import React from 'react'
import {GlobalImage as Image} from '../GlobalComponents';
export const SpecialFeatures = () => {
  return (
 <section className="special_features">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="feature_box">
            <div className="border_div"><span className="border1" /><span className="border2" /> <span className="border3" /><span className="border4" /></div>
            <div className="heading_block">
              <h2>Our Special <br />Features We Build <br />For You</h2>
            </div>
            <ul>
              <li>
                <div className="media_div"><Image src="images/dot.svg" alt={`dot.svg`}/></div><span>No minimum account
                  balance
                  required to bid for projects</span>
              </li>
              <li>
                <div className="media_div"><Image src="images/dot.svg" alt={`dot.svg`}/></div><span>Get a chance to work
                  with
                  diverse clients from 200+ countries.</span>
              </li>
              <li>
                <div className="media_div"><Image src="images/dot.svg" alt={`dot.svg`}/></div><span>Add credibility by
                  getting
                  reviewed through offline clients</span>
              </li>
              <li>
                <div className="media_div"><Image src="images/dot.svg" alt={`dot.svg`}/></div><span>Access to online
                  project
                  tracker for better &amp; enhanced visibility</span>
              </li>
              <li>
                <div className="media_div"><Image src="images/dot.svg" alt={`dot.svg`}/></div><span>Get charged only
                  after
                  payment through Success Fee Model</span>
              </li>
              <li>
                <div className="media_div"><Image src="images/dot.svg" alt={`dot.svg`}/></div><span>Keep your profile
                  anonymous
                  as a freelancer</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 justify-content-lg-end justify-content-center d-flex">
          <div className="media_div mt-3 mt-lg-0">
            <Image src="images/feature_image.png" alt="feature images two" />
          </div>
        </div>
      </div>
    </div>
  </section> 
  )
}
