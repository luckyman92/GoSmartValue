import React from 'react';

import Valuation from '../../Element/Valuation';
import bgimg from '../../images/1gosmartvalue/bg11.jpg';

const Valuations = (props) => {

  return(
    <div className="full-section">
      <div className="dlab-bnr-inr contact-page" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
        <div className="container">
          <h1 class="text-white text-center text-primary" >Reports</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="dlab-tabs choseus-tabs">
                <div className="page-content">
                  <div className="section-full content-inner">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                          <Valuation />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                          <Valuation />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                          <Valuation />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>	
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default Valuations;