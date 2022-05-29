import React from 'react';

function PropertyDetailsForm(){
	return(
		<>
			<div className="bg-white text-black p-a30 p-t40 align-self-center">
				<h2 style={{color: '#000'}}>Property Details</h2>
				<div className="row">
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
						<div className="form-group">
							<input id="garage" type="checkbox" />
                            <label htmlFor = "garage">Garage</label>
						</div>
					</div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
						<div className="form-group">
							<input id = "SwimmingPool" type="checkbox" className="form-control"/>
                            <label htmlFor = "SwimmingPool">SwimmingPool</label>
						</div>
					</div>
				</div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
						<div className="form-group">
                            <input id = "WireFenced" type="checkbox" className="form-control"/>
                            <label htmlFor = "WireFenced">WireFenced</label>
						</div>
					</div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id="ElectricFence" type="checkbox" />
                            <label htmlFor = "ElectricFence">ElectricFence</label>
                        </div>
                    </div>
				</div>
				<div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id = "FirePlace" type="checkbox" className="form-control"/>
                            <label htmlFor = "FirePlace">FirePlace</label>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id = "BoundaryWall" type="checkbox" className="form-control"/>
                            <label htmlFor = "BoundaryWall">BoundaryWall</label>
                        </div>
                    </div>
				</div>
				<div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id = "Paved" type="checkbox" className="form-control"/>
                            <label htmlFor = "Paved">Paved</label>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id = "MotorizedGate" type="checkbox" className="form-control"/>
                            <label htmlFor = "MotorizedGate">MotorizedGate</label>
                        </div>
                    </div>
				</div>
                <div className='row'>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
                        <div className="form-group">
                            <input id = "OutdoorEntertainment" type="checkbox" className="form-control"/>
                            <label htmlFor = "OutdoorEntertainment">OutdoorEntertainment</label>
                        </div>
                    </div>
                </div>
			</div>
		</>
	)
}
export default PropertyDetailsForm;