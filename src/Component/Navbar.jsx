import React from "react";
import pImage from '../images/idak.jpeg';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={pImage} alt="Logo" style={{ height: '40px' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-bold text-white me-5" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-white me-5" href="#">Rentals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-white me-5" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-white me-5" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-white me-5" href="#">Contact</a>
            </li>
            <li className="nav-item me-2">
              <a href="#" className="nav-link btn btn-outline-primary fw-bold text-white me-2">Sign In</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link btn btn-primary fw-bold text-white">Post Listing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
