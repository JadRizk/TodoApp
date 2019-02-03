import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginLeft: 20,
		marginRight: 20,
		color: '#bbb'
	},
	activeTodoView: {
		flexDirection: 'column',
		alignItems: 'center'
	},
	activeTextLabel: {
		fontSize: 22,
		color: '#bbb'
	},
	activeText: {
		fontSize: 23,
		fontWeight: '500'
	},
	remainingTodoView: {
		flexDirection: 'column',
		alignItems: 'center'
	},
	remainingTextLabel: {
		fontSize: 22,
		color: '#bbb'
	},
	remainingText: {
		fontSize: 23,
		fontWeight: '500'
	}
});
