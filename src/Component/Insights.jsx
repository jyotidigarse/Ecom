import React from 'react';

const Insights = () => {
  return (
    <div>
      <div className="card mt-5">
        <div className="card-body bg-light">
          <h2 className="card-title text-center fw-bold mb-4 text-decoration-underline">Insights and Performance Metrics</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-auto mb-3 mb-md-0">
              <div className="bg-dark text-white rounded p-3">
                <p className="h5 mb-0">500+</p>
                <p className="mb-0">Total Listings in the System</p>
              </div>
            </div>
            <div className="col-12 col-md-auto mb-3 mb-md-0">
              <div className="bg-dark text-white rounded p-3">
                <p className="h5 mb-0">300+</p>
                <p className="mb-0">Active Users</p>
              </div>
            </div>
            <div className="col-12 col-md-auto">
              <div className="bg-dark text-white rounded p-3">
                <p className="h5 mb-0">150+</p>
                <p className="mb-0">Completed Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
