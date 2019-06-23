/**
 * This is the main entry file, which we compile the main JS bundle from. It
 * only contains the client side routing setup.
 */

// Needed for ES6 generators (redux-saga) to work
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import translation from '../translation';

import App from './App';
import Home from './screens/Home';
import Item from './screens/Item';
import List from './screens/List';

import store from './store';

addLocaleData([...en, ...es]);

// Sync the browser history to the Redux store
const history = syncHistoryWithStore(browserHistory, store);

// Initialise Keystone.User list
import { listsByKey } from '../utils/lists';
Keystone.User = listsByKey[Keystone.userList];

ReactDOM.render(
	<IntlProvider locale={'es'} messages={translation.es}>
		<Provider store={store}>
			<Router history={history}>
				<Route path={Keystone.adminPath} component={App}>
					<IndexRoute component={Home} />
					<Route path=":listId" component={List} />
					<Route path=":listId/:itemId" component={Item} />
				</Route>
			</Router>
		</Provider>
	</IntlProvider>,
	document.getElementById('react-root')
);
