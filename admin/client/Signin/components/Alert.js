/**
 * Renders an Alert. Pass either an isInvalid and invalidMessage prop, or set
 * the signedOut prop to true to show the standard signed out message
 */

import React from 'react';
import { Alert } from '../../App/elemental';
import { injectIntl } from 'react-intl';

const AlertView = function (props) {
	const { intl } = props;

	if (props.isInvalid) {
		return <Alert key="error" color="danger" style={{ textAlign: 'center' }}>{props.invalidMessage}</Alert>;
	} else if (props.signedOut) {
		return <Alert key="signed-out" color="info" style={{ textAlign: 'center' }}>{intl.formatMessage({ id: 'signedout' })}</Alert>;
	} else {
		// Can't return "null" from stateless components
		return <span />;
	}
};

AlertView.propTypes = {
	invalidMessage: React.PropTypes.string,
	isInvalid: React.PropTypes.bool,
	signedOut: React.PropTypes.bool,
};

module.exports = injectIntl(AlertView);
