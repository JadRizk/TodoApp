import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';
import {observer, inject} from 'mobx-react';
import styles from './CardView.style';

import TodoList from '../TodoList/TodoList';
import StatBox from '../StatBox/StatBox';

@inject('todoStore')
@observer
export default class CardView extends Component {
	componentDidMount = () => {
		this.textInput.focus();
	};

	addTodoItem = title => {
		return this.props.todoStore.addTodo(title);
	};

	render() {
		return (
			<View style={styles.card}>
				<TextInput
					ref={input => {
						this.textInput = input;
					}}
					style={styles.input}
					placeholder={'Add an item!'}
					onSubmitEditing={e => {
						this.addTodoItem(e.nativeEvent.text), this.textInput.clear();
					}}
					placeholderTextColor={'#999'}
					returnKeyType={'done'}
					autoCorrect={false}
					clearButtonMode={'always'}
				/>
				{this.props.todoStore.totalTodo !== 0 && <StatBox />}

				<TodoList />
			</View>
		);
	}
}
