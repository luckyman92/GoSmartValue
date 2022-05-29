import React, {Component} from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';

//Images
import industry1 from '../images/promo/promo-1.jpg';
import industry2 from '../images/promo/promo-1.jpg';
import industry3 from '../images/promo/promo-1.jpg';


const contentBlog =[
	{images: industry1, title: 'Tokyo Bridg',},
	{images: industry2, title: 'Baptist Church', }, 
	{images: industry3, title: 'Epcot Park', }, 
]

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

export function SubScription(props) {
	// render(){
		var settings = {		
			arrows: true,
            slidesToShow: 3,		
            infinite: true,
			dots: false,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow:1,
				  }
				}
			]
        };

		props = {
			image: industry1, 
			type: '',
			title: 'BWP 175 p/m',
			description: <><i class="ti-check-box"></i> {'Sales Trends'}<br/><i class="ti-check-box"></i> {'Rental Trends'}<br/>{'Land Rates'}<br/>{'Building Cost Rates'}<br/>{'1 Property Market Report of Your Choice per Month'}</>,
			btn: true,
			status: 1,
		};
		return(
			<>
			<div className="section-full content-inner bg-white">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
							<div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
								<div className="item p-3">
									<div className="dlab-box">
										<div className="dlab-media dlab-img-effect rotate"> <Link to={"#"}><img src={props.image} alt="" /></Link> </div>
										<div className="dlab-info bg-white">
											<h5 className="dlab-title m-t0"><Link to={"#"}>{props.title}</Link></h5>
											<p className="m-b0">{props.description}</p>
										</div>
										{props.btn&&<Link to={"#"} className="site-button btn-block d-flex justify-content-between white"><span>{props.status === 1 ? 'Subscribe' : 'Continue to checkout'}</span> <i className="ti-arrow-right"></i></Link>}
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
							<div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
								<div className="item p-3">
									<div className="dlab-box">
										<div className="dlab-media dlab-img-effect rotate"> <Link to={"#"}><img src={props.image} alt="" /></Link> </div>
										<div className="dlab-info bg-white">
											<h5 className="dlab-title m-t0"><Link to={"#"}>{props.title}</Link></h5>
											<p className="m-b0">{props.description}</p>
										</div>
										{props.btn&&<Link to={"#"} className="site-button btn-block d-flex justify-content-between white"><span>{props.status === 1 ? 'Subscribe' : 'Continue to checkout'}</span> <i className="ti-arrow-right"></i></Link>}
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
							<div className="explore-projects mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-2 primary ">
								<div className="item p-3">
									<div className="dlab-box">
										<div className="dlab-media dlab-img-effect rotate"> <Link to={"#"}><img src={props.image} alt="" /></Link> </div>
										<div className="dlab-info bg-white">
											<h5 className="dlab-title m-t0"><Link to={"#"}>{props.title}</Link></h5>
											<p className="m-b0">{props.description}</p>
										</div>
										{props.btn&&<Link to={"#"} className="site-button btn-block d-flex justify-content-between white"><span>{props.status === 1 ? 'Subscribe' : 'Continue to checkout'}</span> <i className="ti-arrow-right"></i></Link>}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</>
		)
	// }
}

export default SubScription;