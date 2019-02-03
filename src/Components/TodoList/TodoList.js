import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {observer, inject} from 'mobx-react';

import styles from './TodoList.style';

import TodoRaw from '../TodoRaw/TodoRaw';

@inject('todoStore')
@observer
export default class TodoList extends Component {
	render() {
		return (
			<ScrollView contentContainerStyle={styles.listContainer}>
				{this.props.todoStore.totalTodo !== 0 ? (
					this.props.todoStore.todos.map(todo => <TodoRaw todo={todo} key={todo.id} />)
				) : (
					<Text style={styles.noTodoText}>You have nothing TODO !</Text>
				)}
			</ScrollView>
		);
	}
}
