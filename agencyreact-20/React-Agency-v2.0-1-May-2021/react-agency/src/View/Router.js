import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeButton from '../Element/ThemeButton/ThemeButton';

import Homepage from './FirstPage/Homepage';

// import ScrollToTop from '../Element/ScrollToTop';

class Router extends Component{
	render(){
		return(
			<BrowserRouter basename="/index">
				<div className="page-wraper">
					<Switch>
						<Route path='/' exact component={Homepage} />
					</Switch>
				</div>
				<ThemeButton />
			</BrowserRouter>	
		)
	}
	
}

export default Router;