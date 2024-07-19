import React from 'react';
import carImage from '../images/figma main.jpeg';

const BackgroundImage = () => {
  return (
    <div className="container-fluid bg-image d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${carImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center text-white">
          <div className="overlay-content" style={{maxWidth: '600px'}}>
            <h1 className="mb-4">Discover Your Perfect <span className="text-danger">Rental</span></h1>
            <p className="text-black">Rent cars, houses, and items in just a few clicks</p>
            
            <div className="input-group mt-4">
              <input type="text" className="form-control" placeholder="Search cars, houses, and more in your area..." />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundImage;

