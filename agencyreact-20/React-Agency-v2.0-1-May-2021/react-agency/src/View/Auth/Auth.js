import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

import LogIn from '../LogIn/LogIn';
import Register from '../Register/Register';

import bgimg from './../../images/1gosmartvalue/home/Home.png';

const Auth = (props) => {
	const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
	  
	return(
    <div className="full-section">
      <div className="dlab-bnr-inr overlay-primary-dark contact-page" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="dlab-tabs choseus-tabs">
                <ul className="nav row justify-content-left">
                  <li>
                    <Link to={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }}><i className="fa fa-sign-in"></i> SIGN IN</Link>
                  </li>
                  <li>
                    <Link to={"#"}	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}}><i className="ti-user"></i> SIGN UP</Link>
                  </li>
                </ul>              
                <div className="container">
                  <div className="tab-content chosesus-content">
                    <div id="cost" className="tab-pane active">
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
      </div>
    </div>
	)
}	

export default Auth;