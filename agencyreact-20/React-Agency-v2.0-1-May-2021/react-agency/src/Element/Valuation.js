import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export function Valuation(props) {
  props = {
    tag: 'BWP 750',
    title: 'Comparable Sales',
    description: "Instantly generated valuation report, predicting how much a property would sell for if it was sold on the date of the report, using sales comparables, property features and economic factors to calculate.",
  };
  return(
    <>
      <div className="page-content">
        <div className="section-full content-inner bg-white">
          <div className="container">
            <div className="row">
              {/* {wraperBlog.map((item,index)=>( */}
                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                  <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                    <div className="icon-content">
                      <div className='row'>
                        <div className='col-lg-8 col-md-6 col-sm-6 m-b30'>
                          <h5 className="dlab-tilte text-left">{props.title}</h5>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 m-b30'>
                          <span className="text-primary">BWP750</span>
                        </div>
                      </div>
                      <p>{props.description}</p>
                      <Link to={'#'} className="site-button red">View Sample</Link>&nbsp;
                      <Link to={'#'} className="site-button">Purchase</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                  <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                    <div className="icon-content">
                      <div className='row'>
                        <div className='col-lg-8 col-md-6 col-sm-6 m-b30'>
                          <h5 className="dlab-tilte text-left">{props.title}</h5>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 m-b30'>
                          <span className="text-primary">BWP750</span>
                        </div>
                      </div>
                      <p>{props.description}</p>
                      <Link to={'#'} className="site-button red">View Sample</Link>&nbsp;
                      <Link to={'#'} className="site-button">Purchase</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                  <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                    <div className="icon-content">
                      <div className='row'>
                        <div className='col-lg-8 col-md-6 col-sm-6 m-b30'>
                          <h5 className="dlab-tilte text-left">{props.title}</h5>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 m-b30'>
                          <span className="text-primary">BWP750</span>
                        </div>
                      </div>
                      <p>{props.description}</p>
                      <Link to={'#'} className="site-button red">View Sample</Link>&nbsp;
                      <Link to={'#'} className="site-button">Purchase</Link>
                    </div>
                  </div>
                </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Valuation;