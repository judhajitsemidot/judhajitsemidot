/**
 * This page for only create Header 
 */

import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import { routesList, scrollToTop, stickHeader } from '../../common';
import { GlobalImage } from '../GlobalComponents';

import {Logo} from '../../Components/CommonSections';

export const Header = () => {
    const headerClassRef = useRef();

  useEffect(() => {
    stickHeader(headerClassRef.current.classList);
  }, []);
    return (
        <>
  <header id="header" ref={headerClassRef}>
    <nav className="navbar navbar-expand-sm navbar-light" >
      <div className="container-fluid">
        <div className="nav-logo clickable" >
          <Link className="navbar-brand " href={routesList.homePage}><Logo src="images/logo.svg" alt ="logo"/></Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon" />
          <i className="bi bi-x-lg" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="icon-web" />English</a>
            </li>
            <li className="nav-item">
            <Link href={routesList.signIn}>
            <a className="nav-link" >Sign In</a>
              </Link>
            </li>

            
            <li className="nav-item">
            <Link href={routesList.signUp}>
            <a className="nav-link btn" >Join Now</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
        </>
    )
}
