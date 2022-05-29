import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import Header from '../Header';
import Footer from '../Footer';
import Index4Tab from '../../Element/Index4Tab';
import ExploreCarousel from '../../Element/ExploreCarousel';
import TestimonialStyle2 from '../../Element/TestimonialStyle2';

//Images..
import bg3 from '../../images/background/bg3.png';
import bg17 from './../../images/background/bg17.jpg';
import bgimg from './../../images/1gosmartvalue/home/Home.png';
import picjoin from './../../images/1gosmartvalue/home/join-us.png';


const wraperBlog = [
	{icon: <i className="ti-headphone-alt" />, title: 'Reliability', content: 'Receive a notification for each stage of your valuation process ensuring that you know how far your valuer has progressed and when to expect your report'},
	{icon: <i className="ti-desktop" />, title: 'Data', content: 'We provide you with the underlying data and statistics that have informed your property'},
	{icon: <i className="ti-ruler-pencil" />, title: 'Efficiency', content: 'Receive a notification for each stage of your valuation process ensuring that you know how far your valuer has progressed and when to expect your report'},
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
                <Header />

                <div className="page-content bg-white rubik">

					<div className="home-banner" style={{backgroundImage:"url("+ bgimg +")" }}>
						<div className="home-bnr-inner">
							<div className="home-bnr-content">
								<h4 className="sub-title">GoSmartValue</h4>
								<div className="home-bnr-btns">
									{/* <Link to={"#"} className="site-button white btn-icon">Read more <i className="fa fa-angle-double-right"></i></Link>
									<VideoPopup2 /> */}
								</div>
							</div>	
						</div>
					</div>

                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner about-progress">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-24 col-lg-12">
                                        <h3 className="text-uppercase" style={{textAlign:'center'}}>Get The <span style={{color: '#FF8800'}}>Value </span>Of Your Property In Five Minutes!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- About Us End --> */}
                        {/* <!-- Tabs End --> */}
                        <div className="section-full content-inner-2 tab-bx br-top" >
                            <div className="container">
                                <div className="">
                                    <Index4Tab/>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial End --> */}
                        {/* <!-- Why Chose Us --> */}
                        <div className="section-full bg-blue-light content-inner explore-projects" style={{ backgroundImage: "url(" + bg3 + ")" }}>
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
                        {/* <!-- Why Chose Us End --> */}
                        {/* <!-- About Us --> */}
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
                        {/* <!-- About Us End --> */}
                        {/* <!-- Testimonial --> */}
                        <div className="section-full bg-blue-light overlay-primary gradient subscribe-bx content-inner explore-projects" style={{ backgroundImage: "url(" + bg3 + ")" }}>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 section-head text-center">
                                            <h2 className="m-b0 font-40">Flat 20% off Premium Accounts</h2>
                                            <h4>Get 20% off premium accounts with the code SMART2021. Offer ends October</h4>
                                        </div>
                                    </div>
                                    {/* <!-- blog post Carousel with no margin --> */}
                                    <div className="">
										<ExploreCarousel /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial End --> */}
                        {/* <!-- About Us --> */}
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
                        {/* <!-- About Us End--> */}
                        {/* <!-- Clients Words --> */}
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
                        {/* <!-- Clients Words END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Homepage;