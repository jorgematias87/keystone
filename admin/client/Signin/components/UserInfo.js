import React, { PropTypes } from 'react';
import { Button } from '../../App/elemental';
import { injectIntl } from 'react-intl';

// TODO Figure out if we should change "Keystone" to "Admin area"

const UserInfo = ({
	adminPath,
	signoutPath,
	userCanAccessKeystone,
	userName,
	intl
}) => {
	const adminButton = userCanAccessKeystone ? (
		<Button href={adminPath} color="primary">
			{intl.formatMessage({ id: 'open' })}
		</Button>
	) : null;

	return (
		<div className="auth-box__col">
			<p>{intl.formatMessage({ id: 'hi' }, userName)}</p>
			<p>{intl.formatMessage({ id: 'signedin' })}</p>
			{adminButton}
			<Button href={signoutPath} variant="link" color="cancel">
				{intl.formatMessage({ id: 'signout' })}
			</Button>
		</div>
	);
};

UserInfo.propTypes = {
	adminPath: PropTypes.string.isRequired,
	signoutPath: PropTypes.string.isRequired,
	userCanAccessKeystone: PropTypes.bool,
	userName: PropTypes.string.isRequired,
};

module.exports = injectIntl(UserInfo);
