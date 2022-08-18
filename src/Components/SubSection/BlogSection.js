import React from 'react'
import { GlobalImage  as Image} from '../GlobalComponents'

export const BlogSection = () => {
  return (
 <section className="blog_setion">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="heading_block">
            <h2>From the blog</h2>
            <a className="btn bordered">More posts</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog_items">
            <div className="media_div">
              <Image src="images/blog-images-2.png" />
            </div>
            <div className="blog_content">
              <span>JOB COLLECTION</span>
              <h3>20 Women-Led Startups Expanding Their Remote Teams in 2022</h3>
              <p>It is no surprise by now that women make great leaders. In the US alone, women-led
                businesses generated more than 1.8 trillion dollars...</p>
              <a href="#" className="btn bordered">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog_items">
            <div className="media_div">
              <Image src="images/blog-images.png" />
            </div>
            <div className="blog_content">
              <span>BLOG POST</span>
              <h3>30 Questions to Ask Before Joining a Startup</h3>
              <p>You&apos;re trying to evaluate the company while still impressing your interviewers, and that
                balance can be tricky...</p>
              <a href="#" className="btn bordered">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog_items">
            <div className="media_div">
              <Image src="images/blog-images-1.png" />
            </div>
            <div className="blog_content">
              <span>BLOG POST</span>
              <h3>Why Naval Ravikant Thinks Remote Work Is The Future</h3>
              <p>It feels like the rise of remote works has been a top conversation in tech for years, but
                despite the enthusiasm and attention...</p>
              <a href="#" className="btn bordered">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  
  )
}
