import React from 'react';
import important1 from '../images/important1.jpeg';
import important2 from '../images/important2.jpeg';
import important3 from '../images/important3.jpeg';
import important4 from '../images/important4.jpeg';
import important5 from '../images/important5.jpeg';

const Important_Article = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body bg-light">
          <h2 className="display-5 text-center fw-bold mb-4 text-decoration-underline">Important Articles</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {/* First Article */}
            <div className="col">
              <div className="card mb-3">
                <img src={important1} className="card-img-top" alt="Important Article 1" style={{ objectFit: 'cover', height: '400px' }} />
                <div className="card-body bg-dark text-white">
                  <p className="h5 mb-0">Top tips for finding the perfect Rentals</p>
                </div>
              </div>
            </div>
            
            {/* Remaining Articles */}
            <div className="col">
              <div className="row row-cols-1 g-3">
                <div className="col">
                  <div className="card">
                    <img src={important2} className="card-img-top" alt="Important Article 2" style={{ objectFit: 'cover', height: '200px' }} />
                    <div className="card-body bg-dark text-white">
                      <p className="mb-0">Car Rental hacks for a smooth journey</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={important3} className="card-img-top" alt="Important Article 3" style={{ objectFit: 'cover', height: '200px' }} />
                    <div className="card-body bg-dark text-white">
                      <p className="mb-0">Managing Your Rental Items: A Comprehensive Guide</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={important4} className="card-img-top" alt="Important Article 4" style={{ objectFit: 'cover', height: '168px' }} />
                    <div className="card-body bg-dark text-white">
                      <p className="mb-0">Navigate The Rental Market: Insights for New Renters</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={important5} className="card-img-top" alt="Important Article 5" style={{ objectFit: 'cover', height: '168px' }} />
                    <div className="card-body bg-dark text-white">
                      <p className="mb-0">Maximize Returns: Strategies for Rental Property Owners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Important_Article;
