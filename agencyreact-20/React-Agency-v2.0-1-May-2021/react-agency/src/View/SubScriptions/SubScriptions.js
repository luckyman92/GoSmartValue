import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

import SubScription from '../../Element/SubScription';

import bgimg from './../../images/1gosmartvalue/home/Home.png';

const SubScriptions = (props) => {
	const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
      if (activeTab !== tab) setActiveTab(tab);
  }
	  
	return(
    <div className="full-section">
      <div className="dlab-bnr-inr overlay-primary-dark contact-page" style={{ backgroundImage: "url(" + bgimg + ")", paddingTop: '100px' }}>
        <div className="container">
          <h1 class="text-white text-center">SubScriptions</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="dlab-tabs choseus-tabs">
                <ul className="nav row justify-content-left">
                  <li>
                    <Link to={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }}><i className="fa fa-globe"></i> Standard</Link>
                  </li>
                  <li>
                    <Link to={"#"}	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}}><i className="fa fa-photo"></i> Valuer</Link>
                  </li>
                  <li>
                    <Link to={"#"}	className={classnames({active:activeTab === '3'}) + ''} onClick={()=>{ toggle('3');}}><i className="fa fa-cog"></i> Corporate</Link>
                  </li>
                  
                </ul>
              
                <div className="container">
                  <div className="tab-content chosesus-content">
                    <div id="cost" className="tab-pane active">
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                          <SubScription />
                        </TabPane>
                        <TabPane tabId="2">
                          <SubScription />
                        </TabPane>
                        <TabPane tabId="3">
                          <SubScription />
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

export default SubScriptions;