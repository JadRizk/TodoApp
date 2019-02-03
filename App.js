import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import stores from './src/Stores';
import AppNavigator from './src/Navigation/RootNavigation';

export default class App extends Component {
	render() {
		return (
			<Provider {...stores}>
				<AppNavigator />
			</Provider>
		);
	}
}
