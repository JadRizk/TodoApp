import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {inject, observer} from 'mobx-react';

import styles from './MainContainer.style';

import CardView from '../../Components/CardView/CardView';

@inject('todoStore')
@observer
export default class MainContainer extends Component {
	componentWillUnmount = () => {
		this.props.todoStore.saveTodo();
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Text style={styles.appTitle}>Todo App</Text>
				<CardView />
			</View>
		);
	}
}
