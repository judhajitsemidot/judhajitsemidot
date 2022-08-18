/**
 * This page for only create Header 
 */

import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { routesList, scrollToTop, stickHeader } from '../../common';
import { GlobalImage as Image} from '../GlobalComponents';
import { Logo } from '../../Components/CommonSections';
 
export const HeaderWhite = () => {
  const [show,setShow] =useState(false);
    const headerClassRef = useRef();
    useEffect(() => {
        stickHeader(headerClassRef.current.classList);
    }, []);

    return (
        <>
          {/* Header Start */}
  <header id="header" className="after-login"     ref={headerClassRef} >
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container-fluid">
        <div className="nav-logo">
          <Link className="navbar-brand clickable" href={routesList?.homePage} passHref> 
            <a href="#">
            <Logo 
            src="images/logo.svg" 
            alt="logo"
            className="clickable"
            
            />

            </a>
       
           
            </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon" />
          <i className="bi bi-x-lg" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link heart" href="#"><i className="icon-heart" /></a></li>
            <li className="nav-item"><a className="nav-link message" href="#"><i className="icon-message-1" /></a></li>
            <li className="nav-item"><a className="nav-link message" href="#"><i className="icon-bell" /></a></li>
            <li className="nav-item dropdown"  onClick={()=>setShow(!show) }>
              <Link className={`nav-link dropdown-toggle ${show?"show":""}`} href="/profile" role="button" data-bs-toggle="dropdown" aria-expanded={`${show ? false:true}`}
              onClick={()=>setShow(!show)}
              >
              <>  <Image src="./images/client-1.png" /> Profile</>
              </Link>
              <ul className={`dropdown-menu ${show?"show":""}`} data-bs-popper={`${show ?"none":""}`}>
               {/*<li ><a className="dropdown-item" href="/profile">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  {/* Header End */}
  {/* Main Section Start */}
        </>
    )
}
