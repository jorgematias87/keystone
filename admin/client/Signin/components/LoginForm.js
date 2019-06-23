/**
 * The login form of the signin screen
 */

import React, { PropTypes } from 'react';
import { Button, Form, FormField, FormInput } from '../../App/elemental';
import { injectIntl } from 'react-intl';

const LoginForm = ({
	email,
	handleInputChange,
	handleSubmit,
	isAnimating,
	password,
	intl
}) => {
	return (
		<div className="auth-box__col">
			<Form onSubmit={handleSubmit} noValidate>
				<FormField label={intl.formatMessage({ id: 'email' })} htmlFor="email">
					<FormInput
						autoFocus
						type="email"
						name="email"
						onChange={handleInputChange}
						value={email}
					/>
				</FormField>
				<FormField label={intl.formatMessage({ id: 'password' })} htmlFor="password">
					<FormInput
						type="password"
						name="password"
						onChange={handleInputChange}
						value={password}
					/>
				</FormField>
				<Button disabled={isAnimating} color="primary" type="submit">
					{intl.formatMessage({ id: 'signin' })}
				</Button>
			</Form>
		</div>
	);
};

LoginForm.propTypes = {
	email: PropTypes.string,
	handleInputChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	isAnimating: PropTypes.bool,
	password: PropTypes.string,
};

export default injectIntl(LoginForm);
