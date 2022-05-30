import React,{useState} from 'react';

import Valuation from '../../Element/Valuation';
import bgimg from './../../images/1gosmartvalue/home/Home.png';

const Valuations = (props) => {

  return(
    <div className="full-section">
      <div className="dlab-bnr-inr overlay-primary-dark contact-page" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
        <div className="container">
          <h1 class="text-white text-center">Reports</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="dlab-tabs choseus-tabs">
                <Valuation />
              </div>	
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default Valuations;