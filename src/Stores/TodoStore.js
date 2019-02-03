import {observable, computed} from 'mobx';
import {AsyncStorage} from 'react-native';
import store from 'react-native-simple-store';

export default class TodoStore {
	/**
	 * Holds the list of Todos
	 *
	 * @type {Array}
	 */
	@observable todos = [];

	constructor() {
		this.retreiveTodo();
	}

	/**
	 * Get the total number of Todos
	 *
	 * @returns
	 * The total number of Todos
	 */
	@computed
	get totalTodo() {
		return this.todos.length;
	}

	/**
	 * Get the number of unfinished Todos
	 *
	 * @returns
	 * The number of unfinished todos
	 */
	@computed
	get unfinishedTodoCount() {
		return this.todos.filter(todo => !todo.isCompleted).length;
	}

	/**
	 * Get the number of completed Todos
	 *
	 * @returns
	 * The number of finished todos
	 */
	@computed
	get completedTodo() {
		return this.todos.length - this.activeTodoCount;
	}

	/**
	 * Retreive the Todo list present in the async Storage
	 *
	 * Called in the constructor
	 */
	retreiveTodo = async () => {
		try {
			const getTodos = await AsyncStorage.getItem('todos');
			const parsedTodo = JSON.parse(getTodos) || [];
			this.todos = [...parsedTodo];
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * Save the Todo list to the Async Storage
	 */
	saveTodo = async () => {
		try {
			await AsyncStorage.setItem('todos', JSON.stringify(this.todos));
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * Add a todo to the List
	 *
	 * @param {String} - title of the Todo
	 */
	addTodo = title => {
		this.todos.unshift(new TodoModel(title));
		this.saveTodo();
		return;
	};

	/**
	 * Mark todos as Complete/Uncomplete depending on their previous status,
	 * and change the element location in the array accordingly
	 *
	 * @param {Number} - id of the Todo task
	 */
	markTodo = id => {
		const todo = this.todos.find(todo => todo.id === id);

		todo.isCompleted = !todo.isCompleted;

		if (todo.isCompleted) {
			this.todos.push(this.todos.splice(this.todos.indexOf(todo), 1)[0]);
		} else {
			this.todos.unshift(this.todos.splice(this.todos.indexOf(todo), 1)[0]);
		}
		this.saveTodo();
	};

	/**
	 * Delete a Todo from the List - Completed or not
	 *
	 * @param {Number} - id of the todo to delete
	 * @returns
	 * the deleted todo element
	 */
	deleteTodo = id => {
		const todo = this.todos.find(todo => todo.id === id);
		const deleted = this.todos.splice(this.todos.indexOf(todo), 1);
		this.saveTodo();
		return deleted;
	};
}

/**
 * Todo Model class
 *
 * @param {string} - The title of the Todo
 */
class TodoModel {
	id = Math.floor(Math.random() * 1000);
	@observable title;
	@observable isCompleted = false;
	constructor(title) {
		this.title = title;
	}
}
