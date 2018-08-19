import React from 'react';
import $ from '../../../node_modules/jquery';

import './register.css';

class Register extends React.Component {

	register() {
		$('.alert-success').css('display', 'block');
		setTimeout(function() {
			var loc = window.location.href.split("register")[0];
			window.location.href =  loc + 'signIn';
		}, 3000);
	}

    render() {

        return (
            <div className="register-component">
				<div className="alert alert-success" >
					<strong>Success!</strong> You are registered successfully, please sign in now.
				</div>
                <form className="register-form">
					<div className="form-group">
						<label htmlFor="username">*Username:</label>
						<input type="text" className="form-control" id="username" />
					</div>
					<div className="form-group">
						<label htmlFor="password">*Password:</label>
						<input type="password" className="form-control" id="password" />
					</div>
                    <div className="form-group">
						<label htmlFor="emailId">Email Id:</label>
						<input type="text" className="form-control" id="emailId" />
					</div>
					<div className="form-group register-btn-panel">
						<button type="button" className="btn btn-success" onClick={this.register}>Register </button>
					</div>
				</form>
            </div>
        );
    }
}
export default Register;
