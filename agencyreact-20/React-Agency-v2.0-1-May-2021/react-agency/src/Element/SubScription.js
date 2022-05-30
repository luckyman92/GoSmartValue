import React from 'react';
// import Slider from "react-slick";
import {Link} from 'react-router-dom';

//Images
import industry1 from '../images/promo/promo-1.jpg';

export function SubScription(props) {

	props = {
		image: industry1, 
		type: '',
		title: 'BWP 175 p/m',
		description: <><i className="ti-check-box"></i> {'Sales Trends'}<br/><i className="ti-check-box"></i> {'Rental Trends'}<br/><i className="ti-check-box"></i>{'Land Rates'}<br/><i className="ti-check-box"></i>{'Building Cost Rates'}<br/><i className="ti-check-box"></i>{'1 Property Market Report of Your Choice per Month'}</>,
		btn: true,
		status: 1,
	};
	return(
		<>
			<div className="dlab-box">
				<div className="dlab-media dlab-img-effect rotate"> <Link to={"#"}><img src={props.image} alt="" /></Link> </div>
				<div className="dlab-info bg-white" style={{paddingTop:'15px'}}>
					<p className="m-b0 subscribe-form-tag-blue subscribe-form-tag"><i className="fa fa-star-o mr-1"></i><i className="fa fa-star-o mr-1"></i>Blue</p>
					<h5 className="dlab-title m-t0"><Link to={"#"}>{props.title}</Link></h5>
					<p className="m-b0">{props.description}</p>
				</div>
				{props.btn&&<Link to={"#"} className="site-button btn-block d-flex justify-content-between white"><span>{props.status === 1 ? 'Subscribe' : 'Continue to checkout'}</span> <i className="ti-arrow-right"></i></Link>}
			</div>
		</>
	)
}

export default SubScription;