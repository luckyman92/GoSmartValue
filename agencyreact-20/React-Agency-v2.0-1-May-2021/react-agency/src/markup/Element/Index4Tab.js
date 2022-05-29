import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';
import LocationForm from './../Pages/ShortCode/LocationForm';
import PropertyDetailsForm from './../Pages/ShortCode/PropertyDetailsForm';
import PropertyFeaturesForm from './../Pages/ShortCode/PropertyFeaturesForm';



import pictarget from './../../images/1gosmartvalue/target.png'
import pichand from './../../images/1gosmartvalue/hand.png'


const Index4Tab = () =>{
	const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }	
	return(
		<>
			<div className="dez-tabs">
				<div className="m-auto text-center tab-market">
					<ul className="nav nav-tabs">
						<li>
							<Link to ={"#"} className= {classnames({ active : activeTab === '1'}) + ''} >
								<i className="ti-mobile"></i><span className="title-head">Location</span>
							</Link>
						</li>
						<li>
							<Link to ={"#"} className= {classnames({ active : activeTab === '2'}) + ''}>
								<i className="ti-ruler-pencil"></i><span className="title-head">Property Details</span>
							</Link>
						</li>
						<li>
							<Link to ={"#"} className= {classnames({ active : activeTab === '3'}) + ''}>
								<i className="ti-desktop"></i><span className="title-head">Property Features</span>
							</Link>
						</li>
						<li>
							<Link to ={"#"} className= {classnames({ active : activeTab === '4'}) + ''}>
								<i className="ti-mobile"></i><span className="title-head">Report Type</span>
							</Link>
						</li>
						<li>
							<Link to ={"#"} className= {classnames({ active : activeTab === '5'}) + ''}>
								<i className="ti-bar-chart"></i><span className="title-head">Summary</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="tab-content m-t50 text-white">
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<div id="mobile-app" className="tab-pane active show fade">
								<div className="row">
									<div className="col-lg-6 m-b30">
										<LocationForm/>
									</div>
									<div className="col-lg-6 text-center">
										<img src={pichand} className="radius-sm" alt="" />
										<p>Our research is independent and the results objective. As a purley research company, we remain impartial and objective, translating only data to information. You can trust that our research is objective, giving ou the real statistics of what is.</p>
									</div>
								</div>
							</div>							
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mb-4 d-flex">
									<div className="calculate align-self-end btn-block">
										<button className="site-button btn-block" type="button" onClick={() => { toggle('2'); }}>Next</button>
									</div>
								</div>
							</div>
						</TabPane>						
						<TabPane tabId="2">
							<div id="mobile-app" className="tab-pane active show fade">
								<div className="row">
									<div className="col-lg-6 m-b30">
										<PropertyDetailsForm/>
									</div>
									<div className="col-lg-6 text-center">
										<img src={pictarget} className="radius-sm" alt="" />
										<p>By providing this information, it will help us give you more accurate result</p>
									</div>
								</div>
							</div>							
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mb-4 d-flex">
									<div className="calculate align-self-end btn-block">
										<button className="site-button btn-block" type="button" onClick={() => { toggle('1'); }}>Previous</button>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mb-4 d-flex">
									<div className="calculate align-self-end btn-block">
										<button className="site-button btn-block" type="button" onClick={() => { toggle('3'); }}>Next</button>
									</div>
								</div>
							</div>
						</TabPane>	
						<TabPane tabId="3">
							<div id="mobile-app" className="tab-pane active show fade">
								<div className="row">
									<div className="col-lg-6 m-b30">
										<PropertyFeaturesForm/>
									</div>
									<div className="col-lg-6 text-center">
										<img src={pictarget} className="radius-sm" alt="" />
										<p>By providing this information, it will help us give you more accurate result</p>
									</div>
								</div>
							</div>
							<div className="row center">
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mb-4 d-flex">
									<div className="calculate align-self-end btn-block">
										<button className="site-button btn-block" type="button" onClick={() => { toggle('2'); }}>Previous</button>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mb-4 d-flex">
									<div className="calculate align-self-end btn-block">
										<button className="site-button btn-block" type="button" onClick={() => { toggle('3'); }}>Next</button>
									</div>
								</div>
							</div>
						</TabPane>	
						<TabPane tabId="4">
							<div id="internet-marketing" className="tab-pane show fade">
								<div className="row">
									<div className="col-lg-4 m-b30">
										<img src={pictarget} className="radius-sm" alt="" />
									</div>
									<div className="col-lg-8">
										<div className="box">
											<h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
											<Link to={"#"} className="site-button radius-xl button-md">Read More</Link>
										</div>
									</div>
								</div>
							</div>
						</TabPane>	
					</TabContent>		
				</div>
			</div>	
		</>
	)
} 

export default Index4Tab;