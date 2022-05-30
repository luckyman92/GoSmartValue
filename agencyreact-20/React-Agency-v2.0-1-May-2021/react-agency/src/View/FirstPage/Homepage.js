import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { TabContent, TabPane, } from 'reactstrap';

import ExploreCarousel from '../../Element/ExploreCarousel';
import TestimonialStyle2 from '../../Element/TestimonialStyle2';
import TabStyle1 from '../../View/FirstPage/TabStyle1';
import LocationForm from "../../View/FirstPage/LocationForm"
import PropertyDetailsForm from '../../View/FirstPage/PropertyDetailsForm';
import PropertyFeaturesForm from '../../View/FirstPage/PropertyFeaturesForm';
import ReportTypeForm from '../../View/FirstPage/ReportTypeForm';
import SummaryForm from '../../View/FirstPage/SummaryForm';

//Images..
import bg3 from '../../images/background/bg3.png';
import bg11 from './../../images/background/bg11.jpg';
import bg17 from './../../images/background/bg17.jpg';
import bgimg from './../../images/1gosmartvalue/home/Home_3.png';
import picjoin from './../../images/1gosmartvalue/home/join-us.png';
import bgslider9 from './../../images/main-slider/slide9.jpg';
import grid1 from './../../images/promo/promo-1.jpg';
import grid2 from './../../images/promo/promo-1.jpg';
import grid3 from './../../images/promo/promo-1.jpg';


const wraperBlog = [
	{icon: <i className="fa fa-thumbs-up" />, title: 'Reliability', content: 'Receive a notification for each stage of your valuation process ensuring that you know how far your valuer has progressed and when to expect your report'},
	{icon: <i className="flaticon-bar-chart" />, title: 'Data', content: 'We provide you with the underlying data and statistics that have informed your property'},
	{icon: <i className="fa fa-cog" />, title: 'Efficiency', content: 'Receive a notification for each stage of your valuation process ensuring that you know how far your valuer has progressed and when to expect your report'},
];

const gridBlog = [
	{	image: grid1, icon: <i className="flaticon-money" />, title: 'Business Planning, Strategy & Execution', },
	{	image: grid2, icon: <i className="flaticon-bar-chart" />, title: 'Financial Projections And Analysis', },
	{	image: grid3, icon: <i className="flaticon-notebook" />, title: 'International Business Opportunities', },
];


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="owl-nav">
          <div className="owl-next flaticon-right-arrow"  onClick={onClick}/>
      </div>	
    );
  }
  
function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
          <div className="owl-nav">
              <div className=" owl-prev flaticon-left-arrow" onClick={onClick} style={{zIndex:1}}/>
          </div>
      );
  } 

class Homepage extends Component {
    state = {
        activeTab : '1'
    }

    componentDidMount() {
        var i = 0;
		
		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function(event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}
		
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function(event) {
				var inputValue = this.value;	
				if ( inputValue === '' ) {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');  
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}
    }
    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab : tab
            })
        }
    }
    
    render() {
            
        var settings = {
            color: 'black',		
			arrows: true,
            slidesToShow: 1,		
            infinite: true,
			dots: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />
        };

        return (
            <>
                <div className="page-content bg-white rubik">
                    <div className="home-banner-2" style={{backgroundImage:"url("+ bgslider9 +")",paddingTop:'100px'}}>
                        <div className="container">
                            <h3 className="text-uppercase text-primary" style={{textAlign:'center'}}>Get The <span style={{color: '#FF8800'}}>Value </span>Of Your Property In Five Minutes!</h3>
                            <TabStyle1
                                toggle = {this.toggle}
                                activeTab = {this.state.activeTab}/>
                                <div className="home-bnr-inner-2 row align-items-center">
                                    <div className="home-bnr-content-2 col-md-6" style={{height:'750px'}}>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="1">
                                                <LocationForm
                                                    toggle = {this.toggle}/>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <PropertyDetailsForm
                                                    toggle = {this.toggle}/>
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <PropertyFeaturesForm
                                                    toggle = {this.toggle}/>
                                            </TabPane>
                                            <TabPane tabId="4">
                                                <ReportTypeForm
                                                    toggle = {this.toggle}/>
                                            </TabPane>
                                            <TabPane tabId="5">
                                                <SummaryForm
                                                    toggle = {this.toggle}/>
                                            </TabPane>								
                                        </TabContent>
                                    </div>	
                                    <div className="col-md-6">
                                        <div className="curve-img">
                                            <img src={bgimg} alt="" className="slide-img-curve"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/* <!-- contact area --> */}
                    <div className="content-block">

                        {/* <!-- Subscriptions --> */}
                        <div className="section-full content-inner explore-projects" style={{ backgroundImage: "url(" + bg3 + ")" }}>
							<div className="container">
                                <div className="section-content">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 section-head text-center">
                                            <h2 className="m-b0 font-40">Subscriptions</h2>
                                            <h4>Our range of competitive prices tailor made for our customers</h4>
                                            <Slider className=" owl-btn-center-lr testimonial-box   owl-btn-3 owl-dots-black-full " {...settings}>
                                                <h1>Standard</h1>
                                                <h1>Valuer</h1>
                                                <h1>Corporate</h1>
                                            </Slider>
                                        </div>
                                    </div>
                                    {/* <!-- blog post Carousel with no margin --> */}
                                    <div className="">
										<ExploreCarousel /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Subscriptions End --> */}
                        {/* <!-- Join Us --> */}
                        <div className="section-full industry-service content-inner" style={{ backgroundImage: "url(" + bg17 + ")" }}>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 section-head text-center">
                                            <h2 className="m-b0 font-40">Join Us</h2>
                                            <h4>Join our great team of valuation surveyors</h4>
                                        </div>
                                    </div>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-5 col-md-12 m-b30">
                                            <h2 className="box-title m-t0 m-b20 font-40"><span className="font-weight-400">Become  </span><br />a Valuation Surveyor</h2>
                                            <p className="m-b20">Join our team of valuation surveyors. Provide great service empowered by market insights and trends at your finger tips. Work from anywhere and get paid.</p>
                                            <Link to={"./about-1"} className="site-button button-md">Get Started</Link>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <img src={picjoin} className="radius-sm" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Join Us End --> */}
                        {/* <!-- Flat 20% off --> */}
                        <div className="section-full content-inner bg-img-fix" style={{ backgroundImage: "url(" + bg11 + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 text-center section-head">
                                        <h2 className="font-weight-700 max-w700 m-auto">Flat 20% off Premium Accounts</h2>
                                        <h4>Get 20% off premium accounts with the code SMART2021. Offer ends October</h4>
                                    </div>
                                </div>
                                <div className="row">
									{gridBlog.map((item,index)=>(
										<div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={index}>
											<div className="dlab-box">
												<div className="dlab-media dlab-img-overlay5"> <Link to={"#"}><img src={item.image} alt="" /></Link> </div>
												<div className="dlab-info p-a30 border-1 bg-white">
													<h5 className="dlab-title m-t0"><Link to={"#"}>{item.title}</Link></h5>
													<p className="m-b15">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius [...] </p>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Flat 20% off End --> */}
                        {/* <!-- Why Us --> */}
                        <div className="section-full content-inner bg-white">
                            <div className="container">
                                <div className="max-w800 m-auto text-center">
                                    <h2 className="m-b0 font-40">Why Us?</h2>
                                    <h4 className="m-b50 ">The online real estate valuation platform, connecting you to valuation expertise and reliable information for decision making.</h4>
                                </div>
                                <div className="row">
                                    {wraperBlog.map((item,index)=>(
                                        <div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}>
                                            <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                                                <div className="icon-sm m-b20"> <Link to={"#"} className="icon-cell">{item.icon}</Link> </div>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte text-uppercase">{item.title}</h5>
                                                    <p style={{height: '150px'}}>{item.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <Link to={'about-1'} className="site-button">Subscribe</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Why Us End--> */}
                        {/* <!-- Our team --> */}
                        <div className="section-full overlay-primary-middle content-inner bg-img-fix" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                            <div className="container">
                                <div className="max-w600 m-auto text-center m-b30 text-white">
                                    <h2 className="m-t0">Our team</h2>
                                    <h5>Need to discuss the value of your property?</h5>
                                    <h5>Our experienced team is happy To have a chat. Get in touch!</h5>
                                </div>
                                <div className="section-content m-b30">
                                    <TestimonialStyle2  />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our team END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                {/* <Footer /> */}
            </>
        )
    }
}

export default Homepage;