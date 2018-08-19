import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';

import Home from './components/home/home';
import ContactUs from './components/contact/contact';
import Development from './components/development/development';
import SignIn from './components/signin/signin';
import Register from './components/register/register';

class App extends Component {
	addActiveClass() {
		$('.activeLink').addClass('active');
	}

	render() {
		return (
			<Router>
				<div className="app-panel">
					<div className="nav-bar">
						<img src={logo} className="app-logo" alt="logo" />
						<ul className="routing-ul">
							<li className="routing-links">
								<Link to={'/'}>Home</Link>
							</li>
							<li className="routing-links">
								<Link to={'/development'}>Development</Link>
							</li>
							<li className="routing-links">
								<Link to={'/contactUs'}>Contact Us</Link>
							</li>
						</ul>
						<ul className="profile-ul">
							<li className="routing-links"><Link to={'/signIn'}>Sign In</Link></li>
							<li className="routing-links"><Link to={'/register'}>Register</Link></li>
						</ul>
					</div>

					<div className="view-change-panel">
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/development' component={Development} />
							<Route exact path='/contactUs' component={ContactUs} />
							<Route exact path='/signIn' component={SignIn}/>
							<Route exact path='/register' component={Register} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
