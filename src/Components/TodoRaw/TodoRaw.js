import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {observer, inject} from 'mobx-react';
import propTypes from 'prop-types';

import styles from './TodoRaw.style';

const deleteIcon = require('../../assets/delete_Icon.png');

@inject('todoStore')
@observer
export default class TodoRaw extends Component {
	changeTodoStatus = () => {
		return this.props.todoStore.markTodo(this.props.todo.id);
	};

	deleteTodo = () => {
		return this.props.todoStore.deleteTodo(this.props.todo.id);
	};

	render() {
		const {todo, todoStore} = this.props;
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.changeTodoStatus}>
					<View style={[styles.circle, todo.isCompleted ? styles.completeCircle : styles.incompleteCircle]} />
				</TouchableOpacity>
				<Text style={[styles.text, todo.isCompleted ? styles.strikeText : styles.unstrikeText]}>
					{this.props.todo.title}
				</Text>
				<TouchableOpacity onPress={this.deleteTodo}>
					<Image source={deleteIcon} style={styles.deleteIcon} />
				</TouchableOpacity>
			</View>
		);
	}
}

TodoRaw.propTypes = {
	todo: propTypes.object.isRequired
};

TodoRaw.defaultProps = {
	todo: {
		id: 1,
		title: 'Default',
		isCompleted: false
	}
};
