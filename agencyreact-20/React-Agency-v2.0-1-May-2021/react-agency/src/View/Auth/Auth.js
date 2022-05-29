import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

import LogIn from '../LogIn/LogIn';
import Register from '../Register/Register';

const Auth = (props) => {
	const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
	  
	return(
    <div className="page-content bg-white">
      <div className="content-block">
        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="dlab-tabs product-description tabs-site-button">
                  <ul className="nav nav-tabs">
                    <li>
                      <Link to={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }}><i className="fa fa-sign-in"></i> SIGN IN</Link>
                    </li>
                    <li>
                      <Link to={"#"}	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}}><i className="ti-user"></i> SIGN UP</Link>
                    </li>
                  </ul>
                
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <LogIn />
                    </TabPane>
                    <TabPane tabId="2">
                      <Register />
                    </TabPane>
                  </TabContent>
                </div>	
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}	

export default Auth;