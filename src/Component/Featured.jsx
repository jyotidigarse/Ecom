import React from 'react';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

const Featured = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 fw-bold text-decoration-underline">Featured Listings</h2>
          
          {/* First Row */}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src={image1} className="card-img-top" alt="Flat 1" />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flat</h5>
                  <p className="card-text">85,000 RS/Month</p>
                  <p className="card-text">Luxury flat in Hiranandani</p>
                  <p className="card-text">Bedrooms: 2, Bathrooms: 2, Area: 2500 sqft.</p>
                  <p className="card-text">Property Seller: Jyoti Digarse</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image2} className="card-img-top" alt="Flat 2" />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flat</h5>
                  <p className="card-text">85,000 RS/Month</p>
                  <p className="card-text">Luxury flat in Hiranandani</p>
                  <p className="card-text">Bedrooms: 2, Bathrooms: 2, Area: 2500 sqft.</p>
                  <p className="card-text">Property Seller: Jyoti Digarse</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image3} className="card-img-top" alt="Bunglow 1" />
                <div className="card-body">
                  <h5 className="card-title text-primary">Bunglow</h5>
                  <p className="card-text">85,000 RS/Month</p>
                  <p className="card-text">Luxury flat in Hiranandani</p>
                  <p className="card-text">Bedrooms: 2, Bathrooms: 2, Area: 2500 sqft.</p>
                  <p className="card-text">Property Seller: Jyoti Digarse</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second Row */}
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            <div className="col">
              <div className="card">
                <img src={image1} className="card-img-top" alt="Flat 1" />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flat</h5>
                  <p className="card-text">85,000 RS/Month</p>
                  <p className="card-text">Luxury flat in Hiranandani</p>
                  <p className="card-text">Bedrooms: 2, Bathrooms: 2, Area: 2500 sqft.</p>
                  <p className="card-text">Property Seller: Jyoti Digarse</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image2} className="card-img-top" alt="Flat 2" />
                <div className="card-body">
                  <h5 className="card-title text-primary">Flat</h5>
                  <p className="card-text">85,000 RS/Month</p>
                  <p className="card-text">Luxury flat in Hiranandani</p>
                  <p className="card-text">Bedrooms: 2, Bathrooms: 2, Area: 2500 sqft.</p>
                  <p className="card-text">Property Seller: Jyoti Digarse</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={image3} className="card-img-top" alt="Bunglow 1" />
                <div className="card-body">
                  <h5 className="card-title text-primary">Bunglow</h5>
                  <p className="card-text">85,000 RS/Month</p>
                  <p className="card-text">Luxury flat in Hiranandani</p>
                  <p className="card-text">Bedrooms: 2, Bathrooms: 2, Area: 2500 sqft.</p>
                  <p className="card-text">Property Seller: Jyoti Digarse</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Load More Button */}
          <div className="row mt-4">
            <div className="col text-center">
              <button className="btn btn-danger btn-lg">Load More</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Featured;
