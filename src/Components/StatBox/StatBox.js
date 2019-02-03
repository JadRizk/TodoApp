import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './StatBox.style';
import {inject, observer} from 'mobx-react';

@inject('todoStore')
@observer
export default class StatBox extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.activeTodoView}>
					<Text style={styles.activeTextLabel}>Total</Text>
					<Text style={styles.activeText}>{this.props.todoStore.totalTodo}</Text>
				</View>
				<View style={styles.remainingTodoView}>
					<Text style={styles.remainingTextLabel}>Remaining</Text>
					<Text style={styles.remainingText}>{this.props.todoStore.unfinishedTodoCount}</Text>
				</View>
			</View>
		);
	}
}
