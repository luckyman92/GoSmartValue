import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Header from './../Layout/Header1';
// import Footer from './../Layout/Footer1';

class Register extends Component {
  render() {
    // const userType = 'Valuer';
    const userType = 'Standard';
    if(this.props.userType) userType = this.props.userType;
    return (
      <>
        {/* <Header /> */}
        <div className="page-content">
          <div className="section-full content-inner shop-account">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="font-weight-700 m-t0 m-b30 text-white">Create New {userType} User Account</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 m-b30">
                  <div className="p-a30 border-1  max-w500 m-auto bg-white">
                    <div className="tab-content">
                      <form id="login" className="tab-pane active">
                        <h4 className="font-weight-700">PERSONAL INFORMATION</h4>
                        <p className="font-weight-600">If you have an account with us, please log in.</p>
                        <div className="form-group">
                          <label className="font-weight-700">First Name *</label>
                          <input name="firstname" required="ln require" className="form-control" placeholder="First Name" type="text" />
                        </div>
                        <div className="form-group">
                          <label className="font-weight-700">Last Name *</label>
                          <input name="lastname" required="n require" className="form-control" placeholder="Last Name" type="text" />
                        </div>
                        <div className="form-group">
                          <label className="font-weight-700">Phone *</label>
                          <input name="phone" required="phone require" className="form-control" placeholder="Phone" type="text" />
                        </div>
                        {userType === 'Valuer' && 
                          <>
                            <div className="form-group">
                              <label className="font-weight-700">REAC Number *</label>
                              <input name="reac" required="reac require" className="form-control" placeholder="REAC Number" type="text" />
                            </div>
                            <div className="form-group">
                              <label className="font-weight-700">REIB Number *</label>
                              <input name="reib" required="reib require" className="form-control" placeholder="REIB Number" type="text" />
                            </div>
                          </>
                        }
                        <div className="form-group">
                          <label className="font-weight-700">E-MAIL *</label>
                          <input name="email" required="email require" className="form-control" placeholder="Your Email" type="email" />
                        </div>
                        <div className="form-group">
                          <label className="font-weight-700">PASSWORD *</label>
                          <input name="password" required="pws require" className="form-control " placeholder="Password" type="password" />
                        </div>
                        <div className="form-group">
                          <label className="font-weight-700">CONFIRM PASSWORD *</label>
                          <input name="password" required="c pws require" className="form-control " placeholder="Confirm Password" type="password" />
                        </div>
                        {userType === 'Valuer' && 
                          <div className="form-group">
                            <input value="accept" name="professionalConfirmation" className="form-control " type="checkbox" id="prof" />
                            <label htmlFor='prof'>Are you a registered property professional?</label>
                          </div>
                        }
                        <div className="form-group">
                          <input value="accept" name="termsAndConditions" className="form-control " type="checkbox" id="terms" />
                          <label htmlFor='terms'>By submiting I accept the terms and conditions</label>
                        </div>
                        <div className="text-left">
                          <button className="site-button button-lg radius-no outline outline-2">CREATE</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </>
    )
  }
}
export default Register;