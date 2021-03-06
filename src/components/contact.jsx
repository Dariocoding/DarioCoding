import { useState } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
	name: '',
	email: '',
	message: '',
};
export const Contact = props => {
	const [{ name, email, message }, setState] = useState(initialState);

	const handleChange = e => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};
	const clearState = () => setState({ ...initialState });

	const handleSubmit = e => {
		e.preventDefault();
		console.log(name, email, message);
		emailjs.sendForm(
			'YOUR_SERVICE_ID',
			'YOUR_TEMPLATE_ID',
			e.target,
			'YOUR_USER_ID'
		).then(
			result => {
				console.log(result.text);
				clearState();
			},
			error => {
				console.log(error.text);
			}
		);
	};
	return (
		<div>
			<div id="contact">
				<div className="container">
					<div className="col-md-4">
						<div className="section-title">
							<h2>Contáctame</h2>
						</div>
					</div>
					<div className="col-md-8 contact-info">
						<div className="contact-item">
							<h3
								style={{
									margin: 0,
									marginBottom: '20px',
								}}
							>
								Información de contacto
							</h3>
						</div>
						<div className="contact-item">
							<p>
								<span>
									<i className="fa fa-phone"></i>{' '}
									Phone
								</span>{' '}
								{props.data
									? props.data.phone
									: 'loading'}
							</p>
						</div>
						<div className="contact-item">
							<p>
								<span>
									<i className="fa fa-envelope-o"></i>{' '}
									Email
								</span>{' '}
								{props.data
									? props.data.email
									: 'loading'}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
