import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

import SubScription from '../../Element/SubScription';

import bgimg from '../../images/1gosmartvalue/bg11.jpg';

const SubScriptions = (props) => {
	const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
      if (activeTab !== tab) setActiveTab(tab);
  }
	  
	return(
    <div className="full-section">
      <div className="dlab-bnr-inr contact-page" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
        <div className="container">
          <h1 className="text-white text-center text-primary" style={{paddingBottom:'30px'}}>SubScriptions</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="dlab-tabs product-description tabs-site-button" style={{border:'1px solid #c1c1c1'}}>
                <ul className="nav nav-tabs text-center">
                  <li>
                    <Link to={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }} style={{width:'150px', fontWeight:'bold'}}> Standard </Link>
                  </li>
                  <li>
                    <Link to={"#"}	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}} style={{width:'150px', fontWeight:'bold'}}> Valuer </Link>
                  </li>
                  <li>
                    <Link to={"#"}	className={classnames({active:activeTab === '3'}) + ''} onClick={()=>{ toggle('3');}} style={{width:'150px', fontWeight:'bold'}}> Corporate </Link>
                  </li>
                  
                </ul>
              
                <div className="container">
                  <div className="tab-content chosesus-content">
                    <div id="cost" className="tab-pane active">
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                          <div className="section-full">
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                  <div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
                                    <div className="item p-3">
                                      <SubScription />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                  <div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
                                    <div className="item p-3">
                                      <SubScription />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                  <div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
                                    <div className="item p-3">
                                      <SubScription />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="2">
                          <div className="section-full">
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                  <div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
                                    <div className="item p-3">
                                      <SubScription />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                  <div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
                                    <div className="item p-3">
                                      <SubScription />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="3">
                        <div className="section-full">
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                  <div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
                                    <div className="item p-3">
                                      <SubScription />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                  <div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
                                    <div className="item p-3">
                                      <SubScription />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                  <div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
                                    <div className="item p-3">
                                      <SubScription />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPane>                        
                      </TabContent>
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

export default SubScriptions;