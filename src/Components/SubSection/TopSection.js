import React from 'react'
/**
 * data_done for active full 
 * half_active for half full
 * required for star
 * @returns 
 */
export const  TopSection = ({step}) => {
   
  return (
    <section className="title_section">
    <div className="container">
      <div className="d-block d-lg-flex d-md-flex d-sm-flex heading_block align-items-center create_profile">
        <h1>Create your profile</h1>
        <a href="#" className="flex-grow ms-auto links">View Public Profile</a>
      </div>
      <div className="process">
        <ul className="header_profile d-flex justify-content-between"> 
          <li className={parseInt(step) === 1 ? "nav-item half_active required":"nav-item"} ><a className href="#"><span> Profile Details</span></a></li>
          <li className={parseInt(step) === 2 ? "nav-item data_done":"nav-item"} ><a className href="#"><span> Work Experience</span></a></li>
          <li className={parseInt(step) === 3 ? "nav-item data_done ":"nav-item"} ><a className href="#"><span> Education</span></a></li>
          <li className={parseInt(step) === 4 ? "nav-item data_done ":"nav-item"} ><a className href="#"><span> Certificates / Liceness</span></a></li>
          <li className={parseInt(step) === 5 ? "nav-item data_done ":"nav-item"} ><a className href="#"><span> Projects</span></a></li>
        </ul>
      </div>
      <div className="note">
        <i className="icon-user-1" />
        <p>Your profile can’t be found by recruiters because it’s missing key information
        </p>
      </div>
      <div className="note-white">In this section, provide your basic information. Please enter your name as per bank account.</div>
    </div>
  </section>
  )
}
