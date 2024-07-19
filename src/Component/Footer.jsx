import React from "react";

const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
            {/* Navigation */}
            <div className="col-6 col-md-4 mb-4">
              <h5>Navigation</h5>
              <ul className="list-unstyled">
                <li><a href="#"><i className="bi bi-house-door-fill"></i> Home</a></li>
                <li><a href="#"><i className="bi bi-info-circle-fill"></i> About Us</a></li>
                <li><a href="#"><i className="bi bi-journal-text-fill"></i> Blog</a></li>
                <li><a href="#"><i className="bi bi-file-earmark-text-fill"></i> Terms of Use</a></li>
                <li><a href="#"><i className="bi bi-shield-lock-fill"></i> Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* Featured Locations */}
            <div className="col-6 col-md-4 mb-4">
              <h5>Featured Locations</h5>
              <ul className="list-unstyled">
                <li>Kandy</li>
                <li>Badulla</li>
                <li>Colombo</li>
                <li>Kaluthara</li>
              </ul>
            </div>
      
            {/* Help & Contact */}
            <div className="col-12 col-md-4 mb-4">
              <h5>Help & Contact</h5>
              <ul className="list-unstyled">
                <li><a href="#"><i className="bi bi-telephone-fill"></i> Contact Us</a></li>
                <li><a href="#"><i className="bi bi-question-circle-fill"></i> Help</a></li>
              </ul>
              <button className="btn btn-danger d-block mx-auto">Subscribe</button>
            </div>
          </div>
          <hr className="my-4"/>
          
          {/* Social Media Icons */}
          <div className="text-center">
            <a href="#"><i className="bi bi-instagram mx-2"></i></a>
            <a href="#"><i className="bi bi-twitter mx-2"></i></a>
            <a href="#"><i className="bi bi-youtube mx-2"></i></a>
            <a href="#"><i className="bi bi-facebook mx-2"></i></a>
            <a href="#"><i className="bi bi-linkedin mx-2"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
