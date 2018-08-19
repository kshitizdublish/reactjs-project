import React from 'react';
import $ from '../../../node_modules/jquery';

import './signin.css';

class SignIn extends React.Component {

	signIn() {
		$('.alert-success').css('display', 'block');
		setTimeout(function() {
			var loc = window.location.href.split("signIn")[0];
			window.location.href =  loc + 'home';
		}, 2000);
	}

	render() {
		return (
			<div className="signin-component">
				<div className="alert alert-success" >
					<strong>Success!</strong> You are signed in successfully!
				</div>
				<form className="signin-form">
					<div className="form-group">
						<label htmlFor="username">Username:</label>
						<input type="text" className="form-control" id="username" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input type="password" className="form-control" id="password" />
					</div>
					<div className="form-group signin-btn-panel">
						<button type="button" className="btn btn-success" onClick={this.signIn}>Sign In </button>
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;
