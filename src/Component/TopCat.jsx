import React from 'react';

const TopCat = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">
        <span className="text-decoration-underline">Browse from top categories</span>
      </h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title"><span className="badge bg-warning text-dark">Holiday Returns</span></h5>
              <p className="card-text">Explore holiday return options.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title"><span className="badge bg-success">Residential Spaces</span></h5>
              <p className="card-text">Find your dream home.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title"><span className="badge bg-info">Commercial Properties</span></h5>
              <p className="card-text">Discover commercial spaces.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title"><span className="badge bg-secondary">More</span></h5>
              <p className="card-text">Explore more categories.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCat;
