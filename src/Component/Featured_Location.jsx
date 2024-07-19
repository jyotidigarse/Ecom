import React from 'react';
import Featured1 from '../images/Featured1.jpeg';
import Featured2 from '../images/Featured2.jpeg';
import Featured3 from '../images/Featured3.jpeg';
import Featured4 from '../images/Featured4.jpeg';
import Featured5 from '../images/Featured5.jpeg';
import Featured6 from '../images/Featured6.jpeg';

const Featured_Location = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body bg-light">
          <h2 className="card-title text-center mb-4 fw-bold text-decoration-underline">Featured Location</h2>
          <div className="row row-cols-1 row-cols-md-3 g-3">
            <div className="col">
              <div className="position-relative">
                <img src={Featured1} className="img-fluid" style={{ maxHeight: '300px' }} alt="Kandy" />
                <div className="overlay position-absolute bottom-0 start-0 w-100 p-2 bg-dark text-light">
                  <h5>Kandy</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <img src={Featured2} className="img-fluid" style={{ maxHeight: '300px' }} alt="Mumbai" />
                <div className="overlay position-absolute bottom-0 start-0 w-100 p-2 bg-dark text-light">
                  <h5>Mumbai</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <img src={Featured3} className="img-fluid" style={{ maxHeight: '300px' }} alt="Pune" />
                <div className="overlay position-absolute bottom-0 start-0 w-100 p-2 bg-dark text-light">
                  <h5>Pune</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <img src={Featured4} className="img-fluid" style={{ maxHeight: '300px' }} alt="Goa" />
                <div className="overlay position-absolute bottom-0 start-0 w-100 p-2 bg-dark text-light">
                  <h5>Goa</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <img src={Featured5} className="img-fluid" style={{ maxHeight: '300px' }} alt="Chennai" />
                <div className="overlay position-absolute bottom-0 start-0 w-100 p-2 bg-dark text-light">
                  <h5>Chennai</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="position-relative">
                <img src={Featured6} className="img-fluid" style={{ maxHeight: '300px' }} alt="Banglore" />
                <div className="overlay position-absolute bottom-0 start-0 w-100 p-2 bg-dark text-light">
                  <h5>Banglore</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured_Location;
