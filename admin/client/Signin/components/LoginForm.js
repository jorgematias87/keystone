/**
 * The login form of the signin screen
 */

import React, { PropTypes } from 'react';
import { Button, Form, FormField, FormInput } from '../../App/elemental';
import { withTranslation } from 'react-i18next';

const LoginForm = ({
	email,
	handleInputChange,
	handleSubmit,
	isAnimating,
	password,
	t
}) => {
	return (
		<div className="auth-box__col">
			<Form onSubmit={handleSubmit} noValidate>
				<FormField label={t('Email')} htmlFor="email">
					<FormInput
						autoFocus
						type="email"
						name="email"
						onChange={handleInputChange}
						value={email}
					/>
				</FormField>
				<FormField label={t('Password')} htmlFor="password">
					<FormInput
						type="password"
						name="password"
						onChange={handleInputChange}
						value={password}
					/>
				</FormField>
				<Button disabled={isAnimating} color="primary" type="submit">
					{t('Sign In')}
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

export default withTranslation()(LoginForm);
