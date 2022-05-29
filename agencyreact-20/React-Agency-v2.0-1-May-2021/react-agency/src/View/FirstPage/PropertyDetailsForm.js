import React from 'react';

function PropertyDetailsForm(){
	return(
		<>
			<div className="bg-white text-black p-a30 p-t40 align-self-center">
				<h2 style={{color: '#000'}}>Property Details</h2>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<div className="form-group">
							<label>Number of Bedrooms</label>
							<input type="number" className="form-control"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<div className="form-group">
                            <label>Number of Kitchens</label>
							<input type="number" className="form-control"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<div className="form-group">
                            <label>Number of SittingRooms</label>
							<input type="number" className="form-control"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<div className="form-group">
                            <label>Number of toilets</label>
							<input type="number" className="form-control"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<div className="form-group">
                            <label>Number of garages</label>
							<input type="number" className="form-control"/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default PropertyDetailsForm;