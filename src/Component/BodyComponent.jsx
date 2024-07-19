import React from 'react';
import BackgroundImage from './BackgroundImage';
import TopCat from './TopCat';
import Featured from './Featured';
import Insights from './Insights';
import Featured_Location from './Featured_Location';
import Important_Article from './Important_Article';

const BodyComponent = () => {
  return (
    <div className="bodycom">
      <BackgroundImage />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <TopCat />
          </div>
          <div className="col-12">
            <Featured />
          </div>
          <div className="col-12">
            <Insights />
          </div>
          <div className="col-12">
            <Featured_Location />
          </div>
          <div className="col-12">
            <Important_Article />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyComponent;
