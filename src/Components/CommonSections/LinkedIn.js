import React, { useEffect, useState } from 'react'
import { apiUrls, sendGetRequest } from '../../common';
import { GlobalImage as Image } from '../GlobalComponents';
export const LinkedIn = () => {
    const [linkedinUrl,setLinkedinUrl]= useState('');
    useEffect(()=>{
        sendGetRequest(apiUrls.linkedin).then(response=>{
          setLinkedinUrl(response.data?.url)
        })
      },[])
      
  return (
   <>
   <a href={linkedinUrl} target={`_blank`} rel={"noreferrer"} className="linkdin_login">
          <Image src="images/linkedin-with-circle.svg" alt ={`likedin-image`}/>
          <span>Continue with LinkedIn</span>
        </a>
   </>
  )
}
