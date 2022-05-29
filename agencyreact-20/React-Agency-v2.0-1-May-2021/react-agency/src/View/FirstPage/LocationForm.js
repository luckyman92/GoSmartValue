import React from 'react';

function LocationForm(){
	return(
		<>
			<div className="bg-white text-black p-a30 p-t40 align-self-center">
				<h2 style={{color: '#000'}}>Location Details</h2>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<div className="form-group">
							<label>City/Town</label>
							<select className="form-control" >
								<option>Select City/Town</option>
								<option>Marketing</option>
								<option>IT Industries</option>
								<option>Management Industries</option>
								<option>Property Business</option>
							</select>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<div className="form-group">
							<label>Street Name</label>
							<input type="text" className="form-control" placeholder="Plese write a street's name correctly." />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<div className="form-group">
							<label>Plot No</label>
							<input type="text" className="form-control" placeholder="Plese write a plot No correctly." />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<div className="form-group">
							<label>Plot Size(square meters)</label>
							<input type="text" className="form-control" placeholder="Plese write the street's name correctly." />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
						<div className="form-group">
							<label>Development stage</label>
							<select className="form-control">
								<option>Select development stage</option>
								<option>Marketing</option>
								<option>IT Industries</option>
								<option>Management Industries</option>
								<option>Property Business</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default LocationForm;