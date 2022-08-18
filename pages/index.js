import dynamic from 'next/dynamic';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { apiUrls, getFormData, sendPostRequest } from '../src/common';
import { Banner, OurServices, SpecialFeatures, BlogSection, RegisterSection, ContentSection } from "../src/Components/SubSection";
import { wrapper } from '../store';

function Home() {
  
  const { Testimonial } = {
    Testimonial: dynamic(() =>
      import("../src/Components/SubSection").then(
        (module) => module.Testimonial
      )
    ),
  };

  return (
    <>
      <Head>
        <title>Leewaey || welcome </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <OurServices />
      <SpecialFeatures />
      <Testimonial />
      <BlogSection />
      <RegisterSection />
      <ContentSection />
    </>
  )
}
 
export const getServerSideProps = wrapper.getServerSideProps((store) => () => {

  console.log(store, "store")
})

export default Home;