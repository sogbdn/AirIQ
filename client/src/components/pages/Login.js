import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

//page not actually defined yet
export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: {
				value: '',
				validation: null
			},
			password: {
				value: '',
				validation: null
			},
			redirect: false
		};
	}

	onChange = (e) => {
		let validation;
		if (e.target.name === 'phone_number') {
			var validentries1 = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/; // there is a sneaky space being allowed in the valid characters
			if (e.target.value.match(validentries1)) {
				validation = true;
				console.log('true');
			} else {
				validation = false;
				console.log('false');
			}
		} else if (e.target.name === 'first_number') {
			var validentries2 = /[A-Z]/g; // there is a sneaky space being allowed in the valid characters
			if (e.target.value.match(validentries2) && e.target.value.length <= 15) {
				validation = true;
			} else {
				validation = false;
			}
		}

		this.setState({ [e.target.name]: { value: e.target.value, validation } });
	};

	redirection = () => {
		this.setState({
			redirect: true
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const that = this;
		const { email, password } = this.state;

		axios.post('http://localhost:3001/login', { email: email.value, password: password.value }).then((result) => {
			if (result.data.success) {
				localStorage.setItem('token', result.data.token);
				console.log('server responded');

				that.redirection();
			} else {
				// alert("login unsuccessful")
				alert(result.data.message);
			}
		});
	};

	validationClass = (isValid) => {
		if (isValid == null) {
			return '';
		} else if (isValid) {
			return 'valid';
		} else {
			return 'invalid';
		}
	};

	componentDidMount() {
		console.log('Login Mounted');
	}
	render() {
		const { redirect, email, password } = this.state;

		if (redirect) {
			return <Redirect to="/" />;
		} else {
			return (
				<Container>
					<Form onSubmit={(e) => this.handleSubmit(e)}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label />
							<Form.Control
								type="email"
								name="email"
								placeholder="Enter email"
								value={email.value}
								onChange={this.onChange}
							/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label />
							<Form.Control
								type="password"
								name="password"
								placeholder="Password"
								value={password.value}
								onChange={this.onChange}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Container>
			);
		}
	}
}
